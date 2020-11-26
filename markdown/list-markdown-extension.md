---
layout: default
author: irosyadi
title:  List of Extension in Markdown
date: 2020-07-01 21:17:24
path: /markdown
category: markdown
tags: markdown extension
draft: false
---

# List of Extension in Markdown

## Commonmark

Tries to implement all possible elements, while being unambiguous. Notably, CommonMark not yet includes a specification for footnotes.

## 1. GFM
[Github Flavored Markdown](https://github.github.com/gfm/)

This is a variety of Markdown invented by the hosting platform GitHub and is today one of the most common dialects.

### Tables (extension)

| foo | bar |
| --- | --- |
| baz | bim |

Markdown syntax:
```md

```
HTML code:
```html
<table>
<thead>
<tr>
<th>foo</th>
<th>bar</th>
</tr>
</thead>
<tbody>
<tr>
<td>baz</td>
<td>bim</td>
</tr>
</tbody>
</table>
```




### Task list items (extension)

- [x] foo
  - [ ] bar
  - [x] baz
- [ ] bim

Markdown syntax:
```md

```
HTML code:
```html
<ul>
<li><input checked="" disabled="" type="checkbox"> foo
<ul>
<li><input disabled="" type="checkbox"> bar</li>
<li><input checked="" disabled="" type="checkbox"> baz</li>
</ul>
</li>
<li><input disabled="" type="checkbox"> bim</li>
</ul>
```


### Strikethrough (extension)
~~Hi~~ Hello, world!

Markdown syntax:
```md

```
HTML code:
```html
<p><del>Hi</del> Hello, world!</p>
```


### Autolinks (extension)

www.commonmark.org
foo@bar.baz

Markdown syntax:
```md

```
HTML code:
```html
<p><a href="https://www.commonmark.org">www.commonmark.org</a></p>
<p><a href="mailto:foo@bar.baz">foo@bar.baz</a></p>
```

### Disallowed some Raw HTML (extension)
- GFM enables the tagfilter extension, where the following HTML tags will be filtered when rendering HTML output: `<title> <textarea> <style> <xmp>  <iframe> <noembed> <noframes>  <script> <plaintext>`
- All other HTML tags are left untouched


## 2. Markdown-it
[Markdown-it Github](https://github.com/markdown-it/markdown-it)

### Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

### Strikethrough
~~Strikethrough~~

### Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Tables
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

### Emojies (plugin)
[Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### Superscript/Subscript (plugin)
[Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### Underscore/inserted text (plugin)
[\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### Marked/highlight text (plugin)
[\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### Footnotes (plugin)
[Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### Definition Lists (Plugin)
[Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

### Abbreviations (plugin)

[Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### Custom Container/Warning (plugin)

[Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::

### Autolink/Linkify
www.google.com

mail@google.com

## 3. MultiMarkdown
[MultiMarkdown](https://fletcher.github.io/MultiMarkdown-6/)
[Github](https://github.com/fletcher/MultiMarkdown-6)

### Abbreviations (or Acronyms)

Markdown syntax:
```md
[>MMD] is an abbreviation.  So is [>(MD) Markdown].

[>MMD]: MultiMarkdown
```
HTML code:
```html

```

### Citations

Markdown syntax:
```md
This is a statement that should be attributed to
its source[p. 23][#Doe:2006].

And following is the description of the reference to be
used in the bibliography.

[#Doe:2006]: John Doe. *Some Big Fancy Book*.  Vanity Press, 2006.
```
HTML code:
```html

```

### CriticMarkup
CriticMarkup is a way for authors and editors to track changes to documents in plain text. As with Markdown, small groups of distinctive characters allow you to highlight insertions, deletions, substitutions and comments, all without the overhead of heavy, proprietary office suites. https://criticmarkup.com/

### Definition List
Markdown syntax:
```md
Apple
:	Pomaceous fruit of plants of the genus Malus in 
	the family Rosaceae.
:	An american computer company.

Orange
:	The fruit of an evergreen tree of the genus Citrus.
```
HTML code:
```html

```
### Cross-References

Markdown syntax:
```md
I added the ability to interpret [Some Text][] as a cross-link, if a header named “Some Text” exists.
```
HTML code:
```html

```
### Escaped newlines

Markdown syntax:
```md
This is a line.\
This is a new line
```
HTML code:
```html

```

### Fenced Code Blocks
Markdown syntax:
```md
```perl
# Demonstrate Syntax Highlighting if you link to highlight.js #
# https://softwaremaniacs.org/soft/highlight/en/
print "Hello, world!\n";
$a = 0;
while ($a < 10) {
print "$a...\n";
$a++;
}
```
```
HTML code:
```html

```

### File Transclusion
File transclusion is the ability to tell MultiMarkdown to insert the contents of another file inside the current file being processed. 
Markdown syntax:
```md
This is some text.

{{some_other_file.txt}}

Another paragraph
```
HTML code:
```html

```

### Footnotes

Markdown syntax:
```md
Here is some text containing a footnote.[^somesamplefootnote]

[^somesamplefootnote]: Here is the text of the footnote itself.

[somelink]:https://somelink.com
```
HTML code:
```html

```

### Glossaries

Markdown syntax:
```md
[?(glossary) The glossary collects information about important
terms used in your document] is a glossary term.

[?glossary] is also a glossary term.

[?glossary]: The glossary collects information about important
terms used in your document
```
HTML code:
```html

```

### Images Extension

MultiMarkdown also adds a few additional features. If an image is the only thing in a paragraph, it is treated as a block level element

Markdown syntax:
```md
This image (![Alt text](/path/to/img.jpg))
is different than the following image:

![Alt text](/path/to/img.jpg)
```
HTML code:
```html
<p>This image (<img src="/path/to/img.jpg" alt="Alt text" />)
is different than the following image:</p>

<figure>
<img src="/path/to/img.jpg" alt="Alt text" />
<figcaption>Alt text</figcaption>
</figure>
```

### Link and Image Attributes

Markdown syntax:
```md
This is a formatted ![image][] and a [link][] with attributes.

[image]: https://path.to/image "Image title" width=40px height=400px
[link]:  https://path.to/link.html "Some Link" class=external
         style="border: solid black 1px;"

Colored [link](https://example.net "Title" style="color:red")
```
HTML code:
```html

```

### Math

Markdown syntax:
```md
An example of math within a paragraph --- ${e}^{i\pi }+1=0$
--- easy enough.

And an equation on it's own:

$${x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a}$$

That's it.
```
HTML code:
```html

```

### Subscript Superscript

Markdown syntax:
```md
y^(a+b)^
x~y,z~
```
HTML code:
```html

```

### Metadata
It is possible to include special metadata at the top of a MultiMarkdown document, such as title, author, etc. This information can then be used to control how MultiMarkdown processes the document, or can be used in certain output formats in special ways. 

### Raw Source
Code spans and code blocks can be flagged as representing raw source
Markdown syntax:
```md
foo `*bar*`{=html}

```{=latex}
*foo*
```
```
HTML code:
```html

```

### Smart Typography
MultiMarkdown converts:
- Straight quotes (" and ') into “curly” quotes
- Backticks-style quotes (``this'') into “curly” quotes
- Dashes (-- and ---) into en- and em- dashes
- Three dots (...) become an ellipsis

### Table of Contents

Markdown syntax:
```md
{{TOC}}
{{TOC:2-3}}
```
HTML code:
```html

```

### Tables

Markdown syntax:
```md
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped '\|'         ||  
[Prototype table]
```
HTML code:
```html

```

## 4. PHP Markdown
[PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)


## 5. Markdig
[Markdig Github](https://github.com/lunet-io/markdig)


## 6. Pandoc
[Pandoc Manual](https://pandoc.org/MANUAL.html)
Pandoc Markdown is a superset of GitHub flavoured Markdown and adds support for even more elements.

## 7. Kramdown
[Kramdown](https://kramdown.gettalong.org/quickref.html)

## 8. Showdown
[Showdown](https://github.com/showdownjs/showdown/wiki)

## 9. Taiga
[Taiga](https://tree.taiga.io/support/misc/taiga-markdown-syntax/)