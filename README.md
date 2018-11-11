# WEB6 Add To Home Screen

The plugin cheks if the device / browser pair is one of the following :

- Android + Chrome
- iOS + Safari

And returns appropriate "Add to home screen" instructions.

## Methods

init(lang)

Sets the langage

isSupported()

Returns true if the platform is in the supported platforms list

isInstalled()

Returns true if the app is already in standalone mode

getMessage()

Get the correct instructions

getPosition()

Get the position of the message depending on the platform

getPlatform()

Get the matching platform

## Credits

Some parts of this code is copied from :
- https://github.com/mozilla/wp-add-to-homescreen
- https://github.com/cubiq/add-to-homescreen/blob/master/src/addtohomescreen.js
