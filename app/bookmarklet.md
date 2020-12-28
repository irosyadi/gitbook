---
layout: default
author: irosyadi
title:  Awesome Bookmarklet
date: 2020-12-26 19:04:19
category: app
tags: ["bookmarklet"]
draft: false
---

# Awesome Bookmarklet

## Google Related
### Add Selected Text to Google Calendar
- via [Google Calendar](https://www.google.com/calendar/)
```
javascript:var s;if(window.getSelection){s=window.getSelection();}else{s=document.selection.createRange().text;}var t=prompt('Please enter a description for the event',s);if(t){void(window.open(encodeURI('https://www.google.com/calendar/event?ctext='+t+'&action=TEMPLATE&pprop=HowCreated%3AQUICKADD'),'gcal'));}else{void(s);}
```

### Google Definitions
- Find definition of selected text in [Google](https://www.google.com/)
```
javascript:d=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);d=d.replace(/\r\n|\r|\n/g," ,");if(!d)d=prompt("Enter the words:", "");if(d!=null)location="https://www.google.com/search?q=define:"+escape(d).replace(/ /g,"+");void(0);
```

### Google Indexed
- Check what Google indexed on a website
- via [Google](https://www.google.com/)
```
javascript: location = "https://www.google.com/search?num=100&q=site:" + escape(location.hostname); void 0
```

### Select to Google Map
- Find map of selected text in [Google Map](https://maps.google.com)
```
javascript:d=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);d=d.replace(/\r\n|\r|\n/g," ,");if(!d)d=prompt("Enter the address:", "");if(d!=null)location="https://maps.google.com?q="+escape(d).replace(/ /g,"+");void 0
```

### Select to Google Translate
- Find translation of selected text in [Google Translate](https://translate.google.com)
```
javascript:var t=((window.getSelection&&window.getSelection())||(document.getSelection&&document.getSelection())||(document.selection &&document.selection.createRange&&document.selection.createRange().text));var e=(document.charset||document.characterSet);if(t!=''){location.href='https://translate.google.com/translate_t?text='+t+'&hl=en&tbb=1&ie='+e;}else{location.href='https://translate.google.com/translate?u='+escape(location.href)+'&hl=en&tbb=1&ie='+e;};
```

### Google Bookmarks
- Add a webpage to [Google Boomarks](https://www.google.com/bookmarks/)
```
javascript:(function(){var a=window,b=document,c=encodeURIComponent,d=a.open("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+c(b.location)+"&title="+c(b.title),"bkmk_popup","left="+((a.screenX||a.screenLeft)+10)+",top="+((a.screenY||a.screenTop)+10)+",height=420px,width=550px,resizable=1,alwaysRaised=1");a.setTimeout(function(){d.focus()},300)})();
```

### Google Site Search
- Search keyword in a site using [Google](https://www.google.com/search)
```
javascript: q = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("You didn't select any text. Enter a search phrase:", ""); if (q != null) location = ("https://www.google.com/search?num=100&q=site:" + escape(location.hostname) + " \"" + escape(q.replace(/\"/g, "")) + "\"").replace(/ /g, "+"); void 0
```

### Google Cache
- Check Google Cache of a webpage 
```
javascript:void((function(){var a=location.href.replace(/^http%5C:%5C/%5C/(.*)$/,"$1");location.href="http://www.google.com/search?q=cache:"+escape(a);})())
```

## Website Assets
### Check Web robot.txt
- check robot.txt of any website
```
javascript:void(location.href%3D%27http://%27%20%2B%20location.host%20%2B%20%27/robots.txt%27)
```

### Check Web sitemap.xml
- check sitemap (sitemap.xml) of any website
```
javascript:void(location.href%3D%27http://%27%20%2B%20location.host%20%2B%20%27/sitemap.xml%27)
```

## Enable Protection
### Enable Right Click
```
javascript: void(document.oncontextmenu = null)
```

### Enable Select
```
javascript: (function() { function R(a) { ona = "on" + a; if (window.addEventListener) window.addEventListener(a, function(e) { for (var n = e.originalTarget; n; n = n.parentNode) n[ona] = null; }, true); window[ona] = null; document[ona] = null; if (document.body) document.body[ona] = null; } R("click"); R("mousedown"); R("mouseup"); R("selectstart"); })()
```

### Edit a Website
- Edit a website
```
javascript:document.body.contentEditable%20=%20'true';%20document.designMode='on';%20void%200
```

## Show which Hidden
### Anchor to HREF
- Show the http link of an anchor
```
javascript:(function(){var i,c,x,h; for(i=0;x=document.links[i];++i) { h=x.getAttribute("href"); x.title+=" " + x.innerHTML; while(c=x.firstChild)x.removeChild(c); x.appendChild(document.createTextNode(h)); } })()
```

### Internal External Link
- check internal or external link of a web page
- red if internal, blue if external
```
javascript: (function() { var i, x; for (i = 0; x = document.links[i]; ++i) x.style.color = ["blue", "red", "orange"][sim(x, location)];  function sim(a, b) { if (a.hostname != b.hostname) return 0; if (fixPath(a.pathname) != fixPath(b.pathname) || a.search != b.search) return 1; return 2; }  function fixPath(p) { p = (p.charAt(0) == "/" ? "" : "/") + p; /*many browsers*/ p = p.split("?")[0]; /*opera*/ return p; } })()
```

### Show Password
- show password text in password form/field
```
javascript: (function() { var s, F, j, f, i; s = ""; F = document.forms; for (j = 0; j < F.length; ++j) { f = F[j]; for (i = 0; i < f.length; ++i) { if (f[i].type.toLowerCase() == "password") s += f[i].value + "\n"; } } if (s) alert("Passwords in forms on this page:\n\n" + s); else alert("There are no passwords in forms on this page."); })();
```


### Show Source Code
- show source code of a webpage
```
javascript: function getSelSource() { x = document.createElement("div"); x.appendChild(window.getSelection().getRangeAt(0).cloneContents()); return x.innerHTML; }  function makeHR() { return nd.createElement("hr"); }  function makeParagraph(text) { p = nd.createElement("p"); p.appendChild(nd.createTextNode(text)); return p; }  function makePre(text) { p = nd.createElement("pre"); p.appendChild(nd.createTextNode(text)); return p; } nd = window.open().document; ndb = nd.body; if (!window.getSelection || !window.getSelection().rangeCount || window.getSelection().getRangeAt(0).collapsed) { nd.title = "Generated Source of: " + location.href; ndb.appendChild(makeParagraph("No selection, showing generated source of entire document.")); ndb.appendChild(makeHR()); ndb.appendChild(makePre("<html>\n" + document.documentElement.innerHTML + "\n</html>")); } else { nd.title = "Partial Source of: " + location.href; ndb.appendChild(makePre(getSelSource())); }; void 0
```

### Show Outbound Links
- List all of outbound link from a webpage
```
javascript:(function(){var url = document.location; var links = document.links;var output ='';var isExternal = function(url) {var domain = function(url) {return url.replace('http://','').replace('https://','').split('/')[0];};return domain(location.href) !== domain(url);};output ='\n\n#####%20External%20Links%20#####\n\n';for%20(i=0;%20i<links.length;%20i++)%20{var%20link%20=%20new%20String(links[i]);if(links[i].hostname%20!=%20window.location.hostname){var%20pat%20=%20/^https?:\/\//i;if(pat.test(links[i])){output%20+=%20links[i].href+'\n'}}}%20alert(output);})();
```


## Webstack Identification
### Identify Font
- Font identification on a website
- via [Typesample](https://www.typesample.com/)
```
javascript:void((function(d)%7Bvar%20e=d.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//www.typesample.com/assets/typesample.js?r='+Math.random()*99999999);d.body.appendChild(e)%7D)(document));
```

### Identify CSS
- Check CSS on a website
```
javascript: s = document.getElementsByTagName('STYLE'); ex = document.getElementsByTagName('LINK'); d = window.open().document; /*set base href*/ d.open(); d.close(); b = d.body;  function trim(s) { return s.replace(/^\s*\n/, '').replace(/\s*$/, ''); };  function iff(a, b, c) { return b ? a + b + c : ''; }  function add(h) { b.appendChild(h); }  function makeTag(t) { return d.createElement(t); }  function makeText(tag, text) { t = makeTag(tag); t.appendChild(d.createTextNode(text)); return t; } add(makeText('style', 'iframe{width:100%;height:18em;border:1px solid;')); add(makeText('h3', d.title = 'Style sheets in ' + location.href)); for (i = 0; i < s.length; ++i) { add(makeText('h4', 'Inline style sheet' + iff(' title="', s[i].title, '"'))); add(makeText('pre', trim(s[i].innerHTML))); } for (i = 0; i < ex.length; ++i) { rs = ex[i].rel.split(' '); for (j = 0; j < rs.length; ++j) if (rs[j].toLowerCase() == 'stylesheet') { add(makeText('h4', 'link rel="' + ex[i].rel + '" href="' + ex[i].href + '"' + iff(' title="', ex[i].title, '"'))); iframe = makeTag('iframe'); iframe.src = ex[i].href; add(iframe); break; } } void 0
```

### Identify Javascript
- view javascript on a webpage
```
javascript: s = document.getElementsByTagName('SCRIPT'); d = window.open().document; /*140681*/ d.open(); d.close(); b = d.body;  function trim(s) { return s.replace(/^\s*\n/, '').replace(/\s*$/, ''); };  function add(h) { b.appendChild(h); }  function makeTag(t) { return d.createElement(t); }  function makeText(tag, text) { t = makeTag(tag); t.appendChild(d.createTextNode(text)); return t; } add(makeText('style', 'iframe{width:100%;height:18em;border:1px solid;')); add(makeText('h3', d.title = 'Scripts in ' + location.href)); for (i = 0; i < s.length; ++i) { if (s[i].src) { add(makeText('h4', 'script src="' + s[i].src + '"')); iframe = makeTag('iframe'); iframe.src = s[i].src; add(iframe); } else { add(makeText('h4', 'Inline script')); add(makeText('pre', trim(s[i].innerHTML))); } } void 0
```

### Identify WebStack
- via [Wappalyzer](https://www.wappalyzer.com/)
```
javascript: (function() { var d = document, e = d.getElementById('wappalyzer-container'); if (e !== null) { d.body.removeChild(e); } var u = 'https://www.wappalyzer.com/', t = new Date().getTime(), c = d.createElement('div'), p = d.createElement('div'), l = d.createElement('link'), s = d.createElement('script'); c.setAttribute('id', 'wappalyzer-container'); l.setAttribute('rel', 'stylesheet'); l.setAttribute('href', u + 'css/bookmarklet.css'); d.head.appendChild(l); p.setAttribute('id', 'wappalyzer-pending'); p.setAttribute('style', 'background-image: url(' + u + 'images/spinner.gif) !important'); c.appendChild(p); s.setAttribute('src', u + 'bookmarklet/wappalyzer.js'); s.onload = function() { window.wappalyzer = new Wappalyzer(); s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/apps.js'); s.onload = function() { s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/driver.js'); c.appendChild(s); }; c.appendChild(s); }; c.appendChild(s); d.body.appendChild(c); })();
```

### Check RSS
- Check RSS link of a website
- via [Savanttools](http://savanttools.com/)
```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://savanttools.com/feedhelp-bookmarklet.js';})();
```

## Table and List Modifier
### Change Bullet List to Number List
```
javascript: uls = document.getElementsByTagName("ul"); for (i = uls.length - 1; i >= 0; --i) { oldul = uls[i]; newol = document.createElement("ol"); for (j = 0; j < oldul.childNodes.length; ++j) newol.appendChild(oldul.childNodes[j].cloneNode(true)); oldul.parentNode.replaceChild(newol, oldul); } void 0
```

### Sort Tables
```
javascript:function toArray (c){var a, k;a=new Array;for (k=0; k<c.length; ++k)a[k]=c[k];return a;}function insAtTop(par,child){if(par.childNodes.length) par.insertBefore(child, par.childNodes[0]);else par.appendChild(child);}function countCols(tab){var nCols, i;nCols=0;for(i=0;i<tab.rows.length;++i)if(tab.rows[i].cells.length>nCols)nCols=tab.rows[i].cells.length;return nCols;}function makeHeaderLink(tableNo, colNo, ord){var link;link=document.createElement('a');link.href='javascript:sortTable('+tableNo+','+colNo+','+ord+');';link.appendChild(document.createTextNode((ord>0)?'a':'d'));return link;}function makeHeader(tableNo,nCols){var header, headerCell, i;header=document.createElement('tr');for(i=0;i<nCols;++i){headerCell=document.createElement('td');headerCell.appendChild(makeHeaderLink(tableNo,i,1));headerCell.appendChild(document.createTextNode('/'));headerCell.appendChild(makeHeaderLink(tableNo,i,-1));header.appendChild(headerCell);}return header;}g_tables=toArray(document.getElementsByTagName('table'));if(!g_tables.length) alert("This page doesn't contain any tables.");(function(){var j, thead;for(j=0;j<g_tables.length;++j){thead=g_tables[j].createTHead();insAtTop(thead, makeHeader(j,countCols(g_tables[j])))}}) ();function compareRows(a,b){if(a.sortKey==b.sortKey)return 0;return (a.sortKey < b.sortKey) ? g_order : -g_order;}function sortTable(tableNo, colNo, ord){var table, rows, nR, bs, i, j, temp;g_order=ord;g_colNo=colNo;table=g_tables[tableNo];rows=new Array();nR=0;bs=table.tBodies;for(i=0; i<bs.length; ++i)for(j=0; j<bs[i].rows.length; ++j){rows[nR]=bs[i].rows[j];temp=rows[nR].cells[g_colNo];if(temp) rows[nR].sortKey=temp.innerHTML;else rows[nR].sortKey="";++nR;}rows.sort(compareRows);for (i=0; i < rows.length; ++i)insAtTop(table.tBodies[0], rows[i]);}
```

### Table Number
- Add number colomn in a table
```
javascript: (function() { function has(par, ctag) { for (var k = 0; k < par.childNodes.length; ++k) if (par.childNodes[k].tagName == ctag) return true; }  function add(par, ctag, text) { var c = document.createElement(ctag); c.appendChild(document.createTextNode(text)); par.insertBefore(c, par.childNodes[0]); } var i, ts = document.getElementsByTagName("TABLE"); for (i = 0; i < ts.length; ++i) { var n = 0, trs = ts[i].rows, j, tr; for (j = 0; j < trs.length; ++j) { tr = trs[j]; if (has(tr, "TD")) add(tr, "TD", ++n); else if (has(tr, "TH")) add(tr, "TH", "Row"); } } })()
```

### Table Transpose
- Transpose Table
```
javascript: (function() { var d = document, q = "table", i, j, k, y, r, c, t; for (i = 0; t = d.getElementsByTagName(q)[i]; ++i) { var w = 0, N = t.cloneNode(0); N.width = ""; N.height = ""; N.border = 1; for (j = 0; r = t.rows[j]; ++j) for (y = k = 0; c = r.cells[k]; ++k) { var z, a = c.rowSpan, b = c.colSpan, v = c.cloneNode(1); v.rowSpan = b; v.colSpan = a; v.width = ""; v.height = ""; if (!v.bgColor) v.bgColor = r.bgColor; while (w < y + b) N.insertRow(w++).p = 0; while (N.rows[y].p > j) ++y; N.rows[y].appendChild(v); for (z = 0; z < b; ++z) N.rows[y + z].p += a; y += b; } t.parentNode.replaceChild(N, t); } })()
```

## Zap Hide Elements
### Zap Hide Colors
- Remove color of a website
```
javascript:(function(){var newSS, styles='* { background: white ! important; color: black !important } :link, :link * { color: #0000EE%20!important%20}%20:visited,%20:visited%20*%20{%20color:%20#551A8B%20!important%20}';%20if(document.createStyleSheet)%20{%20document.createStyleSheet("javascript:'"+styles+"'");%20}%20else%20{%20newSS=document.createElement('link');%20newSS.rel='stylesheet';%20newSS.href='data:text/css,'+escape(styles);%20document.getElementsByTagName("head")[0].appendChild(newSS);%20}%20})();
```

### Zap Hide Images
- Hide Images
```
javascript:(function(){function toArray (c){var a, k;a=new Array;for (k=0; k < c.length; ++k)a[k]=c[k];return a;}var images, img, altText;images=toArray(document.images);for (var i=0; i < images.length; ++i){img=images[i];altText=document.createTextNode(img.alt);img.parentNode.replaceChild(altText, img)}})();
```

### Hide Image Show Alt Text
- Hide image of a website, change to its alt text
```
javascript:(function(){function toArray (c){var a, k;a=new Array;for (k=0; k < c.length; ++k)a[k]=c[k];return a;}var images, img, altText;images=toArray(document.images);for (var i=0; i < images.length; ++i){img=images[i];altText=document.createTextNode(img.alt);img.parentNode.replaceChild(altText, img)}})();
```

### Page Zipper Auto Next Page
- Automatically go to next page
```
javascript:(function(){if(window['pgzp']){_pgzpToggleBookmarklet();}else{window._page_zipper_is_bookmarklet=true;window._page_zipper=document.createElement('script');window._page_zipper.type='text/javascript';window._page_zipper.src='//www.printwhatyoulike.com/static/pagezipper/pagezipper_10.js';document.getElementsByTagName('head')[0].appendChild(window._page_zipper);}})();
```

### Print What You Like
- Select webpage elements to print
```
javascript:(function(){if(window['ppw']&&ppw['bookmarklet']){ppw.bookmarklet.toggle();}else{window._pwyl_home='//www.printwhatyoulike.com/';window._pwyl_pro_id=null;window._pwyl_bmkl=document.createElement('script');window._pwyl_bmkl.setAttribute('type','text/javascript');window._pwyl_bmkl.setAttribute('src',window._pwyl_home+'static/compressed/pwyl_bookmarklet_10.js');window._pwyl_bmkl.setAttribute('pwyl','true');document.getElementsByTagName('head')[0].appendChild(window._pwyl_bmkl);}})();
```

### Select View Print
- view selection ready to print, hide others
```
javascript:(function(){ var d=open().document; d.title="Selection"; if (window.getSelection) { /*Moz*/ var s = getSelection(); for(i=0; i<s.rangeCount; ++i) { var a, r = s.getRangeAt(i); if (!r.collapsed) { var x = document.createElement("div"); x.appendChild(r.cloneContents()); if (d.importNode) x = d.importNode(x, true); d.body.appendChild(x); } } } else { /*IE*/ d.body.innerHTML = document.selection.createRange().htmlText; } })();
```

### Unclutter Youtube Video
- Watch Youtube video without clutter
- via [Viewpure](http://viewpure.com/)
```
javascript:void(location.href='http://viewpure.com/process?bkmrk='+location.href)
```

### Read Outline
- read outline
- via [Outline](https://outline.com/)
```
javascript:(function()%7Bwindow.location.href %3D 'https%3A%2F%2Foutline.com%2F' %2B window.location.href%7D)()
```

### No CSS
- Remove CSS for a Website
```
javascript: (function() { var i, x; for (i = 0; x = document.styleSheets[i]; ++i) x.disabled = true; })();
```

## Rosyadi.com related

### Rosyadi.com Info
```
javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='https://rosyadi.com/info/wp-admin/edit.php?pf-nominate-this=2',l=d.location,e=encodeURIComponent,u=f+'&u='+e(l.href)+'&t='+e(d.title)+'&s='+e(s)+'&v=4';a=function(){if(!w.open(u,'t','toolbar=0,resizable=1,scrollbars=1,status=1,width=720px,height=620px'))l.href=u;};if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0); else a();void(0)
```

### Rosyadi.com Read
```
javascript:(function(){var url=location.href||url;var wllbg=window.open('https://rosyadi.com/read/web/bookmarklet?url=' + encodeURIComponent(url),'_blank');})();
```

### Rosyadi.com Share
```
javascript:(          function(){            var%20url%20=%20location.href;            var%20title%20=%20document.title%20||%20url;            var%20desc=document.getSelection().toString();            if(desc.length>4000){              desc=desc.substr(0,4000)+'...';              alert('The%20selected%20text%20is%20too%20long,%20it%20will%20be%20truncated.');            }            window.open(              'https://rosyadi.com/share/?post='%20+%20encodeURIComponent(url)+              '&title='%20+%20encodeURIComponent(title)+              '&description='%20+%20encodeURIComponent(desc)+              '&source=bookmarklet','_blank','menubar=no,height=800,width=600,toolbar=no,scrollbars=yes,status=no,dialog=1'            );          }        )();
```

### Rosyadi.com Short
```
javascript:(function()%7B%20var%20d%3Ddocument%2C%20sc%3Dd.createElement(%27script%27)%2C%20l%3Dd.location.href%2C%20enc%3DencodeURIComponent%2C%20ups%3Dl.match(%2F%5E%5Ba-zA-Z0-9%5C%2B%5C.-%5D%2B%3A(%5C%2F%5C%2F)%3F%2F)%5B0%5D%2C%20ur%3Dl.split(new%20RegExp(ups))%5B1%5D%2C%20ups%3Dups.split(%2F%5C%3A%2F)%2C%20p%3D%27%3Fup%3D%27%2Benc(ups%5B0%5D%2B%27%3A%27)%2B%27%26us%3D%27%2Benc(ups%5B1%5D)%2B%27%26ur%3D%27%2Benc(ur)%2B%27%26t%3D%27%2Benc(d.title)%3B%20window.yourls_callback%3Dfunction(r)%7B%20if(r.short_url)%7B%20prompt(r.message%2Cr.short_url)%3B%7Delse%7B%20alert(%27An%20error%20occured%3A%20%27%2Br.message)%3B%7D%7D%3B%20sc.src%3D%27https%3A%2F%2Frosyadi.com%2Fs%2Fadmin%2Findex.php%27%2Bp%2B%27%26jsonp%3Dyourls%27%3B%20void(d.body.appendChild(sc))%3B%7D)()%3B
```

## Link Tools
### Linkify
```
javascript:(function () { if (!window.linkifyLoaded) { var doc = document; var scriptElem = document.createElement('script'); scriptElem.type = 'text/javascript'; scriptElem.src = 'http://www-static.linkify.mobi/api/linkify.js?key=c63dd5f8d0a50029038ecabd01e1ded8cfed5bee'; doc.getElementsByTagName('head')[0].appendChild(scriptElem); window.linkifyLoaded = true; } })();
```

### Long URLs
```
javascript:void(function(){if(typeof%20jQuery%20==%20'undefined'){var%20s=document.createElement('script');s.src='http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js';document.getElementsByTagName('head')[0].appendChild(s);}var%20l=document.createElement('script');l.src='http://www.longurlplease.com/js/longurlplease.js';document.getElementsByTagName('head')[0].appendChild(l);function%20runIfReady(){try{if($.longurlplease){%20clearInterval(interval);%20$.longurlplease();}}catch(e){}};%20var%20interval%20=%20window.setInterval(runIfReady,100);}())
```

### Remove URL Parameters
```
javascript:console.log('Original URL: '+window.location);window.history.replaceState('','',window.location.origin+window.location.pathname);
```

### Text as URL Link
```
javascript: (function() { var i, c, x, h; for (i = 0; x = document.links[i]; ++i) { h = x.href; x.title += " " + x.innerHTML; while (c = x.firstChild) x.removeChild(c); x.appendChild(document.createTextNode(h)); } })()
```

### Remove Redirect
```
javascript:(function(){var k,x,t,i,j,p; for(k=0;x=document.links[k];k++){t=x.href.replace(/[%]3A/ig,':').replace(/[%]2f/ig,'/');i=t.lastIndexOf('http');if(i>0){ t=t.substring(i); j=t.indexOf('&'); if(j>0)t=t.substring(0,j); p=/https?\:\/\/[^\s]*[^.,;'">\s\)\]]/.exec(unescape(t)); if(p) x.href=p[0]; } else if (x.onmouseover&&x.onmouseout){x.onmouseover(); if (window.status && window.status.indexOf('://')!=-1)x.href=window.status; x.onmouseout(); } x.onmouseover=null; x.onmouseout=null; }})();
```

## Search Tool

### Highlight Search
- Highlight text you want to search
```
javascript:(function(){var%20count=0,%20text,%20dv;text=prompt("Search%20phrase:",%20"");if(text==null%20||%20text.length==0)return;dv=document.defaultView;function%20searchWithinNode(node,%20te,%20len){var%20pos,%20skip,%20spannode,%20middlebit,%20endbit,%20middleclone;skip=0;if(%20node.nodeType==3%20){pos=node.data.toUpperCase().indexOf(te);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor="yellow";middlebit=node.splitText(pos);endbit=middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else%20if(%20node.nodeType==1&&%20node.childNodes%20&&%20node.tagName.toUpperCase()!="SCRIPT"%20&&%20node.tagName.toUpperCase!="STYLE"){for%20(var%20child=0;%20child%20<%20node.childNodes.length;%20++child){child=child+searchWithinNode(node.childNodes[child],%20te,%20len);}}return%20skip;}window.status="Searching%20for%20'"+text+"'...";searchWithinNode(document.body,%20text.toUpperCase(),%20text.length);window.status="Found%20"+count+"%20occurrence"+(count==1?"":"s")+"%20of%20'"+text+"'.";})();
```

### Photo Search
```
javascript:void(window.open('http://tineye.com/search?pluginver=bookmark_1.0&url='+encodeURIComponent(document.URL)));
```

### Paper Search with Scihub
- via [scihub.tw](https://sci-hub.ee/)
```
javascript:(function(){location.href=%22https://sci-hub.ee/%22+location.href})();
```

## Image Tools
### Image Gallery
```
javascript:(function(){function%20I(u){var%20t=u.split('.'),e=t[t.length-1].toLowerCase();return%20{gif:1,jpg:1,jpeg:1,png:1,mng:1}[e]}function%20hE(s){return%20s.replace(/&/g,'&amp;').replace(/>/g,'>').replace(/</g,'<').replace(/"/g,'&quot;');}var%20q,h,i,z=open().document;z.write('<p>Images%20linked%20to%20by%20'+hE(location.href)+':</p><hr>');for(i=0;q=document.links[i];++i){h=q.href;if(h&&I(h))z.write('<p>'+q.innerHTML+'%20('+hE(h)+')<br><img%20src="'+hE(h)+'">');}z.close();})()
```

### Image Gallery as Thumbnail
```
javascript:var%20sHTML=%22<html><head><title>gallery</title><body><center><table%20border=0>%22;var%20y=0;for(x=0;x<document.links.length;x++){a=document.links[x].href;%20if%20(a.match(/jpe|jpeg|jpg|bmp|tiff|tif|bmp|gif|png/i)){sHTML+='<td%20style=%22border-style:solid;border-width:1px%22><a%20target=%22_new%22%20href=%22'+a+'%22><img%20border=%220%22%20width=%22100%22%20src=%22'+a+'%22></a></td>';%20if%20(!((x+1)%5))%20sHTML+=%22</tr><tr>%22}};this.innerHTML=sHTML+%22</table></center></body></html>%22;
```

### Instagram View
```
javascript:(function(){;!function(e)%7Bvar%20t=%7B%7D;function%20n(a)%7Bif(t%5Ba%5D)return%20t%5Ba%5D.exports;var%20r=t%5Ba%5D=%7Bi:a,l:!1,exports:%7B%7D%7D;return%20e%5Ba%5D.call(r.exports,r,r.exports,n),r.l=!0,r.exports%7Dn.m=e,n.c=t,n.d=function(e,t,a)%7Bn.o(e,t)%7C%7CObject.defineProperty(e,t,%7Benumerable:!0,get:a%7D)%7D,n.r=function(e)%7B%22undefined%22!=typeof%20Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,%7Bvalue:%22Module%22%7D),Object.defineProperty(e,%22__esModule%22,%7Bvalue:!0%7D)%7D,n.t=function(e,t)%7Bif(1&t&&(e=n(e)),8&t)return%20e;if(4&t&&%22object%22==typeof%20e&&e&&e.__esModule)return%20e;var%20a=Object.create(null);if(n.r(a),Object.defineProperty(a,%22default%22,%7Benumerable:!0,value:e%7D),2&t&&%22string%22!=typeof%20e)for(var%20r%20in%20e)n.d(a,r,function(t)%7Breturn%20e%5Bt%5D%7D.bind(null,r));return%20a%7D,n.n=function(e)%7Bvar%20t=e&&e.__esModule?function()%7Breturn%20e.default%7D:function()%7Breturn%20e%7D;return%20n.d(t,%22a%22,t),t%7D,n.o=function(e,t)%7Breturn%20Object.prototype.hasOwnProperty.call(e,t)%7D,n.p=%22%22,n(n.s=4)%7D(%5Bfunction(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=%5B%5D;t.push(e);for(;e.parentNode;)t.unshift(e.parentNode),e=e.parentNode;return%20t%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e,t)%7Bt=t%7C%7Cwindow%7C%7Cdocument.documentElement;var%20n=e.getBoundingClientRect();return%20n.bottom%3E0&&n.right%3E0&&n.left%3C(t.innerWidth%7C%7Ct.clientWidth)&&n.top%3C(t.innerHeight%7C%7Ct.clientHeight)%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D);var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(5));var%20r=%7Bde:%22de-DE%22,pt:%22pt-BR%22,en:%22en-US%22,%22en-GB%22:%22en-US%22%7D%5Bnavigator.language%5D;function%20o(e)%7Bvar%20t=arguments.length%3E1&&void%200!==arguments%5B1%5D?arguments%5B1%5D:r;try%7Bif(a.default.langs.hasOwnProperty(t)%7C%7C(t=%22en-US%22),a.default.langs%5Bt%5D%5Be%5D)return%20a.default.langs%5Bt%5D%5Be%5D%7Dcatch(n)%7Breturn%20console.error(%22%5Binstantgram%5DLOC%20error:%22,n),%22ops,%20an%20error%20ocurred%20in%20localization%20system.%20Enter%20in%20https://github.com/theus/instantgram/issues/new%20and%20open%20an%20issue%20with%20this%20code:%20'LOC_dont_found_str_neither_default:%5B%22+t+%22-%3E%22+e+%22%5D'%5Cn%20%20%20%20for%20more%20information%20open%20the%20console%22%7D%7Dconsole.info(o(%22helpers.localize_defaultlang%22).replace(%22$%7BLANG_DEFAULT%7D%22,r)),t.default=o%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e,t,n)%7Bfor(var%20a=0;a%3Ce.length;a++)t.call(n,a,e%5Ba%5D)%7D%7D,function(e,t,n)%7B%22use%20strict%22;var%20a=g(n(2)),r=g(n(6)),o=g(n(3)),i=g(n(1)),s=g(n(7)),d=g(n(8)),u=g(n(9)),l=g(n(10)),c=g(n(13)),m=g(n(14));function%20g(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7Dvar%20f=%7BVERSION:%223.0.1%22,hostname:window.location.hostname,path:window.location.pathname,images:%5B%5D,imagesOnViewPort:%5B%5D,videos:document.querySelectorAll(%22video%22),regexOriginalImage:/%5C/%5Ba-z%5D+%5Cd+%5Ba-z%5D?x%5Cd+%5Ba-z%5D?/,regexMaxResImage:/%5C/%5Ba-z%5D+%5B1080%5D+%5Ba-z%5D?x%5B1080%5D+%5Ba-z%5D?/,regexPath:/%5E%5C/p%5C//,regexHostname:/instagram%5C.com/,regexStoriesURI:/stories%5C/(.*)+/,regexURL:/(%5B--:%5Cw?@%25&+~#=%5D*%5C.%5Ba-z%5D%7B2,4%7D%5C/%7B0,2%7D)((?:%5B?&%5D(?:%5Cw+)=(?:%5Cw+))+%7C%5B--:%5Cw?@%25&+~#=%5D+)?/,foundByModule:null,probablyHasAGallery:%7Bcheck:null,byModule:%22%22%7D,setImageLink:function(e)%7Bthis.imageLinkBeforeParse=e,this.regexMaxResImage.test(e)?this.imageLink=e:this.imageLink=this.regexOriginalImage.test(e)?e.replace(this.regexOriginalImage,%22%22):e%7D,foundVideo:!1,foundImage:!1,imageLink:!1,imageLinkBeforeParse:!1,alertNotInInstagramPost:!1,context:%7BhasMsg:!1,msg:%22%22%7D%7D,p=document.images;(0,o.default)(p,function(e,t)%7B((0,s.default)(t)%7C%7C2===p.length)&&(f.images.push(t),(0,i.default)(t)&&f.imagesOnViewPort.push(t))%7D),f.regexHostname.test(f.hostname)%7C%7Cwindow.alert((0,a.default)(%22index@alert_onlyWorks%22)),f.regexHostname.test(f.hostname)&&(!1===(0,m.default)(f)&&!1===(0,c.default)(f)&&!1===(0,u.default)(f)&&!1===(0,d.default)(f)&&!1===(0,l.default)(f)&&(f.context.hasMsg=!1),f.context.hasMsg&&window.alert((0,a.default)(f.context.msg)),!f.alertNotInInstagramPost%7C%7Cf.foundVideo%7C%7Cf.foundImage%7C%7Cwindow.alert((0,a.default)(%22index#program@alert_dontFound%22)),(0,r.default)(f.VERSION))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=%7Blangs:%7B%22en-US%22:%7B%22helpers.localize_defaultlang%22:%22%5Binstantgram%5D%20set%20language:%20$%7BLANG_DEFAULT%7D%20%5Cn%20For%20more%20information%20about%20available%20languages%20please%20check%20http://theus.github.io/instantgram%22,%22modules.update@oudated_outdated%22:%22%5Binstantgram%5D%20is%20outdated.%20Please%20check%20http://theus.github.io/instantgram%20for%20available%20updates.%22,%22modules.update@oudated_localInfo%22:%22%5Binstantgram%5D%20Installed%20version:%20$%7Bdata.version%7D%20%7C%20New%20update:%20$%7Bdata.gitVersion%7D%22,%22modules.update@determineIfGetUpdateIsNecessary_contacting%22:%22%5Binstantgram%5D%20is%20looking%20for%20available%20updates%E2%80%A6%22,%22modules.update@determineIfGetUpdateIsNecessary_updated%22:%22%5Binstantgram%5D%20updated%20your%20current%20version.%22,%22modules.update@determineIfGetUpdateIsNecessary_@alert_found%22:'%5Binstantgram%5D%20found%20a%20new%20available%20update.%5CnPlease%20check%20%3Ca%20href=%22http://theus.github.io/instantgram%22%3Ehttp://theus.github.io/instantgram%3C/a%3E%20to%20install%20it.',%22index@alert_onlyWorks%22:%22%5Binstantgram%5D%20only%20works%20on%20instagram.com.%22,%22index#program#modal@alert_dontFound%22:%22%5Binstantgram%5D%20didn't%20find%20any%20image%20in%20this%20Instagram%20post.%20Please%20try%20to%20open%20the%20link%20in%20a%20new%20tab.%22,%22index#program#post@alert_dontFound%22:%22Ops,%20%5Binstantgram%5D%20couldn't%20find%20any%20image%20%20:-(%22,%22index#program#screen@alert_dontFound%22:%22%5Binstantgram%5D%20found%20more%20than%201%20image.%20Are%20you%20on%20a%20profile%20page?%20If%20yes,%20please%20open%20a%20single%20post%20first%20and%20open%20%5Binstantgram%5D%20again.%22,%22index#program@alert_dontFound%22:%22Ops,%20did%20you%20open%20any%20Instagram%20post?%20Like%20for%20example%20instagram.com/p/82jd828jd%22,%22index#program@alert_videoBlob%22:%22If%20you're%20trying%20open%20a%20video,%20try%20enter%20on%20Instagram%20post%20page.%20Like%20for%20example%20instagram.com/p/82jd828jd.%20If%20you're%20already%20in%20it,%20try%20refreshing%20the%20page%20before%20running%20%5Binstantgram%5D%20or%20open%20the%20post%20in%20a%20new%20tab.%20(this%20proccess%20is%20neccessary%20only%20for%20videos)%22%7D,%22pt-BR%22:%7B%22helpers.localize_defaultlang%22:%22%5Binstantgram%5D%20idioma%20configurado:%20$%7BLANG_DEFAULT%7D%20%5Cnpara%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20idiomas%20suportados,%20acesse%20http://theus.github.io/instantgram%22,%22modules.update@oudated_outdated%22:%22%5Binstantgram%5D%20est%C3%A1%20desatualizado.%20Acesse%20http://theus.github.io/instantgram%20para%20atualizar%22,%22modules.update@oudated_localInfo%22:%22%5Binstantgram%5D%20vers%C3%A3o%20local:%20$%7Bdata.version%7D%20%7C%20nova%20vers%C3%A3o:%20$%7Bdata.gitVersion%7D%22,%22modules.update@determineIfGetUpdateIsNecessary_contacting%22:%22%5Binstantgram%5D%20est%C3%A1%20procurando%20atualiza%C3%A7%C3%B5es...%22,%22modules.update@determineIfGetUpdateIsNecessary_updated%22:%22%5Binstantgram%5D%20informa%C3%A7%C3%B5es%20locais%20atualizadas%22,%22modules.update@determineIfGetUpdateIsNecessary_@alert_found%22:%22%5Binstantgram%5D%20encontrou%20uma%20atualiza%C3%A7%C3%A3o.%5Cn%20acesse%20theus.github.io/instantgram%20para%20atualizar%22,%22index@alert_onlyWorks%22:%22%5Binstantgram%5D%20somente%20funciona%20no%20instagram.com%22,%22index#program#modal@alert_dontFound%22:%22%5Binstantgram%5D%20n%C3%A3o%20encontrou%20uma%20imagem%20em%20um%20post.%20Tente%20abrir%20o%20link%20em%20uma%20nova%20aba.%22,%22index#program#post@alert_dontFound%22:%22ops,%20%5Binstantgram%5D%20n%C3%A3o%20encontrou%20a%20imagem%20:(%22,%22index#program#screen@alert_dontFound%22:%22%5Binstantgram%5D%20a%20procura%20por%20imagem%20na%20tela%20encontrou%20mais%20de%201%20imagem.%20Voc%C3%AA%20est%C3%A1%20em%20um%20perfil?%20Se%20sim,%20abra%20alguma%20imagem%20antes%20de%20rodar%20o%20%5Binstantgram%5D%22,%22index#program@alert_dontFound%22:%22ops,%20voc%C3%AA%20est%C3%A1%20em%20algum%20post%20do%20instagram?%20ex:%20instagram.com/p/82jd828jd%22,%22index#program@alert_videoBlob%22:%22Se%20voc%C3%AA%20est%C3%A1%20tentando%20abrir%20um%20v%C3%ADdeo,%20tente%20entrar%20na%20p%C3%A1gina%20do%20post%20do%20Instagram.%20ex:%20instagram.com/p/82jd828jd.%20Se%20voc%C3%AA%20j%C3%A1%20est%C3%A1%20na%20p%C3%A1gina,%20tente%20atualizar%20a%20p%C3%A1gina%20antes%20de%20executar%20o%20%5Binstantgram%5D%20ou%20abra%20o%20post%20em%20uma%20nova%20aba.%20(este%20processo%20s%C3%B3%20%C3%A9%20necess%C3%A1rio%20com%20v%C3%ADdeos)%22%7D,%22de-DE%22:%7B%22helpers.localize_defaultlang%22:%22Ausgew%C3%A4hlte%20Sprache:%20$%7BLANG_DEFAULT%7D%20%5Cn%20Weitere%20Informationen%20zu%20den%20unterst%C3%BCtzten%20Sprachen%20findest%20du%20auf%20http://theus.github.io/instantgram%22,%22modules.update@oudated_outdated%22:%22%5Binstantgram%5D%20ist%20veraltet.%20Bitte%20besuche%20die%20Seite%20http://theus.github.io/instantgram%20f%C3%BCr%20ein%20Update.%22,%22modules.update@oudated_localInfo%22:%22%5Binstantgram%5D%20Installierte%20Version%20$%7Bdata.version%7D%20%7C%20Neue%20Version:%20$%7Bdata.gitVersion%7D%22,%22modules.update@determineIfGetUpdateIsNecessary_contacting%22:%22%5Binstantgram%5D%20sucht%20nach%20neuen%20verf%C3%BCgbaren%20Updates%E2%80%A6%22,%22modules.update@determineIfGetUpdateIsNecessary_updated%22:%22%5Binstantgram%5D%20wurde%20aktualisiert.%22,%22modules.update@determineIfGetUpdateIsNecessary_@alert_found%22:%22%5Binstantgram%5D%20hat%20ein%20neues%20Update%20gefunden.%5CnBitte%20besuche%20die%20Seite%20http://theus.github.io/instantgram,%20um%20das%20Update%20zu%20installieren.%22,%22index@alert_onlyWorks%22:%22%5Binstantgram%5D%20funktioniert%20nur%20mit%20instagram.com.%22,%22index#program#modal@alert_dontFound%22:%22%5Binstantgram%5D%20konnte%20kein%20Bild%20in%20diesem%20Post%20finden.%20Bitte%20%C3%B6ffne%20den%20Link%20in%20einem%20neuen%20Tab.%22,%22index#program#post@alert_dontFound%22:%22Ops,%20%5Binstantgram%5D%20konnte%20leider%20kein%20Bild%20finden%20%20:-(%22,%22index#program#screen@alert_dontFound%22:%22%5Binstantgram%5D%20hat%20mehr%20als%201%20Bild%20gefunden.%20Bist%20du%20in%20der%20Profilansicht?%20Falls%20ja,%20%C3%B6ffne%20bitte%20zuerst%20einen%20einzelnen%20Post%20und%20f%C3%BChre%20%5Binstantgram%5D%20erneut%20aus.%22,%22index#program@alert_dontFound%22:%22Ops,%20hast%20du%20einen%20Instagram%20Post%20ge%C3%B6ffnet?%20Zum%20Beispiel%20instagram.com/p/82jd828jd%22,%22index#program@alert_videoBlob%22:%22If%20you're%20trying%20open%20a%20video,%20try%20enter%20on%20Instagram%20post%20page.%20Like%20for%20example%20instagram.com/p/82jd828jd.%20If%20you're%20already%20in%20it,%20try%20refreshing%20the%20page%20before%20running%20%5Binstantgram%5D%20or%20open%20the%20post%20in%20a%20new%20tab.%20(this%20proccess%20is%20neccessary%20only%20for%20videos)%20//%20we%20need%20translate%20this%20string%20to%20Deutsch,%20if%20you%20can%20help%20us%20enter%20in%20contact%20by%20Github%22%7D%7D%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D);var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(2));function%20r(e)%7Bconsole.warn((0,a.default)(%22modules.update@oudated_outdated%22)),console.warn((0,a.default)(%22modules.update@oudated_localInfo%22).replace(%22$%7Bdata.version%7D%22,e.version).replace(%22$%7Bdata.gitVersion%7D%22,e.gitVersion))%7Dt.default=function(e)%7Bvar%20t=e.replace(/%5C./g,%22%22);if(t=parseInt(t),function()%7Bvar%20e=window.localStorage.getItem(%22instantgram%22);return!e%7C%7C((e=JSON.parse(e)).version!==e.gitVersion&&r(e),Date.now()%3Ee.dateExpiration)%7D())%7Bvar%20n=new%20window.XMLHttpRequest;n.addEventListener(%22readystatechange%22,function()%7Bif(console.info((0,a.default)(%22modules.update@determineIfGetUpdateIsNecessary_contacting%22)),4===this.readyState)%7Bvar%20n=new%20Date;n.setDate(n.getDate()+2),window.localStorage.setItem(%22instantgram%22,JSON.stringify(%7Bversion:e,gitVersion:JSON.parse(this.responseText).version,lastVerification:Date.now(),dateExpiration:n.valueOf()%7D));var%20o=JSON.parse(this.responseText).version;if(o=o.replace(/%5C./g,%22%22),o=parseInt(o),console.info((0,a.default)(%22modules.update@determineIfGetUpdateIsNecessary_updated%22)),t%3Co)%7Bvar%20i=JSON.parse(window.localStorage.getItem(%22instantgram%22));window.alert((0,a.default)(%22modules.update@determineIfGetUpdateIsNecessary_@alert_found%22)),r(i)%7Delse%20console.info(window.localStorage.getItem(%22instantgram%22))%7D%7D),n.open(%22GET%22,%22https://theus.github.io/instantgram/package.json%22),n.send()%7D%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Breturn(0,a.default)(e).filter(function(e)%7Breturn%22ARTICLE%22===e.nodeName%7D).length%3E0%7D;var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(0))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=!1,n=e.images.length%3E2;n&&e.regexPath.test(e.path)&&(e.probablyHasAGallery.check=n,e.probablyHasAGallery.byModule=%22searchImage%22);if(e.regexPath.test(e.path)&&!e.imageLink&!1===n)%7Bif(!e.foundVideo&&!e.foundImage)%7Btry%7Bif(2===document.getElementsByTagName(%22article%22).length)%7Bvar%20a=document.getElementsByTagName(%22article%22)%5B1%5D,r=a.querySelector(%22header%20+%20div%20img%22).src;r?(e.setImageLink(r),window.open(e.imageLink),t=!0,e.foundByModule=%22searchImage%22):e.context=%7BhasMsg:!0,msg:%22index#program#modal@alert_dontFound%22%7D%7D%7Dcatch(t)%7Bconsole.error(%22searchImage()%22,%22%5Binstantgram%5D%20%22+e.VERSION,t)%7Dtry%7Bif(1===document.getElementsByTagName(%22article%22).length)%7Bvar%20o=document.querySelector(%22article%20%3E%20div%20img%22).src;e.setImageLink(o),e.imageLink?(window.open(e.imageLink),t=!0,e.foundByModule=%22searchImage%22):e.context=%7BhasMsg:!0,msg:%22index#program#post@alert_dontFound%22%7D%7D%7Dcatch(t)%7Bconsole.error(%22searchImage()%22,%22%5Binstantgram%5D%20%22+e.VERSION,t)%7D%7D%7Delse%20e.alertNotInInstagramPost=!0;return%20t%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=!1;try%7Be:%7Bvar%20n=!0,r=!1,o=void%200;try%7Bfor(var%20i,s=e.videos%5BSymbol.iterator%5D();!(n=(i=s.next()).done);n=!0)%7Bvar%20d=i.value;if((0,a.default)(d))%7Bvar%20u=d.src;if(u)%7Bif(-1!==u.indexOf(%22blob:%22))%7Be.context=%7BhasMsg:!0,msg:%22index#program@alert_videoBlob%22%7D;break%20e%7Dwindow.open(u),t=!0,e.foundVideo=!0,e.foundByModule=%22searchVideoOnScreen%22,e.alertNotInInstagramPost=!0%7Dbreak%20e%7D%7D%7Dcatch(e)%7Br=!0,o=e%7Dfinally%7Btry%7B!n&&s.return&&s.return()%7Dfinally%7Bif(r)throw%20o%7D%7D%7D%7Dcatch(t)%7Bconsole.error(%22searchVideoOnScreen()%22,%22%5Binstantgram%5D%20%22+e.VERSION,t)%7Dreturn%20t%7D;var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(1))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=!1;try%7Bif(!e.imageLink&&!e.foundVideo)e:%7Be.images.reverse();var%20n=!0,s=!1,d=void%200;try%7Bfor(var%20u,l=e.images%5BSymbol.iterator%5D();!(n=(u=l.next()).done);n=!0)%7Bvar%20c=u.value;if((0,a.default)(c)&&!(0,o.default)(c)&&!(0,i.default)(c))%7Bvar%20m=(0,r.default)(c).filter(function(e)%7Breturn%22UL%22===e.nodeName%7D),g=m.length%3E0;if(g)%7Be.probablyHasAGallery.check=g,e.probablyHasAGallery.byModule=%22searchImageOnScreen%22;var%20f=(0,r.default)(c).filter(function(e)%7Breturn%20e.style&&e.style.transform&&%22%22!==e.style.transform%7D)%5B0%5D,p=f.querySelector(%22ul%22),h=+f.style.transform.split(%22(%22)%5B1%5D.replace(%22px)%22,%22%22),y=h/c.width,v=y%3C0?-1*y:y,_=p.children%5Bv%5D.querySelector(%22img%22);e.setImageLink(_.src),!0%7Delse%20e.setImageLink(c.src);e.imageLink?(window.open(e.imageLink),e.foundImage=!0,t=!0,e.foundByModule=%22searchImageOnScreen%22):e.context=%7BhasMsg:!0,msg:%22index#program#screen@alert_dontFound%22%7D,e.alertNotInInstagramPost=!1;break%20e%7D%7D%7Dcatch(e)%7Bs=!0,d=e%7Dfinally%7Btry%7B!n&&l.return&&l.return()%7Dfinally%7Bif(s)throw%20d%7D%7D%7D%7Dcatch(t)%7Bconsole.error(%22searchImageOnScreen()%22,%22%5Binstantgram%5D%20%22+e.VERSION,t)%7Dreturn%20t%7D;var%20a=s(n(1)),r=s(n(0)),o=s(n(11)),i=s(n(12));function%20s(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Breturn%22a%22===e.parentElement.localName%7C%7C(0,a.default)(e).filter(function(e)%7Breturn%22HEADER%22===e.nodeName%7D).length%3E0%7D;var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(0))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Breturn%22SPAN%22===e.parentElement.nodeName&&%22link%22===e.parentElement.getAttribute(%22role%22)%7D;!function(e)%7Be&&e.__esModule%7D(n(0))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=!1;try%7Bif(e.regexStoriesURI.test(e.path))%7Bvar%20n=document.getElementById(%22react-root%22),r=n.querySelectorAll(%22section%20section%20div%22),o=%22%22;if((0,a.default)(r,function(t,n)%7Bvar%20a=n.style.backgroundImage.match(e.regexURL);null!==a&&(o=a%5B0%5D)%7D),o.length%3E0&&(e.setImageLink(o),window.open(e.imageLink),t=!0,e.foundImage=!0,e.foundByModule=%22searchStories%22),!1===t&&e.videos.length%3E0)%7Bvar%20i=e.videos%5B0%5D.src;!i&&e.videos%5B0%5D.children&&(i=e.videos%5B0%5D.children%5B0%5D.src),i&&(window.open(i),t=!0,e.foundVideo=!0,e.alertNotInInstagramPost=!0,e.foundByModule=%22searchStories%22)%7D%7D%7Dcatch(t)%7Bconsole.error(%22searchStories()%22,%22%5Binstantgram%5D%20%22+e.VERSION,t)%7Dreturn%20t%7D;var%20a=function(e)%7Breturn%20e&&e.__esModule?e:%7B%22default%22:e%7D%7D(n(3))%7D,function(e,t,n)%7B%22use%20strict%22;Object.defineProperty(t,%22__esModule%22,%7Bvalue:!0%7D),t.default=function(e)%7Bvar%20t=!1;try%7Bif(!e.imageLink&&!e.foundVideo)%7Bvar%20n=document.querySelector('%5Bproperty=%22og:video%22%5D')?document.querySelector('%5Bproperty=%22og:video%22%5D'):document.querySelector('%5Bproperty=%22og:video:secure_url%22%5D')?document.querySelector('%5Bproperty=%22og:video:secure_url%22%5D'):null,a=!!n&&n.content;a&&(window.open(a),t=!0,e.foundVideo=!0,e.alertNotInInstagramPost=!0)%7D%7Dcatch(e)%7Bconsole.error(%22getVideoOnPage()%22,%22%5Binstantgram%5D%203.0.1%22,e)%7Dreturn%20t%7D%7D%5D);})()
```

## Others
### Reddit Stream
- Show reddit comment as a stream via [Reddit Stream](http://reddit-stream.com/)
- Tracking protection shoud be off
```
javascript:(function%20stream()%20{var%20s%20=%20window.location.href.split('/');var%20id%20=%20s[s.indexOf('comments')+1];if(s.indexOf('comments')%20!=%20-1)%20{%20window.location.href%20=%20'http://reddit-stream.com/comments/'%20+%20id;%20}})();
```

### Wayback Machine
- Access cached page on Wayback Machine
```
javascript:location.href='https://web.archive.org/web/*/'+location.href
```

### Download All Selected Format
- download all selected format from a web page
```
javascript:!function(){var%20t=prompt("Enter%20filetype%20to%20download%20(format:%20.mp3)");if(null!==t)for(var%20e=document.querySelectorAll('[href$="'+t+'"]'),o=0;o<e.length;o++)e[o].setAttribute("download",""),e[o].click();else%20alert("No%20format")}();
```

### Hypothesis
- Add webpage to [Hypothesis](https://hypothes.is/), web snippet manager
```
javascript:(function(){window.hypothesisConfig=function(){return{showHighlights:true,appType:'bookmarklet'};};var d=document,s=d.createElement('script');s.setAttribute('src','https://hypothes.is/embed.js');d.body.appendChild(s)})();
```

## Didn't Work
### Read Text Only
- Read text only of a website using [Text Fish](https://text.fish/)
```
javascript:(function(){ window.location = 'https://text.fish/'+window.location })()
```

### Read Paywalled Page
- Read paywalled webpage
```
javascript:var%20currentsite%3Ddocument.querySelector(%22meta%5Bproperty%3D'al%3Aandroid%3Aapp_name'%5D%22)%3Fdocument.querySelector(%22meta%5Bproperty%3D'al%3Aandroid%3Aapp_name'%5D%22).content%3Awindow.location.href%3Bfunction%20isPage(b)%7Bconsole.log(b%2B%22%20%22%2Bcurrentsite.includes(b))%3Breturn%20currentsite.includes(b)%7Dfunction%20process(b)%7Bvar%20a%3Db%3BisPage(%22NYTimes%22)%26%26(document.querySelector(%22html%22).innerHTML%3Da)%3BisPage(%22Medium%22)%26%26(a%3Db.replace(%2F%3C%5C%2F%3Fnoscript%3E%2Fg%2C%22%22)%2Cdocument.querySelector(%22html%22).innerHTML%3Da)%3Bif(isPage(%22Bloomberg%22)%7C%7CisPage(%22businessinsider%22))a%3Ddocument.createElement(%22html%22)%2Ca.innerHTML%3Db%2Ca.querySelectorAll(%22script%22).forEach(function(a)%7Breturn%20a.outerHTML%3D%22%22%7D)%2Ca%3Da.outerHTML%2Cdocument.open()%2Cdocument.write(a)%2Cdocument.close()%3BisPage(%22businessinsider%22)%26%26(a%3Ddocument.createElement(%22html%22)%2Ca.innerHTML%3Db%2Ca.querySelectorAll(%22script%22).forEach(function(a)%7Breturn%20a.outerHTML%3D%22%22%7D)%2Ca.querySelectorAll(%22figure%22).forEach(function(a)%7Ba.innerHTML%3Da.querySelector(%22noscript%22).innerHTML%7D)%2Ca%3Da.outerHTML%2Cdocument.open()%2Cdocument.write(a)%2Cdocument.close())%7Dfetch(window.location.href%2C%7Bcredentials%3A%22omit%22%2Credirect%3A%22follow%22%2Cmode%3A%22no-cors%22%7D).then(function(b)%7Breturn%20b.text()%7D).then(function(b)%7Bprocess(b)%7D)%3Bvoid+0
```

### Switch CSS
-  Switch CSS to Minimal CSS according to [Dohliam](https://dohliam.github.io/dropin-minimal-css/)
```
javascript:(function()%7Bvar%20body%20%3D%20document.getElementsByTagName('body')%5B0%5D%3Bscript%20%3D%20document.createElement('script')%3Bscript.type%3D%20'text%2Fjavascript'%3Bscript.src%3D%20'https%3A%2F%2Fdohliam.github.io%2Fdropin-minimal-css%2Fswitcher.js'%3Bbody.appendChild(script)%7D)()
```