let forecast_canvas = document.getElementById("cloud-forecast");

let data = {
    labels: ["Visibility","Precipitation","Wind"],
    datasets: [{
      data: [78, 40, 68],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(200, 50, 255, 0.5)",
        "rgba(0, 100, 255, 0.5)"
      ]
    }]
};

let forecast_chart = new Chart(forecast_canvas, {
    data: data,
    type: 'polarArea'
});