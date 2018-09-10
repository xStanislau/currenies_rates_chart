const ctx = document.getElementById('myChart').getContext('2d');
export const chart = new Chart(ctx, {
	type: 'line',
});

export function updateChart(chart, labels, data) {
  chart.data.labels = labels;
  chart.data.datasets.pop();
  chart.data.datasets.push(data)
  chart.update()
}