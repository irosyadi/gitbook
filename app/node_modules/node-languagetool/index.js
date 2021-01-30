/* MIT License
 *
 * Copyright (c) 2016 schreiben
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 "use strict";

(function(){

  const fs = require('fs');
  const path = require('path');
  const process = require('process');
  const jre = require('node-jre');
  const grd = require('node-grd')

  const smoketest = exports.smoketest = () => new Promise((resolve, reject) =>
    check('This is wong.', 'en-US').then(
      res => {
        try {
          var match = res.matches[0];
          if (match.offset === 8 && match.length === 4)
            resolve();
          else
            reject('Check was wrong.');
        } catch (ex) {
          reject(ex);
        }
      },
      err => reject(err)
    )
  );

  const install = exports.install = () => new Promise((resolve, reject) =>
    grd.install(
      'schreiben',
      'node-languagetool-service',
      __dirname,
      'lt',
      err => err ? reject(err) : resolve(),
      process.env.GITHUB_OAUTH_TOKEN
    )
  );


  var service, queue = [];

  const kill = exports.kill = () => {
    if (service)
      service.kill();
    service = null;
  };

  const writeTopCommand = () =>
    service.stdin.write(JSON.stringify(queue[queue.length - 1].cmd) + '\n');

  const start = exports.start = () => new Promise((resolve, reject) => {
    const ltdir = path.join(__dirname, 'lt');
    if (service)
      resolve();
    else {
      service = jre.spawn(
        [ ltdir, path.join(ltdir, 'languagetool.jar'), 'resources' ],
        'Service',
        [],
        { encoding: 'utf8' }
      );
      service.on('error', err => reject(err));
      service.stdout.on('data', line => {
        line = line.toString().trim();
        if (line.length > 0) {
          line = JSON.parse(line);
          var entry = queue.pop();
          if (line.code === 200 && entry.resolve)
            entry.resolve(line);
          else if (line.code != 200 && entry.reject)
            entry.reject(line);
        }
      });
      if(queue.length > 0)
        writeTopCommand();
      resolve();
    }
  });

  const stop = exports.stop = () => new Promise((resolve, reject) => {
    kill();
    resolve();
  });

  const restart = exports.start = () => stop().then(
    (resolve, reject) => start().then(resolve, reject)
  );

  const send = exports.send = cmd => new Promise((resolve, reject) => start().then(() => {
    var entry = {
      cmd: cmd,
      resolve: resolve,
      reject: reject
    };
    queue.unshift(entry);
    if(queue.length === 1)
      writeTopCommand();
  }));

  const check = exports.check = (text, locale) => send({
    command: "check",
    text: text,
    language: locale.toString()
  });

  const languages = exports.languages = () => send({ command: "languages" });

})();
