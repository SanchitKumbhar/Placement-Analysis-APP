document.addEventListener('DOMContentLoaded', function () {
    const placementCtx = document.getElementById('placementChart').getContext('2d');
    const packageCtx = document.getElementById('packageChart').getContext('2d');
    const departmentCtx = document.getElementById('departmentChart').getContext('2d');
    const companyCtx = document.getElementById('companyChart').getContext('2d');

    const placementChart = new Chart(placementCtx, {
        type: 'pie',
        data: {
            labels: ['Placed', 'Not Placed'],
            datasets: [{
                data: [350, 150],
                backgroundColor: ['#4CAF50', '#F44336']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Placement Status'
                }
            }
        }
    });

    const packageChart = new Chart(packageCtx, {
        type: 'bar',
        data: {
            labels: ['0-5 LPA', '5-10 LPA', '10-15 LPA', '15-20 LPA', '20+ LPA'],
            datasets: [{
                label: 'Number of Students',
                data: [100, 150, 50, 30, 20],
                backgroundColor: '#2196F3'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Average Package Distribution'
                }
            }
        }
    });

    const departmentChart = new Chart(departmentCtx, {
        type: 'doughnut',
        data: {
            labels: ['CSE', 'ECE', 'ME', 'CE', 'EE'],
            datasets: [{
                data: [120, 90, 70, 40, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Placement by Department'
                }
            }
        }
    });

    const companyChart = new Chart(companyCtx, {
        type: 'horizontalBar',
        data: {
            labels: ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'],
            datasets: [{
                label: 'Number of Students',
                data: [50, 40, 30, 20, 10],
                backgroundColor: '#FF6384'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Placement by Company'
                }
            }
        }
    });
});