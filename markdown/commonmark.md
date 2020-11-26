---
layout: default
author: irosyadi
title:  Markdown with Commonmark
date: 2020-07-01 21:16:49
path: /markdown
category: markdown
tags: markdown commonmark
draft: false
---

# Markdown with Commonmark

Source: [Commonmark](https://spec.commonmark.org/0.29/)

## 1.1. Heading
### 1.1.1. ATX Heading
*Notes:*
- Always put a space between `#` and the heading name
- Maximum to `</h6>` heading
- A leaf block, it cannot contain other block

Markdown syntax:
```md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```
HTML code:
```html
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

Markdown display:

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

HTML display:

<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>

### 1.1.2. Setex Heading
*Notes:*
- Maximum to `</h2>` heading
- Underlining `---` or `==` can be any length:
- A blank line is needed between a paragraph and a following setext heading
- A leaf block, it cannot contain other block

Markdown syntax:
```md
h1 Heading
===================
h2 Heading
-------------------
```

HTML code:
```html
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
```

Markdown display:

h1 Heading
========
h2 Heading
-------------

HTML display:

<h1>h1 Heading</h1>
<h2>h2 Heading</h2>

---

## 1.2. Paragraphs
*Notes:*
- To create paragraphs, use a blank line to separate one or more lines of text.
- Don't ident paragraphs with spaces or tabs
- A leaf block, it cannot contain other block

Markdown syntax:
```md
This is the first paragraph.

This is the second paragraph

```
HTML code:
```html
<p>This is the first paragraph.</p>
<p>This is the second paragraph</p>
```

Markdown display:

This is the first paragraph.

This is the second paragraph


HTML display:

<p>This is the first paragraph.</p>
<p>This is the second paragraph</p>

---

## 1.3 Line Break
### 1.3.1 Hard Line Break
*Notes:*
- To create a line break, end a line of text with two or more spaces, and then type return
- Or by ended it with `\`
- Or by use the `<br>` HTML tag

Markdown syntax:
```md
This is the first line, ended with two spaces.  
And this is the second line.

This is the first line, ended with `\`.\
And this is the second line.

This is the first line, ended with `<br>`.<br>
And this is the second line.
```

HTML code:
```html
<p>This is the first line, ended with two spaces.<br />
And this is the second line.</p>
<p>This is the first line, ended with <code>\</code>.<br />
And this is the second line.</p>
<p>This is the first line, ended with <code>&lt;br&gt;</code>.<br>
And this is the second line.</p>
```

Markdown display:

This is the first line, ended with two spaces.  
And this is the second line.

This is the first line, ended with `\`.\
And this is the second line.

This is the first line, ended with `<br>`.<br>
And this is the second line.

HTML display:

<p>This is the first line, ended with two spaces.<br />
And this is the second line.</p>
<p>This is the first line, ended with <code>\</code>.<br />
And this is the second line.</p>
<p>This is the first line, ended with <code>&lt;br&gt;</code>.<br>
And this is the second line.</p>

### 1.3.2 Soft Line Break
*Note:*
- A regular line break (not in a code span or HTML tag) that is not preceded by two or more spaces or a backslash is parsed as a softbreak. (A softbreak may be rendered in HTML either as a line ending or as a space.

Markdown syntax:
```md
This is the first line, without two spaces in the end. 
And this is the second line.
```
HTML code:
```html
<p>This is the first line, without two spaces in the end.
And this is the second line.</p>
```

Markdown display:

This is the first line, without two spaces in the end. 
And this is the second line.

HTML display:

<p>This is the first line, without two spaces in the end.
And this is the second line.</p>

---

## 1.4. Emphasis
- Between `*` or `_` and text should be not any whitespace.
- `*italics*` or `_italics_`will make *italics*
- `**bold**` or `__bold__`will make **bold**

Markdown syntax:
```md
**This is bold text**  
__This is bold text__  
*This is italic text*  
_This is italic text_  
We have **bold***italic*  
This text is ***really important***  
This text is ___really important___  
This text is __*really important*__  
This text is **_really important_**
```
HTML code:
```html
<p><strong>This is bold text</strong><br />
<strong>This is bold text</strong><br />
<em>This is italic text</em><br />
<em>This is italic text</em><br />
We have <strong>bold</strong><em>italic</em><br />
This text is <em><strong>really important</strong></em><br />
This text is <em><strong>really important</strong></em><br />
This text is <strong><em>really important</em></strong><br />
This text is <strong><em>really important</em></strong></p>
```

Markdown display:

**This is bold text**  
__This is bold text__  
*This is italic text*  
_This is italic text_  
We have **bold***italic*  
This text is ***really important***  
This text is ___really important___  
This text is __*really important*__  
This text is **_really important_**

HTML display:

<p><strong>This is bold text</strong><br />
<strong>This is bold text</strong><br />
<em>This is italic text</em><br />
<em>This is italic text</em><br />
We have <strong>bold</strong><em>italic</em><br />
This text is <em><strong>really important</strong></em><br />
This text is <em><strong>really important</strong></em><br />
This text is <strong><em>really important</em></strong><br />
This text is <strong><em>really important</em></strong></p>

---

## 1.5. Blockquotes
*Notes:*
- A container block, it can contain other block
- You could just add only one `>` at the first line (lazy-continuation);
- Blockquotes can contain other blockquotes (nested)
- Blockquotes can contain other blocks: multiple paragraphs, heading, code, etc.
- Blockquotes can contain other Markdown formatted elements. But not all elements can be used.

Markdown syntax:
```md
> Blockquotes can also be nested...
>> ...by using `>` right next to each other...
> > > ...or with spaces between arrows.
```

HTML code:
```html
<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using <code>&gt;</code> right next to each other...</p>
<blockquote>
<p>...or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
```

Markdown display:

> Blockquotes can also be nested...
>> ...by using `>` right next to each other...
> > > ...or with spaces between arrows.

HTML display:

<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using <code>&gt;</code> right next to each other...</p>
<blockquote>
<p>...or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>

Markdown syntax:
```md
> ### A Heading 3
>
> - List
> - of `code`.
>
>>  *Everything* is going according to **plan** in [example][ex].

[ex]: https://example.com/ "an example link"
```
HTML code:
```html
<blockquote>
<h3>A Heading 3</h3>
<ul>
<li>List</li>
<li>of <code>code</code>.</li>
</ul>
<blockquote>
<p><em>Everything</em> is going according to <strong>plan</strong> in <a href="https://example.com/" title="an example link">example</a>.</p>
</blockquote>
</blockquote>
```
Markdown display:

> ### A Heading 3
>
> - List
> - of `code`.
>
>>  *Everything* is going according to **plan** in [example][ex].

[ex]: https://example.com/ "an example link"

HTML display:

<blockquote>
<h3>A Heading 3</h3>
<ul>
<li>List</li>
<li>of <code>code</code>.</li>
</ul>
<blockquote>
<p><em>Everything</em> is going according to <strong>plan</strong> in <a href="https://example.com/" title="an example link">example</a>.</p>
</blockquote>
</blockquote>

---

## 1.6. List Items
*Notes:*
- Bullet (unordered) list is a list with `-`, `+`, or `*` character marker.
- Ordered list is a list with maximum length 9 arabic digits marker (from 0 to 9), followed by either a `.` character or a `)` character.

### 1.6.1 List with Indentation
- add at least one whitespace more for indented paragraph but not listed
- add a space between line

Markdown syntax:
```md
1. a paragraph

   indented paragraph (not listed)
