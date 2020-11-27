---
layout: default
author: irosyadi
title:  Markdown for This Blog
date: 2020-11-26 21:10:40
path: /development
category: development
tags: markdown cheatsheet
draft: false
---

# Markdown for This Blog

Common markdown format for Gitbook, gatsby-starter-bee, and VNote.

## 1. h2 Heading

***markdown***

```md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

***display***

### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## 2. Paragraphs

***markdown***

```md
This is the first paragraph.

This is the second paragraph
```

***display***

This is the first paragraph.

This is the second paragraph

## 3 Line Break

***markdown***

```md
This is the first line.  
And this is the second line.<br>
And finally this is the last line.
```

***display***

This is the first line.  
And this is the second line.<br>
And finally this is the last line.

## 4. Emphasis

***markdown***

```md
**This is bold text**  
__This is bold text__  
*This is italic text*  
_This is italic text_  
This text is ___really important___  
This is **bold***italic* text  
```

***display***

**This is bold text**  
__This is bold text__  
*This is italic text*  
_This is italic text_  
This text is ___really important___  
This is **bold***italic* text  

## 5. Blockquotes

***markdown***

```md
> This is the first line of paragraph, followed by blank line
> 
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
>
> ### with a heading
> 
> - and list
> - list
> - with **bold** and *italic* text
```

***display***

> This is the first line of paragraph, followed by blank line
> 
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
>
> ### with a heading
> 
> - and list
> - list
> - with **bold** and *italic* text

## 6. Lists
### 6.1. Unordered

***markdown***

```md

+ To start a list, there should be an empty line above
+ Create a list by starting a line with `+`, `-`, or `*`
- Changing the sign will add a linespace
+ Add text under an item  
This is a text under an item. Notice that there are two spaces at the end above.
- Sub-lists are made by indenting 2 spaces:
  * Item 2a
  * Item 2b
* Item 3

To end a list, there should be one empty line above.  
```

***display***

+ To start a list, there should be an empty line above
+ Create a list by starting a line with `+`, `-`, or `*`
- Changing the sign will add a linespace
+ Add text under an item  
This is a text under an item. Notice that there are two spaces at the end above.
- Sub-lists are made by indenting 2 spaces:
  * Item 2a
  * Item 2b
* Item 3

To end a list, there should be one empty line above.  

### 6.2. Ordered

***markdown***

```md
1. Item 1
1. Item 2  
Notice that the sequence number is irrelevant. 
Markdown will change the sequence automatically when renderring. 
Notice that there are two spaces at the end above to make a new text under item.
3. Sub-lists are made by indenting 4 spaces
    1. Item 3a
    2. Item 3b
8. Any number for item 4
```

***display***

1. Item 1
1. Item 2  
Notice that the sequence number is irrelevant.  
Markdown will change the sequence automatically when renderring.  
Notice that there are two spaces at the end above to make a new text under item.
3. Sub-lists are made by indenting 4 spaces
    1. Item 3a
    2. Item 3b
8. Any number for item 4

***markdown***

```md
57. will started with offset 57
1. so it will be 58
2. but unfortunately, this didn't work in Gitbook
```

***display***

57. will started with offset 57
1. so it will be 58
2. but unfortunately, this didn't work in Gitbook

## 7. Elements in Lists

***markdown***

```md
* To add another element in a list while preserving the continuity of the list...
* indent the element four spaces
     like this
* ...or add blank lines in between

    I need to add another paragraph below the second list item.

* the third list item.

    > A blockquote would look great below the second list item.

* the fourth list item.
```

***display***

* To add another element in a list while preserving the continuity of the list...
* add blank lines in between

    I need to add another paragraph below the second list item.

* the third list item.

    > A blockquote would look great below the second list item.

* the fourth list item.

***markdown***

```md
1. This image is inline ![wikquote](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/35px-Wikiquote-logo.svg.png).
2. Linux mascot is called Tux.

   ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
3. Tux is is really cool.
4. For quote in ordered list, add five spaces.
     > A blockquote would look great below the second list item.
5.  But, for code blocks in the lists, add eight spaces or two tabs:

        <html>
          <head>
            <title>Test</title>
          </head>

6.  So okay for now
```

***display***

1.  This image is inline ![wikquote](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/35px-Wikiquote-logo.svg.png).
2.  Linux mascot is called Tux.

    ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
3. Tux is really cool.
4. For quote in ordered list, add five spaces.
     > A blockquote would look great below the second list item.
5.  But, for code blocks in the lists, add eight spaces or two tabs:

        <html>
          <head>
            <title>Test</title>
          </head>

6.  So okay for now

## 8. Code

***markdown***

```md
This is inline `code`.
```

***display***

This is inline `code`.

***markdown***

```md
    // add four spaces before for code
    like this
```
***display***

    // add four spaces before for code
    like this

***markdown***

```md
    <html>
      <head>
        <title>HTML code with four spaces</title>
      </head>
