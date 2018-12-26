import '../../styles/index.scss';

require('../vue/nav')

import navComponent from "../vue/nav";
import sidebarComponent from "../../template/page-1/sidebar";
import contentComponent from "../../template/page-1/content";

console.log(navComponent)

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
    // template: navComponent
})

new Vue({
    el: '#app',
    data: {
        isRed:'test'
    },
    methods: {

    },
    components: { navComponent },
    computed: {

    },
    ready: function () {

    }

})