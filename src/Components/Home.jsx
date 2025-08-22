import React from 'react'
import { Link } from 'react-router'
import { User, Code, Folder, Briefcase, BadgeCheck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 p-6 min-h-[60vh]'>
      <Link to="/about" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <User size={48} color='green'/>
          <p className="mt-2 font-semibold">About</p>
        </div>
      </Link>
      <Link to="/techs" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <Code size={48} color='red' />
          <p className="mt-2 font-semibold">Techs</p>
        </div>
      </Link>
      <Link to="/projects" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <Folder size={48} color='purple'/>
          <p className="mt-2 font-semibold">Projects</p>
        </div>
      </Link>
      <Link to="/experiences" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <Briefcase size={48} />
          <p className="mt-2 font-semibold">Experience</p>
        </div>
      </Link>
      <Link to="/certifications" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <BadgeCheck size={48} />
          <p className="mt-2 font-semibold">Certifications</p>
        </div>
      </Link>
      <Link to="/in-progress" className='text-blue-500 h-full'>
        <div className='flex flex-col items-center justify-center h-full bg-white rounded-lg shadow p-8 hover:shadow-lg transition'>
          <Clock size={48} />
          <p className="mt-2 font-semibold">In progress</p>
        </div>
      </Link>
    </div>
  )
}
