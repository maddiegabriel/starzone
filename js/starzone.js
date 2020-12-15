let options = {
    chart: {
        type: 'polarArea',
    },
    series: [14, 23, 21, 17, 24],
    labels: ['Wind', 'Visibility', 'Precipitation', 'Darkness', 'Cloud Cover'],
    stroke: {
        colors: ['#fff']
    },
    colors: ['#546E7A', '#4a92a8', '#60ccd9', '#bbf0e8', '#61908a'],
    dataLabels: {
        style: {
            fontSize: '14px',
        },
    },
    fill: {
        opacity: 0.8
    },
    legend: {
        position: 'bottom'
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            }
        }
    }]
};

let cloud_chart = new ApexCharts(document.querySelector("#cloud-forecast"), options);
cloud_chart.render();

// Toggle the side navigation
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");

    if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
        document.getElementById("starzone-logo").src = "img/favicon.png";
        document.getElementById("starzone-logo").style.maxWidth = "3rem";
    } else {
        document.getElementById("starzone-logo").src = "img/logo.png";
        document.getElementById("starzone-logo").style.maxWidth = "20rem";
    }
});

// Close any open menu accordions when window is resized below 768px
$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
        document.getElementById("starzone-logo").src = "img/favicon.png";
        document.getElementById("starzone-logo").style.maxWidth = "3rem";
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

