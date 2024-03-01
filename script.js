new Vue({
    el: '#app',
    data: {
        portfolio: {},
        projects: [],
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            fetch('assets/data.json')
                .then(response => response.json())
                .then(jsonContents => {
                    // console.log('Data loaded:', data.data);
                    this.portfolio = jsonContents.data.portfolio;
                    this.projects = jsonContents.data.projects;
                })
                .catch(error => {
                    console.error('Error loading data:', error);
                });
        },
        handleImageError(event) {
            const image = event.target;
            const projectContainer = image.closest('.project-container');
            projectContainer.style.gridTemplateColumns = '1fr';
        },
        openFullscreenImage(event) {
            const image = event.target;
            image.classList.add('fullscreen');
            this.createBackButton(image);
        },
        createBackButton(image) {
            const backButton = document.createElement('button');
            backButton.innerText = 'Go Back';
            backButton.classList.add('back-button');
            backButton.onclick = () => this.closeFullscreenImage(image);
            image.parentElement.appendChild(backButton);
        },
        closeFullscreenImage(image) {
            image.classList.remove('fullscreen');
            const backButton = image.parentElement.querySelector('.back-button');
            backButton.remove();
        },
        getLanguageClass: function(language) {
            return language.toLowerCase().replace(' ', '-');
        }
    },
});