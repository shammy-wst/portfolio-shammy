import React from "react";

import { SectionTitle } from "../section-title";
import { projects } from "@src/projects";

import { ProjectCard } from "./card";
import style from "./index.module.css";

export const RecentProjects: React.ComponentType = () => (
    <div className={style.recent} id="projects">
        <SectionTitle text="Projects" />
        <div className={style.projects}>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    </div>
);
