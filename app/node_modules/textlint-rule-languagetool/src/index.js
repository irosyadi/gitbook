"use strict";

let defaultConfig = {
    language: 'en-US',
    ignoredMessages: [],
    dictionary: [],
};

let lt = require('node-languagetool');

class DocumentCounter {
    constructor() {
        this.counter = 0;
    }

    increase() {
        this.counter++;
    }

    current() {
        return this.counter;
    }

    isLast(number) {
        return number === this.counter;
    }
}

const documentCounter = new DocumentCounter();

/**
 * @param {RuleContext} context
 * @param {object} config
 */
export default function (context, config = defaultConfig) {
    if (typeof(config) === 'boolean') {
        if (! config) {
            return;
        }
        config = defaultConfig;
    } else {
        config = Object.assign({}, defaultConfig, config);
    }

    const errorRegExps = config.ignoredMessages.map(message => new RegExp(message));

    let filterOutError = function (match, text, matchedText) {
        if (match.ruleIssueType === 'misspelling' && config.dictionary.indexOf(matchedText) > -1) {
            return true;
        }
        for (let i = 0; i < errorRegExps.length; ++i) {
            if (errorRegExps[i].test(match.message)) {
                return true;
            }
        }
        return false;
    };

    let addErrors = function (res, text, node) {
        if (! res || ! res.hasOwnProperty('matches')) {
            return;
        }
        for (let match in res.matches) {
            if (! res.matches.hasOwnProperty(match)) {
                continue;
            }
            let matchVal = res.matches[match];
            let matchedText = text.substr(matchVal.offset, matchVal.length);
            if (matchedText.trim().length === 0) {
                matchedText = text.substr(Math.min(matchVal.offset - 8, 0), matchVal.length + 16);
            }
            if (filterOutError(matchVal, text, matchedText)) {
                continue;
            }
            context.report(node, new context.RuleError(matchVal.message + (matchedText ? ': ' + matchedText : '')));
        }
    };

    const promiseQueue = [];

    // rule object
    return {
        [context.Syntax.Document]() {
            documentCounter.increase();
        },
        [`${context.Syntax.Document}:exit`]() {
            if (promiseQueue.length === 0) {
                return;
            }
            let currentCount = documentCounter.current();
            return Promise.all(promiseQueue).then(() => {
                if (documentCounter.isLast(currentCount)) {
                    lt.kill();
                }
            });
        },
        [context.Syntax.Str](node) {
            const text = context.getSource(node).trim();
            if (text.trim().length === 0) {
                return;
            }

            if (! text.match(/\s+|\s+(.*)/)) {
                promiseQueue.push(lt.check(text, config.language).then(res => addErrors(res, text, node)))
                return;
            }

            text.split('|').map(part => part.trim()).filter(part => part.length > 0).forEach(part => {
                promiseQueue.push(lt.check(part, config.language).then(res => addErrors(res, part, node)));
            });
        }
    };
}