```

***display***

    <html>
      <head>
        <title>HTML code with four spaces</title>
      </head>

## 9. Links

***markdown***

```md
This is [link](https://example.com/)  
This is [link with title](https://example.com/ "title text!")
https://example.com/  
<https://www.markdownguide.org>  
fake@example.com didn't work in Gatsby and Gitbook  
<fake@example.com> worked  
I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).  
But  `https://www.example.com`  
but be careful with [%20 link](https://www.example.com/my%20great%20page)  
example [without %20](https://www.example.com/my great page)
```

**display**

This is [link](https://example.com/)  
This is [link with title](https://example.com/ "title text!")
https://example.com/  
<https://www.markdownguide.org>  
fake@example.com didn't work in Gatsby and Gitbook  
<fake@example.com> worked  
I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).  
But  `https://www.example.com`  
but be careful with [%20 link](https://www.example.com/my%20great%20page)  
example [without %20](https://www.example.com/my great page)

## 10. Reference-style Links

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
[2]: https://en.wikipedia.org/wiki/Indonesia#Etymology "Etymology of Indonesia"
[3]: https://en.wikipedia.org/wiki/Indonesia#History 'History of Indonesia'
[hh]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

## 11. Images

***markdown***

```md
![Wikipedia with Optional Text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text")  
![Wikipedia with Alt Text, reference style][id1]  

[id1]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text"
```

***display***

![Wikipedia with Optional Text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text")  
![Wikipedia with Alt Text, reference style][id1]  

[id1]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png "Optional Text"


## 12. Escaping Characters

***markdown***

```md
\* star  
\\ backslash itself  
\` backtick  
\{ \} curly braces  
\! exclamation mark
```

***display***

\* star  
\\ backslash itself  
\` backtick  
\{ \} curly braces  
\! exclamation mark

## 13. HTML Code

***markdown***

```md
This **word** is bold. This <em>word</em> is italic.  
This item **bold red**{style="color:red"} didn't work in Gitbook  
```

**display**

This **word** is bold. This <em>word</em> is italic.  
This item <strong style="color:red;">bold red</strong> didn't work in Gitbook  

## 14. Horizontal Rules

***markdown***
```md
___

---

***

but only one worked for Gitbook
```

**display**

___

---

***

but only one worked for Gitbook

## 15. Heading ID

***markdown***

```md
### My Great Heading {#heading-ids}

Link to [Heading IDs](#heading-ids)

unfortunately didn't work for Gatsby
```

***display***

### My Great Heading {#heading-ids}

Link to [Heading IDs](#heading-ids)

unfortunately didn't work for Gatsby

## 16. Code Fencing and Highlighting

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

## 17. Tables

***markdown***

```md
| Syntax      | Description | Test Text is long    |
| :---        |    :----:   |          ---: |
| [Example](https://www.example.com/)      | **Title**       | `Here's this  is` |
| Paragraph   | Text        | And more   |
```

***display**

| Syntax                              | Description | Test Text is long |
| :---------------------------------- | :---------: | ----------------: |
| [Example](https://www.example.com/) |  **Title**  | `Here's this  is` |
| Paragraph                           |    Text     |          And more |

## 18. Strikethrough, Highlighting, Underline

***markdown***

```md
~~strikethrough~~  
==highlight, fail in Gitbook and Gatsby==  
_underline, fail in Gitbook and Gatsby_  
```

***display***

~~strikethrough~~  
==highlight, fail in Gitbook and Gatsby==  
_underline, fail in Gitbook and Gatsby_  

## 19. Task Lists

***markdown***
```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

***display***

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## 20. Emojies

***markdown***
```md
Gone camping! ⛺ Be back soon.  
That is so funny! 😂  
Or with cassic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
```

***display***

Gone camping! ⛺ Be back soon.  
That is so funny! 😂  
Or with cassic markup: :wink: :crush: :cry: :tear: :laughing: :yum:

## 21. Typographic replacements, superscript, subscript

***markdown***
```md
autoreplacement of (c) (C) (r) (R) (tm) (TM) (p) (P) +-, didn't work in Gatsby and Gitbook  
superscript x^2^ and subscript H~2~O also didn't work in Gatsby and Gitbook.
```

**display**

autoreplacement of (c) (C) (r) (R) (tm) (TM) (p) (P) +-, didn't work in Gatsby and Gitbook  
superscript x^2^ and subscript H~2~O also didn't work in Gatsby and Gitbook.

## 22. HTML Entities and Character Codes

***markdown***

```md
&copy; &  &uml; &trade; &iexcl; &pound;  
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;  
&#124;  
x&sup2; y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;  
18&ordm;C  &quot;  &apos;
```

**display**

&copy; &  &uml; &trade; &iexcl; &pound;  
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;  
&#124;  
x&sup2; y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;  
18&ordm;C  &quot;  &apos;

---
## 23. Latex

***markdown***

```
Equation with one dollar sign $E=mc^2$ works in Gatsby but not in Gitbook.
In Gitbook, it should be with two dollar sign $$E=mc^2$$ which didn't work in Gatsby.

But for new line equation, it work well with two dollar sign.

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$
```

***display***

Equation with one dollar sign $E=mc^2$ works in Gatsby but not in Gitbook.
In Gitbook, it should be with two dollar sign $$E=mc^2$$ which didn't work in Gatsby.

But for new line equation, it work well with two dollar sign.

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

## 24. Footnote

***markdown***
```md
Here's a simple footnote,[^1] and here's a longer one,[^bignote], and [^withcode].  
[^1]: This is the first footnote, in Gitbook, there is no new line between.  
[^bignote]: Here's another one.  
[^withcode]: `code` or code in paragraphs  
```

***display***

Here's a simple footnote,[^1] and here's a longer one,[^bignote], and [^withcode].  
[^1]: This is the first footnote, in Gitbook, there is no new line between.  
[^bignote]: Here's another one.  
[^withcode]: `code` or code in paragraphs  
