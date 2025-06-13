// Fake/mock data for now
const stats = {
  totalJoins: 132,
  messagesPerMonth: {
    "2024-12": 520,
    "2025-01": 860,
    "2025-02": 742,
    "2025-03": 902,
    "2025-04": 788,
    "2025-05": 644,
    "2025-06": 321
  }
};

document.getElementById("totalJoins").textContent = stats.totalJoins;

const ctx = document.getElementById("messagesChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.keys(stats.messagesPerMonth),
    datasets: [{
      label: "Messages",
      data: Object.values(stats.messagesPerMonth),
      backgroundColor: "#8e44ad"
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#fff" }
      },
      x: {
        ticks: { color: "#fff" }
      }
    },
    plugins: {
      legend: { labels: { color: "#fff" } }
    }
  }
});
