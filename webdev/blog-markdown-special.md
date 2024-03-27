---
aliases: [Special Markdown Case]
title: Special Markdown Case
tags: ["markdown"]
date: 2020-11-26 21:10:40
draft: false
---

## Special Markdown Case

Common markdown format for Gitbook, gatsby-starter-bee, and VNote.

### 6. Lists

#### 6.3. Offset in Oredered List

- didn't work in Gitbook

***markdown***

```md
57. will started with offset 57
1. so it will be 58
2. this is 59
```

***display***

1. will started with offset 57
2. so it will be 58
3. this is 59

### 9. Links

#### 9.1. Email Linkify

- didn't work in Gatsby and Gitbook

***markdown***

```md
fake@example.com didn't work in Gatsby and Gitbook  
<fake@example.com> is okay  
```

**display**

fake@example.com didn't work in Gatsby and Gitbook  
<fake@example.com> is okay  

### 10. Reference-style Links

***markdown***

```
I know [Indonesia][1]  
I also know [etymology of Indonesia][2]  
I knew [History of Indonesia][3]  
It doesn't have [hobbit-hole][hh].

[1]: <https://en.wikipedia.org/wiki/Indonesia>
[2]: https://en.wikipedia.org/wiki/Indonesia#Etymology "Etymology of Indonesia"
[3]: https://en.wikipedia.org/wiki/Indonesia#History 'History of Indonesia'
[hh]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
```

***display***

I know [Indonesia][1]  
I also know [etymology of Indonesia][2]  
I knew [History of Indonesia][3]  
It doesn't have [hobbit-hole][hh].

[1]: <https://en.wikipedia.org/wiki/Indonesia>
[2]: <https://en.wikipedia.org/wiki/Indonesia#Etymology> "Etymology of Indonesia"
[3]: <https://en.wikipedia.org/wiki/Indonesia#History> 'History of Indonesia'
[hh]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

### 11. Images

***markdown***

```md
![Wikipedia with Optional Text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text")  
![Wikipedia with Alt Text, reference style][id1]  

[id1]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text"
```

***display***

