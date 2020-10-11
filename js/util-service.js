'use strict';

function makeLorem(size = 30) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function createDateAndHour(currentDate) {
    var currentDate = new Date(currentDate);
    var dateTime = currentDate.getDate() + "/" +
        (currentDate.getMonth() + 1) + "/" +
        currentDate.getFullYear() + " " +
        currentDate.getHours() + ":" +
        currentDate.getMinutes()
    return dateTime;
}