2. next paragraph

* a paragraph

  indented paragraph (not listed)
* next paragraph
```
HTML code:
```html
<ol>
<li>
<p>a paragraph</p>
<p>indented paragraph (not listed)</p>
</li>
<li>
<p>next paragraph</p>
</li>
</ol>
<ul>
<li>
<p>a paragraph</p>
<p>indented paragraph (not listed)</p>
</li>
<li>
<p>next paragraph</p>
</li>
</ul>
```

Markdown display:

1. a paragraph

   indented paragraph (not listed)
2. next paragraph

* a paragraph

  indented paragraph (not listed)
* next paragraph

HTML display:

<ol>
<li>
<p>a paragraph</p>
<p>indented paragraph (not listed)</p>
</li>
<li>
<p>next paragraph</p>
</li>
</ol>
<ul>
<li>
<p>a paragraph</p>
<p>indented paragraph (not listed)</p>
</li>
<li>
<p>next paragraph</p>
</li>
</ul>


### 1.6.2 List with Other Blocks

Markdown syntax:
```md
1. List block can contain 

   ```
   code block
   ```

   paragraph

   > quote block
2.     code
3. #### Heading4
4. >> quote
```
HTML code:
```html
<ol>
<li>
<p>List block can contain</p>
<pre><code>code block
</code></pre>
<p>paragraph</p>
<blockquote>
<p>quote block</p>
</blockquote>
</li>
<li>
<pre><code>code
</code></pre>
</li>
<li>
<h4>Heading4</h4>
</li>
<li>
<blockquote>
<blockquote>
<p>quote</p>
</blockquote>
</blockquote>
</li>
</ol>
```

Markdown display:

1. List block can contain 

   ```
   code block
   ```

   paragraph

   > quote block
2.     code
3. #### Heading4
4. >> quote


HTML display:

<ol>
<li>
<p>List block can contain</p>
<pre><code>code block
</code></pre>
<p>paragraph</p>
<blockquote>
<p>quote block</p>
</blockquote>
</li>
<li>
<pre><code>code
</code></pre>
</li>
<li>
<h4>Heading4</h4>
</li>
<li>
<blockquote>
<blockquote>
<p>quote</p>
</blockquote>
</blockquote>
</li>
</ol>

### 1.6.3 Maximum Digit for Ordered List is 9
*Notes:*
- To prevent buffer overflow in some browser

Markdown syntax:
```md
0. list  
123456789. continue  
1. list  
1234567890. buffer overflow
```
HTML code:
```html
<ol start="0">
<li>list</li>
<li>continue</li>
<li>list<br />
1234567890. buffer overflow</li>
</ol>
```

Markdown display:

0. list  
123456789. continue  
1. list  
1234567890. buffer overflow

HTML display:

<ol start="0">
<li>list</li>
<li>continue</li>
<li>list<br />
1234567890. buffer overflow</li>
</ol>

### 1.6.4 Indentitation
*Notes:*
- A sublist must be indented the same number of spaces a paragraph would need to be in order to be included in the list item.
- Add some space so the next mark of the next item will be positioned under the first character of previous list item.

Markdown syntax:
```md
- foo
  - add two spaces
    - add two spaces
      - add two spaces
