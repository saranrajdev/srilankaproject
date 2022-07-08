
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            centerMode: true,


            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                        focusOnSelect: false,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        prevArrow: null,
                        nextArrow: null,

                        focusOnSelect: false,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        prevArrow: null,
                        nextArrow: null,

                        focusOnSelect: false,

                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
  
        window.onscroll = function () {
            scroll()
        };

        function scroll() {
            var topbar = document.body.scrollTop;
            if (topbar >= 50 ||
                document.documentElement.scrollTop > 20) {
                document.getElementById('navbar').classList.add("fixed-top");
                document.getElementById('list-group').classList.add("grp-card");
                document.getElementById('topbar-logo').classList.add("topdbar-logo-a");
            } else {
                document.getElementById('navbar').classList.remove("fixed-top");
                document.getElementById('list-group').classList.remove("grp-card");
                document.getElementById('topbar-logo').classList.remove("topdbar-logo-a");
            }

        }
