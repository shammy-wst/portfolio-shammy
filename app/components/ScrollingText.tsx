'use client'

import React from 'react'
import Image from 'next/image'
import styles from '../styles/ScrollingText.module.css'
import { useRef } from 'react'

const ScrollingText = () => {

    const firstText = useRef(null)
    const secondText = useRef(null)
    const slider = useRef(null)

  return (
    <main>
        <Image
        src={'/public/images/background.jpg'}
        fill={true}
        alt='background image'
        />
        <div className={styles.sliderContainer}>
            <p ref={firstText}>Freelance Developer -</p>
            <p ref={secondText}>Freelance Developer -</p>
        </div>
    </main>
  )
}

export default ScrollingText