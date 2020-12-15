let forecast_canvas = document.getElementById("cloud-forecast");

let data = {
    labels: ["Visibility","Precipitation","Wind"],
    datasets: [{
      data: [75, 63, 36],
      backgroundColor: [
        "rgb(78,115,223,0.3)",
        "rgb(246,194,62,0.3)",
        "rgba(0, 100, 255, 0.3)"
      ]
    }]
};

let options = {
    scale: {
        ticks: {
            suggestedMin: 0,
            suggestedMax: 100
        }
    },
    legend: {
        position: 'bottom',
    }    
}

let forecast_chart = new Chart(forecast_canvas, {
    data: data,
    options: options,
    type: 'polarArea'
});

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

