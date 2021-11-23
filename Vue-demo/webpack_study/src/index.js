import $ from 'jquery'
import './css/1.css'
import './css/1.less'
// import './components/App.vue'
import Vue from 'vue'
import App from './components/App.vue'

$(function() {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info);

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})