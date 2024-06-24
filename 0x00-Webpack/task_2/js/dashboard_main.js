import $ from 'jquery';
import _ from 'lodash';
import '../js/main.css';

let counter = 0;

function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
}

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

const debounceUpdater = _.debounce(updateCounter, 500);

$('button').on('click', debounceUpdater);
