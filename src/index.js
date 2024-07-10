import './styles/main.scss'
import './fontToggle.js'
import $ from 'jquery'
import _ from 'lodash'

console.log('Js Loaded!');

let logoBox = null;
let logoBoxWidth = null;
let logoColumnHeight = null;

onInit();
function onInit() {
    createLetters();

    $('#ubuntuFont').click(() => setFont('ubuntuMono'));
    $('#pixefySans').click(() => setFont('pixefySans'));
}

function createLetters() {
    console.group("createLetters()");
    logoBox = $('#logoBox');
    logoBoxWidth = logoBox.width();
    logoColumnHeight = getColumnHeight();

    console.log({
        logoColumnHeight
    })

    splitLetters();
    setColumnHeight();

    console.groupEnd();
}

function splitLetters() {
    console.log('splitLetters(logoBox)', logoBox);
    const words = logoBox.text().split(' ');
    let finalContent = '';
    _.forEach(words, (word, wordIndex) => {
        if (wordIndex === 0 || words[wordIndex - 1].length !== word.length) {
            finalContent += `<div class="row-${word.length}-letters">`;
        }
        _.forEach(word, letter => {
            finalContent += `<span class="letter">${letter}</span>`;
        });
        if (words[wordIndex + 1] && words[wordIndex + 1].length !== word.length) {
            finalContent += `</div>`;
        }
    });
    logoBox.html(finalContent);
}

function getColumnHeight() {
    const rowCount = logoBox.text().split(' ').length;
    return logoBox.height() / rowCount;
}

function setColumnHeight() {
    logoBox.find('.letter').css('line-height', logoColumnHeight + 'px')
}

function setFont(fontName) {
    console.group(`setFont(${fontName})`);

    $('#logoBox').removeClass();


    console.groupEnd();
}