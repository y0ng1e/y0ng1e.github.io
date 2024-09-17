# Project 1: HTML and CSS

**_Haven't completed all the works due to the course settings._**

## A

### CSS part

```css
/* General styling for the body to ensure centering */
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Tahoma;
    font-size: 40px;
}

/* Container to hold the boxes and ensure they are equally spaced vertically */
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    width: 100%; /* Ensures container spans full width */
}

/* General box styling */
.box {
    width: 100px;
    height: 100px;
    text-align: center;
    border-top: 1px solid #687291;
}

/* Alternating box colors */
.box:nth-child(odd) {
    background-color: #dfe1e7;
}

.box:nth-child(even) {
    background-color: #eeeff2;
}

/* Styling for the last box */
.box:last-child {
    background-color: #687291;
    color: white; /* Ensures text is visible on darker background */
    border: 4px solid black;

}
```

### HTML part

```html
<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Project1-A</title>
    <link href="styleA.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="box">
        <p>A</p>
    </div>

    <div class="box">
        <p>B</p>
    </div>

    <div class="box">
        <p>C</p>
    </div>

    <div class="box">
        <p>D</p>
    </div>
    
    <div class="box">
        <p>E</p>
    </div>

    <div class="box">
        <p>F</p>
    </div>
</body>
</html>
```

## B

### CSS Part

```css
body {
    margin: 0;
    padding: 0;
    font-family: Tahoma;
    display: flex;
    position: relative;
}

.box {
    width: 100px;
    height: 150px;
    background-color: #eeeff2;
    border-left: 10px dotted #D0D0FF;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: goldenrod;
    cursor: pointer;
    padding-left: 10px;
    box-sizing: border-box;
}

.box:hover {
    background-color: yellow;
    color: goldenrod;
}

.last-box {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 10px; /* Remove the right margin for the last box */
}

/* Prevent wrapping */
body {
    white-space: nowrap;
}

```

### HTML Part

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Layout</title>
    <link rel="stylesheet" href="styleB.css">
</head>
<body>
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box last-box">F</div>
</body>
</html>
```