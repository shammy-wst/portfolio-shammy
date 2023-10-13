import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
            <header className='flex bg-black text-white flex-row justify-between border-2 border-white p-6 w-3/5 m-0 '>
                <figure className='flex p-0 animate-bounceSlow'>
                    <svg className="w-full" width="27" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20H8V19H6V18H4V17H2V16H0V4H2V3H4V2H6V1H8V0H10V1H12V2H14V3H16V4H18V16H16V17H14V18H12V19H10M10 9V8H12V7H14V6H16V5H14V4H12V3H10V2H8V3H6V4H4V5H2V6H4V7H6V8H8V9M8 17V10H6V9H4V8H2V15H4V16H6V17M12 17V16H14V15H16V8H14V9H12V10H10V17H12Z" fill="white"/>
                    </svg>
                </figure>
                <nav className='flex flex-row'>
                    <ul className='flex flex-row justify-between gap-20'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };

export default Header