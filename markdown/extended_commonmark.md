# Extended for Commonmark

## Markdown-it Extension

## Newline as hardbreak <br>

## Linkify

Direct Link is not common mark

http://example.com/
fake@example.com

## 2.12. Abbreviations

Support: PHP Markdown Extra 1.9.0, Markdown-it

Markdown Syntax:
``
The "HTML" specification is maintained by the "W3C".
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
``

HTML Syntax:
``
The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
``

Markdown Display:

The "HTML" specification is maintained by the "W3C".
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

HTML Display:

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.


---

## 2.3. Tables

Support: kramdown

*Notes:*
- we can set alignment in table with a colon (`:`)
- we can add formatting text, links, code and HTML character code, but not: heading, headings, blockquotes, lists, horizontal rules, images, HTML tags, or fenced code

Support: PHP Markdown Extra, GFM, Maruku, MultiMarkdown, kramdown, Parsedown 
markdown-it (plugin), showdown, marked  

***Syntaxes***

```md
| Syntax      | Description | Test Text is long    |
| :---        |    :----:   |          ---: |
| [Example](https://www.example.com/)      | **Title**       | `Here's this  is` |
| Paragraph   | Text        | And more   |
```

HTML:
```
<table>
<thead>
<tr>
  <th align="left">Syntax</th>
  <th align="center">Description</th>
  <th align="right">Test Text is long</th>
</tr>
</thead>
<tbody>
<tr>
  <td align="left"><a href="https://www.example.com/">Example</a></td>
  <td align="center"><strong>Title</strong></td>
  <td align="right"><code>Here's this  is</code></td>
</tr>
<tr>
  <td align="left">Paragraph</td>
  <td align="center">Text</td>
  <td align="right">And more</td>
</tr>
</tbody>
</table>
```

***Showcases***

| Syntax      | Description | Test Text is long    |
| :---        |    :----:   |          ---: |
| [Example](https://www.example.com/)      | **Title**       | `Here's this  is` |
| Paragraph   | Text        | And more   |

HTML

<table>
<thead>
<tr>
  <th align="left">Syntax</th>
  <th align="center">Description</th>
  <th align="right">Test Text is long</th>
</tr>
</thead>
<tbody>
<tr>
  <td align="left"><a href="https://www.example.com/">Example</a></td>
  <td align="center"><strong>Title</strong></td>
  <td align="right"><code>Here's this  is</code></td>
</tr>
<tr>
  <td align="left">Paragraph</td>
  <td align="center">Text</td>
  <td align="right">And more</td>
</tr>
</tbody>
</table>


---

## 2.4. Footnote

### 2.4.1. Outline Footnote

Support: PHP Markdown Extra, Maruku , MultiMarkdown, Markdown-it

Markdown Syntax:
```
Here's a simple footnote[^1] and here's a longer one[^bignote], and [^withcode]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs.
For example like this
[^withcode]: `code` or code in paragrahps
`code and codes`
```

HTML Syntax:
```
<p>Here’s a simple footnote<sup id="fnref:1"><a href="#fn:1" rel="footnote">1</a></sup> and here’s a longer one<sup id="fnref:2"><a href="#fn:2" rel="footnote">2</a></sup>, and <sup id="fnref:3"><a href="#fn:3" rel="footnote">3</a></sup></p>
<div class="footnotes"><hr /><ol><li id="fn:1">
<p>This is the first footnote. <a href="#fnref:1" rev="footnote">↩</a></p>
</li><li id="fn:2">
<p>Here’s one with multiple paragraphs. For example like this <a href="#fnref:2" rev="footnote">↩</a></p>
</li><li id="fn:3">
<p><code>code</code> or code in paragrahps <code>code and codes</code> <a href="#fnref:3" rev="footnote">↩</a></p>
</li></ol></div>
```

Markdown Display:

Here's a simple footnote[^1] and here's a longer one[^bignote], and [^withcode]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs.
For example like this
[^withcode]: `code` or code in paragrahps
`code and codes`

HTML Display:

<p>Here’s a simple footnote<sup id="fnref:1"><a href="#fn:1" rel="footnote">1</a></sup> and here’s a longer one<sup id="fnref:2"><a href="#fn:2" rel="footnote">2</a></sup>, and <sup id="fnref:3"><a href="#fn:3" rel="footnote">3</a></sup></p>
<div class="footnotes"><hr /><ol><li id="fn:1">
<p>This is the first footnote. <a href="#fnref:1" rev="footnote">↩</a></p>
</li><li id="fn:2">
<p>Here’s one with multiple paragraphs. For example like this <a href="#fnref:2" rev="footnote">↩</a></p>
</li><li id="fn:3">
<p><code>code</code> or code in paragrahps <code>code and codes</code> <a href="#fnref:3" rev="footnote">↩</a></p>
</li></ol></div>


