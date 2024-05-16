import './styles/main.scss'
import $ from 'jquery'

console.log('Js Loaded!');

let logoBox = null;
let logoBoxWidth = null;
let logoColumnHeight = null;

createLetters();

function createLetters() {
    console.group("createLetters()");
    logoBox = $('#logoBox');
    logoBoxWidth = logoBox.width();
    logoColumnHeight = getColumnHeight();

    console.log({
        logoBoxWidth,
        logoColumnHeight
    })

    logoBox.find('.logo-row').each(function(i) {
        splitLetters($(this));
        setColumnsWidth($(this));
        setColumnHeight($(this));
    });

    console.groupEnd();
}

function splitLetters(element) {
    console.log('splitLetters(element)', element);
    const originalLetters = element.text();
    let finalContent = '';
    for (let i = 0; i < originalLetters.length; i++) {
        finalContent += `<div class="logo-column">${originalLetters.charAt(i)}</div>`;
    }
    element.html(finalContent);
}

function setColumnsWidth(rowElement) {
    console.log('setColumnsWidth(rowElement)', rowElement);
    const columnCount = rowElement.find('.logo-column').length;
    const rowWidth = logoBoxWidth / columnCount
    rowElement.find('.logo-column').css('width', rowWidth+'px')
}

function getColumnHeight() {
    const rowCount = logoBox.find('.logo-row').length;
    const paddingSize = parseInt(logoBox.css('padding-top'));
    // return (logoBox.height() - (rowCount-1) * paddingSize)/rowCount;
    return logoBox.height()/rowCount;
}

function setColumnHeight(rowElements) {
    console.group('setColumnHeight(rowElements)', rowElements);
    rowElements.find('.logo-column').css('line-height', logoColumnHeight+'px')
    console.groupEnd();
}