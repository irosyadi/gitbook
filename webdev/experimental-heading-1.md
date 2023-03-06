---
aliases: [No Heading 1]
title: experimental-heading-1
tags: ["markdown"]
date: 2020-11-26 21:10:40
draft: false
---

# experimental-heading-1

No Heading 1 but with title

Quisque ut dolor gravida, placerat libero vel, euismod. Ambitioni dedisse scripsisse iudicaretur. Donec sed odio operae, eu vulputate felis rhoncus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.

## Has Heading 2

Note:

- At Jekyll: no title (Jekyll need Heading 1 as title), Heading 2 is Heading 2
- At Gitbook: Heading 1 becomes the title, Heading 2 is Heading 2
- Gatsby: fail
- At wiki-obsidian: no title (title is from file name), Heading 2 is Heading 2

Summary:

- Both (Heading 1 and title: are available)
	- Jekyll
	- Gitbook
	- Gatsby
	- Wiki-obsidian: success, but both title and Heading-1 are shown
- Only title: (without Heading 1)
	- Jekyll: no title (Heading 1 is mandatory, title: is optional)
	- Gitbook: Heading 1 becomes the title (Heading 1 is mandatory, title: is optional)
	- Gatsby: fail (both Heading 1 and title: are mandatory)
	- Wiki-obsidian: Heading 2 becomes Heading 1 (Heading 1 is mandatory, title: is optional)
- Only Heading 1 (without title:)
	- Jekyll
	- Gitbook
	- Gatsby
	- Wiki-obsidian: Heading 1 is shown

Summary: yaml title: is optional
