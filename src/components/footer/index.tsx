import React from "react";

import style from "./index.module.css";

const currentYear = new Date().getFullYear();

export const Footer: React.ComponentType = () => (
    <div className={style.footer}>{`© Icham M'Madi ${currentYear}`}</div>
);
