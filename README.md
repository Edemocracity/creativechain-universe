![Creativechain Media](https://www.creativechain.org/wp-content/uploads/2016/04/Logo-cretivechain-header-2.2.png)

## UNIVERSE

#### Dev

###### Install

* `sudo npm install -g yarn`- Install yarn to manage the project dependencies.
* `sudo npm install -g electron --unsafe-perm=true --allow-root` - Install electron globally so you can use it from command-line. 
* `yarn install` - You may need to remove npm_modules folder first
* After install is done you have to recompile modules for your platform, so it can be used from electron:
  * `npm install -save-dev electron-builder`
  * `npm run postinstall`
  * **electron-builder** doc [here](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build)


###### Launch app DEV
* Launch dev app:  `<app_path>$ electron .`
* More documentation of electron [here](https://github.com/electron/electron)

###### Compile app
* Compile:  `npm run dist`
* Uses [electron-builder](https://github.com/electron-userland/electron-builder) to compile

Authors: Vicent Nos Ripolles, Manolo Edge Tejero

## License

```
The MIT License

Copyright 2017 Vicent Nos Ripolles, Manolo Edge Tejero

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