### 2.4.2. Inline Footnote #1
Support: MultiMarkdown, 

Markdown Syntax:
```md
Another example of footnote 1 link[^first] and footnote 2 link[^second].
```

HTML Syntax:
```html
<p>Another example of footnote 1 link<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote"><sup>1</sup></a> and footnote 2 link<a href="#fn:2" id="fnref:2" title="see footnote" class="footnote"><sup>2</sup></a>.</p>

<div class="footnotes">
<hr />
<ol>

<li id="fn:1">
<p>first <a href="#fnref:1" title="return to body" class="reversefootnote">&#160;&#8617;</a></p>
</li>

<li id="fn:2">
<p>second <a href="#fnref:2" title="return to body" class="reversefootnote">&#160;&#8617;</a></p>
</li>

</ol>
</div>
```

Markdown Display:

Another example of footnote 1 link[^first] and footnote 2 link[^second].

HTML Display:

<p>Another example of footnote 1 link<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote"><sup>1</sup></a> and footnote 2 link<a href="#fn:2" id="fnref:2" title="see footnote" class="footnote"><sup>2</sup></a>.</p>

<div class="footnotes">
<hr />
<ol>

<li id="fn:1">
<p>first <a href="#fnref:1" title="return to body" class="reversefootnote">&#160;&#8617;</a></p>
</li>

<li id="fn:2">
<p>second <a href="#fnref:2" title="return to body" class="reversefootnote">&#160;&#8617;</a></p>
</li>

</ol>
</div>

### 2.4.2. Inline Footnote #2

Support: Markdown-it

Markdown Syntax:
```
Or to add inline footnote^[Text of inline footnote] definition.
```

HTML Syntax:
```
<p>Or to add inline footnote<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> definition.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Text of inline footnote <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
```

Markdown Display:

Or to add inline footnote^[Text of inline footnote] definition.

HTML Display:

<p>Or to add inline footnote<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> definition.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Text of inline footnote <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>

### 2.4.4. Duplicate Reference

Support: PHP Markdown Extra, kramdown , MultiMarkdown, Markdown-it

Markdown Syntax:
```md
This is a duplicated footnote[^b].
This duplicated footnote reference[^b].

[^b]: Another footnote text.
```

HTML Syntax Kramdown Style:

```html
<p>This is a duplicated footnote<sup id="fnref:b"><a href="#fn:b" class="footnote">1</a></sup>.
This duplicated footnote reference<sup id="fnref:b:1"><a href="#fn:b" class="footnote">1</a></sup>.</p>

<div class="footnotes">
  <ol>
    <li id="fn:b">
      <p>Another footnote text. <a href="#fnref:b" class="reversefootnote">&#8617;</a> <a href="#fnref:b:1" class="reversefootnote">&#8617;<sup>2</sup></a></p>
    </li>
  </ol>
</div>
```

HTML Syntax Markdown-it:
```
<p>This is a duplicated footnote<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.
This duplicated footnote reference<sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[1:1]</a></sup>.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Another footnote text. <a href="#fnref1" class="footnote-backref">↩︎</a> <a href="#fnref1:1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
```

Markdown Display:

This is a duplicated footnote[^b].
This duplicated footnote reference[^b].

[^b]: Another footnote text.

HTML Display Style Kramdown:

<p>This is a duplicated footnote<sup id="fnref:b"><a href="#fn:b" class="footnote">1</a></sup>.
This duplicated footnote reference<sup id="fnref:b:1"><a href="#fn:b" class="footnote">1</a></sup>.</p>

<div class="footnotes">
  <ol>
    <li id="fn:b">
      <p>Another footnote text. <a href="#fnref:b" class="reversefootnote">&#8617;</a> <a href="#fnref:b:1" class="reversefootnote">&#8617;<sup>2</sup></a></p>
    </li>
  </ol>
</div>

HTML Display Style Markdown-it:

<p>This is a duplicated footnote<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.
This duplicated footnote reference<sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[1:1]</a></sup>.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Another footnote text. <a href="#fnref1" class="footnote-backref">↩︎</a> <a href="#fnref1:1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>


---

## 2.4. Strikethrough, Highlighting, Underline

### 2.4.1 Strikethrough

Support: marked, RDiscount, Fatdown, Parsedown, GFM, showdown, markdown-it
Markdown Syntax
```
~~strikethrough~~
```

HTML Syntax:
```html
<p><s>strikethrough</s></p>
<p><del>strikethrough</del></p>
```

Markdown Display:

~~strikethrough~~

HTML Display: 

<s>strikethrough</s>
<p><del>strikethrough</del></p>

### 2.4.2 Mark (Highlighting)

