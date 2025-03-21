
 const gdpData = {
    labels: [ '2015','2016','2017','2018','2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
        label: 'GDP Growth Rate',
        data: [8,8.3,6.8,6.5,4.2,-5.8,9.7,7.2,8.2,6.4],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true
    }]
};

document.querySelector(".ft").addEventListener('click', () => {
    window.location.href = "chat.html";
});

const inflationData = {
    labels: ['2015','2016','2017','2018','2019', '2020', '2021', '2022', '2023', '2024 '],
    datasets: [{
        label: 'Inflation Rate',
        data: [4.9,4.5,3.6,3.43,4.76,6.18,5.51,6.66,5.46,4.55],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.4,
        fill: true
    }]
};

const budgetData = {
    labels: ['Technology & AI', 'Healthcare', 'Education', 'Infrastructure', 'Defense', 'Others'],
    datasets: [{
        data: [22, 18, 20, 15, 15, 10],
        backgroundColor: [
            'rgb(99, 102, 241)',
            'rgb(147, 51, 234)',
            'rgb(236, 72, 153)',
            'rgb(34, 211, 238)',
            'rgb(248, 113, 113)',
            'rgb(161, 161, 170)'
        ]
    }]
};

const cpiData = {
    labels: ['Food', 'Housing', 'Transport', 'Healthcare', 'Education', 'Technology'],
    datasets: [{
        label: 'Consumer Price Index',
        data: [156.8, 168.2, 145.6, 172.3, 159.7, 142.5],
        backgroundColor: 'rgba(99, 102, 241, 0.6)'
    }]
};

window.addEventListener('load', () => {
    new Chart(document.getElementById('gdpChart'), {
        type: 'line',
        data: gdpData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'AI-Predicted GDP Growth Rate (%)' }
            }
        }
    });

    new Chart(document.getElementById('inflationChart'), {
        type: 'line',
        data: inflationData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'AI-Enhanced Inflation Trends' }
            }
        }
    });

    new Chart(document.getElementById('budgetChart'), {
        type: 'pie',
        data: budgetData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });

    new Chart(document.getElementById('cpiChart'), {
        type: 'bar',
        data: cpiData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
});