```
HTML code:
```html
<ul>
<li>foo
<ul>
<li>add two spaces
<ul>
<li>add two spaces
<ul>
<li>add two spaces</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
```

Markdown display:

- foo
  - add two spaces
    - add two spaces
      - add two spaces

HTML display:

<ul>
<li>foo
<ul>
<li>add two spaces
<ul>
<li>add two spaces
<ul>
<li>add two spaces</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

## 1.7. Lists
*Notes:*
- A list is a sequence of one or more list items of the same type.
- The list items may be separated by any number of blank lines.
- Two list items are of the same type if they begin with a list marker of the same type.
- Two list markers are of the same type if (a) they are bullet list markers using the same character (`-`, `+`, or `*`) or (b) they are ordered list numbers with the same delimiter (either `.` or `)`).
- A list is an ordered list if its constituent list items begin with ordered list markers, and a bullet list if its constituent list items begin with bullet list markers.
- A list is loose if any of its constituent list items are separated by blank lines (loose list are wrapped in `<p>` tags), or if any of its constituent list items directly contain two block-level elements with a blank line between them. Otherwise a list is tight.

### 1.7.1 Paragraph and Starting New List
*Notes:*
- No blank line is needed to separate a paragraph from a following list
- Changing the bullet or ordered list delimiter starts a new list

Markdown syntax:
```md
I have:
1. foo
10. bar
5) baz
11) buzz
+ ouch
+ what
- where
```
HTML code:
```html
<p>I have:</p>
<ol>
<li>foo</li>
<li>bar</li>
</ol>
<ol start="5">
<li>baz</li>
<li>buzz</li>
</ol>
<ul>
<li>ouch</li>
<li>what</li>
</ul>
<ul>
<li>where</li>
</ul>
```

Markdown display:

I have:
1. foo
10. bar
5) baz
11) buzz
+ ouch
+ what
- where

HTML display:

<p>I have:</p>
<ol>
<li>foo</li>
<li>bar</li>
</ol>
<ol start="5">
<li>baz</li>
<li>buzz</li>
</ol>
<ul>
<li>ouch</li>
<li>what</li>
</ul>
<ul>
<li>where</li>
</ul>

### 1.7.2. Blank Lines and Blank HTML Comment
*Notes:*
- There can be any number of blank lines between items
- To separate consecutive lists of the same type, or to separate a list from an indented code block, insert a blank HTML comment

Markdown syntax:
```md
-   foo

    notcode

