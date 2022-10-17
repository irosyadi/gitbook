---
aliases: [Google Hacking]
title: Google Hacking
tags: ["search"]
date: 2020-08-10 07:30:29
draft: false
---

# Google Hacking

Google hacking, also named Google dorking or Google advanced search, is a hacker technique that uses Google Search and other Google applications to find security holes in the configuration and computer code that websites use.  
Basics. "Google hacking" involves using advanced operators in the Google search engine to locate specific strings of text within search results.

## List of Google Dorking

- [Ahrefs](https://ahrefs.com/blog/google-advanced-search-operators/)
- [Exploit DB](https://www.exploit-db.com/google-hacking-database)
- [Alec](https://www.alec.fyi/dorking-how-to-find-anything-on-the-internet.html)
- [Blackhat (PDF)](https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf)
- [Google Hacking 101 (PDF)](https://www.oakton.edu/user/2/rjtaylor/cis101/Google%20Hacking%20101.pdf)
- [Google Hackers Guide (PDF)](https://doc.lagout.org/Others/The%20Google%20Hackers%20Guide%20v1.0.pdf)
- [Cybersguard](https://cybersguards.com/google-dorks-list-latest-sql-dorks-list-fresh-update/)
- [Medium](https://medium.com/nassec-cybersecurity-writeups/exploring-google-hacking-techniques-using-google-dork-6df5d79796cf)
- [Securitytrails](https://securitytrails.com/blog/google-hacking-techniques)
- [GBHackers](https://gbhackers.com/latest-google-dorks-list/)
- [Github](https://gist.github.com/stevenswafford/393c6ec7b5375d5e8cdc)
- [Conzu](https://www.conzu.de/en/google-dork-liste-2018-conzu/)
- [Ma-No](https://www.ma-no.org/en/security/google-hacking-secrets-the-hidden-codes-of-google)

## Advanced Search

### **“search term”**

Force an exact-match search. Use this to refine results for ambiguous searches, or to exclude synonyms when searching for single words.  
**Example:** **[“steve jobs”](https://www.google.com/search?&q=%22steve+jobs%22)**

### OR

Search for X *or* Y. This will return results related to X or Y, or both. **Note:** The pipe (-) operator can also be used in place of “OR.”  
**Examples:** **[jobs OR gates](https://www.google.com/search?&q=jobs+OR+gates)** / **[jobs - gates](https://www.google.com/search?&q=jobs+%7C+gates)**

### AND

Search for X *and* Y. This will return only results related to both X *and* Y. **Note:** It doesn’t really make much difference for regular searches, as Google defaults to “AND” anyway. But it’s very useful when paired with other operators.  
**Example**: **[jobs AND gates](https://www.google.com/search?&q=jobs+AND+gates)**

### -

Exclude a term or phrase. In our example, any pages returned will be related to jobs but *not* Apple (the company).  
**Example:** **[jobs ‑apple](https://www.google.com/search?q=jobs+-apple)**

### *

Acts as a wildcard and will match any word or phrase.  
**Example:** **[steve * apple](https://www.google.com/search?q=%22steve+*+apple)**

### ( )

Group multiple terms or search operators to control how the search is executed.  
**Example:** **[(ipad OR iphone) apple](https://www.google.com/search?q=%28ipad+OR+iphone%29+apple)**

### $

Search for prices. Also works for Euro (€), but not GBP (£) 🙁  
**Example:** **[ipad $329](https://www.google.com/search?q=ipad+%24329)**

### define:

A dictionary built into Google, basically. This will display the meaning of a word in a card-like result in the SERPs.  
**Example:** **[define:entrepreneur](https://www.google.com/search?q=define%3Aentrepreneur)**

### cache:

Returns the most recent cached version of a web page (providing the page is indexed, of course).  
**Example:** **[cache:apple.com](https://webcache.googleusercontent.com/search?q=cache%3Aapple.com)**

### filetype:

Restrict results to those of a certain filetype. E.g., PDF, DOCX, TXT, PPT, etc. **Note:** The “ext:” operator can also be used—the results are identical.  
**Example:** **[apple filetype:pdf](https://www.google.com/search?q=apple+filetype%3Apdf)** / **[apple ext:pdf](https://www.google.com/search?q=apple+ext%3Apdf)**

### site:

Limit results to those from a specific website.  
**Example:** **[site:apple.com](https://www.google.com/search?q=site%3Aapple.com)**

### related:

Find sites related to a given domain.  
**Example:** **[related:apple.com](https://www.google.com/search?q=related%3Aapple.com)**

### intitle:

Find pages with a certain word (or words) in the title. In our example, any results containing the word “apple” in the title tag will be returned.  
**Example:** **[intitle:apple](https://www.google.com/search?q=intitle%3Aapple)**

### allintitle:

Similar to “intitle,” but only results containing *all* of the specified words in the title tag will be returned.  
**Example:** **[allintitle:apple iphone](https://www.google.com/search?q=allintitle%3Aapple+iphone)**

### inurl:

Find pages with a certain word (or words) in the URL. For this example, any results containing the word “apple” in the URL will be returned.  
**Example:** **[inurl:apple](https://www.google.com/search?q=inurl%3Aapple)**

### allinurl:

Similar to “inurl,” but only results containing *all* of the specified words in the URL will be returned.  
**Example:** **[allinurl:apple iphone](https://www.google.com/search?q=allinurl%3Aapple+iphone)**

### intext:

Find pages containing a certain word (or words) somewhere in the content. For this example, any results containing the word “apple” in the page content will be returned.  
**Example:** **[intext:apple](https://www.google.com/search?q=intext%3Aapple)**

### allintext:

Similar to “intext,” but only results containing *all* of the specified words somewhere on the page will be returned.  
**Example:** **[allintext:apple iphone](https://www.google.com/search?q=allintext%3Aapple+iphone)**

### AROUND(X)

Proximity search. Find pages containing two words or phrases within X words of each other. For this example, the words “apple” and “iphone” must be present in the content and no further than four words apart.  
**Example:** **[apple AROUND(4) iphone](https://www.google.com/search?q=apple+AROUND(4))**

### weather:

Find the weather for a specific location. This is displayed in a weather snippet, but it also returns results from other “weather” websites.  
**Example:** **[weather:san francisco](https://www.google.com/search?q=weather%3Asan+francisco)**

### stocks:

See stock information (i.e., price, etc.) for a specific ticker.  
**Example:** **[stocks:aapl](https://www.google.com/search?q=stocks%3Aaapl)**

### map:

Force Google to show map results for a locational search.  
**Example:** **[map:silicon valley](https://www.google.com/search?q=map%3Asilicon+valley)**

### movie:

Find information about a specific movie. Also finds movie show times if the movie is currently showing near you.  
**Example:** **[movie:steve jobs](https://www.google.com/search?q=movie%3Asteve+jobs)**

### in

Convert one unit to another. Works with currencies, weights, temperatures, etc.  
**Example:** **[$329 in GBP](https://www.google.com/search?q=%24329+in+GBP)**

### source:

Find news results from a certain source in Google News.  
**Example:** **[apple source:the_verge](https://www.google.com/search?q=apple+source%3Athe_verge&tbm=nws)**

### _

Not exactly a search operator, but acts as a wildcard for Google Autocomplete.  
**Example: apple CEO _ jobs**
