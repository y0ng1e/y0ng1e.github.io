# Lecture 2: HyperText Markup Language (HTML)

**_HTML as a Markup language_**

* markup language: include directives with content

* tags: html uses `<>` to denote tags (tags can have tags inside to form a tree)

!!! note "example XHTML doc"
    ```html
    <?xml version="1.0" encoding="utf-8"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <p>Hello world!</p>
        </body>
    </html>
    ```

* basic syntax rules for XHTML:

```html
<img src="face.jpg">
<input type="text" value="94301" name="zip">
<div class="header">
```

* handle markup characters in content:

| Alternative | Original |
| :----: | :----: |
| `&lt;` | `<` |
| `&gt;` | `>` |
| `&amp;` | `&` |
| `&quot;` | `"` |
| `&nbsp;` | `nonbreaking space` |

* common used XHTML tags

|                  Expression                   |                        Interpretation                        |
| :-------------------------------------------: | :----------------------------------------------------------: |
|             `<table>, <tr>, <td>`             |                            Tables                            |
|                 `<ul>, <li>`                  |                Unordered list (with bullets)                 |
|                 `<ol>, <li> `                 |                   Ordered list (numbered)                    |
|                    `<div>`                    | Used for grouping related elements, where the group occupies entire lines (forces a line break before and after) |
|                   `<span>`                    | Used for grouping related elements, where the group is within a single line (no forced line breaks) |
| `<form>, <input>, <textarea>, <select>, ... ` |       Used to create forms where users can input data        |

!!! note "HTML differences from XHTML"
    HTML supports the same tags, same features, but allows quirkier syntax:

    * Can skip some end tags, such as `</br>`, `</p>`
    
    * Not all attributes have to have values: `<select multiple>`
    
    * Elements can overlap: `<p><b>first</p><p>second</b> third</p>`

!!! tip "new HTML 5 features"
    * Additions tags to allow content definition
        * `<article>, <section>, <header>, <footer>, <summary>, <aside>, <details>`
        * `<mark>, <figcaption>, <figure>`
        * `<nav>, <menuitem>`
    * Drawing
        * `<svg>` - Scalable Vector Graphics - Draw shapes
        * `<canvas>` - Draw from JavaScript - 3D with WebGL
    * Timed media playback: `<video>` and `<audio>`