-   foo

<!-- -->

    code
```
HTML code:
```html
<ul>
<li>
<p>foo</p>
<p>notcode</p>
</li>
<li>
<p>foo</p>
</li>
</ul>
<!-- -->
<pre><code>code
</code></pre>
```

Markdown display:

-   foo

    notcode

-   foo

<!-- -->

    code

HTML display:

<ul>
<li>
<p>foo</p>
<p>notcode</p>
</li>
<li>
<p>foo</p>
</li>
</ul>
<!-- -->
<pre><code>code
</code></pre>

### 1.7.3. Bullet (Unordered) Lists

Markdown syntax:
```md
+ To start a list, there should be an empty line above
+ Create a list by starting a line with `+`, `-`, or `*`
- Changing the sign will add a linespace (make new list)
+ Add text under an item  
This is a text under an item. Notice that there are two spaces at the end above.
- Sub-lists are made by indenting 2 spaces (to ensure the next mark is fallen under the first character of previous list item):
  * Item 2a
  * Item 2b
* Item 3

To end a list, there should be one empty line above.
```

Markdown display:

+ To start a list, there should be an empty line above
+ Create a list by starting a line with `+`, `-`, or `*`
- Changing the sign will add a linespace (make new list)
+ Add text under an item  
This is a text under an item. Notice that there are two spaces at the end above.
- Sub-lists are made by indenting 2 spaces (to ensure the next mark is fallen under the first character of previous list item):
  * Item 2a
  * Item 2b
* Item 3

To end a list, there should be one empty line above.

### 1.7.4. Ordered Lists
*Notes:*
- The start number of an ordered list is determined by the list number of its initial list item. The numbers of subsequent list items are disregarded.

Markdown syntax:
```md
1. Notice that the sequence number is irrelevant.
1. Notice that there are two spaces at the end.  
To make a new text under item.
3. Sub-lists are made by indenting 4 spaces (to ensure the next mark is fallen under the first character of previous list item)
   1. Item 3a
   2. Item 3b
8. Any number for item 4
```

Markdown display:

1. Notice that the sequence number is irrelevant.
1. Notice that there are two spaces at the end.  
To make a new text under item.
3. Sub-lists are made by indenting 4 spaces (to ensure the next mark is fallen under the first character of previous list item)
   1. Item 3a
   2. Item 3b
8. Any number for item 4

### 1.7.5. Ordered List Continuation

Markdown syntax:
```md
57. will started with offset 57
1. so it will be 58
```

HTML code:
```html
<ol start="57">
<li>will started with offset 57</li>
<li>so it will be 58</li>
</ol>
```

Markdown display:

57. will started with offset 57
1. so it will be 58

HTML display:
<ol start="57">
<li>will started with offset 57</li>
<li>so it will be 58</li>
</ol>

### 1.7.6. Elements in Lists
*Notes:*
- To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab

Markdown syntax:
```md
* This is the first list item.
  > A blockquote would look great below the second list item.
