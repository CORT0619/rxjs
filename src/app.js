import $ from 'jquery';
import Rx from 'rxjs/Rx';




//Observables from events

const btn = $('#btn');
const input = $('#input');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(function(e){
    window.console.log(e.target.innerHTML);
    console.log('clicked');
}, function(err) {
    console.log(err);
}, function() {
    console.log('completed');
});

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(function(e){
    window.console.log(e);
    console.log('keyup');
}, function(err) {
    console.log(err);
}, function() {
    console.log('completed');
});

/*
const btn = $('#btn');
const input = $('#input');
const output = $('#output');

// good practice for observables that represent a stream
const btnStream$ = Rx.Observable.fromEvent(btn, 'click'); 
btnStream$.subscribe(function(e){
    console.log('clicked ', e);
}, 
function(err){
    console.log(err);
},
function(){
    console.log('completed');
});


const inputStream$ = Rx.Observable.fromEvent(input, 'keyup'); 
inputStream$.subscribe(function(e){
   output.append(e.target.value);
}, 
function(err){
    console.log(err);
},
function(){
    console.log('completed');
});


const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove'); 
moveStream$.subscribe(function(e){
    output.html(`<h1>X ${e.clientX} Y: ${e.clientY}</h1>`);
   console.log(e);
}, 
function(err){
    console.log(err);
},
function(){
    console.log('completed');
});
*/

//Observables from arrays
/*
const numbers = [33, 44, 55, 66, 77];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe((e) => {
    console.log(e);
},
(err) => {
    console.log(err);
},
complete => {
    console.log('completed');
});

const postList = $('#posts');

const posts = [
    {
        title: 'Post One',
        body: 'this is the body'
    },
    {
        title: 'Post Two',
        body: 'this is the body'
    },
    {
        title: 'Post Three',
        body: 'this is the body'
    }
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe((e) => {
    console.log(e);
    let li = document.createElement("li");
    li.append(`Title: ${e.title} Body: ${e.body}`);
    postList.append(li);
},
(err) => {
    console.log(err);
},
complete => {
    console.log('completed');
});
*/

//sets are arrays that can have different types of data
/*
const set = new Set(['Hello', 44, {title:'My Title'}]);

const set$ = Rx.Observable.from(set);

set$.subscribe((response) => {
    console.log(response);
},
(err) => {
    console.log(err);
},
complete => {
    console.log('completed');
});
*/

//map is an array of key, value pairs

/*
const map = new Map([[1,2], [3,4], [5,6]]);

const map$ = Rx.Observable.from(map);

map$.subscribe((response) => {
    console.log(response);
},
(err) => {
    console.log(err);
},
complete => {
    console.log('completed');
});
*/