# DOM Helper
Document Object Model (DOM) Helper is a very simple library of functions to help students new to programming develop web apps using a small set of easy to use funtions

# Element Creation
By default, elements are created with ```position: absolute``` and must be positioned on the screen using x- and y-coordinates

## createButton(id, text, x, y)
Shortcut function to create a button element
- ```id``` the id to give the new button element
- ```text``` *optional* the text to display on the button
- ```x``` *optional* the x-coordinate to position the element in ```px```
- ```y``` *optional* the y-coordinate to position the element in ```px```

## createCircle(x, y, r, color, id)
Creates a circle with the specified properties
- ```x``` the x-coordinate to position the element in ```px```
- ```y``` the y-coordinate to position the element in ```px```
- ```r``` the radius of the circle in ```px```
- ```id``` *optional* the id to give the element

## createElement(type, id, x, y)
- ```type``` the tag name of the type of element to create
- ```id``` *optional* the id to give the new element
- ```x``` *optional* the x-coordinate to position the new element at in ```px```
- ```y``` *optional* the y-coordinate to position the new element at in ```px```

## createImg(url, x, y, id)
- ```url``` the file path or web address for the image
- ```x``` *optional* the x-coordinate to position the element at in ```px```
- ```y``` *optional* the y-coordinate to position the element at in ```px```
- ```id``` *optional* the id to give the new element

## createRect(x, y, w, h, color, id)
- ```x``` the x-coordinate to position the element at in ```px```
- ```y``` the y-coordinate to position the element at in ```px```
- ```w``` the width of the rectangle in ```px```
- ```h``` the height of the rectangel in ```px```
- ```color``` the color of the rectangle (background)
- ```id``` *optional* the id to give the new element

## createTextBox(id, x, y)
- ```id``` the id to give the textbox element
- ```x``` the x-coordinate to position the element at in ```px```
- ```y``` the y-coordinate to position the element at in ```px```

# Size functions

## setWidth(value, id)
- ```value``` the size in ```px```
- ```id``` *optional* the id of the element to change the width of. If no id is specified, it will set the width of the window

## getWidth(id)
Returns the width of the element as a number type in ```px```
- ```id``` *optional* the id of the element to get the width of. If no id is specified, it will return the width of the window
