# commonmark

## Markdown with Commonmark

Source: [Commonmark](https://spec.commonmark.org/0.29/)

### 1.1. Heading

#### 1.1.1. ATX Heading

_Notes:_

* Always put a space between `#` and the heading name
* Maximum to `</h6>` heading
* A leaf block, it cannot contain other block

Markdown syntax:

```text
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

HTML code:

```markup
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

Markdown display:

## h1 Heading

### h2 Heading

#### h3 Heading

**h4 Heading**

**h5 Heading**

**h6 Heading**

HTML display:

h1 Heading

### h2 Heading

#### h3 Heading

**h4 Heading**

**h5 Heading**

**h6 Heading**

 \#\#\# 1.1.2. Setex Heading \*Notes:\* - Maximum to \`\` heading - Underlining \`---\` or \`==\` can be any length: - A blank line is needed between a paragraph and a following setext heading - A leaf block, it cannot contain other block Markdown syntax: \`\`\`md h1 Heading =================== h2 Heading ------------------- \`\`\` HTML code: \`\`\`html

## h1 Heading

### h2 Heading

 \`\`\` Markdown display: h1 Heading ======== h2 Heading ------------- HTML display:

## h1 Heading

### h2 Heading

### 1.2. Paragraphs

_Notes:_

* To create paragraphs, use a blank line to separate one or more lines of text.
* Don't ident paragraphs with spaces or tabs
* A leaf block, it cannot contain other block

Markdown syntax:

```text
This is the first paragraph.

This is the second paragraph
```

HTML code:

```markup
<p>This is the first paragraph.</p>
<p>This is the second paragraph</p>
```

Markdown display:

This is the first paragraph.

This is the second paragraph

HTML display:

This is the first paragraph.

This is the second paragraph

### 1.3 Line Break

#### 1.3.1 Hard Line Break

_Notes:_

* To create a line break, end a line of text with two or more spaces, and then type return
* Or by ended it with `\`
* Or by use the `<br>` HTML tag

Markdown syntax:

```text
This is the first line, ended with two spaces.  
And this is the second line.

This is the first line, ended with `\`.\
And this is the second line.

This is the first line, ended with `<br>`.<br>
And this is the second line.
```

HTML code:

```markup
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

This is the first line, ended with `\`. And this is the second line.

This is the first line, ended with `<br>`.  
 And this is the second line.

HTML display:

This is the first line, ended with two spaces.  
 And this is the second line.

This is the first line, ended with `\`.  
 And this is the second line.

This is the first line, ended with `<br>`.  
 And this is the second line.

#### 1.3.2 Soft Line Break

_Note:_

* A regular line break \(not in a code span or HTML tag\) that is not preceded by two or more spaces or a backslash is parsed as a softbreak. \(A softbreak may be rendered in HTML either as a line ending or as a space.

Markdown syntax:

```text
This is the first line, without two spaces in the end. 
And this is the second line.
```

HTML code:

```markup
<p>This is the first line, without two spaces in the end.
And this is the second line.</p>
```

Markdown display:

This is the first line, without two spaces in the end. And this is the second line.

HTML display:

This is the first line, without two spaces in the end. And this is the second line.

### 1.4. Emphasis

* Between `*` or `_` and text should be not any whitespace.
* `*italics*` or `_italics_`will make _italics_
* `**bold**` or `__bold__`will make **bold**

Markdown syntax:

```text
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

```markup
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
**This is bold text**  
_This is italic text_  
_This is italic text_  
We have **bold\***italic  
_This text is \*\*_really important  
_**This text is really important  
This text is \_\_**_**really important\*\_\_  
This text is** _really important_\*\*

HTML display:

**This is bold text**  
 **This is bold text**  
 _This is italic text_  
 _This is italic text_  
 We have **bold**_italic_  
 This text is _**really important**_  
 This text is _**really important**_  
 This text is _**really important**_  
 This text is _**really important**_

### 1.5. Blockquotes

_Notes:_

* A container block, it can contain other block
* You could just add only one `>` at the first line \(lazy-continuation\);
* Blockquotes can contain other blockquotes \(nested\)
* Blockquotes can contain other blocks: multiple paragraphs, heading, code, etc.
* Blockquotes can contain other Markdown formatted elements. But not all elements can be used.

Markdown syntax:

```text
> Blockquotes can also be nested...
>> ...by using `>` right next to each other...
> > > ...or with spaces between arrows.
```

HTML code:

```markup
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
>
> > ...by using `>` right next to each other...
> >
> > > ...or with spaces between arrows.

HTML display:

> Blockquotes can also be nested...
>
> > ...by using `>` right next to each other...
> >
> > > ...or with spaces between arrows.

Markdown syntax:

```text
> ### A Heading 3
>
> - List
> - of `code`.
>
>>  *Everything* is going according to **plan** in [example][ex].
```

HTML code:

```markup
<blockquote>
<h3>A Heading 3</h3>
<ul>
<li>List</li>
<li>of <code>code</code>.</li>
</ul>
<blockquote>
<p><em>Everything</em> is going according to <strong>plan</strong> in <a href="http://example.com/" title="an example link">example</a>.</p>
</blockquote>
</blockquote>
```

Markdown display:

> #### A Heading 3
>
> * List
> * of `code`.
>
> > _Everything_ is going according to **plan** in [example](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png).

HTML display:

> #### A Heading 3
>
> * List
> * of `code`.
>
> > _Everything_ is going according to **plan** in [example](http://example.com/).

### 1.6. List Items

_Notes:_

* Bullet \(unordered\) list is a list with `-`, `+`, or `*` character marker.
* Ordered list is a list with maximum length 9 arabic digits marker \(from 0 to 9\), followed by either a `.` character or a `)` character.

#### 1.6.1 List with Indentation

* add at least one whitespace more for indented paragraph but not listed
* add a space between line

Markdown syntax:

```text
1. a paragraph

   indented paragraph (not listed)
2. next paragraph

* a paragraph

  indented paragraph (not listed)
* next paragraph
```

HTML code:

```markup
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

   indented paragraph \(not listed\)

2. next paragraph
3. a paragraph

   indented paragraph \(not listed\)

4. next paragraph

HTML display:

1. a paragraph

   indented paragraph \(not listed\)

2. next paragraph

* a paragraph

  indented paragraph \(not listed\)

* next paragraph

 \#\#\# 1.6.2 List with Other Blocks Markdown syntax: \`\`\`md 1. List block can contain \`\`\` code block \`\`\` paragraph &gt; quote block 2. code 3. \#\#\#\# Heading4 4. &gt;&gt; quote \`\`\` HTML code: \`\`\`html

1. List block can contain

   ```text
   code block
   ```

   paragraph

   > quote block

2. ```text
   code
   ```
3. **Heading4**
4. > > quote

 \`\`\` Markdown display: 1. List block can contain \`\`\` code block \`\`\` paragraph &gt; quote block 2. code 3. \#\#\#\# Heading4 4. &gt;&gt; quote HTML display:

1. List block can contain

   ```text
   code block
   ```

   paragraph

   > quote block

2. ```text
   code
   ```
3. **Heading4**
4. > > quote

#### 1.6.3 Maximum Digit for Ordered List is 9

_Notes:_

* To prevent buffer overflow in some browser

Markdown syntax:

```text
0. list  
123456789. continue  
1. list  
1234567890. buffer overflow
```

HTML code:

```markup
<ol start="0">
<li>list</li>
<li>continue</li>
<li>list<br />
1234567890. buffer overflow</li>
</ol>
```

Markdown display:

1. list  
2. continue  
3. list  
4. buffer overflow

HTML display:

1. list
2. continue
3. list  1234567890. buffer overflow

#### 1.6.4 Indentitation

_Notes:_

* A sublist must be indented the same number of spaces a paragraph would need to be in order to be included in the list item.
* Add some space so the next mark of the next item will be positioned under the first character of previous list item.

Markdown syntax:

```text
- foo
  - add two spaces
    - add two spaces
      - add two spaces
```

HTML code:

```markup
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

* foo
  * add two spaces
    * add two spaces
      * add two spaces

HTML display:

* foo
  * add two spaces
    * add two spaces
      * add two spaces

### 1.7. Lists

_Notes:_

* A list is a sequence of one or more list items of the same type.
* The list items may be separated by any number of blank lines.
* Two list items are of the same type if they begin with a list marker of the same type.
* Two list markers are of the same type if \(a\) they are bullet list markers using the same character \(`-`, `+`, or `*`\) or \(b\) they are ordered list numbers with the same delimiter \(either `.` or `)`\).
* A list is an ordered list if its constituent list items begin with ordered list markers, and a bullet list if its constituent list items begin with bullet list markers.
* A list is loose if any of its constituent list items are separated by blank lines \(loose list are wrapped in `<p>` tags\), or if any of its constituent list items directly contain two block-level elements with a blank line between them. Otherwise a list is tight.

#### 1.7.1 Paragraph and Starting New List

_Notes:_

* No blank line is needed to separate a paragraph from a following list
* Changing the bullet or ordered list delimiter starts a new list

Markdown syntax:

```text
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

```markup
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

I have: 1. foo 10. bar 5\) baz 11\) buzz

