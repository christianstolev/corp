const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['-80', '-70', '-60', '-50', '-40', '-30', '-20', '-10'], // X-axis labels
      datasets: [{
          label: 'OK auths',
          data: [20, 25, 35, 45, 55, 50, 40, 30], // Data points
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)', // Slightly transparent fill
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0, // No points
        },
        {
          label: 'Failed auths',
          data: [30, 40, 50, 60, 75, 65, 55, 45], // Data points
          borderColor: '#FF5252',
          backgroundColor: 'rgba(255, 82, 82, 0.1)', // Slightly transparent fill
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 6, // Larger points
          pointBackgroundColor: '#FF5252',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Custom legend outside
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${context.raw}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', 
          },
          ticks: {
            color: '#ffffff',
          },
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: '#ffffff', 
            callback: function (value) {
              return value; 
            },
          },
        },
      },
    },
  });