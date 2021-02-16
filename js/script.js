var app = new Vue({
    el: '#app',
    data: {
        header: [
            {
                logo: 'img/white-logo-2.png',
                navMenu: [
                    {
                       name: 'Home',
                       link: '#',
                       active: true
                    },
                    {
                        name: 'About',
                        link: '#',
                        active: false
                     },
                     {
                        name: 'Services',
                        link: '#what',
                        active: false
                     },
                     {
                        name: 'Blog',
                        link: '#',
                        active: false
                     },
                     {
                        name: 'Contact',
                        link: '#',
                        active: false
                     },
                     {
                        name: 'Portfolio',
                        link: '#',
                        active: false
                     }
                ],
                sign: 'Sign In'
            }
        ]
    },
    methods: {
        activeMenu(index){
            let counter = index;
            this.header.forEach(element => {
                element.navMenu.forEach((element,index) => {
                    element.active = false;
                    if (index == counter){
                        element.active = true;
                    }
                });
            });
        }
    }
}); 