# Complete Markdown Cheatsheet

# 1. Basic Markdown
---
## 1.1. Heading

**Example**

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
h1 Heading
==========
h2 Heading
----------

*Note:*
- Always put a space between `#` and the heading name
- not recommended: Heading with  `===` or `---` 

---
## 1.2. Paragraphs
*Note:*
- To create paragraphs, use a blank line to separate one or more lines of text.
- Don't: ident paragraphs with spaces or tabs

**Example**

This is the first paragraph.

This is the second paragraph

---
## 1.3 Line Break
*Note:*
- To create a line break, end a line with two or more spaces, and then type return
- *Or*, the `<br>` HTML tag

**Example**

This is the first line.  
And this is the second line.

*or*

First line with the HTML tag after.<br>
And the next line.

---
## 1.4. Emphasis

**Example**

**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
We have **bold***italic*
This text is ***really important***.
This text is ___really important___.
This text is __*really important*__.
This text is **_really important_**.

---
## 1.5. Blockquotes
*Note:*
- Blockquotes can be nested
- Blockquotes can contain multiple paragraphs. Add a >  between the paragraphs.
- Blockquotes can contain other Markdown formatted elements. But not all elements can be used.

**Example**

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

*Or*

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

*Or*

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---
## 1.6. Lists
### 1.6.1. Unordered

**Example**

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### 1.6.2. Ordered

**Example**

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

*Or*

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
8. or any  number 

*But, if you want start numbering with offset:*

57. foo
1. bar

---

## 1.7. Elements in Lists
*Note:*
- To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab

**Example**

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

*Or*

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

*Or, for image in the list*

1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
	
3.  Close the file.


*But, for text element in ordered list, add five spaces*

1.   This is the first list item.
2.   Here's the second list item.

     I need to add another paragraph below the second list item.

3.   And here's the third list item.

*But, for quote in ordered list, add five spaces*

1. This is the first list item.
3.   Here's the second list item.

     > A blockquote would look great below the second list item.

5.   And here's the third list item.

*But, for code blocks in the lists, add eight spaces or two tabs.*

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.


---
## 1.8. Code

**Example**

This isi inline `code`

*Or for indented code, add four spaces or one tab*

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
	
*or like this*

    <html>
      <head>
        <title>Test</title>
      </head>

---
## 1.9. Links

**Example**

