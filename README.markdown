#tcontrols

##Intro
tcontrols is a jQuery plugin that provides a way to theme the standard radiobutton and checkboxes with custom images. In effect, it does not alter the elements themselves. Instead, it hides them and provides substitute HTML structures with similar behavior. Events are still passed to the original elements though.

##How it works

* You call the 'tcontrols' method on a jquery object with 'radio' or 'checkbox' as a parameter depending on what controls you want to theme. 
* If no other arguments are passed, the controls are themed according to the images provided in the settings variable and residing in the ./img folder.
* If arguments are passed, they are merged with the default settings (not yet implemented).
* If the collection of passed, contains (or comprises of) other than radio and checkbox elements, these elements are simply ignored. 

##Example
As an example consider this snippet:

`<label for="switch">ON/OFF</label>`
`<input type="radio" name="switch">`

`<script type="text/javascript">`
$.("input").tcontrols("radio");
`</script>`

