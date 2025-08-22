import React from 'react'
import { Link } from 'react-router'
import { User, Code, Folder, Briefcase, BadgeCheck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className='w-full md:grid grid-cols-3 gap-4 pt-6 p-6 '>
        <Link to="/about" className='text-blue-500 '>
            <div className='flex flex-col items-center'>
                <User size={48} color='green'/>
                <p>About</p>
            </div>
        </Link>
        <Link to="/techs" className='text-blue-500 '>
            <div className='flex flex-col items-center'>
                <Code size={48} color='red' />
                <p>Techs</p>
            </div>
        </Link>
        <Link to="/projects" className='text-blue-500 '>
            <div className='flex flex-col items-center'>
                <Folder size={48} color='purple'/>
                <p>Projects</p>
            </div>
        </Link>
        <Link to="/experiences" className='text-blue-500'>
            <div className='flex flex-col items-center'>
            <Briefcase size={48} />
            <p>Experience</p>
            </div>
        </Link>

        <Link to="/certifications" className='text-blue-500'>
            <div className='flex flex-col items-center'>
            <BadgeCheck size={48} />
            <p>Certifications</p>
            </div>
        </Link>

        <Link to="/in-progress" className='text-blue-500'>
            <div className='flex flex-col items-center'>
            <Clock size={48} />
            <p>In progress</p>
            </div>
        </Link>
    </div>
  )
}
