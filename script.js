/*
Copyright (c) 2017, Nebil Kawas García.
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPLv2 at https://www.mozilla.org/MPL/2.0/.
*/

(function() {
var input = document.getElementById('text-input');
input.addEventListener('input', function() {
    var replacement = input.value.toUpperCase() || ' ';
    document.getElementById('mutable').textContent = replacement;

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
        var downloadFilename = 'alto-en-' + input.value.toLowerCase();

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
});
}());
