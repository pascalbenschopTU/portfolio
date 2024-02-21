new Vue({
    el: '#app',
    data: {
        portfolio: {
            header: 'Welcome to my portfolio!',
            name: 'Pascal Benschop',
            description: 'msc Student at TU Delft',
            linkedin: 'https://www.linkedin.com/in/pascal-benschop-bsc',
            email: 'pascal3benschop@gmail.com',
            nationality: 'Dutch',
            aboutMe: 'I work hard in a team to make sure that we get the job done on time. I got a first certificate in English where I passed at level C1, my French and German are beginner level. My interest in technology started with Lego robots, then small game servers and now machine learning. I have experience with GIT, Docker, Kubernetes, SQL and I am open to learn new technologies / software.',
        },
        projects: [
            {
                title: 'Tanks', 
                description: 'A front and backend application for an online multiplayer game, made with NodeJS', 
                link: 'https://github.com/pascalbenschopTU/tank',
                imageUrl: 'assets/images/tank.png',
                containerClass: '' 
            },
            {   
                title: 'Data visualisation', 
                description: 'Project for the course Data visualisation, made with D3.js', 
                link: 'https://github.com/pascalbenschopTU/InfoVis',
                imageUrl: 'assets/images/infovis.png', 
            }
            // Add more projects here
        ]
    },
    methods: {
        handleImageError(event) {
            const image = event.target;
            const projectContainer = image.closest('.project-container-right');
            if (projectContainer) {
                projectContainer.remove();
            }
        }
    },
});