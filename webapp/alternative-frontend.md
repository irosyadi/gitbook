---
aliases: [Alternative Frontend of Popular Websites]
title: Alternative Frontend of Popular Websites
tags: ["alternative", "frontend"]
date: 2020-06-27 19:56:20
category: app
draft: false
---

# Alternative Frontend of Popular Websites

💡 Alternative frontends offer ad-free and light browsing experiences.  
💡 Alternative frontends also offer better user experiences than their original apps.

## Collection

- [digitalblossom/alternative-frontends: 🔐🌐 Privacy-respecting web frontends for popular services](https://github.com/digitalblossom/alternative-frontends#quora)
- [Farside](https://farside.link/)
- [mendel5/alternative-front-ends: Overview of alternative open source front-ends for popular internet platforms (e.g. YouTube, Twitter, etc.)](https://github.com/mendel5/alternative-front-ends)

## Tools

- [LibRedirect](https://libredirect.github.io/) Redirector

## Medium

- [Scribe](https://scribe.rip/)

## List

- [mendel5/alternative-front-ends: Overview of alternative open source front-ends for popular internet platforms (e.g. YouTube, Twitter, etc.)](https://github.com/mendel5/alternative-front-ends)
- [digitalblossom/alternative-frontends: Alternative privacy-respecting frontends for popular services](https://github.com/digitalblossom/alternative-frontends)
- [Simple Web](https://simple-web.org/)

## Redirector

- [einaregilsson/Redirector: Browser extension (Firefox, Chrome, Opera, Edge) to redirect urls based on regex patterns, like a client side mod_rewrite.](https://github.com/einaregilsson/Redirector)

## List Redirection

Twitter to nitter:

1. Description is optional but I use Twitter to nitter for understandability of Redirect.
2. Example URL can be any twitter URL.
3. Include pattern: <https://twitter.com/*>
4. Redirect to: <https://nitter.net/$1>
5. Pattern type: Wildcard
6. Pattern description is also optional.

 

YouTube to Invidious:

1. Description is optional but I use YouTube to Invidious for understandability of Redirect.
2. Example URL can be any youtube URL.
3. Include pattern: <https://www.youtube.com/*>
4. Use any Invidious public instances. For now I use invidious.snopyta.org.  
Redirect to: <https://invidious.snopyta.org/$1>
5. Pattern type: Wildcard
6. Pattern description is also optional.

 

Instagram to bibliogram:

1. Description is optional but I use Instagram to bibliogram for understandability of Redirect.
2. Example URL can be any instagram URL.
3. Include pattern: <https://www.instagram.com/*>
4. Redirect to: <https://bibliogram.art/u/$1>
5. Pattern type: Wildcard
6. Pattern description is also optional.

 

Reddit to old reddit:

1. Description is optional but I use reddit to old reddit for understandability of Redirect.
2. Example URL can be any reddit URL.
3. Include pattern: <https://www.reddit.com/*>
4. Redirect to: <https://old.reddit.com/$1>
5. Pattern type: Wildcard
6. Pattern description is also optional.

 

Bonus: Removal of annoying popup of signin/signup for viewing any question on Quora website

1. Description is optional but I use quora without annoying popup for understandability of Redirect.
2. Example URL can be any quora URL.
3. Include pattern: <https://www.quora.com/*>
4. Redirect to: <https://www.quora.com/$1?share=1>
5. Pattern type: Wildcard
6. Pattern description is also optional.  
Here we need to something extra because above rules will cause this issue. Thanks to einaregilsson for helping me to solve that issue.
7. Click on Show advanced options.
8. Exclude pattern: <https://quora.com/*share=1>

- Include pattern: ^<https://www.youtube.com/watch\?v=(.)>  
Redirect to: <https://www.youtube.com./watch?v=$1>
- (check "regular expression)  
you can check it's working by adding, e.g.
- Example URL: <https://www.youtube.com/watch?v=dfdsfasd>

Redirect: en.wikipedia.org/  
to: $1en.0wikipedia.org/$2  
Pattern type: wildcard  
Example: en.wikipedia.org/* → en.0wikipedia.org/*

Reddit (2)  
Redirect: https://(?:www\.)?reddit.com/(.*)  
to: <https://teddit.net/$1>  
Example: <https://reddit.com/> → <https://teddit.net/>  
Applies to: Main window (address bar)  
Pattern type: Regex

Reddit (2)  
Redirect: <https://reddit.com/*>  
to: <https://teddit.net/$1>  
Example: <https://reddit.com/> → <https://teddit.net/>  
Applies to: Main window (address bar)  
Pattern type: Wildcard

Reddit  
Redirect: https://*.reddit.com/*  
to: <https://teddit.net/$2>  
Example: <https://www.reddit.com/> → <https://teddit.net/>  
Applies to: Main window (address bar)  
Pattern type: Wildcard

## Alternative Frontends

- [libredirect/libredirect: A web extension that redirects popular sites to alternative frontends and backends](https://github.com/libredirect/libredirect)
- [Farside](https://farside.link/)
- [Simple Web](https://simple-web.org/)

## Privacy Redirector

- [LibRedirect](https://libredirect.github.io/)
