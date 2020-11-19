---
layout: default
author: irosyadi
title:  Search Open Directory
date: 2020-08-12 08:18:07
path: /note
category: note
tags: open directory search
draft: false
---

Open Directories are unprotected directories of pics, vids, music, software and otherwise interesting files. 

# Search Open Directories 

## Google Manual Search
For videos/movies/tvshows :
```
intext:"Search Term" intitle:"index.of" +(wmv|mpg|avi|mp4|mkv|mov) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)
```
Images :
```
intext:"Search Term" intitle:"index.of./" (bmp|gif|jpg|png|psd|tif|tiff) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)
```
Music :
```
intext:"Search Term" intitle:"index.of./" (ac3|flac|m4a|mp3|ogg|wav|wma) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)
```
Books :
```
intitle:"Search Term" (pdf|epub|mob) "name or title" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)
```

## Google Drive Search

You can also find google drive shared files similarly.  
[Shared folders](https://www.google.com/search?q=site%3Adrive.google.com+%2B%22drive%2Ffolders%22)  
[Shared everything](https://www.google.com/search?q=site%3Adrive.google.com)  
Works with other domains too.

Some info about google search operators can be found [here](https://web.archive.org/web/20180729112702/https://moz.com/learn/seo/search-operators)

## Open Directory Search Engines

- [Filechef](https://www.filechef.com/)
- [Eyedex](https://eyedex.org/)
- [Palined](http://palined.com/search/)
- [The Eye](https://cgs.the-eye.eu/)
- [SCRPED](http://scrped.com/)
- [LENDX](http://lendx.org/)
- [FileChef](http://www.filechef.com/)
- [ewasion](https://ewasion.github.io/opendirectory-finder/)
- [lumpySoft](https://lumpysoft.com/)
- [EoJ OD.getter](https://www.eyeofjustice.com/od/)
- [OD Search Tool](https://opendirsearch.abifog.com)
- [NMHDDS](https://doyou.needmorehdd.space)
- [Mattpalm](https://mattpalm.com/search/)
- [Jimmyr](http://www.jimmyr.com/mp3_search.php)
- [FilePursuit](https://filepursuit.com/)
- [OD-Database](https://od-db.the-eye.eu/)
- [Musgle](http://musgle.com/)
- [Mamont's open FTP Index](http://www.mmnt.net/)
- [NAPALM FTP Indexer](https://www.searchftps.net/)
- [OD Crawler](https://odcrawler.xyz/)
- [Opendir Search](https://opendirsearch.abifog.com/)
- [Opendirsearch](https://opendirsearch.abifog.com/)
- [Calishot](https://calishot-eng-1.herokuapp.com/index-eng/summary) : Calibre Library Search Engine, link is monthly [updated](https://old.reddit.com/r/opendirectories/search?q=calishot&restrict_sr=on&sort=relevance&t=all)

## Java Scriptlets

Save the following code as a bookmark, then you can open the bookmark to run the desired action.
Download all files with a specific extension :
```
javascript:!function(){var%20t=prompt("Enter%20filetype%20to%20download%20(format:%20.mp3)");if(null!==t)for(var%20e=document.querySelectorAll('[href$="'+t+'"]'),o=0;o<e.length;o++)e[o].setAttribute("download",""),e[o].click();else%20alert("No%20format")}();
```

Resize "Filename" column in OD to make entire filename visible :
```
javascript:!function(){function e(e){var o,n,r=e.href;e.textContent=(n=(o=r).split("/").filter(Boolean).reverse()[0],console.log(n),o.lastIndexOf("/")==o.lenght-1&&(n+="/"),n=n.indexOf(" ")>=0?decodeURI(n):decodeURIComponent(n))}anchors=document.body.querySelectorAll("a"),anchors=Array.from(anchors).slice(1),anchors.map(e)}();
```

Display pictures as thumbnails :
```
javascript:(function(){function%20I(u){var%20t=u.split('.'),e=t[t.length-1].toLowerCase();return%20{gif:1,jpg:1,jpeg:1,png:1,mng:1}[e]}function%20hE(s){return%20s.replace(/&/g,'&amp;').replace(/>/g,'>').replace(/</g,'<').replace(/"/g,'&quot;');}var%20q,h,i,z=open().document;z.write('<p>Images%20linked%20to%20by%20'+hE(location.href)+':</p><hr>');for(i=0;q=document.links[i];++i){h=q.href;if(h&&I(h))z.write('<p>'+q.innerHTML+'%20('+hE(h)+')<br><img%20src="'+hE(h)+'">');}z.close();})()
```

Display pictures as thumbnail gallery :
```
javascript:var%20sHTML=%22<html><head><title>gallery</title><body><center><table%20border=0>%22;var%20y=0;for(x=0;x<document.links.length;x++){a=document.links[x].href;%20if%20(a.match(/jpe|jpeg|jpg|bmp|tiff|tif|bmp|gif|png/i)){sHTML+='<td%20style=%22border-style:solid;border-width:1px%22><a%20target=%22_new%22%20href=%22'+a+'%22><img%20border=%220%22%20width=%22100%22%20src=%22'+a+'%22></a></td>';%20if%20(!((x+1)%5))%20sHTML+=%22</tr><tr>%22}};this.innerHTML=sHTML+%22</table></center></body></html>%22;
```

The-Eye Image Viewer :
```
javascript:void(window.open('https://fusker.the-eye.eu/url.php?url='+encodeURIComponent(document.URL).replace(/\./g,'%25252E')));
```

Another [Linked Images Bookmarklet](https://web.archive.org/web/20180803113222/http://fuseki.net/home/linked-images-bookmarklet.html).  
[More bookmarklets](https://www.squarefree.com/bookmarklets/).

## Softwares
- [wget project](http://www.gnu.org/software/wget/) [page](http://www.gnu.org/software/wget/)
- [wget for Windows](https://eternallybored.org/misc/wget/)
- [wget A Noobs Guide (PDF)](https://chris.partridge.tech/data/wget-noobs.pdf) by [u/regravity](https://old.reddit.com/u/regravity)
- [How to install wget on OSX](https://thomashunter.name/blog/install-wget-on-os-x-lion/) by [u/nucleocide](https://old.reddit.com/u/nucleocide)

There are other softwares that provide wget with a GUI like [Gwget](https://projects-old.gnome.org/gwget/) and [WinWGet](http://winwget.sourceforge.net/) though I've never used them and hence can't comment on their reliability.

- [youtube-dl](https://github.com/rg3/youtube-dl) (Python) downloads videos from various sites. Just like wget you can find GUI frontend for this.
- [RipMe](https://github.com/RipMeApp/ripme) (Java) is an album ripper for various websites.
- [HTTrack Website Copier](https://www.httrack.com/) (Windows/Linux/OSX/Android) can mirror entire websites.
Other download helpers you should try :
- [Adware free JDownloader](https://board.jdownloader.org/showthread.php?t=54725) (Win/Linux/OSX/Java) Has GUI
- [xdm](http://xdman.sourceforge.net/) (Win/Linux/OSX/Java) Has GUI.
- [uGet](http://ugetdm.com/) (Win/Linux/OSX/Android) Has GUI.
- [curl](https://curl.haxx.se/) (Win/Linux/OSX/...) Command line tool.
- [aria2](https://aria2.github.io/) (Linux/OSX) Command line. A web-based UI is also available.
- [axel](https://github.com/axel-download-accelerator/axel) (Linux/OSX) Command line tool.
- [Rclone](https://rclone.org/) (Win/Linux/OSX) Command line tool. Rclone has some great commands that can list files, print remote directory size or even mount it as mountpoint. [Here](https://rclone.org/commands/) is a list of all commands. I recommend you to go through their entire website.

You can also use [httpdirfs](https://github.com/fangfufu/httpdirfs/), which is made by a redditor who posted it [here](https://www.reddit.com/r/opendirectories/comments/913ojc/i_wrote_a_fuse_filesystem_that_allows_you_to/?utm_content=comments&utm_medium=user&utm_source=reddit&utm_name=frontpage) to mount the remote directory as mountpoint. It even appears to be somewhat faster than "rclone mount".

#### OpenDirectoryDownloader

- [OpenDirectoryDownloader](https://github.com/KoalaBear84/OpenDirectoryDownloader) Indexes open directories listings in 75+ supported formats.


## Sites

- [The-Eye](https://the-eye.eu/)
- [Archive.org](https://archive.org)
- [The Trove](https://thetrove.net)
- [Telegram Channel](https://t.me/r_OpenDirectories)