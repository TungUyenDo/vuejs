
var myNav = {
    template: '<div>nav</div>'
};
var mySibebar = {
    template: '<div>sidebar</div>'
};
var myContent = {
    template: '<div>content</div>'
};


var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    components: {
        'app-nav': myNav,
        'app-sidebar': mySibebar,
        'app-content': myContent,
    },
    computed: {

    },
    ready: function () {

    }

})