* ouch
* what
* where

HTML display:

I have:

1. foo
2. bar
3. baz
4. buzz

* ouch
* what
* where

 \#\#\# 1.7.2. Blank Lines and Blank HTML Comment \*Notes:\* - There can be any number of blank lines between items - To separate consecutive lists of the same type, or to separate a list from an indented code block, insert a blank HTML comment Markdown syntax: \`\`\`md - foo notcode - foo code \`\`\` HTML code: \`\`\`html

* foo

  notcode

* foo

```text
code
```

 \`\`\` Markdown display: - foo notcode - foo code HTML display:

* foo

  notcode

* foo

```text
code
```

 \#\#\# 1.7.3. Bullet \(Unordered\) Lists Markdown syntax: \`\`\`md + To start a list, there should be an empty line above + Create a list by starting a line with \`+\`, \`-\`, or \`\*\` - Changing the sign will add a linespace \(make new list\) + Add text under an item This is a text under an item. Notice that there are two spaces at the end above. - Sub-lists are made by indenting 2 spaces \(to ensure the next mark is fallen under the first character of previous list item\): \* Item 2a \* Item 2b \* Item 3 To end a list, there should be one empty line above. \`\`\` Markdown display: + To start a list, there should be an empty line above + Create a list by starting a line with \`+\`, \`-\`, or \`\*\` - Changing the sign will add a linespace \(make new list\) + Add text under an item This is a text under an item. Notice that there are two spaces at the end above. - Sub-lists are made by indenting 2 spaces \(to ensure the next mark is fallen under the first character of previous list item\): \* Item 2a \* Item 2b \* Item 3 To end a list, there should be one empty line above. \#\#\# 1.7.4. Ordered Lists \*Notes:\* - The start number of an ordered list is determined by the list number of its initial list item. The numbers of subsequent list items are disregarded. Markdown syntax: \`\`\`md 1. Notice that the sequence number is irrelevant. 1. Notice that there are two spaces at the end. To make a new text under item. 3. Sub-lists are made by indenting 4 spaces \(to ensure the next mark is fallen under the first character of previous list item\) 1. Item 3a 2. Item 3b 8. Any number for item 4 \`\`\` Markdown display: 1. Notice that the sequence number is irrelevant. 1. Notice that there are two spaces at the end. To make a new text under item. 3. Sub-lists are made by indenting 4 spaces \(to ensure the next mark is fallen under the first character of previous list item\) 1. Item 3a 2. Item 3b 8. Any number for item 4 \#\#\# 1.7.5. Ordered List Continuation Markdown syntax: \`\`\`md 57. will started with offset 57 1. so it will be 58 \`\`\` HTML code: \`\`\`html

1. will started with offset 57
2. so it will be 58

 \`\`\` Markdown display: 57. will started with offset 57 1. so it will be 58 HTML display:

1. will started with offset 57
2. so it will be 58

 \#\#\# 1.7.6. Elements in Lists \*Notes:\* - To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab Markdown syntax: \`\`\`md \* This is the first list item. &gt; A blockquote would look great below the second list item. \* Here's the second list item. I need to add another paragraph below the second list item. \* And here's the third list item. !\[Tux, the Linux mascot\]\(https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png\) \* and the last list item \`\`\` Markdown display: \* This is the first list item. &gt; A blockquote would look great below the second list item. \* Here's the second list item. I need to add another paragraph below the second list item. \* And here's the third list item. !\[Tux, the Linux mascot\]\(https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png\) \* and the last list item \*But, for text element in ordered list, add five spaces\* 1. This is the first list item. &gt; A blockquote would look great below the second list item. 2. Here's the second list item. I need to add another paragraph below the second list item. 3. And here's the third list item. !\[Tux, the Linux mascot\]\(https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png\) 4. and the last list item \*But, for code blocks in the lists, add eight spaces or two tabs.\* 1. Open the file. 2. Find the following code block on line 21:Test 3. Update the title to match the name of your website. --- \#\# 1.8. Code and Code Blocks \#\#\# 1.8.1. Inline Code \(Code Spans\) \*Notes:\* - It is inline content - It is written between two backticks \`\'\` Markdown syntax: \`\`\`md This is a \`code\`. \`\`\` HTML code: \`\`\`html

This is a `code`. \`\`\` Markdown display: This is a \`code\`. HTML display:

This is a `code`.

#### 1.8.2. Indented Code Blocks

_Notes:_

* Idented by add at least four spaces or one tab before
* A leaf block, it cannot contain other block

Markdown syntax:

```text
    <html>
      <head>
        <title>Test</title>
      </head>
