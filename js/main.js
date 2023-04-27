(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);

function apigetFromDatabase(bilnumer) {
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                localStorage.setItem('working_numer', bilnumer)
                window.location.href = 'info.html'
            }
        })
    })
    .catch(error => alert('Þetta bílnúmer er ekki á skrá hjá okkur'));
};

function apigetFromUsers(email, password) {
    fetch("./users.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            if (user.email == email.toLowerCase()) {
                if (user.password == password) {
                    alert("Þú hefur verið skráð/ur inn")
                    localStorage.setItem('current_notandi', email)
                    setTimeout(function(){window.location.href = "userPage.html"}, 500);
                } else {
                    loginErrorMsg.style.opacity = 1;
                    setTimeout(function(){loginErrorMsg.style.opacity = 0;}, 1500);
                   
            }}
        })
    })
    .catch(error => console.log(error));
};

function writeBilnumerToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.bilnumer.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeTypaToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.typa.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeAksturToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.akstur.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeArgerdToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.argerd.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeUserNafnToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.nafn};
        })
    })
    .catch(error => console.log(error));
};

function writeUserKennitalaToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.kennitala};
        })
    })
    .catch(error => console.log(error));
};

function writeUserSimanumerToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.simanumer};
        })
    })
    .catch(error => console.log(error));
};
function writeUserHeimilisfangToHTML(bilnumer, tag_id){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.heimilisfang};
        })
    })
    .catch(error => console.log(error));
};


function loader(){
    var current_bilnumerid = localStorage.getItem("working_numer");
    writeBilnumerToHTML(current_bilnumerid, "info_bilnumer")
    writeTypaToHTML(current_bilnumerid, "typa")
    writeAksturToHTML(current_bilnumerid, "akstur")
    writeArgerdToHTML(current_bilnumerid, "argerd")
    writeUserNafnToHTML(current_bilnumerid, "nafn")
    writeUserKennitalaToHTML(current_bilnumerid, "kennitala")
    writeUserSimanumerToHTML(current_bilnumerid, "simanumer")
    writeUserHeimilisfangToHTML(current_bilnumerid, "heimilisfang")
    baetaVidTjoni(current_bilnumerid)
};

function baetaVidTjoni(bilnumer){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                fjoldiTjona = car.tjonasaga.fjoldiTjona
                tjonablocks(fjoldiTjona, bilnumer)}
        })
    })
    .catch(error => console.log(error));
}

function tjonablocks(fjoldiTjona, bilnumer){
    const tjonalisti = document.getElementById("tjonasaga");
    if (fjoldiTjona == 0){
        tjonalisti.insertAdjacentHTML("beforeend", `
        <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-item rounded pt-3">
                <div class="p-4">
                    <h1 style="text-align:center;";>Til hamingju! Þessi bíll er tjónlaus!</h1>
                </div>
            </div>
        </div>
        `); 
    }
    else{
        for (let i = 1; i <= fjoldiTjona; i++) {
            tjonalisti.insertAdjacentHTML("beforeend", `
                <div class="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="service-item rounded pt-3" style="display:flex;">
                        <div class="p-4">
                            <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5 id=dagsetningTjons${i}>Dagsetning tjóns: </h5>
                            <p id="tjonaflokkur${i}">Tjónaflokkur: </p>
                            <p id="lagad${i}">Lagað: </p>
                            <p id="lagadAf${i}">Lagað af: </p>
                        </div>
                        <div class="p-4" style="position: relative;">
                            <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5 id="kvittun">Kvittun: <a id="kvittun_link${i}" style="text-decoration:underline;">Opna</a> </h5>
                            <p id="skiptUm1-${i}">Skipt var um: </p>
                            <p id="skiptUm2-${i}">Skipt var um: </p>
                            <p id="skiptUm3-${i}">Skipt var um: </p>
                        </div>
                    </div>
                </div>
            `);
            writeTjonToHTML(bilnumer, i)
        }
    }
}

function writeTjonToHTML(bilnumer, tjonNumer){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(`dagsetningTjons${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.dagsetning`);
                document.getElementById(`tjonaflokkur${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.typa`); 
                document.getElementById(`lagad${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.lagad`);
                document.getElementById(`lagadAf${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.vottad`)
                kvittun = document.getElementById(`kvittun_link${tjonNumer}`);
                kvittun.setAttribute("href", eval(`car.tjonasaga.tjon${tjonNumer}.kvittun`));
                document.getElementById(`skiptUm1-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm1`);
                document.getElementById(`skiptUm2-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm2`);
                document.getElementById(`skiptUm3-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm3`)
            };
        })
    })
    .catch(error => console.log(error));
};

function minSida(){
    var current_notandi = localStorage.getItem("current_notandi");
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(`dagsetningTjons${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.dagsetning`);
                document.getElementById(`tjonaflokkur${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.typa`); 
                document.getElementById(`lagad${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.lagad`);
                document.getElementById(`lagadAf${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.vottad`)
                kvittun = document.getElementById(`kvittun_link${tjonNumer}`);
                kvittun.setAttribute("href", eval(`car.tjonasaga.tjon${tjonNumer}.kvittun`));
                document.getElementById(`skiptUm1-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm1`);
                document.getElementById(`skiptUm2-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm2`);
                document.getElementById(`skiptUm3-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm3`)
            };
        })
    })
    .catch(error => console.log(error));
}