* Here's the second list item.
  I need to add another paragraph below the second list item.
* And here's the third list item.
  ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
* and the last list item
```

Markdown display:

* This is the first list item.
  > A blockquote would look great below the second list item.
* Here's the second list item.
  I need to add another paragraph below the second list item.
* And here's the third list item.
  ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
* and the last list item

*But, for text element in ordered list, add five spaces*

1. This is the first list item.
   > A blockquote would look great below the second list item.
2. Here's the second list item.
   I need to add another paragraph below the second list item.
3. And here's the third list item.
   ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
4. and the last list item

*But, for code blocks in the lists, add eight spaces or two tabs.*

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

---

## 1.8. Code and Code Blocks
### 1.8.1. Inline Code (Code Spans)
*Notes:*
- It is inline content
- It is written between two backticks `\'`

Markdown syntax:
```md
This is a `code`.
```
HTML code:
```html
<p>This is a <code>code</code>.</p>
```

Markdown display:

This is a `code`.

HTML display:

<p>This is a <code>code</code>.</p>

### 1.8.2. Indented Code Blocks
*Notes:*
- Idented by add at least four spaces or one tab before
- A leaf block, it cannot contain other block

Markdown syntax:
```
    <html>
      <head>
        <title>Test</title>
      </head>
```

HTML code:
```html
<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Test&lt;/title&gt;
  &lt;/head&gt;</code></pre>
```

Markdown display:

    <html>
      <head>
        <title>Test</title>
      </head>

HTML display:

<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Test&lt;/title&gt;
  &lt;/head&gt;</code></pre>

### 1.8.3. Fenced Code Blocks