This is [link](http://example.com/)
This is [link with title](http://example.com/ "title text!")

*Or, directly put the link*

http://example.com/
fake@example.com

*Or with `<>`*

<https://www.markdownguide.org>
<fake@example.com>

*But, to prevent automated linking*

 `http://www.example.com`

*Or add emphasize*

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

## 1.11. Reference-style Links

**Example: The First Part**

I know [Indonesia][1]
I also know [etymology of Indonesia] [2]
I knew [History of Indonesia][3]

**Example: The Second Part**

[1]: <https://en.wikipedia.org/wiki/Indonesia>
[2]: https://en.wikipedia.org/wiki/Indonesia#Etymology "Etymology of Indonesia"
[3]: https://en.wikipedia.org/wiki/Indonesia#History 'History of Indonesia'

*Or, put reference in text*

It was a [hobbit-hole][hh], and that means comfort.

[hh]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

*But, be careful with spaces in the links, put `%20` as space*

[example %20 link](https://www.example.com/my%20great%20page) 
[example without %20](https://www.example.com/my great page) 

---
## 1.10. Images

**Example**

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

*Or, use footnote style*

![Alt text][id1]
![Borobudur][id2]

[id1]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
[id2]: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Borobudur_ship.JPG/220px-Borobudur_ship.JPG

---
## 1.11. Escaping Characters
*Note:*
- add a backslash `\` in front of the character.

**Example**

\* star
\\ backslash itself
\` backtick
\{ \} curly braces
\! exclamation mark

---
## 1.12. HTML Code

**Example**

This **word** is bold. This <em>word</em> is italic.

---

## 1.13. Horizontal Rules

**Example**

___

---

***

# 2. Extended Markdown
---

## 2.1. Heading ID
### My Great Heading {#heading-ids}

In HTML:
<h3 id="custom-id">My Great Heading</h3>

Link to [Heading IDs](#heading-ids) or
[Heading IDs](https://www.markdownguide.org/extended-syntax#heading-ids)

----
## 2.2. Code Fencing and Highlighting
**Example, block code "fences", without idented**
```
Sample text here...
```

*Or*
~~~
Sample text here...
~~~

**Or with syntax highlighting**

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
def function():
    #indenting works just fine in the fenced code block
    s = "Python syntax highlighting"
    print s
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```
No language indicated, so no syntax highlighting.
s = "There is no highlighting for this."
But let's throw in a <b>tag</b>.
```

---
## 2.3. Tables
**Example**

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

*Or use [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)*

*Or add alignment with a colon (:)*

| Syntax      | Description | Test Text is long    |
| :---        |    :----:   |          ---: |
| Header from      | Title       | Here's this  is |
| Paragraph   | Text        | And more   |

 *Or add formatting text, links, code and HTML character code, but not: heading, headings, blockquotes, lists, horizontal rules, images, HTML tags, or fenced code*

| Syntax      | Description | Test Text is long    |
| :---        |    :----:   |          ---: |
| [Example](https://www.example.com/)      | **Title**       | `Here's this  is` |
| Paragraph   | Text        | And more   |

---
## 2.4. Footnote
**Example: The First Part**
Here's a simple footnote,[^1] and here's a longer one,[^bignote], and [^withcode]

**Example: The Second Part**
[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs.
For example like this
[^withcode]: `code` or code in paragrahps
`code and codes`

*Or add inline footnote*
Another example of footnote 1 link[^first] and footnote 2 link[^second].
Or to add inline footnote^[Text of inline footnote] definition.

*Or duplictade reference*
This duplicated footnote reference[^second].

[^first]: Footnote **can have markup**
and multiple paragraphs.
[^second]: Another footnote text.

---
## 2.4. Strikethrough, Highlighting, Underline

**Example of strikethrough**
~~strikethrough~~
In HTML: <s>strikethrough</s>

**Example of mark/highlighting**
==marked text==
in HTML: <mark>marked text</mark>

**Example of underline**
_underline_
in HTML: <u>underline</u>

---
## 2.5. Task Lists
**Example**
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---
## 2.6. Definition Lists
**Example**

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

In HTML:
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

*Or *

Term 1
:   Definition 1
with lazy continuation.

Term 2 with *inline markup*
:   Definition 2
        { some code, part of Definition 2 }

    Third paragraph of definition 2.

*Or in compact style:*

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

---
## 2.7. Emojies

**Emoji can be copy pasted**

Gone camping! ⛺ Be back soon.
That is so funny! 😂

*Or, use markdown*

Gone camping! :tent: Be back soon.
That is so funny! :joy:
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

---
## 2.9. Typographic replacements

**Example**

(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,,  -- ---
"Smartypants, double quotes" and 'single quotes'

---
## 2.10. Superscript and Subscript
**Example Superscript**
x^2^
In HTML: x<sup>2</sup>

**Example Subscript** 
H~2~O
In HTML: H<sub>2</sub>O

---
## 2.11. Inserted Text

**Example**
++Inserted text++
In HTML: <ins>This text has been inserted</ins>

---
## 2.12. Abbreviations
**Example**

The "HTML" specification is maintained by the "W3C".
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

In HTML:
The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

---
## 2.13. HTML Entities and Character Codes

**Example**

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 
&#124;

*Or*

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

*Or*

18&ordm;C  &quot;  &apos;

---
## 2.14. Latex
*Note:*
- Sometimes with `\(` and `\)` brackets

**Example**

$E=mc^2$

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

*Or, inline*

The Gamma function satisfying  $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

---
## 2.15. Mentions, Tag, Font Awesome
*Note:*
- with `fa-something`:

**Example**

This is @mentions
This is #tags 
This is  <del>tags</del>
This is font awesome :fa-star: 

---
## 2.16. Chart and Diagram

**Example Flow Chart**

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

**Example Sequence Diagram**

```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

**Example Mermaid**

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```
---

## 2.17. Table of Content Generation

**Example**

[TOC]

*Or*

[[TOC]]

*Or* 

[[_TOC_]]

---
## 2.18. Admonition

**Example**

!!! note

    This is the **note** admonition body

    !!! danger Danger Title
        This is the **danger** admonition body
		
--- 

## 2.19. Attributes

**Example**

item **bold red**{style="color:red"}
in HTML: item <strong style="color:red;">bold red</strong>

---
## 2.13. Custom containers

**Example**

::: warning
*here be dragons*
:::

in  HTML
<div class="warning">
<p><em>here be dragons</em></p>
</div>

---