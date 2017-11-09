// global component
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

new Vue({
    el: '#global-component'
})

// local component
let childComponent = Vue.extend({
    template: '<div>A child component!</div>'
})

let parentComponent = Vue.extend({
    template: '<div>A parent component!<child-component></child-component></div>',
    components: {
        'child-component': childComponent
    }
})

new Vue({
    el: '#local-component',
    components: {
        'parent-component': parentComponent
    }
})

// data must be function!
// 1. bad example
let data = {
    counter: 0
}

Vue.component('bad-component', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return data;
    }
})

new Vue({
    el: '#bad-example-for-data'
})
// 2. good example
Vue.component('good-component', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
})

new Vue({
    el: '#good-example-for-data'
})

// component communication
// parent -> child
Vue.component('child', {
    props: ['message'],
    template: '<p>This is child! {{ message }}</p>'
})

new Vue({
    el: '#parent-to-child',
    data: {
        parentMessage: ""
    }
})
// child -> parent
Vue.component('incrementer', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
})

new Vue({
    el: '#child-to-parent',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})