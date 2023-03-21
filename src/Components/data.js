const data = {
    labels: ['Facebook', 'Instagram', 'Twitter'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
            label: 'Popularity of colours',
            data: [55, 23, 96],
            // you can set indiviual colors for each bar
            backgroundColor: [
                '#34ee',
                '#f3234e',
                '#234564'
            ],
            borderWidth: 1,
        }
    ]
}
const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [{
        label: 'Crossiants',
        data: [65, 59, 80, 81, 56, 55, 40, 23, 54],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        color: '#fff',

        tension: 0.1
    }, {
        label: 'Muffins',
        data: [22, 33, 70, 50, 30, 35, 65, 62, 51],
        fill: false,
        borderColor: 'rgb(2, 10, 323)',
        color: '#fff',

        tension: 0.1
    }]
};

const radarData = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]

}
export { data, lineData, radarData }