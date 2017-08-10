'use strict';
let builder = require('electron-builder');
let Platform = builder.Platform;
let appVersion = '1.0.0';
const args   = process.argv.slice(2);

let name = 'CreativechainUniverse';
let ignoreFolders = ['!.idea', '!index.db', '!index.db-journal', '!crea-test-db-sql', '!app.conf', '!bin'];


function buildOptions(platform) {
    switch (platform) {
        case 'windows':
            platform = Platform.WIN;
            break;
        case 'mac':
            platform = Platform.MAC;
            break;
        default:
            platform = Platform.LINUX;
    }

    builder.build({
        targets: platform.createTarget(),
        config: {
            appId: 'org.creativechain.universe',
            productName: name,
            artifactName: '',
            asar: true,
            compression: 'normal',
            copyright: 'Copyright © 2017 Creativechain',
            directories: {
                buildResources: './',
                output: './releases',
                app: './'
            },
            buildVersion: appVersion,
            files: ignoreFolders

        }
    }).then((result) => {
        console.log('Result', result);
    }).catch((error) => {
        console.log('Build error', error);
    })


}
let optionsWindows = buildOptions('widows');
let optionsLinux = buildOptions('linux');
let optionsMac = buildOptions('mac');
