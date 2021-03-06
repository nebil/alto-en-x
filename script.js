/*
Copyright (c) 2017, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.
*/

(function() {
function setText() {
    var trimmedText = input.value.trim();
    var altoEnText = document.getElementById('alto-en');
    var upperText = document.getElementById('upper');
    var lowerText = document.getElementById('lower');
    var minsalText = document.getElementById('minsal');
    var replacement = trimmedText.toUpperCase() || ' ';
    upperText.textContent = replacement;

    var hasWhitespace = replacement.indexOf(' ') !== -1;
    if (hasWhitespace && upperText.getComputedTextLength() > 108) {
        // First, set the text contents.
        var wordList = replacement.split(/\s+/);
        upperText.textContent = wordList[0];
        lowerText.textContent = wordList.slice(1).join(' ');
        // REVIEW: The number of words in each line should be picked
        // ======= in a more aesthetic way, by automatically finding
        //         an arrangement that provides an equipoise between
        //         the length of both lines.

        // Then, adjust all the positions.
        altoEnText.setAttribute('y', 50);
        upperText.setAttribute('dy', 22);
        lowerText.setAttribute('dy', 22);
        minsalText.setAttribute('dy', 21);
    } else {
        // Otherwise, reset everything.
        lowerText.textContent = '';
        altoEnText.setAttribute('y', 60);
        upperText.setAttribute('dy', 25);
        lowerText.setAttribute('dy', 00);
        minsalText.setAttribute('dy', 30);
    }

    function updateFontSize(newSize) {
        upperText.style.fontSize = newSize;
        lowerText.style.fontSize = newSize;
        upperLength = upperText.getComputedTextLength();
        lowerLength = lowerText.getComputedTextLength();
    }

    var upperLength = upperText.getComputedTextLength();
    var lowerLength = lowerText.getComputedTextLength();
    // Harmonize the text size, depending on its length.
    if (upperLength <= 100 && lowerLength <= 100)
        updateFontSize('20px');
    if (upperLength > 100 || lowerLength > 100)
        updateFontSize('19px');
    if (upperLength > 118 || lowerLength > 118)
        updateFontSize('18px');

    // Adapted from: https://developer.mozilla.org/en-US/docs/Web/API/
    // ======= =====     Canvas_API/Drawing_DOM_objects_into_a_canvas/
    var container = document.getElementById('container');
    var svgString = new XMLSerializer().serializeToString(container);
    var imageBlob = new Blob([svgString], { type: 'image/svg+xml' });

    var canvas = document.getElementById('hidden-canvas');
    var domUrl = window.URL || window.webkitURL || window;
    var svg = domUrl.createObjectURL(imageBlob);
    var img = new Image();
    img.src = svg;

    img.onload = function() {
        canvas.getContext('2d').drawImage(img, 0, 0);
        var caterpillarName = trimmedText.toLowerCase()
                                         .split(/\s+/)
                                         .join('-');
        var downloadFilename = 'alto-en-' + caterpillarName;

        // Offer a PNG version.
        var png = canvas.toDataURL('image/png');
        var pngButton = document.getElementById('to-png');
        pngButton.download = downloadFilename + '.png';
        pngButton.href = png;

        // Offer an SVG version.
        var svgButton = document.getElementById('to-svg');
        svgButton.download = downloadFilename + '.svg';
        svgButton.href = svg;
    };
}

function fetchQueryValue(key) {
    var regex = '[?&]' + key + '=[^&]*';
    var match = RegExp(regex).exec(window.location.search);
    return match && decodeURIComponent(match[0].split('=')[1]);
}

var input = document.getElementById('text-input');
input.addEventListener('input', setText);

if (value = fetchQueryValue('input')) {
    input.value = value;
    setText();
}

document.getElementById('upper').addEventListener('click', function() {
    input.focus();
});
}());
