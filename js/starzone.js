// EVENT LISTENERS
// const login_form = document.getElementById('login-form');
// login_form.addEventListener('submit', login);



// 
// ACCOUNT SETTINGS
// 
function update_details() {
    let fields = document.getElementsByClassName('update-detail-field');
    for (i = 0; i < fields.length; i++) {
        fields[i].style.background = 'rgb(202 202 202)';
        fields[i].style.color = '#6c6c70';
        fields[i].readOnly = false;
    }
    document.getElementById('save-btn').style.display = "inline";
    document.getElementById('update-btn').style.display = "none";
       
}

function save_details() {
    let fields = document.getElementsByClassName('update-detail-field');
    for (i = 0; i < fields.length; i++) {
        fields[i].style.background = '#383c46';
        fields[i].style.color = '#757575';
        fields[i].readOnly = true;
    }
    document.getElementById('save-btn').style.display = "none";
    document.getElementById('update-btn').style.display = "inline";
}


// 
//  CLOUD FORECAST POLAR AREA CHART (built using ApexCharts JS library)
//
function render_chart() {
    let options = {
        chart: {
            type: 'polarArea',
            width: '80%',
        },
        series: [14, 23, 21, 17, 24],
        labels: ['Cloud Cover', 'Transparency', 'Precipitation', 'Light Pollution', 'Wind'],
        colors: ['#546E7A', '#4a92a8', '#60ccd9', '#bbf0e8', '#61908a'],
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 0.8
        },
        legend: {
            position: 'bottom',
            fontSize: '16px',
            labels: {
                colors: '#c4c5c6',
            },
        },
    };
    
    let cloud_chart = new ApexCharts(document.querySelector("#cloud-forecast"), options);
    cloud_chart.render();
}


// 
//  STAR SEARCHER
// 
$(document).ready(function(){
    $("#list_search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#star_list li").filter(function() {
            $(this).toggle($(this).attr("searchterm").indexOf(value) > -1)
        });
    });
});


//
// SIDEBAR TOGGLE FUNCTIONALITY - Partially drawn from this source:
// Title: Bootstrap SB UI Kit Sidebar (v 4.1.3)
// Author: StartBootstrap (2020)
// Code Version: 
// Availability: https://github.com/startbootstrap/startbootstrap-sb-admin-2
//

// Toggle the side navigation when clicked
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");

    if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
        document.getElementById("starzone-logo").src = "img/favicon.png";
        document.getElementById("starzone-logo").style.maxWidth = "4rem";
    } else {
        document.getElementById("starzone-logo").src = "img/logo.png";
        document.getElementById("starzone-logo").style.maxWidth = "20rem";
    }
});

// Close menu accordions when window is small
$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
        document.getElementById("starzone-logo").src = "img/favicon.png";
        document.getElementById("starzone-logo").style.maxWidth = "4rem";
    } else {
        document.getElementById("starzone-logo").src = "img/logo.png";
        document.getElementById("starzone-logo").style.maxWidth = "20rem";
    }

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $('.sidebar .collapse').collapse('hide');
    };
});


//
//  LOADING PAGES
//
function load_dash() {
    window.location.replace("dashboard.html");
}

function load_settings() {
    window.location.replace("settings.html");
}


//
//  LOGIN FORM VALIDATION
//
$('#login-button').prop('disabled', true);
let formisvalid = false;

$('.login-fields').bind('keyup', function() { 
    let e = $("#login-email-field").val().length;
    let p = $("#login-password-field").val().length;
    if ( e > 0 &&  p > 0) {
        $('#login-button').prop('disabled', false);
    }
});

$('#login-email-field').bind('keyup', function() { 
    let u = $("#login-email-field").val();
    if(u.length < 1) {
        formisvalid = false;
        document.getElementById('usernamehelp').style.display = "inline";
        document.getElementById('usernameconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('usernameconfirm').style.display = "inline";
        document.getElementById('usernamehelp').style.display = "none";
    }
});

$('#login-password-field').bind('keyup', function() { 
    let p = $("#login-password-field").val();
    if(p.length < 1) {
        formisvalid = false;
        document.getElementById('passwordhelp').style.display = "inline";
    } else {
        formisvalid = true;
        document.getElementById('passwordhelp').style.display = "none";
    }
});


//
//  REGISTER FORM VALIDATION
//
function test_email(address) {
    let pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(address);
}

$('#register-button').prop('disabled', true);
formisvalid = false;

$('#name-field').bind('keyup', function() { 
    let n = $("#name-field").val();
    if(n.length < 1) {
        formisvalid = false;
        document.getElementById('namehelp').style.display = "inline";
        document.getElementById('nameconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('nameconfirm').style.display = "inline";
        document.getElementById('namehelp').style.display = "none";
    }
});

$('#email-field').bind('keyup', function() { 
    let e = $("#email-field").val();
    if(e.length < 5 || !test_email(e)) {
        formisvalid = false;
        document.getElementById('emailhelp').style.display = "inline";
        document.getElementById('emailconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('emailconfirm').style.display = "inline";
        document.getElementById('emailhelp').style.display = "none";
    }
});

$('#username-field').bind('keyup', function() { 
    let u = $("#username-field").val();
    if(u.length < 1) {
        formisvalid = false;
        document.getElementById('usernamehelp').style.display = "inline";
        document.getElementById('usernameconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('usernameconfirm').style.display = "inline";
        document.getElementById('usernamehelp').style.display = "none";
    }
});

$('#password-field').bind('keyup', function() { 
    let p = $("#password-field").val();
    if(p.length < 1) {
        formisvalid = false;
        document.getElementById('passwordhelp').style.display = "inline";
        document.getElementById('passwordconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('passwordconfirm').style.display = "inline";
        document.getElementById('passwordhelp').style.display = "none";
    }
});

$('#confirm-password-field').bind('keyup', function() { 
    let p = $("#password-field").val();
    let cp = $("#confirm-password-field").val();
    if(cp.length < 1 || cp !== p) {
        formisvalid = false;
        document.getElementById('confirmhelp').style.display = "inline";
        document.getElementById('confirmconfirm').style.display = "none";
    } else {
        formisvalid = true;
        document.getElementById('confirmconfirm').style.display = "inline";
        document.getElementById('confirmhelp').style.display = "none";
    }
});

if (formisvalid) {
    $('#register-button').prop('disabled', false);
}




