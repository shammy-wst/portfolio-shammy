

export interface Project{
    title: string;
    roles: string[];
    description: string;
    year: number;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        // eslint-disable-next-line max-len -- bru
        description: "Introducing my Netflix clone project with a standout feature: a captivating and user-friendly design. Its meticulously crafted interface ensures intuitive navigation, while its advanced recommendation algorithm offers personalized content suggestions. With a diverse content library, this project promises an immersive and tailored streaming experience that goes beyond the ordinary.",
        link: "https://flix-hive-web.vercel.app/",
        roles: [
            "Logo Design",
            "Website Design",
            "Website Development",
        ],
        tags: [
            "UX/UX Design",
            "Firebase",
            "MaterialUI",
            "NextJS",
            "Typescript",
        ],
        title: "FlixHive a responsive Netflix clone",
        year: 2023
    },
    {
        description: "Introducing Dashblade, a crypto app with a standout feature: a captivating and user-friendly design. Its meticulously crafted interface ensures intuitive navigation, while its advanced recommendation algorithm offers personalized content suggestions. With a diverse content library, this project promises an immersive and tailored streaming experience that goes beyond the ordinary.",
        link: "https://www.figma.com/proto/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?page-id=0%3A1&type=design&node-id=36-4877&viewport=971%2C364%2C0.11&t=anBOWyucATTe1EdI-1&scaling=scale-down&starting-point-node-id=36%3A4877&mode=design",
        roles: [
            "Logo Design",
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UI/UX Design",
            "Prototyping",
            "Figma",
        ],
        title: "Dashblade - Your dream crypto app",
        year: 2023
    },
    {
        description: "Welcome to the redesigned AFPA website, where cutting-edge design seamlessly blends with functionality. Embracing the latest trends, we've crafted an interface that's visually captivating and intuitively navigable. Explore our services, resources, and more in style, as we usher in a new era of user-centric browsing.",
        link: "https://effortless-cupcake-b35d18.netlify.app/",
        roles: [
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX/UX Design",
            "HTML/CSS Native",
            "Javascript",
        ],
        title: "AFPA (Re-Design)",
        year: 2022
    },
    {
        description: "Introducing a work that i had to do for Subskill, it was a test to see if i can work with them, i had to do a website for a client, i had to do the design and the development, i had to do it in 1 week.",
        link: "https://project-subskill.netlify.app/",
        roles: [
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX Design",
            "UI Design",
            "Development"
        ],
        title: "Subskill (Test)",
        year: 2023
    }
];
