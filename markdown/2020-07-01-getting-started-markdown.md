---
layout: default
author: irosyadi
title:  Getting Started about Markdown
date: 2020-07-01 21:14:33
path: /markdown
tags: markdown
---

# Getting Started about Markdown

## What's Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by [John Gruber](https://daringfireball.net/projects/markdown/) in 2004, Markdown is now one of the world's most popular markup languages.

Using Markdown is different than using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn't like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

For instance, to denote a heading, you add a number sign before it (e.g., `# Heading One`). Or to make a phrase bold, you add two asterisks before and after it (e.g., `**this text is bold**`). It may take a while to get used to seeing Markdown syntax in your text, especially if you're accustomed to WYSIWYG applications. The screenshot below shows a Markdown file displayed in the [Atom text editor](https://atom.io).

<div style="text-align:center; margin:30px 0">
  <img src="/assets/images/atom.png" class="img-fluid" alt="Markdown file in the Atom text editor">
</div>

You can add Markdown formatting elements to a plaintext file using a text editor application. Or you can use one of the many Markdown applications for macOS, Windows, Linux, iOS, and Android operating systems. There are also several web-based applications specifically designed for writing in Markdown.

Depending on the application you use, you may not be able to preview the formatted document in real time. But that's okay. [According to Gruber](https://daringfireball.net/projects/markdown/), Markdown syntax is designed to be readable and unobtrusive, so the text in Markdown files can be read even if it isn't rendered.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

## Why Use Markdown?

You might be wondering why people use Markdown instead of a WYSIWYG editor. Why write with Markdown when you can press buttons in an interface to format your text? As it turns out, there are a couple different reasons why people use Markdown instead of WYSIWYG editors.

