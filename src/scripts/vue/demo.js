

var myCheckbox = {
    data() {
        return {
            checkbox:{
                checked: false,
                title: 'Check me '
            },
            items : [
                {
                    checked: false,
                    title: 'Check me 1'
                },
                {
                    checked: true,
                    title: 'Check me 2'
                },
                {
                    checked: false,
                    title: 'Check me 3'
                },
            ]
        }
    },
    methods: {
       
        check() {
            this.checked = !this.checked;
        }
    }
};



var app = new Vue({
    el: '#app',
    data: {
        title: 'this my title',
    },
    methods: {

    },
    computed: {

    },

    components:{
        'my-checkbox': myCheckbox
    },
    ready: function () {

    }

})

console.log(app)



// console.log(app)