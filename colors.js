/*
Copyright (c) 2017, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.
*/

(function() {
var DAYS = [
    { name: 'sun', color: '#FC3' },
    { name: 'mon', color: '#BBB' },
    { name: 'tue', color: '#C88' },
    { name: 'wed', color: '#C9E' },
    { name: 'thu', color: '#9DD' },
    { name: 'fri', color: '#F9C' },
    { name: 'sat', color: '#9C8' },
];

var currentDay = new Date().getDay();
document.body.style.backgroundColor = DAYS[currentDay].color;

window.onload = function() {
            document.getElementById('octocat')
    .contentDocument.getElementById('quarter')
    .classList.add(DAYS[currentDay].name);
};
}());