```

HTML code:

```markup
<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Test&lt;/title&gt;
  &lt;/head&gt;</code></pre>
```

Markdown display:

```text
<html>
  <head>
    <title>Test</title>
  </head>
```

HTML display:

```text
<html>
  <head>
    <title>Test</title>
  </head>
```

#### 1.8.3. Fenced Code Blocks

_Notes:_

* A code fence is a sequence of at least three consecutive backtick characters \(\`\) or tildes \(~\)
* An info string can be provided after the opening code fence `lang` is optional to help to specify the language of the code.
* A leaf block, it cannot contain other block

Markdown syntax:

```text
~~~
This is a fenced code block.
~~~
```

```text
```
This is also a fenced code block.
```
```

HTML code:

```markup
<pre><code>This is a fenced code block.
</code></pre>
```

```markup
<pre><code>This is also a fenced code block.
</code></pre>
```

Markdown display:

```text
This is a fenced code block.
```

```text
This is also a fenced code block.
```

HTML display:

```text
This is a fenced code block.
```

```text
This is also a fenced code block.
```

### 1.9. Links

#### 1.9.1. Inline Links

_Notes:_

* A link contains link text \(the visible text\), a link destination \(the URI that is the link destination\), and optionally a link title.

Markdown syntax:

```text
This is [link](http://example.com/)

This is [*link with title and `code`*](http://example.com/ "title text!")

This is [http://example.com/]()
```

HTML code:

```markup
<p>This is <a href="http://example.com/">link</a></p>
<p>This is <a href="http://example.com/" title="title text!"><em>link with title and <code>code</code></em></a></p>
<p>This is <a href="">http://example.com/</a></p>
```

Markdown display:

This is [link](http://example.com/)

This is [_link with title and `code`_](http://example.com/)

This is [http://example.com/](commonmark.md)

HTML display:

This is [link](http://example.com/)

This is [_link with title and `code`_](http://example.com/)

This is [http://example.com/](commonmark.md)

#### 1.9.2. Full Reference Links

_Notes:_

* A full reference link consists of a link text immediately followed by a link label that matches a link reference definition elsewhere in the document

Markdown syntax:

```text
This is a [foo][ex]
```

HTML code:

```markup
<p>This is a <a href="http://example.com/" title="an example link">foo</a></p>
```

Markdown display:

This is a [foo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)

HTML display:

This is a [foo](http://example.com/)

#### 1.9.3. Shortcut Reference Links

_Notes:_

* A shortcut reference link consists of a link label that matches a link reference definition elsewhere in the document and is not followed by `[]` or a link label.

Markdown syntax:

```text
This is a [foo]
```

HTML code:

```markup
<p>This is a <a href="http://example.com/" title="an example link">foo</a></p>
```

Markdown display:

This is a [foo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)

HTML display:

This is a [foo](http://example.com/)

#### 1.9.4. Autolinks

* Autolinks are absolute URIs and email addresses inside `<` and `>`. They are parsed as links, with the URL or email address as the link label.
* Spaces are not allowed in autolink change it to `%20`

Markdown syntax:

```text
<http://example.com/>
```

HTML code:

```markup
<p><a href="http://example.com/">http://example.com/</a></p>
```

Markdown display:

[http://example.com/](http://example.com/)

HTML display:

[http://example.com/](http://example.com/)

### 1.10. Images

_Notes:_

* Syntax for images is like the syntax for links, with one difference. Instead of link text, we have an image description. 
* The rules for this are the same as for link text, except that \(a\) an image description starts with !\[ rather than \[, and \(b\) an image description may contain links. 
* It is not recommended to use image links in reference format. Some apps will not preview those images.

#### 1.10.1 Inline Links Format

```text
![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia Logo")

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)
```

```markup
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="Wikipedia" title="Wikipedia Logo"></p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt=""></p>
```

#### 1.10.2 Full References Format

```text
This is a ![Wikipedia][ex]
```

```markup
<p>This is a <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="Wikipedia" title="Wikipedia Logo" /></p>
```

#### 1.10.3 Shorcut References Format

```text
This is a ![foo]
```

```markup
<p>This is a <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png" alt="foo" title="Wikipedia Logo" /></p>
```

### 1.11. Escaping Characters

_Note:_

* add a backslash `\` in front of the ASCII character.
* Any ASCII punctuation character may be backslash-escaped

Markdown syntax:

```text
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

```markup
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

!\"\#$\%\&\'\(\)\*+\,  
-.\/\:\;\&lt;\=&gt;\?\@\[\\]  
\^\_\`{\|}~

\*not emphasized  
_\_  
 _not a tag  
\[not a link\]\(/foo\)  
\`not code\`  
1. not a list  
\_ not a list  
\# not a heading  
\[foo\]: /url "not a reference"  
\ö not a character entity

HTML display:

!"\#$%&'\(\)\*+,  
 -./:;&lt;=&gt;?@\[\\]  
 ^\_\`{\|}~

\*not emphasized\*  
 &lt;br/&gt; not a tag  
 \[not a link\]\(/foo\)  
 \`not code\`  
 1. not a list  
 \* not a list  
 \# not a heading  
 \[foo\]: /url "not a reference"  
 &ouml; not a character entity

### 1.12. Raw HTML and HTML Blocks

#### 1.12.1. Raw HTML

_Notes:_

* Text between `<` and `>` that looks like an HTML tag is parsed as a raw HTML tag and will be rendered in HTML without escaping.

Markdown syntax:

```text
<strong style="color:red;">bold red</strong>
<!-- This is a comment, will not shown -->
```

HTML code:

```markup
<p><strong style="color:red;">bold red</strong></p>
<!-- This is a comment, will not shown -->
```

Markdown display:

**bold red** 

HTML display:

**bold red** \#\#\# 1.12.2. HTML Blocks \*Notes:\* - An HTML block is a group of lines that is treated as raw HTML - With start and end conditions are: - start with \`\`, \`\`, or \`\` - start with \`\` - start with \`\` - start with \`\` - start wtih \`\` - start with string \`\`, or the string \`/&gt;\` - A leaf block, it cannot contain other block Markdown syntax: \`\`\`md

|  |
| :--- |


 \`\`\` HTML code: \`\`\`html

|  |
| :--- |


 \`\`\` Markdown display:

|  |
| :--- |


 HTML display:

|  |
| :--- |


 --- \#\# 1.13. Entities and Character \*Note:\* - Valid HTML entity references and numeric character references can be used in place of the corresponding Unicode character, except - Entity references consist of \`&\` + any of the valid HTML5 entity names + \`;\` - Decimal numeric character references consist of \`\`&\#\` + a string of 1–7 arabic digits + \`;\` - Hexadecimal numeric character references consist of \`\`&\#\` + either \`X\` or \`x\` + a string of 1-6 hexadecimal digits + \`;\` Markdown syntax: \`\`\`md Entity:   & © Æ Ď ¾ ℋ ⅆ ∲ ≧̸ Decimal: \# Ӓ Ϡ � Hexadecimal: " ആ ಫ \`\`\` HTML code: \`\`\`html

Entity: & © Æ Ď ¾ ℋ ⅆ ∲ ≧̸

Decimal: \# Ӓ Ϡ �

Hexadecimal: " ആ ಫ \`\`\` Markdown display: Entity:   & © Æ Ď ¾ ℋ ⅆ ∲ ≧̸ Decimal: \# Ӓ Ϡ � Hexadecimal: " ആ ಫ HTML display:

Entity: & © Æ Ď ¾ ℋ ⅆ ∲ ≧̸

Decimal: \# Ӓ Ϡ �

Hexadecimal: " ആ ಫ

### 1.14. Horizontal Rules \(Thematic Break\)

_Notes:_

* Sequence of **three or more** `-`, `_`, or `*` characters
* A leaf block, it cannot contain other block

Markdown syntax:

```text
---
___
****
```

HTML code:

```markup
<hr />
<hr />
<hr />
```

Markdown display:

HTML display:

