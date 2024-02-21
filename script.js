new Vue({
    el: '#app',
    data: {
        portfolio: {
            header: 'Pascal Benschop',
            description: 'msc Student at TU Delft',
            linkedin: 'https://www.linkedin.com/in/pascal-benschop-bsc',
            email: 'pascal3benschop@gmail.com',
            nationality: 'Dutch',
            aboutMe: 'I work hard in a team to make sure that we get the job done on time. I have a first certificate in English where I passed at level C1, my French and German are beginner level. My interest in technology started with Lego robots, then small game servers and now machine learning. I have experience with GIT, Docker, Kubernetes, SQL and I am open to learn new technologies / software.',
        },
        projects: [
            {
                title: 'Bachelor thesis',
                description: 'Finding trade-offs between the efficiency and accuracy of object detection models on event-based data',
                link: 'https://github.com/pascalbenschopTU/Event-based-object-detection',
                imageUrl: 'assets/images/bachelor_thesis.jpg',
            },
            {
                title: 'Master thesis',
                description: 'Finding out why depth is useful for computer vision models',
                link: '',
                imageUrl: 'assets/images/master_thesis.png',
            },
            {
                title: 'Tanks', 
                description: 'A front and backend application for an online multiplayer game, made with NodeJS', 
                link: 'https://github.com/pascalbenschopTU/tank',
                imageUrl: 'assets/images/tanks.png', 
            },
            {   
                title: 'Data visualisation', 
                description: 'Project for the course Data visualisation, made with D3.js', 
                link: 'https://github.com/pascalbenschopTU/InfoVis',
                imageUrl: 'assets/images/InfoVis.png', 
            },
            {
                title: 'Web-scale data management',
                description: 'Project for the course Web-scale data management, made with Python, MongoDB, PostgreSQL, redis, rabbitMQ, and docker',
                link: 'https://github.com/pascalbenschopTU/WDM_project/',
                imageUrl: '-',
            },
            {
                title: 'Novel Environments',
                description: 'Project for the course Building Serious Games, destined for a psychology experiment, made with Unity and C#',
                link: 'https://github.com/pascalbenschopTU/NovelEnvironments',
                imageUrl: 'assets/images/NovelEnvironments.png',
            }

            // Add more projects here
        ]
    },
    methods: {
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
        }
    },
});