
// Add more projects here as needed. Eventually switch over to pulling this info out of a database.
projectList = [
    {   
        _id: "project-nine",
        name: "Odin Tic Tac Toe",
        ref: "./projects/odin-tic-tac-toe/tic-tac-toe.html",
        star_ref: "#",
        view_ref: "./projects/odin-tic-tac-toe/tic-tac-toe.html",
        share_ref: "#",
        body_text: "In progress",
        course: "Javascript",
        course_ref: "https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
    },
    {   
        _id: "project-eight",
        name: "Odin Library",
        ref: "./projects/odin-library/library-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-library/library-home.html",
        share_ref: "#",
        body_text: "Making a library! Exploring Objects in Javascript.",
        course: "Javascript",
        course_ref: "https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
    },
    {   
        _id: "project-seven",
        name: "Odin Admin Dashboard",
        ref: "./projects/odin-admin-dashboard/dashboard-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-admin-dashboard/dashboard-home.html",
        share_ref: "#",
        body_text: "Grid layout, intermediate HTML/CSS. This Demo dash is a modified version of this original project.",
        course: "Inter. HTML/CSS",
        course_ref: "https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css"
    },
    {   
        _id: "project-six",
        name: "Odin Signup Form",
        ref: "./projects/odin-signup-form/signup-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-signup-form/signup-home.html",
        share_ref: "#",
        body_text: "Targeting more intermediate CSS/HTML topics. Fun fact: I did a spin off on this as a full stack project that"
                   + "I call The Positivity Board. Once I deploy the backend I'll add it as a project here...maybe.",
        course: "Inter. HTML/CSS",
        course_ref: "https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css"
    },
    {   
        _id: "project-five",
        name: "Odin Landing Page",
        ref: "./projects/odin-landing-page/landing-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-landing-page/landing-home.html",
        share_ref: "#",
        body_text: "Taking on a bigger page layout. This project showcases ability to set up a "
                    + "simple html framework for a project and use simple html/css concepts like FLEX!",
        course: "Foundations",
        course_ref: "https://www.theodinproject.com/paths/foundations/courses/foundations"
    },
    {   
        _id: "project-four",
        name: "Odin Calculator",
        ref: "./projects/odin-calculator/calculator-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-calculator/calculator-home.html",
        share_ref: "#",
        body_text: "Javascript logic exercise with UI. Mine actually calculates the whole expression"
                    +" once entered after doing well-formed validation.",
        course: "Foundations",
        course_ref: "https://www.theodinproject.com/paths/foundations/courses/foundations"
    },
    {   
        _id: "project-three",
        name: "Odin Etch-a-Sketch",
        ref: "./projects/odin-etchy-sketchy/etchy-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-etchy-sketchy/etchy-home.html",
        share_ref: "#",
        body_text: "More practice with Javascript and working with Dom manipulation. ",
        course: "Foundations",
        course_ref: "https://www.theodinproject.com/paths/foundations/courses/foundations"
    },
    {   
        _id: "project-two",
        name: "Odin Admin Dashboard",
        ref: "./projects/odin-rock-paper-scissors/rps-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-rock-paper-scissors/rps-home.html",
        share_ref: "#",
        body_text: "This is the refactored (UI added) version of the Rock/Paper/Scissors project. Learning basic "
                    +"Javascript and then how to hook it up to a UI.",
        course: "Foundations",
        course_ref: "https://www.theodinproject.com/paths/foundations/courses/foundations"
    },
    {   
        _id: "project-one",
        name: "Odin Recipes",
        ref: "./projects/odin-recipes/recipes-home.html",
        star_ref: "#",
        view_ref: "./projects/odin-recipes/recipes-home.html",
        share_ref: "#",
        body_text: "Simple HTML and CSS. Learning how to properly fill out a skeleton and link all necessary files."
                    + " Showcases ability to set up a simple html framework for a project, design and set up site navigation, and"
                    + " use simple html concepts like links, images, lists and bolding.",
        course: "Foundations",
        course_ref: "https://www.theodinproject.com/paths/foundations/courses/foundations"
    }
]




function addProjects() {
    const grid = document.querySelector("#projects-grid");
    

    projectList.forEach(project => {
        const card = document.createElement('div');
        card.id = project._id;
        card.classList.add("project");

        card.innerHTML = `
            <a class="project-name"  href=${project.ref}  target="_blank" rel="noopener noreferrer"><p class="project-name-p"> ${project.name}</p></a>
            <p class="project-text">
                ${project.body_text}
            </p>
            <div class="project-actions">
                <a class="project-course"  href=${project.course_ref}  target="_blank" rel="noopener noreferrer"><p class="project-course-p">${project.course}</p></a>
                <a href=${project.star_ref}><img class="project-action-icon star-icon" src="./images/star-plus-outline.svg" /></a>
                <a href=${project.view_ref}  target="_blank" rel="noopener noreferrer"><img class="project-action-icon view-icon" src="./images/eye-plus-outline.svg" /></a>
                <a href=${project.share_ref}><img class="project-action-icon share-icon" src="./images/share-variant.svg" /></a>
            </div>
        `;

        grid.appendChild(card);
        
    });
}


addProjects();