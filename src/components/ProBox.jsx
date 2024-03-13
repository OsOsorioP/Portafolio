import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ProBox = ({ title, img, description, techno1, techno2, techno3, code, demo, scrollY, icon, cName }) => {
    
    return (
        <>
            <div className='pro'>
                <div className='pro__1'>
                    <p>{title}</p>
                    <div className='stack'>
                        <p>Tech Stack</p>
                        <div className={techno1 ? techno2 : 'hidden'}>
                            <img src={techno1} alt="skill-icon" width={30} />
                        </div>
                        <div className={techno2 ? techno2 : 'hidden'}>
                            <img src={techno2} alt="skill-icon" width={30} />
                        </div>
                        <div className={techno3 ? techno3 : 'hidden'}>
                            <img src={techno3} alt="skill-icon" width={30} />
                        </div>
                    </div>
                    <div className='pro__img'>
                            <img className='slider' src={img} />
                    </div>
                    <div className='pro__text'>
                        <p>{description}</p>
                    </div>
                    <div className='links'>
                        <a  href={code}> <FaGithub size={25} /> </a>
                        <a  href={demo}> <FaEye size={25} /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}