Support: markdown-it
Markdown Syntax:
```md
==marked text==
```

HTML Syntax:
```html
<p><mark>marked text</mark></p>
```

Markdown Display:

==marked text==

HTML Display: 

<p><mark>marked text</mark></p>

### 2.4.3 Underline

Support: - (no markdown)

Markdown Syntax
```md
++underline++
```

HTML Syntax
```
<u>underline</u>
<ins>underline</ins>
```

Markdown Display:

++underline++

HTML Display: 

<u>underline</u>
<ins>underline</ins>

---

## 2.5. Task Lists
Support: marked, showdown, markdown-it

Markdown Syntax:
```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

HTML Display Style 1:
```
<ul>
<li><input checked="" disabled="" type="checkbox"> Write the press release</li>
<li><input disabled="" type="checkbox"> Update the website</li>
<li><input disabled="" type="checkbox"> Contact the media</li>
</ul>
```
HTML Display Style 1:
```
<ul>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;" checked> Write the press release</li>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"> Update the website</li>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"> Contact the media</li>
</ul>
```

Markdown Display:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

HTML Display Style 1

<ul>
<li><input checked="" disabled="" type="checkbox"> Write the press release</li>
<li><input disabled="" type="checkbox"> Update the website</li>
<li><input disabled="" type="checkbox"> Contact the media</li>
</ul>

HTML Display Style 2
<ul>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;" checked> Write the press release</li>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"> Update the website</li>
<li class="task-list-item" style="list-style-type: none;"><input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"> Contact the media</li>
</ul>

---

## 2.6. Definition Lists

Support: karmdown, banyak

Markdown Syntax:
```
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

HTML Syntax:
```
<dl>
<dt>First Term</dt>
<dd>This is the definition of the first term.</dd>
<dt>Second Term</dt>
<dd>This is one definition of the second term. </dd>
<dd>This is another definition of the second term.</dd>
</dl>
```


Markdown Display:

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

HTML Display:
<dl>
<dt>First Term</dt>
<dd>This is the definition of the first term.</dd>
<dt>Second Term</dt>
<dd>This is one definition of the second term. </dd>
<dd>This is another definition of the second term.</dd>
</dl>

---

## 2.7. Emojies
### 2.7.1 Copy Paste of Emoji

Markdown Syntax
```
Gone camping! ⛺ Be back soon.
That is so funny! 😂
```

HTML Syntax
```html
<p>Gone camping! ⛺ Be back soon.
That is so funny! 😂</p>
```

Markdown Display

Gone camping! ⛺ Be back soon.
That is so funny! 😂

HTML Display
<p>Gone camping! ⛺ Be back soon.
That is so funny! 😂</p>


### 2.7.2 Markdown of Emoji

Support: markdown-it

Markdown Syntax:
```md
Gone camping! :tent: Be back soon.
That is so funny! :joy:
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)
```

HTML Syntax:
```
<p>Gone camping! ⛺️ Be back soon.
That is so funny! 😂</p>
<blockquote>
<p>Classic markup: 😉 :crush: 😢 :tear: 😆 😋</p>
<p>Shortcuts (emoticons): 😃 😦 😎 😉</p>
</blockquote>
```



Markdown Display

Gone camping! :tent: Be back soon.
That is so funny! :joy:
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

HTML Display
<p>Gone camping! ⛺️ Be back soon.
That is so funny! 😂</p>
<blockquote>
<p>Classic markup: 😉 :crush: 😢 :tear: 😆 😋</p>
<p>Shortcuts (emoticons): 😃 😦 😎 😉</p>
</blockquote>

---
## 2.9. Typographic replacements

Support: markdown-it, Fatdown

Markdown Syntax
```md
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,,  -- ---
"Smartypants, double quotes" and 'single quotes'
```

HTML Syntax:  
```html
<p>© © ® ® ™ ™ § § ±</p>
<p>test… test… test… test?.. test!..</p>
<p>!!! ??? ,  – —</p>
<p>“Double quotes” and ‘single quotes’</p>
```


Markdown Display
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,,  -- ---
"Smartypants, double quotes" and 'single quotes'

HTML Display
<p>© © ® ® ™ ™ § § ±</p>
<p>test… test… test… test?.. test!..</p>
<p>!!! ??? ,  – —</p>
<p>“Double quotes” and ‘single quotes’</p>

---


## 2.10. Superscript and Subscript
### 2.10.1 Superscript

Support; MultiMarkdown, Fatdown, Markdown-it

Markdown
x^2^

HTML:
<p>x<sup>2</sup></p>

**Example Subscript** 
Markdwon
H~2~O

In HTML: 
<p>H<sub>2</sub>O</p>

---



## 2.14. Math (Latex)

