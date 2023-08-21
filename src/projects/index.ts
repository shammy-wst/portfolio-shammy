

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
        link: "https://www.figma.com/file/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?type=design&node-id=0%3A1&mode=design&t=fLY9GZymYuUJXtie-1",
        roles: [
            "Logo Design",
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UI/UX Design",
            "Prototyping",
            "Cyrpto",
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
            "UX Design",
            "UI Design",
            "Figma"
        ],
        title: "AFPA (Re-Design)",
        year: 2022
    },
    {
        description: "More coming soon ;)",
        link: "",
        roles: [
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX Design",
            "UI Design",
            "Development"
        ],
        title: "Project in progress...",
        year: 2023
    }
];
