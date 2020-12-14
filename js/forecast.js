let forecast_canvas = document.getElementById("cloud-forecast");

let data = {
    labels: ["Visibility","Precipitation","Wind"],
    datasets: [{
      data: [78, 40, 68],
      backgroundColor: [
        "rgb(78,115,223,0.5)",
        "rgb(246,194,62,0.5)",
        "rgba(0, 100, 255, 0.5)"
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