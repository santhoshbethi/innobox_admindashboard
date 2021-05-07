//animation list: card, fade, box3D, glide

$(document).ready(function () {
    $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'glide',
            row: 9,
            file : [
               
                {
                    src: {
                        main: "img/slider-img1.jpg",
                        cover: "img/slider-img1.jpg"
                    },
                    title: 'Intelligent',
                    desc: 'Connected Devices for <br>' +
                    'next-gen Networking ',
                    button: {
                        text: 'Know More',
                        url: '5g.html',
                        class: 'btn btn-medium btn-primary mainhead-btnknowmore',
                        color: '#ffffff'
                    }
                },
                {
                    src: {
                        main: "img/gryphon-change.jpg",
                        cover: "img/gryphon-change.jpg"
                    },
                    title: 'We Deliver',
                    desc: 'Tech that Redefines how your IT works ',
                    button: {
                        text: 'Know More',
                        url: 'gryphion.html' ,
                        class: 'btn btn-medium btn-primary mainhead-btnknowmore',
                        color: '#ffffff'
                    }
                },
                {
                    src: {
                        main: "img/slider-img-greyn.jpg",
                        cover: "img/slider-img-greyn.jpg"
                    },
                    title: 'Road Traffic',
                    desc: 'Intelligence Delivered <br>' +
                    'with Accuracy ',
                    button: {
                        text: 'Know More',
                        url: 'greyn.html',
                        class: 'btn btn-medium btn-primary mainhead-btnknowmore',
                        color: '#ffffff'
                    }
                }
            ]

        }
    );
});
