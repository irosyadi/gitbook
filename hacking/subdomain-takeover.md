---
aliases: [Subdomain Takeover]
title: Subdomain Takeover
tags: ["tag1", "tag2"]
date: 2023-01-09 05:03
draft: false
---

# Subdomain Takeover

## What is subdomain takeover?

A subdomain takeover is when an adversary is able to claim and serve content on a host that points to a third-party service that is no longer in use. For example, let's

A subdomain takeover is when an adversary is able to claim and serve content on a host that points to a third-party service that is no longer in use. For example, let's say that **example.com** has a subdomain, **subdomain.example.com**, that is pointed at a GitHub Pages HTML page. If the team running **example.com** is not actively using this subdomain and has not properly configured it, an adversary may be able to set up their own account on GitHub and add the subdomain to their own repository. This would allow the adversary to serve their own content on **subdomain.example.com**.

## How do you fix a subdomain takeover?

To fix this issue, the team running **example.com** should take the following steps:

1. Confirm that the subdomain is indeed vulnerable to takeover. This can be done by navigating to the subdomain and checking for a 404 error page or other indicators that the subdomain is not in use.
2. Secure the subdomain by either deleting the DNS record, pointing it to an active service or by configuring a proper 404 page. This can be done through the DNS records for the subdomain.
3. Monitor the subdomain regularly to ensure that it remains secure and is not vulnerable to future takeover attempts.

It is also important for the team running **example.com** to regularly audit their DNS records and ensure that all subdomains are properly configured and in use to prevent future subdomain takeovers.

# Examples of Subdomain Takeover

Here are a few subdomain takeovers companies paid for:

- [https://hackerone.com/reports/219205](https://hackerone.com/reports/219205)
- [https://hackerone.com/reports/1777077](https://hackerone.com/reports/1777077)
- [https://hackerone.com/reports/1717626](https://hackerone.com/reports/1717626)
- [https://hackerone.com/reports/1718371](https://hackerone.com/reports/1718371)
- [https://hackerone.com/reports/1690951](https://hackerone.com/reports/1690951)
- [https://hackerone.com/reports/1102537](https://hackerone.com/reports/1102537)
- [https://hackerone.com/reports/1102537](https://hackerone.com/reports/1102537)
- [https://hackerone.com/reports/1711890](https://hackerone.com/reports/1711890)
- [https://hackerone.com/reports/1447751](https://hackerone.com/reports/1447751)
- [https://hackerone.com/reports/1661914](https://hackerone.com/reports/1661914)
- [https://hackerone.com/reports/1697402](https://hackerone.com/reports/1697402)
- [https://hackerone.com/reports/502758](https://hackerone.com/reports/502758)
- [https://hackerone.com/reports/1433125](https://hackerone.com/reports/1433125)
- [https://hackerone.com/reports/1527405](https://hackerone.com/reports/1527405)
- [https://hackerone.com/reports/665398](https://hackerone.com/reports/665398)
- [https://hackerone.com/reports/1429148](https://hackerone.com/reports/1429148)
- [https://hackerone.com/reports/1486670](https://hackerone.com/reports/1486670)

Example

- [cseo-coherence.microsoft.com](http://cseo-coherence.microsoft.com/)
- Someone has added [http://cseo-coherence.microsoft.com](http://cseo-coherence.microsoft.com/) to their CNAME file on Github Pages, as this domain's DNS entries were already pointing to GitHub Pages. It's a subdomain takeover, but not as we would normally think of it (getting access to the DNS settings and pointing them to what we want) but from getting "access" to the server the subdomain already points to.
