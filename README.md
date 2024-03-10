# DOM Helper
Document Object Model (DOM) Helper is a very simple library of functions to help students new to programming develop web apps using a small set of easy to use functions. I developed this for use with my high school computer science classes. My students only get one quick introductory unit in HTML/CSS and the rest of the program is focused on programming, primarily in JavaScript. The idea behind this project was to allow students to use the UI capabilities of web browsers before they have technical knowledge necessary to understand how use the DOM. 

# Table of Contents

- [Setup](#setup)
- [Element creation](#element-creation)
- [Size functions](#size-functions)
- [Position and movement](#position-and-movement-functions)
- [Rotation and direction](#rotation-and-direction-functions)
- [Content functions](#content-functions)
- [Navigation](#navigation)
- [CSS Style functions](#css-style-functions)
- [Sound](#sound)
- [Forms and Input](#forms-and-input-elements)
- [Events](#events)
- [Random numbers](#random-numbers)
- [Animation](#animation)

# Setup
1. Create a basic html document with a ```<body>``` element.
2. Add this script tag **before** your own script tag ```<script defer src="https://pueblocs.org/domhelper/domhelper.js"></script>``` (See the example below)  
    ```html
    <script defer src="https://pueblocs.org/domhelper/domhelper.js"></script>
    <script defer src="script.js"></script>
    ```  
3. Use the DOM Helper functions in your ```script.js``` file  

    ```javascript 
    createElement("h1", "heading");
    setWidth(getWidth(), "heading");
    setText("Welcome", "heading");
    setColor("orange", "heading");
    setStyle("text-align", "center", "heading");

    createButton("start-button", "Start");
    setX(getWidth() / 2 - getWidth("start-button") / 2, "start-button");
    setY(getHeight() / 2 - getHeight("start-button") / 2, "start-button");
    addClickEvent("start-button", start);

    function start() {
      console.log("Woohoo");
    }
    ```

# Element Creation
By default, elements are created with ```position: absolute``` and must be positioned on the screen using x- and y-coordinates which correspond to the ```left``` and ```top``` of the element

## createButton(id, text, x, y)
Creates a button element with the given id and text
- ```id``` the id to give the new button element
- ```text``` *optional* the text to display on the button
- ```x``` *optional* the x-coordinate to position the element in ```px```
- ```y``` *optional* the y-coordinate to position the element in ```px```

## createCheckBox(id, x, y)
Creates a square check box with the given id
- ```id``` the id to give the new button element
- ```x``` *optional* the x-coordinate to position the element in ```px```
- ```y``` *optional* the y-coordinate to position the element in ```px```

## createCircle(x, y, r, color, id)
Creates a circle with the specified properties. The circle is located by its center
- ```x``` the x-coordinate to position the element in ```px```
- ```y``` the y-coordinate to position the element in ```px```
- ```r``` the radius of the circle in ```px```
- ```color``` *optional* the color of the circle (background)
- ```id``` *optional* the id to give the element

## createElement(type, id, x, y)
- ```type``` the tag name of the type of element to create
- ```id``` *optional* the id to give the new element
- ```x``` *optional* the x-coordinate to position the new element at in ```px```
- ```y``` *optional* the y-coordinate to position the new element at in ```px```

## createImg(url, id, x, y)
- ```url``` the file path or web address for the image
- ```id``` *optional* the id to give the new element
- ```x``` *optional* the x-coordinate to position the element at in ```px```
- ```y``` *optional* the y-coordinate to position the element at in ```px```

## createRect(x, y, w, h, color, id)
- ```x``` the x-coordinate to position the element at in ```px```
- ```y``` the y-coordinate to position the element at in ```px```
- ```w``` the width of the rectangle in ```px```
- ```h``` the height of the rectangel in ```px```
- ```color``` *optional* the color of the rectangle (background)
- ```id``` *optional* the id to give the new element

## createRadioButton(id, group, x, y)
Creates a round radio button with the given id as a part of the given group. Only one radio button within a group can be checked at a time
- ```id``` the id to give the new button element
- ```group``` the group of radio buttons to which this button should belong 
- ```x``` *optional* the x-coordinate to position the element in ```px```
- ```y``` *optional* the y-coordinate to position the element in ```px```

## createTextBox(id, x, y)
Creates a textbox to provide a place for the user to enter text
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

# Content functions

## setText(text, id)
Set the text content (inner HTML) of the element with the specified id
- ```text``` the text to display
- ```id``` the id of the element

## getText(id)
Returns the text (inner HTML) of the element with the specified id
- ```id``` the id of the element

## setImage(src, id)
Sets the source for an image element
- ```src``` the web address or file for the image source
- ```id``` the id of an image element

## getImage(id)
Returns the URL of the ```src``` attribute for an image element
- ```id``` the id of an image element

## attach(id, parentId)
Attaches the element with ```id``` to be a child of the element with ```parentId```
- ```id``` the id of the child element
- ```parentId``` *optional* the id of the parent or container element. If no parent is specified it will be attached to the ```<body>``` element

## remove(id)
Removes the element with ```id``` from the layout
- ```id``` the id of the element to remove

# Navigation

## navigateTo(url)
Opens the specified URL in the browser window
- ```url``` the URL (web address or file) to navigate to

# CSS style functions

## setColor(color, id)
Sets the color (background color) of the element
- ```color``` the new color of the element
- ```id``` *optional* the id of the element or, if omitted, the body element (window)

## getColor(id)
Returns the color (background color) of the element
- ```id``` *optional* the id of the element or, if omitted, the body element (window)

## setTextColor(color, id)
Sets the text color of the element
- ```color``` the new color of the text
- ```id``` *optional* the id of the element or, if omitted, the body element (window)

## getTextColor(id)
Returns the text color of the element
- ```id``` *optional* the id of the element or, if omitted, the body element (window)

## setStyle(property, value, id)
Sets the specified CSS style property   
- ```property``` the name of the CSS property to set. Property names can be passed with hyphens, e.g. ```text-align```, or in camelCase, e.g. ```textAlign```
- ```value``` the new value to set for the property
- ```id``` the id of the element on which to set the property

## getStyle(property, id)
Returns the value of the specified CSS style property   
- ```property``` the name of the CSS property to set. Property names can be passed with hyphens, e.g. ```text-align```, or in camelCase, e.g. ```textAlign```
- ```id``` the id of the element from which to get the property value

## hide(id) 
Hides the element with the given id making it invisible
- ```id``` the id of the element to hide

## hideAll()
Hides all the elements in the layout

## show(id)
Shows the element with the given id making it visible
- ```id``` the id of the element to show

## showAll()
Makes all the elements in the layout visible

## isVisible(id)
Returns true if the element with the given id is visible, otherwise false
- ```id``` the id of the element

# Sound

## playSound(url)
Plays the sound located a ```url```
- ```url``` the URL or file name of the sound to play

# Forms and Input Elements

## getInputValue(id)
Returns the value entered by the user in a textbox as a string
- ```id``` the id of the input element

## setInputValue(value, id)
Sets the input value to the given value
- ```value``` the value to set for the input element
- ```id``` the id of the input element

## clearInputValue(id)
Clears the value from the input element
- ```id``` the id of an input element

## isChecked(id)
Returns true if the checkbox or radio button with the given id is checked
- ```id``` the id of the checkbox or radio button

# Events

## addClickEvent(id, f) 
Assigns a function to call when the element is clicked
- ```id``` the id of the element
- ```f``` the name of the function to call when the element is clicked

## addKeyDownEvent(f)
Assigns a function to call when a key is pressed
- ```f``` the name of the function to call when a key is pressed
The function should take an event parameter that will contain information about what key is pressed.

```javascript
addKeyDownEvent(keyPressed);

function keyPressed(event) {
  if (event.code == "ArrowUp") {
    console.log("The up arrow was pressed");
  }
}
```

## onEvent(type, id, f)
Creates and event listener of the given type
- ```type``` the type of event
- ```id``` the id of the element
- ```f``` the name of the function to call when the element is clicked

## isTouching(id1, id2)
Returns true if the two elements are touching
- ```id1``` the id of an element
- ```id2``` the id of another element

# Random

## getRandomInt(from, to)
Returns a random integer between ```from``` and ```to``` inclusive
- ```from``` the starting value for the range
- ```to``` the ending value of the range

## getRandomColor()
Returns a random ```rgb()``` color string for use in CSS style property

# Animation
To setup a project with animation, you must define a ```mainLoop()``` or ```mainLoop(timeStamp)``` function.

```javascript
function mainLoop(timeStamp) {
  // Update state of animated elements
}
```

## hideControls()
Hides the animation controls

## showControls()
Shows animation controls with built-in start and stop buttons

## startAnimation()
Starts the animation loop which will repeatedly call your ```mainLoop(time)``` function.

## stopAnimation()
Stops the animation loop