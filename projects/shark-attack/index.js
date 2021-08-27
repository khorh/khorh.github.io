// Shark cases per year
const yearLabels = [
    '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'
];
const yearData = {
    labels: yearLabels,
    datasets: [{
        label: 'Shark cases per year',
        backgroundColor: '#ff6584',
        borderColor: '#ff6584',
        data: [97, 92, 88, 92, 92, 103, 103, 112, 122, 120, 101, 128, 117, 122, 127, 143, 130, 138, 93, 103],
    }]
};

const yearConfig = {
    type: 'line',
    data: yearData,
    options: {}
};

const sharkCasesPerYear = new Chart (
    document.getElementById('sharkCasesPerYear'),
    yearConfig
);


// Shark cases by country
const countryData = {
    labels: [
        'USA',
        'Australia',
        'South Africa',
        'Bahamas',
        'Brazil',
        'New Zealand',
        'Other'
    ],
    datasets: [{
        label: 'Shark cases by country',
        data: [1088, 427, 143, 59, 57, 49, 400],
        backgroundColor: [
            '#bf0a30',
            '#00008b',
            '#000000',
            '#ffc72c',
            '#009c3b',
            '#CC142B',
            '#607d8b'
        ],
        hoverOffset: 4
    }]
};

const countryConfig = {
    type: 'doughnut',
    data: countryData,
    options: {
        maintainAspectRatio: false
    }
};

const sharkCasesByCountry = new Chart (
    document.getElementById('sharkCasesByCountry'),
    countryConfig
);


// Shark cases by area
const areaData = {
    labels: [
        'Florida',
        'Hawaii',
        'California',
        'Other'
    ],
    datasets: [{
        label: 'Shark cases by area',
        data: [576, 142, 117, 253],
        backgroundColor: [
            '#007CC2',
            '#CF142B',
            '#BD8A5E',
            '#607d8b'
        ],
        hoverOffset: 4
    }]
};

const areaConfig = {
    type: 'pie',
    data: areaData,
    options: {
        maintainAspectRatio: false
    }
};

const sharkCasesByArea = new Chart(
    document.getElementById('sharkCasesByArea'),
    areaConfig
);


// Shark cases by age
const ageLabels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
    '81', '82', '83', '84', '85', '86'
];
const ageData = {
    labels: ageLabels,
    datasets: [{
        label: 'Shark cases by age',
        backgroundColor: '#8e8e8e',
        borderColor: '#8e8e8e',
        data: [
            0, 0, 2, 0, 3, 10, 15, 12, 27, 31,
            27, 32, 31, 46, 55, 50, 52, 49, 49, 60,
            45, 41, 29, 44, 39, 38, 28, 33, 36, 30,
            31, 33, 18, 29, 35, 23, 29, 21, 18, 34,
            23, 24, 28, 18, 21, 19, 18, 24, 20, 27,
            15, 27, 8, 14, 18, 8, 13, 17, 8, 12,
            8, 5, 7, 4, 5, 3, 1, 6, 7, 6,
            2, 1, 3, 1, 2, 0, 2, 0, 0, 0,
            0, 1, 0, 1, 0, 1
        ],
    }]
};

const ageConfig = {
    type: 'line',
    data: ageData,
    options: {}
};

const sharkCasesByAge = new Chart (
    document.getElementById('sharkCasesByAge'),
    ageConfig
);