*Notes:*
- A code fence is a sequence of at least three consecutive backtick characters (\`) or tildes (~)
- An info string can be provided after the opening code fence `lang` is optional to help to specify the language of the code.
- A leaf block, it cannot contain other block

Markdown syntax:
```md
~~~
This is a fenced code block.
~~~
```

~~~md
```
This is also a fenced code block.
```
~~~

HTML code:
```html
<pre><code>This is a fenced code block.
</code></pre>
```

~~~html
<pre><code>This is also a fenced code block.
</code></pre>
~~~

Markdown display:

~~~
This is a fenced code block.
~~~

```
This is also a fenced code block.
```

HTML display:

<pre><code>This is a fenced code block.
</code></pre>

<pre><code>This is also a fenced code block.
</code></pre>

---

## 1.9. Links
### 1.9.1. Inline Links
*Notes:*
- A link contains link text (the visible text), a link destination (the URI that is the link destination), and optionally a link title.

Markdown syntax:
```md
This is [link](https://example.com/)

This is [*link with title and `code`*](https://example.com/ "title text!")

This is [https://example.com/]()
```
HTML code:
```html
<p>This is <a href="https://example.com/">link</a></p>
<p>This is <a href="https://example.com/" title="title text!"><em>link with title and <code>code</code></em></a></p>
<p>This is <a href="">https://example.com/</a></p>
```

Markdown display:

This is [link](https://example.com/)

This is [*link with title and `code`*](https://example.com/ "title text!")

This is [https://example.com/]()

HTML display:

<p>This is <a href="https://example.com/">link</a></p>
<p>This is <a href="https://example.com/" title="title text!"><em>link with title and <code>code</code></em></a></p>
<p>This is <a href="">https://example.com/</a></p>

### 1.9.2. Full Reference Links
*Notes:*
- A full reference link consists of a link text immediately followed by a link label that matches a link reference definition elsewhere in the document

Markdown syntax:
```md
This is a [foo][ex]

[ex]: https://example.com/ "an example link"
```
HTML code:
```html
<p>This is a <a href="https://example.com/" title="an example link">foo</a></p>
```

Markdown display:

This is a [foo][ex]

[ex]: https://example.com/ "an example link"

HTML display:

<p>This is a <a href="https://example.com/" title="an example link">foo</a></p>

### 1.9.3. Shortcut Reference Links
*Notes:*
- A shortcut reference link consists of a link label that matches a link reference definition elsewhere in the document and is not followed by `[]` or a link label.

Markdown syntax:
```md
This is a [foo]

[foo]: https://example.com/ "an example link"
```
HTML code:
```html
<p>This is a <a href="https://example.com/" title="an example link">foo</a></p>
```
Markdown display:

This is a [foo]

[foo]: https://example.com/ "an example link"

HTML display:

<p>This is a <a href="https://example.com/" title="an example link">foo</a></p>

### 1.9.4. Autolinks
- Autolinks are absolute URIs and email addresses inside `<` and `>`. They are parsed as links, with the URL or email address as the link label.
- Spaces are not allowed in autolink change it to `%20`

Markdown syntax:
```md
<https://example.com/>
```
HTML code:
```html
<p><a href="https://example.com/">https://example.com/</a></p>
```

Markdown display:

<https://example.com/>

HTML display:

<p><a href="https://example.com/">https://example.com/</a></p>

---

## 1.10. Images
*Notes:*
- Syntax for images is like the syntax for links, with one difference. Instead of link text, we have an image description. 
- The rules for this are the same as for link text, except that (a) an image description starts with ![ rather than [, and (b) an image description may contain links. 
- It is not recommended to use image links in reference format. Some apps will not preview those images.

### 1.10.1 Inline Links Format

```md
![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia Logo")

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)
```

```html
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="Wikipedia" title="Wikipedia Logo"></p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt=""></p>
```

### 1.10.2 Full References Format

```md
This is a ![Wikipedia][ex]

[ex]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia Logo"
```

```html
<p>This is a <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="Wikipedia" title="Wikipedia Logo" /></p>
```

### 1.10.3 Shorcut References Format
```md
This is a ![foo]

[foo]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia Logo"
```
```html
<p>This is a <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="foo" title="Wikipedia Logo" /></p>
```

---

## 1.11. Escaping Characters
*Note:*
- add a backslash `\` in front of the ASCII character.
- Any ASCII punctuation character may be backslash-escaped

Markdown syntax:
```md
\!\"\#\$\%\&\'\(\)\*\+\,  
\-\.\/\:\;\<\=\>\?\@\[\\\]  
\^\_\`\{\|\}\~

\*not emphasized*  
\<br/> not a tag  
\[not a link](/foo)  
\`not code`  
1\. not a list  
\* not a list  
\# not a heading  
\[foo]: /url "not a reference"  
\&ouml; not a character entity  
```
HTML code:
```html
<p>!&quot;#$%&amp;'()*+,<br />
-./:;&lt;=&gt;?@[\]<br />
^_`{|}~</p>
<p>*not emphasized*<br />
&lt;br/&gt; not a tag<br />
[not a link](/foo)<br />
`not code`<br />
1. not a list<br />
* not a list<br />
# not a heading<br />
[foo]: /url &quot;not a reference&quot;<br />
&amp;ouml; not a character entity</p>
```

Markdown display:

\!\"\#\$\%\&\'\(\)\*\+\,  
\-\.\/\:\;\<\=\>\?\@\[\\\]  
\^\_\`\{\|\}\~

\*not emphasized*  
\<br/> not a tag  
\[not a link](/foo)  
\`not code`  
1\. not a list  
\* not a list  
\# not a heading  
\[foo]: /url "not a reference"  
\&ouml; not a character entity  


HTML display:

<p>!&quot;#$%&amp;'()*+,<br />
-./:;&lt;=&gt;?@[\]<br />
^_`{|}~</p>
<p>*not emphasized*<br />
&lt;br/&gt; not a tag<br />
[not a link](/foo)<br />
`not code`<br />
1. not a list<br />
* not a list<br />
# not a heading<br />
[foo]: /url &quot;not a reference&quot;<br />
&amp;ouml; not a character entity</p>

---

## 1.12. Raw HTML and HTML Blocks
### 1.12.1. Raw HTML
*Notes:*
- Text between `<` and `>` that looks like an HTML tag is parsed as a raw HTML tag and will be rendered in HTML without escaping.

Markdown syntax:
```md
<strong style="color:red;">bold red</strong>
<!-- This is a comment, will not shown -->
```
HTML code:
```html
<p><strong style="color:red;">bold red</strong></p>
<!-- This is a comment, will not shown -->
```

Markdown display:

<strong style="color:red;">bold red</strong>
<!-- This is a comment, will not shown -->

HTML display:

<p><strong style="color:red;">bold red</strong></p>
<!-- This is a comment, will not shown -->

### 1.12.2. HTML Blocks
*Notes:*
- An HTML block is a group of lines that is treated as raw HTML
- With start and end conditions are:
  - start with `<script`, `<pre`, or `<style` and end with `</script>`, `</pre>`, or `</style>`
  - start with `<!--` and end with `-->`
  - start with `<?` and end with `?>`
  - start with `<!` with uppercase ASCII letter inside and end with `>`
  - start wtih `<![CDATA[` and end with `]]>`
  - start with string `<` or `</` followed by specific strings and end with `>`, or the string `/>`
- A leaf block, it cannot contain other block

Markdown syntax:
```md
<table><tr><td>
<pre>

**Hello**,
_world_.

</pre>
</td></tr></table>
```
HTML code:
```html
<table><tr><td>
<pre>
<p><strong>Hello</strong>,<br />
<em>world</em>.</p>
</pre>
</td></tr></table>
```

Markdown display:

<table><tr><td>
<pre>

**Hello**,
_world_.

</pre>
</td></tr></table>

HTML display:

<table><tr><td>
<pre>
<p><strong>Hello</strong>,<br />
<em>world</em>.</p>
</pre>
</td></tr></table>

---

## 1.13. Entities and Character
*Note:*
- Valid HTML entity references and numeric character references can be used in place of the corresponding Unicode character, except
- Entity references consist of `&` + any of the valid HTML5 entity names + `;`
- Decimal numeric character references consist of `&#` + a string of 1–7 arabic digits + `;`
- Hexadecimal numeric character references consist of `&#` + either `X` or `x` + a string of 1-6 hexadecimal digits + `;`

Markdown syntax:
```md
Entity: &nbsp; &amp; &copy; &AElig; &Dcaron; &frac34; &HilbertSpace; &DifferentialD; &ClockwiseContourIntegral; &ngE;

Decimal: &#35; &#1234; &#992; &#0;

Hexadecimal: &#X22; &#XD06; &#xcab;
```

HTML code:
```html
<p>Entity:   &amp; © Æ Ď ¾ ℋ ⅆ
∲ ≧̸</p>
<p>Decimal: # Ӓ Ϡ �</p>
<p>Hexadecimal: &quot; ആ ಫ</p>
```

Markdown display:

Entity: &nbsp; &amp; &copy; &AElig; &Dcaron; &frac34; &HilbertSpace; &DifferentialD; &ClockwiseContourIntegral; &ngE;

Decimal: &#35; &#1234; &#992; &#0;

Hexadecimal: &#X22; &#XD06; &#xcab;

HTML display:

<p>Entity:   &amp; © Æ Ď ¾ ℋ ⅆ
∲ ≧̸</p>
<p>Decimal: # Ӓ Ϡ �</p>
<p>Hexadecimal: &quot; ആ ಫ</p>

---

## 1.14. Horizontal Rules (Thematic Break)

*Notes:*
- Sequence of **three or more** `-`, `_`, or `*` characters
- A leaf block, it cannot contain other block

Markdown syntax:
```md
---
___
****
```

HTML code:
```html
<hr />
<hr />
<hr />
```

Markdown display:

___

---

****

HTML display:
<hr />
<hr />
<hr />