![Wikipedia with Optional Text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text")  
![Wikipedia with Alt Text, reference style][id1]  

[id1]: <https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png> "Optional Text"

### 13. HTML Code

- very restricted in Gitbook

#### 13.1. HTML: Bold, Italic, Strikethrough

***markdown***

```md
This <em>word</em> is italic.  
This <strong>word</strong> is bold.  
This <del>word</del> is deleted with strikethorouugh.
```

***display***

This <em>word</em> is italic.  
This <strong>word</strong> is bold.  
This <del>word</del> is deleted with strikethorouugh.

### 14. Horizontal Rules

- didn't work in Gitbook

***markdown***

```md
___

---

***

but only didn't work for Gitbook
```

***display***

___

---

***

### 15. Heading ID

- didn't work for Gatsby

***markdown***

```md
### My Great Heading {#heading-ids}

Link to [Heading IDs](#heading-ids)
```

***display***

#### My Great Heading {#heading-ids}

Link to [Heading IDs](#heading-ids)

### 16. Code Fencing and Highlighting

***markdown***

    ```
    This is a fenced code block.
    ```
    ~~~
    No language indicated, so no syntax highlighting.
    s = "There is no highlighting for this."
    ~~~

    ```python
    def function():
        #indenting works just fine in the fenced code block
        s = "Python syntax highlighting"
        print s
    ```

    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("ruby syntax highlighting")
    puts markdown.to_html
    ```

***display***

```
This is a fenced code block.
```

~~~
No language indicated, so no syntax highlighting.
s = "There is no highlighting for this."
~~~

```python
def function():
    #indenting works just fine in the fenced code block
    s = "Python syntax highlighting"
    print s
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("ruby syntax highlighting")
puts markdown.to_html
```

### 18. Text Formatting

#### 18.1. Strikethrough

***markdown***

```md
~~strikethrough~~  
```

***display***

~~strikethrough~~  

#### 18.2. Highlighting and Underline

- didn't work in Gitbook and Gatsby

```md
==highlight, fail in Gitbook and Gatsby==  
_underline, fail in Gitbook and Gatsby_  
```

***display***

==highlight, fail in Gitbook and Gatsby==  
*underline, fail in Gitbook and Gatsby*  

### 20. Emojies

#### 20.2. Shortcode Emoji

- didn't work in Gitbook
- in Gatsby and VNote, use Github Emoji Shortcode

***markdown***

```md
Shortcode emoji examples :grinning: :smiley: :smile: :grin: :laughing: :joy:
```

***display***

Shortcode emoji examples :grinning: :smiley: :smile: :grin: :laughing: :joy:

### 21. Typographic Replacements, Superscript, Subscript

- dind't work in Gatsby and Gitbook

***markdown***

```md
autoreplacement of (c) (C) (r) (R) (tm) (TM) (p) (P) +-  
superscript x^2^ and subscript H~2~O
```

***display***

autoreplacement of (c) (C) (r) (R) (tm) (TM) (p) (P) +-  
superscript x^2^ and subscript H~2~O

### 22. HTML Entities and Character Codes

***markdown***

```md
&copy; &  &uml; &trade; &iexcl; &pound;  
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;  
x&sup2; y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo; &#124;  
18&ordm;C  &quot;  &apos;
```

**display**

&copy; & &uml; &trade; &iexcl; &pound;  
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;  
x&sup2; y&sup3; &frac34; &frac14; &times; &divide; &raquo; &#124;  
18&ordm;C &quot; &apos;

### 23. Latex

#### 23.1. Inline Equation

- Equation with one dollar sign `$` works inline in VNote
- Equation with two dollar signs `$$` works inline in Jekyll and Gitbook, but not in VNote

***markdown***

```
Inline equation with one dollar sign: $E=mc^2$ (worked in VNote and Gatsby).  
Inline equation with two dollar sign: $$E=mc^2$$ (worked in Gatsby, Jekyll and Gitbook).
```

***display***

Inline equation with one dollar sign: $E=mc^2$ (worked in VNote and Gatsby).  
Inline equation with two dollar sign: $$E=mc^2$$ (worked in Gatsby, Jekyll and Gitbook).

#### 23.2. Newline Equation

***markdown***

```
Newline equation with two dollar signs.

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$
```

***display***

Newline equation with two dollar signs.

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

### 24. Specific HTML Code

- didn't work in Gitbook

#### 24.1. Drop Down List

***markdown***

```html
<details>
  <summary>Click this List ▶</summary>
  <p>
    <ul>
      <li>irosyadi: https://irosyadi.netlify.app</li>
      <li>irosyadi: https://irosyadi.gitbook.io</li>
      <li>irosyadi: https://irosyadi.github.io</li>
    </ul>
  </p>
</details>
```

***display***

<details>
  <summary>Click this List ▶</summary>
  <p>
    <ul>
      <li>irosyadi: <https://irosyadi.netlify.app</li>
      <li>irosyadi: <https://irosyadi.gitbook.io</li>
      <li>irosyadi: <https://irosyadi.github.io</li>
    </ul>
  </p>
</details>

#### 24.2. Summary

***markdown***

```html
<details>
  <summary>Clik this Term ▶</summary>
  <p>Term is explanation of something</p>
</details>
```

***display***

<details>
  <summary>Clik this Term ▶</summary>
  <p>Term is explanation of something</p>
</details>

#### 24.3. Definition

***markdown***

```html
<dl>
<dt>First Term</dt>
<dd>This is the definition of the first term.</dd>
<dt>Second Term</dt>
<dd>This is one definition of the second term. </dd>
<dd>This is another definition of the second term.</dd>
</dl>
```

***display***

<dl>
<dt>First Term</dt>
<dd>This is the definition of the first term.</dd>
<dt>Second Term</dt>
<dd>This is one definition of the second term. </dd>
<dd>This is another definition of the second term.</dd>
</dl>

#### 24.4. Abbreviation

***markdown***

```html
The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
```

***display***

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 26. Admonition Styles

#### 26.1. Admonition with CSS

- CSS delivered from: <https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/alert.css>
- didn't work in Gitbook

***markdown***

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/alert.min.css">

<div class="alert alert-success"><strong>🎯 SUCCESS!</strong> <br> Success text. </div>  
<div class="alert alert-info"><strong>📌 INFO</strong> <br> Info text. </div>  
<div class="alert alert-warning"><strong>⚠️ WARNING!</strong> <br> Warning text. </div>  
<div class="alert alert-danger"><strong>⛔ DANGER!</strong> <br> Success text. </div>  
```

***display***

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/alert.min.css">

<div class="alert alert-success"><strong>🎯 SUCCESS!</strong> <br> Success text. </div>  
<div class="alert alert-info"><strong>📌 INFO</strong> <br> Info text. </div>  
<div class="alert alert-warning"><strong>⚠️ WARNING!</strong> <br> Warning text. </div>  
<div class="alert alert-danger"><strong>⛔ DANGER!</strong> <br> Success text. </div>  

### 27. Footnote

- didn't work in Gitbook

***markdown***

```md
Here's a simple footnote,[^1] and here's a longer one,[^bignote], and [^withcode].  

[^1]: This is the first footnote, in Gitbook, there is no new line between.  
[^bignote]: Here's another one.  
[^withcode]: `code` or code in paragraphs  
```

***display***

Here's a simple footnote,[^1] and here's a longer one,[^bignote], and [^withcode]. But there is problem with Gitbook for footnote.

[^1]: This is the first footnote, in Gitbook, there some problems.  

[^bignote]: Here's another one.  

[^withcode]: `code` or code in paragraphs  
