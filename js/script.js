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
        ],
        footer: [
            {
                logo: 'img/white-logo-2.png',
                infoText: 'When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable',
                quickLinks: [
                    {
                        title: 'Services',
                        url: '#what'
                    },
                    {
                        title: 'Contact',
                        url: '#'
                    },
                    {
                        title: 'Blog',
                        url: '#post'
                    }
                ],
                resources: [
                    {
                        title: 'Art Design',
                        url: '#'
                    },
                    {
                        title: 'Computer',
                        url: '#'
                    },
                    {
                        title: 'IT News',
                        url: '#'
                    },
                    {
                        title: 'Networking',
                        url: '#'
                    },
                    {
                        title: 'Web Security',
                        url: '#'
                    }
                ],
                contact: [
                    {
                        title: 'Address:',
                        info: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051'
                    },
                    {
                        title: 'Phone:',
                        info: '+99(0) 101 0000 888'
                    },
                    {
                        title: 'Email:',
                        info: 'Info@yourdomain.com'
                    }
                ]
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