# DOM Helper
Document Object Model (DOM) Helper is a very simple library of functions to help students new to programming develop web apps using a small set of easy to use functions. This is a work in progress.

# Setup
1. Create a basic html document with a ```<body>``` element.
2. Add this script tag **before** your own script tag ```<script src="https://pueblocs.org/domhelper/domhelper.js"></script>``` (See the example below)
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>DOM Helper</title>
</head>
<body>
  
</body>
<script src="https://pueblocs.org/domhelper/domhelper.js"></script>
<script src="script.js"></script>
</html>
```
3. Use the DOM Helper functions in your ```script.js``` file
```javascript
createElement("h1", "heading");
setWidth(getWidth(), "heading");
setText("Welcome", "heading");
setColor("orange", "heading");
setProperty("text-align", "center", "heading");

createButton("start-button", "Start");
setX(getWidth() / 2 - getWidth("start-button") / 2, "start-button");
setY(getHeight() / 2 - getHeight("start-button") / 2, "start-button");
addOnClickEvent("start-button", start);

function start() {
  console.log("Woohoo");
}
```
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

## setHeight(value, id)
- ```value``` the size in ```px```
- ```id``` *optional* the id of the element to change the height of. If no id is specified, it will set the height of the window

## getHeight(id)
Returns the width of the element as a number type in ```px```
- ```id``` *optional* the id of the element to get the height of. If no id is specified, it will return the height of the window

## setWidth(value, id)
- ```value``` the size in ```px```
- ```id``` *optional* the id of the element to change the width of. If no id is specified, it will set the width of the window

## getWidth(id)
Returns the width of the element as a number type in ```px```
- ```id``` *optional* the id of the element to get the width of. If no id is specified, it will return the width of the window

# Position and movement functions

## setX(value, id)
Moves the element with the given id to the given x-coordinate value
- ```value``` the new x-coordinate for the element in ```px```
- ```id``` the id of the element

## getX(id)
Returns the x-coordinate of the element with the given id in ```px``` as a number type
- ```id``` the id of the element

## changeXBy(value, id)
Moves the element along the x-axis by the given amount (adds the value to the current x-coordinate)
- ```value``` the amount in ```px``` to add the the current x-coordinate
- ```id``` the id of the element

## setY(value, id)
Moves the element with the given id to the given y-coordinate value
- ```value``` the new x-coordinate for the element in ```px```
- ```id``` the id of the element

## getY(id)
Returns the y-coordinate of the element with the given id in ```px``` as a number type
- ```id``` the id of the element

## changeYBy(value, id)
Moves the element along the y-axis by the given amount (adds the value to the current y-coordinate)
- ```value``` the amount in ```px``` to add the the current y-coordinate
- ```id``` the id of the element

## move(value, id)
Moves the element along its angle of rotation by the given amount (moves forward in the direction it's pointing)
- ```value``` the amount in ```px``` to move
- ```id``` the id of the element

# Rotation and direction functions

## rotate(degrees, id)
Rotates the element by the given amount from its current angle of rotation
- ```degrees``` the amount in ```deg``` to rotate the element by
- ```id``` the id of the element

## setRotation(degrees, id)
Sets the angle of rotation to the given value
- ```degrees``` the new angle in ```deg``` for the element
- ```id``` the id of the element

## getRotation(id)
Returns the angle of rotation of the specified element in ```deg``` as a number type
- ```id``` the id of the element

# Content, color, and style functions
