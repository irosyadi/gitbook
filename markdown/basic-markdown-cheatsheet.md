---
layout: default
author: irosyadi
title:  Basic Markdown Cheatsheet
date: 2020-11-26 21:10:40
category: markdown
tags: ["markdown"]
draft: false
---

# Basic Markdown Cheatsheet (example of Heading 1)

## 1. Heading (example of Heading 2)

***Syntaxes***

```md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

***Showcases***

### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


---
## 2. Paragraphs

*Notes:*
- To create paragraphs, use a blank line to separate one or more lines of text.
- Don't ident paragraphs with spaces or tabs

***Syntaxes***

```md
This is the first paragraph.

This is the second paragraph
```

***Showcases***

This is the first paragraph.

This is the second paragraph

---
## 3 Line Break

*Notes:*
- To create a line break, end a line with two or more spaces, and then type return
- *Or* use the `<br>` HTML tag

***Syntaxes***

```md
This is the first line. 
And this is the second line.
```

***Showcases***

This is the first line.  
And this is the second line.

***Alternative Syntaxes***

```md
First line with the HTML tag after.<br>
And the next line.
```

***Showcases***

First line with the HTML tag after.<br>
And the next line.

---
## 4. Emphasis

***Syntaxes***

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

***Showcases***

**This is bold text**  
__This is bold text__  
*This is italic text*  
_This is italic text_  
We have **bold***italic*  
This text is ***really important***  
This text is ___really important___  
This text is __*really important*__  
This text is **_really important_**

---
## 5. Blockquotes

*Notes:*
- Space is needed after the marker `>`;
- You could just add only one `>` at the first line;
- Blockquotes can be nested
- Blockquotes can contain multiple paragraphs. Add a >  between the paragraphs.
- Blockquotes can contain other Markdown formatted elements. But not all elements can be used.

***Syntaxes***

```md
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```

***Showcases***

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

***Syntaxes***

```md
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

***Showcases***

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

***Syntaxes***

```md
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

***Showcases***

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---
## 6. Lists
### 6.1. Unordered

***Syntaxes***

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

***Showcases***

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

***Syntaxes***

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

***Showcases***

1. Item 1
1. Item 2  
Notice that the sequence number is irrelevant.  
Markdown will change the sequence automatically when renderring.  
Notice that there are two spaces at the end above to make a new text under item.
3. Sub-lists are made by indenting 4 spaces
    1. Item 3a
    2. Item 3b
8. Any number for item 4

***Syntaxes***

```md
57. will started with offset 57
1. so it will be 58
```

***Showcases***

57. will started with offset 57
1. so it will be 58

---

## 7. Elements in Lists

*Notes:*
- To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab

***Syntaxes***

```md
* This is the first list item.
* Here's the second list item.
    I need to add another paragraph below the second list item.
* And here's the third list item.
```

***Showcases***

* This is the first list item.
* Here's the second list item.
 I need to add another paragraph below the second list item.
* And here's the third list item.


***Showcases***

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

***Showcases***

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.


***Syntaxes***

```md
1.  Open the file containing the Linux mascot.
2.  Linux mascot called Tux.
    ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
3.  Tux is cool.
```

***Showcases***

1.  Open the file containing the Linux mascot.
2.  Linux mascot called Tux.
    ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png)
3.  Tux is cool.


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
## 8. Code

*Notes:*
- Inline codes is written inside \` \`
- or idented by add four spaces or one tab before

***Syntaxes***

```md
This is inline `code`.
```

***Showcases***

This is inline `code`.

***Syntaxes***

```md
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

***Showcases***

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

***Syntaxes***

```md
    <html>
      <head>
        <title>Test</title>
      </head>
```

***Showcases***

    <html>
      <head>
        <title>Test</title>
      </head>

---
## 9. Links

**Example**

This is [link](https://example.com/)  
This is [link with title](https://example.com/ "title text!")

*Or, directly put the link*

https://example.com/  
fake@example.com

*Or with `<>`*

<https://www.markdownguide.org>  
<fake@example.com>

*But, to prevent automated linking*

 `https://www.example.com`

*Or add emphasize*

I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).

## 10. Reference-style Links


I know [Indonesia][1]  
I also know [etymology of Indonesia][2]  
I knew [History of Indonesia][3]

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
## 11. Images

*Notes:*
- It is not recommended to use image links in reference format. Some apps will not preview those images.
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

***Syntaxes***
```md
![Image Alt Text][id1]  
![Image Alt Text][id2]

[id1]: /url/to/image.png "Optional Text"
[id2]: /url/to/image.png
```

***Showcases***

![Wikipedia][id1]  
![Wikipedia Logo][id2]

[id1]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png  "Wikipedia Logo"
[id2]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/240px-Wikipedia_Logo_1.0.png

---
## 12. Escaping Characters
*Note:*
- add a backslash `\` in front of the character.

**Example**

\* star  
\\ backslash itself  
\` backtick  
\{ \} curly braces  
\! exclamation mark

---
## 13. HTML Code

**Example**

This **word** is bold. This <em>word</em> is italic.

---

## 14. Horizontal Rules

**Example**

___

---

***
