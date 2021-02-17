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
                        link: '#grow',
                        active: false
                     },
                     {
                        name: 'Services',
                        link: '#what',
                        active: false
                     },
                     {
                        name: 'Blog',
                        link: '#post',
                        active: false
                     },
                     {
                        name: 'Contact',
                        link: '#footer',
                        active: false
                     },
                     {
                        name: 'Portfolio',
                        link: '#work',
                        active: false
                     }
                ],
                sign: 'Sign In'
            }
        ],
        slider: [
            {  
                img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Digital Experience',
                class: 'position',
                counter: 0
            },
            {
                img: 'img/8wa60okr-1-790x576.jpg',
                title: 'Basket of Flower on table',
                subtitle: 'Branding Strategy',
                class: 'position',
                counter: 1
            },
            {
                img: 'img/DRY-1-790x576.jpg',
                title: 'Purinky Products',
                subtitle: 'Digital Experience',
                class: 'position',
                counter: 2
            },
            {
                img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy',
                class: 'position',
                counter: 3
            },
            {
                img: 'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                title: 'Mock-up Template',
                subtitle: 'Ecommerce',
                class: 'position',
                counter: 4
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
                        url: '#footer'
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
        /* Ricolora la voce della navbar Selezionata */
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
        },
        sliderPrev(){
            this.slider.forEach(element => {
                if (element.counter == 4) {
                    element.counter = 0
                } else {
                    element.counter += 1
                }
            });
        },
        sliderNext(){
            this.slider.forEach(element => {
                if (element.counter == 0) {
                    element.counter = 4
                } else {
                    element.counter -= 1
                }
            });
        }
    }
}); 