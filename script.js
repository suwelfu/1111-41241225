const libraries = [
    {
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        url: "https://reactjs.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        name: "Vue",
        description: "The Progressive JavaScript Framework.",
        url: "https://vuejs.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
        name: "Angular",
        description: "A platform for building mobile and desktop web applications.",
        url: "https://angular.io/",
        image: "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
        name: "jQuery",
        description: "A fast, small, and feature-rich JavaScript library.",
        url: "https://jquery.com/",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg"
    },
    {
        name: "D3.js",
        description: "Data-Driven Documents.",
        url: "https://d3js.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/D3js.svg"
    },
    {
        name: "Lodash",
        description: "A modern JavaScript utility library delivering modularity, performance, & extras.",
        url: "https://lodash.com/",
        image: "https://lodash.com/assets/img/lodash.svg"
    },
    {
        name: "Moment.js",
        description: "Parse, validate, manipulate, and display dates and times in JavaScript.",
        url: "https://momentjs.com/",
        image: "https://momentjs.com/static/img/momentjs-logo.png"
    },
    {
        name: "Axios",
        description: "Promise based HTTP client for the browser and node.js.",
        url: "https://axios-http.com/",
        image: "https://axios-http.com/assets/logo.svg"
    },
    {
        name: "Chart.js",
        description: "Simple yet flexible JavaScript charting for designers & developers.",
        url: "https://www.chartjs.org/",
        image: "https://www.chartjs.org/media/logo-title.svg"
    },
    {
        name: "Three.js",
        description: "JavaScript 3D library.",
        url: "https://threejs.org/",
        image: "https://threejs.org/files/logo.svg"
    }
];

// Render Cards
const cardContainer = document.getElementById("cardContainer");

libraries.forEach(lib => {
    const cardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${lib.image}" class="card-img-top p-3" alt="${lib.name}" style="height: 180px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${lib.name}</h5>
                    <p class="card-text">${lib.description}</p>
                    <a href="${lib.url}" class="btn btn-primary" target="_blank">Learn More</a>
                </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});
