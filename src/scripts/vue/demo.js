var vue = new Vue({
    el: '#app-demo',
    data: {
        search: '',
        student: {
            id: 0,
            name: '',
            age: '',
            class: ''
        },
        people: [{
            name: 'Vu Van A',
            age: '20',
            class: '12B'
        }, {
            name: 'Vu Van B',
            age: '12',
            class: '12A'
        }, {
            name: 'Vu Van C',
            age: '14',
            class: '12E'
        }, {
            name: 'Vu Van D',
            age: '18',
            class: '12D'
        },],
    },
    methods: {
        addStudent: function () {
            if (this.people.push(this.student)) {

            }
        },
        clearStudent: function () {
            this.student = {
                id: '',
                name: '',
                age: '',
                class: ''
            };
        },
        deleteStudent: function (index) {
            delete this.people.splice(index, 1);
        },
        updateStudent: function (index) {
            this.student = this.people[index];
            this.student.id = index;
        },
    },
    computed: {
        searchs: function (newsearch) {
            var da = [];
            var search = this.search;
            if (this.search != '') {
                this.people.forEach(function (item, index) {

                    if (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                        console.log(item.name.toLowerCase());
                        da.push(item);
                    }
                });
                return da;
            } else {
                return this.people;
            }
        }
    }
});
vue.people.push({
    name: 'Vu Van E',
    age: '22',
    class: '12G'
});