- Markdown can be used for everything. People use it to create [websites](#websites), [documents](#documents), [notes](#notes), [books](#books), [presentations](#presentations), [email messages](#email), and [technical documentation](#documentation).

- Markdown is portable. Files containing Markdown-formatted text can be opened using virtually any application. If you decide you don't like the Markdown application you're currently using, you can import your Markdown files into another Markdown application. That's in stark contrast to word processing applications like Microsoft Word that lock your content into a proprietary file format.

- Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system.

- Markdown is future proof. Even if the application you're using stops working at some point in the future, you'll still be able to read your Markdown-formatted text using a text editing application. This is an important consideration when it comes to books, university theses, and other milestone documents that need to be preserved indefinitely.

- Markdown is everywhere. Websites like [Reddit](/tools/reddit/) and GitHub support Markdown, and lots of desktop and web-based applications support it.

## Kicking the Tires

The best way to get started with Markdown is to use it. That's easier than ever before thanks to a variety of free tools.

You don't even need to download anything. There are several online Markdown editors that you can use to try writing in Markdown. [Dillinger](https://dillinger.io/) is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane.

<img src="/assets/images/dillinger.png" class="img-fluid" alt="Dillinger Markdown editor">

You'll probably want to keep the Dillinger website open as you read through this guide. That way you can try the syntax as you learn about it. After you've become familiar with Markdown, you may want to use a Markdown application that can be installed on your desktop computer or mobile device.

## How Does it Work?

Dillinger makes writing in Markdown easy because it hides the stuff happening behind the scenes, but it's worth exploring how the process works in general.

When you write in Markdown, the text is stored in a plaintext file that has an `.md` or `.markdown` extension. But then what? How is your Markdown-formatted file converted into HTML or a print-ready document?

The short answer is that you need a *Markdown application* capable of processing the Markdown file. There are lots of applications available — everything from simple scripts to desktop applications that look like Microsoft Word. Despite their visual differences, all of the applications do the same thing. Like Dillinger, they all convert Markdown-formatted text to HTML so it can be displayed in web browsers.

Markdown applications use something called a *Markdown processor* (also commonly referred to as a "parser" or an "implementation") to take the Markdown-formatted text and output it to HTML format. At that point, your document can be viewed in a web browser or combined with a style sheet and printed. You can see a visual representation of this process below.

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> The Markdown application and processor are two separate components. For the sake of brevity, I've combined them into one element ("Markdown App") in the figure below.
</div>

<div style="text-align:center; margin:30px 0">
  <img src="/assets/images/process.png" class="img-fluid" alt="The Markdown Process">
</div>

To summarize, this is a four-part process:

1. Create a Markdown file using a text editor or a dedicated Markdown application. The file should have an `.md` or `.markdown` extension.
2. Open the Markdown file in a Markdown application.
3. Use the Markdown application to convert the Markdown file to an HTML document.
4. View the HTML file in a web browser or use the Markdown application to convert it to another file format, like PDF.

From your perspective, the process will vary somewhat depending on the application you use. For example, Dillinger essentially combines steps 1-3 into a single, seamless interface — all you have to do is type in the left pane and the rendered output magically appears in the right pane. But if you use other tools, like a text editor with a static website generator, you'll find that the process is much more visible.

## What's Markdown Good For?

Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.

It doesn't take long to learn the Markdown syntax, and once you know how to use it, you can write using Markdown just about everywhere. Most people use Markdown to create content for the web, but Markdown is good for formatting everything from email messages to grocery lists.

Here are some examples of what you can do with Markdown.

### Websites

Markdown was designed for the web, so it should come as no surprise that there are plenty of applications specifically designed for creating website content.

If you're looking for the simplest possible way to create a website with Markdown files, check out [blot.im](https://blot.im) and [smallvictori.es](https://smallvictori.es). After you sign up for one of these services, they create a Dropbox folder on your computer. Just drag and drop your Markdown files into the folder and — poof! — they're on your website. It couldn't be easier.

If you're familiar with HTML, CSS, and version control, check out [Jekyll](/tools/jekyll/), a popular static site generator that takes Markdown files and builds an HTML website. One advantage to this approach is that [GitHub Pages](/tools/github-pages/) provides free hosting for Jekyll-generated websites. If Jekyll isn't your cup of tea, just pick one of the [many other static site generators available](https://www.staticgen.com/).

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> I used Jekyll to create the <i>Markdown Guide</i>. You can view the source code on <a href="https://github.com/mattcone/markdown-guide">GitHub</a>.
</div>

If you'd like to use a content management system (CMS) to power your website, take a look at [Ghost](/tools/ghost/). It's a free and open-source blogging platform with a nice Markdown editor. If you're a WordPress user, you'll be happy to know there's [Markdown support](https://en.support.wordpress.com/markdown/) for websites hosted on WordPress.com. Self-hosted WordPress sites can use the [Jetpack plugin](https://jetpack.com/support/markdown/).

### Documents

Markdown doesn't have all the bells and whistles of word processors like Microsoft Word, but it's good enough for creating basic documents like assignments and letters. You can use a Markdown document authoring application to create and export Markdown-formatted documents to PDF or HTML file format. The PDF part is key, because once you have a PDF document, you can do anything with it — print it, email it, or upload it to a website.

Here are some Markdown document authoring applications I recommend:

- **Mac:** [MacDown](/tools/macdown/), [iA Writer](/tools/ia-writer/), or [Marked](https://marked2app.com/)
- **iOS / Android:** [iA Writer](/tools/ia-writer/)
- **Windows:** [ghostwriter](https://wereturtle.github.io/ghostwriter/) or [Markdown Monster](https://markdownmonster.west-wind.com/)
- **Linux:** [ReText](https://github.com/retext-project/retext) or [ghostwriter](https://wereturtle.github.io/ghostwriter/)
- **Web:** [Dillinger](/tools/dillinger/) or [StackEdit](/tools/stackedit/)

<div class="alert alert-success">
  <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> <a href="https://ia.net/writer/templates/">iA Writer</a> provides templates for previewing, printing, and exporting Markdown-formatted documents. For example, the "Academic – MLA Style" template indents paragraphs and adds double sentence spacing.
</div>

### Notes

In nearly every way, Markdown is the ideal syntax for taking notes. Sadly, [Evernote](https://evernote.com/) and [OneNote](https://www.onenote.com/), two of the most popular note applications, don't currently support Markdown. The good news is that several other note applications *do* support Markdown:

- [Simplenote](/tools/simplenote/) is a free, barebones note-taking application available for every platform.
- [Notable](/tools/notable/) is a note-taking application that runs on a variety of platforms.
- [Bear](/tools/bear/) is an Evernote-like application available for Mac and iOS devices. It doesn't exclusively use Markdown by default, but you can enable Markdown compatibility mode.
- [Boostnote](/tools/boostnote/) bills itself as an "open source note-taking app designed for programmers."

If you can't part with Evernote, check out [Marxico](https://marxi.co/), a subscription-based Markdown editor for Evernote, or use [Markdown Here](/tools/markdown-here/) with the Evernote website.

### Books

Looking to self-publish a novel? Try [Leanpub](https://leanpub.com/), a service that takes your Markdown-formatted files and turns them into an electronic book. Leanpub outputs your book in PDF, EPUB, and MOBI file format. If you'd like to create paperback copies of your book, you can upload the PDF file to another service such as [Kindle Direct Publishing](https://kdp.amazon.com). To learn more about writing and self-publishing a book using Markdown, read [this blog post](https://medium.com/techspiration-ideas-making-it-happen/how-i-wrote-and-published-my-novel-using-only-open-source-tools-5cdfbd7c00ca).

### Presentations

Believe it or not, you can generate presentations from Markdown-formatted files. Creating presentations in Markdown takes a little getting used to, but once you get the hang of it, it's a lot faster and easier than using an application like PowerPoint or Keynote. [Remark](https://remarkjs.com) ([GitHub project](https://github.com/gnab/remark)) is a popular browser-based Markdown slideshow tool, as is [Cleaver](https://jdan.github.io/cleaver/) ([GitHub project](https://github.com/jdan/cleaver)). If you use a Mac and would prefer to use an application, check out [Deckset](https://www.decksetapp.com/) or [Marked](https://marked2app.com/).

### Email

If you send a lot of email and you're tired of the formatting controls available on most email provider websites, you'll be happy to learn there's an easy way to write email messages using Markdown. [Markdown Here](/tools/markdown-here/) is a free and open-source browser extension that converts Markdown-formatted text into HTML that's ready to send.

### Documentation

Markdown is a natural fit for technical documentation. Companies like GitHub are increasingly switching to Markdown for their documentation — check out their [blog post](https://github.com/blog/1939-how-github-uses-github-to-document-github) about how they migrated their Markdown-formatted documentation to [Jekyll](/tools/jekyll/). If you write documentation for a product or service, take a look at these handy tools:

- [Read the Docs](https://readthedocs.org) can generate a documentation website from your open source Markdown files. Just connect your GitHub repository to their service and push — Read the Docs does the rest. They also have a [service for commercial entities](https://readthedocs.com/).
- [MkDocs](/tools/mkdocs/) is a fast and simple static site generator that's geared towards building project documentation. Documentation source files are written in Markdown and configured with a single YAML configuration file. MkDocs has several [built in themes](https://www.mkdocs.org/user-guide/styling-your-docs/), including a port of the [Read the Docs](https://readthedocs.org/) documentation theme for use with MkDocs. One of the newest themes is [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).
- [Docusaurus](/tools/docusaurus/) is a static site generator designed exclusively for creating documentation websites. It supports translations, search, and versioning.
- [VuePress](https://vuepress.vuejs.org/) is a static site generator powered by [Vue](https://vuejs.org/) and optimized for writing technical documentation.
- [Jekyll](/tools/jekyll/) was mentioned earlier in the section on websites, but it's also a good option for generating a documentation website from Markdown files. If you go this route, be sure to check out the [Jekyll documentation theme](https://idratherbewriting.com/documentation-theme-jekyll/).


## Flavors of Markdown

One of the most confusing aspects of using Markdown is that practically every Markdown application implements a slightly different version of Markdown. These variants of Markdown are commonly referred to as *flavors*. It's your job to master whatever flavor of Markdown your application has implemented.

To wrap your head around the concept of Markdown flavors, it might help to think of them as language dialects. People in Ciudad Juárez speak Spanish just like the people in Barcelona, but there are substantial differences between the dialects used in both cities. The same is true for people using different Markdown applications. Using [Dillinger](/tools/dillinger/) to write with Markdown is a vastly different experience than using [Ulysses](/tools/ulysses/).

Practically speaking, this means you never know exactly what a company means when they say they support "Markdown." Are they talking about only the [basic syntax elements](/basic-syntax/), or all of the basic and [extended syntax elements](/extended-syntax/) combined, or some arbitrary combination of syntax elements? You won't know until you read the documentation or start using the application.

If you're just starting out, the best advice I can give you is to pick a Markdown application with good Markdown support. That'll go a long way towards maintaining the portability of your Markdown files. You might want to store and use your Markdown files in other applications, and to do that you need to start with an application that provides good support. You can use the [tool directory](/tools/) to find an application that fits the bill.

## Additional Resources

There are lots of resources you can use to learn Markdown. Here are some other introductory resources:

- [John Gruber's Markdown documentation](https://daringfireball.net/projects/markdown/). The original guide written by the creator of Markdown.
- [Markdown Tutorial](https://www.markdowntutorial.com/). An open source website that allows you to try Markdown in your web browser.
- [Awesome Markdown](https://github.com/mundimark/awesome-markdown). A list of Markdown tools and learning resources.
- [Typesetting Markdown](https://dave.autonoma.ca/blog/2019/05/22/typesetting-markdown-part-1). A multi-part series that describes an ecosystem for typesetting Markdown documents using [pandoc](https://pandoc.org/) and [ConTeXt](https://www.contextgarden.net/).

# Markdown basics

Just like many other apps, Zettlr makes use of `Markdown`, originally invented by [John Gruber](https://daringfireball.net/). Of course, over such a long period of time, a huge amount of developments have taken place, that have created the possibilities of modern Markdown applications. In this document the following topics are covered:

1. [A brief history of Markdown](#a-brief-history)
2. [Dialects of Markdown](#markdown-dialects)

***

## A brief history

Since the personal computer became widely available in the 1990s, there were two groups of formats existing side-by-side: word processor documents, such as `.doc`, or `.odt` and code documents, such as `.js`, `.cpp` or `.py`. Both groups of documents contain human-readable text, but there was one simple, yet huge difference: While JavaScript-files or C++-files contained plain text (i.e. only the text that you would see when you open such a file), word processor documents contained a _lot_ more stuff. Word processor documents always hold information about the page size (e.g., A4 or letter), how different blocks should be formatted (e.g., the font of headings or how much blockquotes are indented). If you open a Word/Office-document on your PC right now, you can see what I mean: You immediately see what is a heading based on the font-size font-weight of its text.

For a long time, both these groups of documents stayed as distinct as would their users. Most office-workers only know how to use Microsoft Word or Excel, maybe also LibreOffice-implementations, while close to nobody coming from a STEM-background would voluntarily use Word or similar software. Those scientists have chosen a different path: they developed a programming language called LaTeX, which allows them to create neatly formatted PDF-files from a bunch of code---they follow the same workflow as researchers from the arts and humanities or regular administrative officers, but use different documents for that.

When Markdown was inaugurated by John Gruber in 2004, it was basically like saying: "Why not both?" Markdown combines both the clear reading experience from word processor documents with the benefits of software code documents, which is both versatile and easy to use---even for people that only know how to operate Word or Writer. One small example: While in word processors you would create a heading by typing "some text" and then selecting the `Heading 1` format from some menu, in Markdown you would simply type `# some text`, where the hashtag-symbol tells you immediately: "This is a first level heading!"

At first, Markdown was basically a small script John Gruber wrote for himself to yield these benefits, and it contained a lot of inconsistencies and didn't support many different elements. But over the years, progress was made. Two dates are notable:

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) initially launches Markdown
- 2012: A group of developers form [CommonMark](https://spec.commonmark.org/) to standardise Markdown into an internationally accepted norm.

## Markdown Dialects

Today, several implementations of the Markdown syntax coexist. The most noteworthy are:

- **MultiMarkdown**: Extends the initial syntax with footnotes, tables and some metadata.
- **Markdown Extra**: Again some additions to the initial syntax.
- **GitHub Flavoured Markdown**: This is a variety of Markdown invented by the hosting platform GitHub (which Zettlr is also hosted on!) and is today one of the most common dialects.
- **Pandoc Markdown**: Pandoc Markdown is a superset of GitHub flavoured Markdown and adds support for even more elements.
- **CommonMark**: Tries to implement all possible elements, while being unambiguous. Notably, CommonMark not yet includes a specification for footnotes.