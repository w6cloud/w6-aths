# WEB6 Add To Home Screen

The plugin cheks if the device / browser pair is one of the following :

- Android + Chrome
- iOS + Safari

And returns appropriate "Add to home screen" instructions.

## Usage

This plugin doesn't display any message. You'll have to display the information yourself.  
This lets you choose the way you want to inform the user (using an overlay, in an help section, in a toast...).

```html
<script src="w6-aths.js"></script>
<script>
W6_ATHS.setLanguage('fr');
if(
    !W6_ATHS.isInstalled()
    && W6_ATHS.isSupported()
){
    alert(W6_ATHS.getMessage());
}
</script>
```

## Methods

```js
setLanguage(lang)
```
Sets the langage


```js
isSupported()
```
Returns true if the platform is in the supported platforms list


```js
isInstalled()
```
Returns true if the app is already in standalone mode


```js
getMessage()
```
Get the correct instructions


```js
getPosition()
```
Get the position of the message depending on the platform

```js
getPlatform()
```
Get the matching platform

## TODO

- Differenciate browser, os and platform (browser + os)
- Heavy refactoring (set all values on init and access them as properties)
- Use automatic install for Android (https://github.com/filrak/add-to-homescreen-control) check if it exists on other platforms
- Manage windows phones, chrome os, firefox os...

## Credits

Some parts of this code is copied from :
- https://github.com/mozilla/wp-add-to-homescreen
- https://github.com/cubiq/add-to-homescreen/blob/master/src/addtohomescreen.js
