"use client";

import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";

import style from "./index.module.css";

import type { Variants } from "framer-motion";

const container: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1,
        },
    },
};

const social: Variants = {
    hidden: {
        opacity: 0,
        y: "100%",
    },
    show: {
        opacity: 1,
        y: "0%",
    },
};

export const Contact: React.ComponentType = () => (
    <motion.div className={style.contact} id="contact">
        <SectionTitle text="Contact" />
        <motion.div
            className={style.socials}
            initial={"hidden"}
            variants={container}
            viewport={{ once: true }}
            whileInView={"show"}
        >
            <motion.div className={style.social} variants={social}>
                <a href="https://discord.gg/ZvsKxDY7f5"
                   title="Discord"
                   rel="noreferrer"
                   target="_blank"
                >
                    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M133.023 5.16115C141.202 6.81797 149.159 9.07767 156.841 11.8946C163.625 14.3825 169.346 19.1683 173.089 25.3926C187.33 49.0681 195.575 74.8745 196.427 103.4C196.81 116.253 189.937 128.251 178.65 134.397C170.6 138.781 162.649 142.225 154.766 144.986C151.823 146.017 148.622 144.943 146.963 142.408C146.148 141.163 145.357 139.902 144.589 138.625C143.634 137.037 144.265 134.58 146.56 133.535C148.8 132.515 151.001 131.422 153.157 130.262C157.108 128.136 157.162 122.856 153.938 120.329C152.191 118.959 149.821 118.658 147.783 119.564C117.006 133.241 83.3668 133.245 52.2012 119.55C50.1696 118.657 47.8123 118.957 46.0686 120.33C42.885 122.839 42.8704 128.125 46.8493 130.264C49.0072 131.423 51.2102 132.517 53.4547 133.539C55.7279 134.574 56.3464 137.001 55.4053 138.565C54.6312 139.851 53.8331 141.122 53.0116 142.376C51.3453 144.92 48.1342 145.997 45.189 144.964C37.319 142.204 29.3811 138.762 21.3415 134.384C10.0648 128.244 3.19666 116.258 3.56943 103.414C4.31172 77.8399 11.0667 51.9547 26.8162 25.5505C30.5786 19.2427 36.3436 14.3843 43.1949 11.8718C50.8513 9.06397 58.7831 6.81042 66.9362 5.15921C68.7669 4.78844 70.5352 5.6502 71.3391 7.23427C73.6459 11.7802 78.5663 14.5739 83.7259 14.0191C94.5145 12.859 105.38 12.8631 116.325 14.0336C121.47 14.5838 126.373 11.7872 128.648 7.23465C129.438 5.65457 131.195 4.79074 133.023 5.16115ZM45.2963 83.1424C45.2963 95.6276 54.6515 106.459 66.7765 106.459C79.0815 106.459 88.2599 95.6258 88.2567 83.1673C88.4405 70.6072 79.0404 59.8105 66.7765 59.8105C54.4545 59.8105 45.2963 70.6837 45.2963 83.1424ZM111.743 83.1424C111.743 95.6276 121.098 106.459 133.223 106.459C145.532 106.459 154.689 95.6208 154.703 83.17C154.888 70.6087 145.487 59.8105 133.223 59.8105C120.901 59.8105 111.743 70.6838 111.743 83.1424Z" fill="white" stroke="black" strokeWidth="10"/>
                    </svg>


                </a>
            </motion.div>
            <motion.div className={style.social} variants={social}>
                <a
                    href="https://github.com/shammy-wst"
                    rel="noreferrer"
                    target="_blank"
                    title="Github"
                >
                    <svg
                        fill="none"
                        height="48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            // eslint-disable-next-line max-len -- SVG path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                    </svg>
                </a>
            </motion.div>
            <motion.div className={style.social} variants={social}>
                <a
                    href="https://www.linkedin.com/in/aichammmadi/"
                    rel="noreferrer"
                    target="_blank"
                    title="LinkedIn"
                >
                    <svg
                        fill="none"
                        height="48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect height="12" width="4" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
            </motion.div>
        </motion.div>
    </motion.div>
);
