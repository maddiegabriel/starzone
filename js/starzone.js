// 
//  LOGIN / REGISTER
//
function login() {
    window.location.href = "load_dash.html";
}

function register() {
    window.location.href = "load_settings.html";
}

function load_dash() {
    window.location.replace("dashboard.html");
}

function load_settings() {
    window.location.replace("settings.html");
}

// 
//  CLOUD FORECAST POLAR AREA CHART (uses ApexCharts JS library)
//
let options = {
    chart: {
        type: 'polarArea',
        width: '80%',
    },
    series: [14, 23, 21, 17, 24],
    labels: ['Wind', 'Visibility', 'Precipitation', 'Darkness', 'Cloud Cover'],
    colors: ['#546E7A', '#4a92a8', '#60ccd9', '#bbf0e8', '#61908a'],
    yaxis: {
        show: false,
    },
    fill: {
        opacity: 0.8
    },
    legend: {
        position: 'bottom',
        fontSize: '17px',
        labels: {
            colors: '#c4c5c6',
        },
    },

};

let cloud_chart = new ApexCharts(document.querySelector("#cloud-forecast"), options);
cloud_chart.render();


// 
//  SIDE NAVIGATION
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

