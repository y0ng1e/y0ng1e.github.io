# Lecture 3: Cascading Style Sheets (CSS)

**_Driving problem behind CSS_**

* with no css, the fonts are generated directly by system default settings

!!! note "style sheets"
    Are used to:
    
    * Specify style to use rather than browser default.

    * Not have to code styling on every element.

!!! note "key concept: separate style from content"
    Content (what to display) is in HTML files
    
    Formatting information (how to display it) is in separate style sheets (.css files).
    
    Use an element attribute named class to link (e.g. <span class="test">)
    
    Result: define style information once, use in many places

* css rules:

```css
body { /* selector */
    font-family: Tahoma, Arial, sans-serif;
    color: black;
    background: white;
    margin: 8px; /* property: value  */
}
```

* css selector:

|  CSS Selector   |              CSS              |            HTML             |
| :-------------: | :---------------------------: | :-------------------------: |
|    Tag name     |     `h1 { color: red; }`      | `<h1>Today’s Specials</h1>` |
| Class attribute | `.large { font-size: 16pt; }` |   `<p class="large">...`    |
|  Tag and Class  |       `p.large {...} `        |   `<p class="large">...`    |
|   Element id    | `#p20 { font-weight: bold; }` |      `<p id="p20">...`      |

* css psuedo selectors:

`hover`: apply this rule when mouse is hovering over element:

```css
p: hover, a: hover {
    background-color: yellow;
}
```

`link/visited`: apply this rule when link has been visited:

```css
a:visited {
    color: purple;
}

a:link {
    color: blue;
}
```

* color uses rgb:

```css
h1 {
    color: #ff0000;
    color: rgb(255, 255, 0);
    color: rgb(80%, 80%, 100%);
}
```

* css box model:

Total element width =
width +
left padding +
right padding +
left border +
right border +
left margin +
right margin

``` mermaid
graph LR
  A[Total element width =] --> B[width];
  A --> C[left padding];
  A --> D[right padding];
  A --> E[left border];
  A --> F[right border];
  A --> G[left margin];
  A --> H[right margin];
```

* size properties:

```css
width - Override element defaults
height
padding-top
padding-right
padding-bottom
padding-left
margin-top
margin-right
margin-bottom
margin-left
border-bottom-color
border-bottom-style
border-bottom-width
border-left-color
border-left-style
border-left-width
border-right-color
border-right-style
border-right-width
```

* position properties:

```css
position: static; /* (default) - Position in document flow */
position: relative; /* Position relative to default position via top, right, bottom, and left properties */
position: fixed; /* Position to a fixed location on the screen via top, right, bottom, and left properties */
position: absolute; /* Position relative to ancestor absolute element via top, right, bottom, and left properties */
/* Fixed position (0,0) is top left corner */
```

* common properties:

```css
background-image: /* image for element's background */
background-repeat: /* should background image be displayed in a repeating pattern (versus once only) */
font, font-family, font-size, font-weight, font-style: /* font information for text
text-align, vertical-align: /* Alignment: center, left, right */
/* cursor - Set the cursor when over element (e.g. help) */
```

* element visibility control properties:

```css
display: none; /* Element is not displayed and takes no space in layout */
display: inline; /* Element is treated as an inline element */
display: block; /* Element is treated as a block element */
display: flex; /* Element is treated as a flex container */
display: grid; /* Element is treated as a grid container */
visibility: hidden; /* Element is hidden but space still allocated */
visibility: visible; /* Element is normally displayed */
```

* some css featured issues: multiple rule matches: most specific rule wins

```html
<span>Text1</span> <!-- red -->
<span class="test">Text2</span> <!-- green -->
```

```css
span.test { color: green }
span { color: red }
```

* add styles to HTML

```html
<!-- #1 -->
<link rel="stylesheet" type="text/css" href="styles.css" />

<!-- #2 -->
body {
    font-family: Tahoma, Arial, sans-serif;
}

<!-- #3 -->
<div style="padding:2px; ... ">
```

* sample css file:

```css
body {
    font-family: Tahoma, Arial, sans-serif;
    font-size: 13px;
    color: black;
    background: white;
    margin: 8px;
}
h1 {
    font-size: 19px;
    margin-top: 0px;
    margin-bottom: 5px;
    border-bottom: 1px solid black
}
.shaded {
    background: #d0d0ff;
}
```