Support: Maruku (math)


Inline Einstein Equations $E=mc^2$ and Gamma Function  $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$

Outline equations

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$


---

## 2.15 Linkify
Support: Markdown-t, marked,Parsedown , GFM, Fatdown, showdown

**Markdown;

http://example.com/

fake@example.com

HTML:
<p><a href="http://example.com/">http://example.com/</a></p>
<p><a href="mailto:fake@example.com">fake@example.com</a></p>


## Image with specific size

Support: Markdown-it,  Maruku MultiMarkdown 

![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)

![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia logo with specific size" =60x60)

## 2.2. Code Fencing and Highlighting
*Notes:*
- We can make block code fences without need to be idented
- `lang` is optional to specify the language of the code; if not specified, the app won't highlight the code;
- We need one empty line before

***Syntaxes***

```
    ```
    This is a fenced code block.
    ```
```

***Syntaxes***

```
    ~~~
    This is another fenced code block.
    ~~~
```

***Showcases***

```
This is a fenced code block.
```

~~~
No language indicated, so no syntax highlighting.
s = "There is no highlighting for this."
But let's throw in a <b>tag</b>.
~~~

### Code Highlighting

~~~
No language indicated, so no syntax highlighting.
s = "There is no highlighting for this."
But let's throw in a <b>tag</b>.
~~~


***Showcases*** (`javascript`)

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

***Showcases*** (`python`)

```python
def function():
    #indenting works just fine in the fenced code block
    s = "Python syntax highlighting"
    print s
```

***Showcases*** (`ruby`)

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

## 2.1. Attributes
### 2.1.1 Heading Attributes
Support: Markdown Extra , Maruku, kramdown Pandoc

Markdown:
```md
### My Great Heading {#heading-ids}
```

Markdown
### My Great Heading {#heading-ids}

In HTML:
<h3 id="heading-ids">My Great Heading</h3>

Link to [Heading IDs](#heading-ids) 

---

### 2.1.2 Block Attributes


Support: kramdown, Markdown Extra

```md
> A nice blockquote
{: #with-an-id}
```
```
<blockquote id="with-an-id">
  <p>A nice blockquote</p>
</blockquote>
```

Markdown:
> A nice blockquote
{: #with-an-id}

HTML:
<blockquote id="with-an-id">
  <p>A nice blockquote</p>
</blockquote>

### 2.1.2  Inline Attributes

```md
This is *red*{: style="color: red"}.
```

```html
<p>This is <em style="color: red">red</em>.</p>
```


### Ignoring Text
```md
This is a paragraph
{::comment}
This is a comment which is
completely ignored.
{:/comment}
... paragraph continues here.

Extensions can also be used
inline {::nomarkdown}**see**{:/}!
```

```html
<p>This is a paragraph
<!-- 
This is a comment which is
completely ignored.
 -->
… paragraph continues here.</p>

<p>Extensions can also be used
inline **see**!</p>
```

## Implicit Header REferences
Support : Pandoc

So, to link to a heading

`# Heading identifiers in HTML`

you can simply write

`[Heading identifiers in HTML]`

or

`[Heading identifiers in HTML][]`

## Line Blocks
Support: pandocs

```
| The limerick packs laughs anatomical
| In space that is quite economical.
|    But the good ones I've seen
|    So seldom are clean
| And the clean ones so seldom are comical
```


|                  | Kramdown | Markdown Extra | Pandoc |
| ---------------- | -------- | -------------- | ------ |
| Definition Lists | ✅       | ✅             | ✅     |
| Table            | ✅       | ✅             |        |
| Attributes       | ✅       | ✅             | ✅     |
| Footnote         | ✅       | ✅             |        |
| Abbreviation     | ✅       | ✅             |        |
| Code Fencing     |          | ✅             | ✅     |
| Task Lists       |          |                | ✅     |
| Image Dimension  |          |                |        |
| Mention          |          |                |        |
| Strikethrough    |          |                |        |
| Emoji            |          |                |        |


## Image Sizing
- Specifying size of image is supported only in some extended markdown (such as *markdown-it*).

***Syntaxes***

```md
![Image Alt Text](/url/to/image.png "Optional Text")
![Image Alt Text](/url/to/image.png "Image specified with width and height" =800x600)
![Image Alt Text](/url/to/image.png =800x600)
![Image Alt Text](/url/to/image.png "Image specified with width" =800x)
![Image Alt Text](/url/to/image.png "Image specified with height" =x600)
```

***Showcases***

![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png)
![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Wikipedia logo with specific size" =60x60)


## 2.19. Attributes

Support:

Markdown
item **bold red**{style="color:red"}
HTML: 
<p>in HTML: item <strong style="color:red;">bold red</strong></p>

---