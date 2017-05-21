'use strict';

const MESSAGES = [
    "Spreading the word about https://medicalid.info could save or ease the life of someone you care about #medicalid #savelives",
    "Give first responders the possibility to see vital information: https://medicalid.info #medicalid #savelives #android",
    "Medical ID, the app that could save your life! https://medicalid.info #medicalid #savelives #android #app",
    "Use Medical ID (https://medicalid.info) to save your important health information #medicalid #android #app",
    "Medical ID for Android is the physical connection to your health and personal information: https://medicalid.info #android"
];

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; // months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const hour = dateObj.getUTCHours();
const minutes = dateObj.getUTCMinutes();

const message = MESSAGES[randomInt(0, MESSAGES.length)] + ` ${year}${month}${day}${hour}${minutes}`;

console.log(message);

if (message.length > 140) {
    throw new Error("Message too long: " + message.length);
}

const spawn = require( 'child_process' ).spawnSync;
const currentEnv = process.env;
const cmd = spawn( '/opt/yfiton/bin/yfiton', ['-n', 'twitter', `-Pstatus=${message}`], {env: currentEnv} );

console.log(`stderr: ${cmd.stderr.toString()}`);
console.log(`stdout: ${cmd.stdout.toString()}`);
