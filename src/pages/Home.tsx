
import { me } from '@src/data/me'
import React from 'react' // Not needed for modern React with JSX transform
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DrawerAppBar from '@components/AppBar';

function App() {



  return (
    <>
        <title>{me.name} - {me.title}</title>
        <div id="container" className='pl-5 pr-5 sm:pl-20 sm:pr-20 sm:pt-10 w-full'>
            <div className='flex sm:hidden justify-between items-center pt-5 pb-5'>
                <DrawerAppBar />
            </div>
            
            <header className="flex flex-col md:flex-row justify-between items-center pb-15 gap-10 md:gap-0">
                <div className='flex flex-col items-center gap-5 md:items-start md:gap-0'>
                    <div className='flex object-left font-extrabold text-3xl'>
                        <h1>{me.name}</h1>
                    </div>
                    <div className='flex object-right text-gray-500 text-lg'>
                        <h2>{me.title}</h2>
                    </div>
                </div>
                <div>
                    {/* <h1 className='font-extrabold text-3xl animate-bounce'>About</h1> */}
                </div>
            </header>
            <main className="flex flex-col md:flex-row gap-10 md:gap-20 scroll-smooth w-f100 items-center">
                <div className="flex flex-col md:self-start md:w-1/3 text-left md:sticky top-10 ">
                    <div className="flex">
                        <p className='flex border-t border-gray-00 pb-15 pl-2 sticky top-0 z-10'>
                            {me.about}
                        </p>
                    </div>
                    <div className='flex gap-5 border-t border-gray-00 pl-2 pt-2 pb-2'>
                        <a href={me.contact.github} target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                        <a href={me.contact.linkedin} target="_blank" rel="noopener noreferrer"> 
                            <Linkedin />
                        </a>
                        <a href="mailto:json.luck@outlook.com" target="_blank" rel="noopener noreferrer">
                            <Mail />
                        </a>
                        <a>
                            Resume
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:w-2/3 text-left ">
                    <div className="flex flex-col md:w-full md:items-center gap-5 sm:flex-row md:gap-0 space-x-4 sm:sticky top-10 z-10 bg-gray-800/50 p-4 rounded-lg pt-5 mb-10 self-center md:justify-center backdrop-blur">
                        <a href="#experience" className="flex h-min w-25 px-2 py-1 bg-blue-500/95 text-white rounded justify-center hover:bg-white hover:text-black ">Experience</a>
                        <a href="#projects" className="flex h-min w-25 px-2 py-1 bg-green-500/95 text-white rounded justify-center hover:bg-white hover:text-black ">Projects</a>
                        <a href="#skills" className="flex h-min w-25 px-2 py-1 bg-purple-500/95 text-white rounded justify-center hover:bg-white hover:text-black ">Skills</a>
                        <a href="#education" className="flex h-min w-25 px-2 py-1 bg-yellow-500/95 text-white rounded justify-center hover:bg-white hover:text-black ">Education</a>
                    </div>
                    <div>
                        <section id='experience' className="flex flex-col pb-5 scroll-mt-32">
                            <div className="flex border-t border-blue-500 pt-5 pb-5">
                                <p className='font-bold'>Experience</p>
                            </div>
                            {me.experience.map((job, index) => (
                                <Timeline
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                        flex: 0,
                                        padding: 0,
                                        },
                                    }}
                                    >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                <p className="text-gray-500">{job.duration}</p>
                                                <div key={index} className="flex flex-col border-gray-00 pt-3 pb-7 pl-5">
                                                        <h3 className="font-bold">{job.title} at {job.company}</h3>
                                                        <ul className="list-disc pl-5">
                                                            {job.responsibilities.map((responsibility, rIndex) => (
                                                                <li key={rIndex}>{responsibility}</li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                    {job.keyAchievements && job.keyAchievements.length > 0 && (
                                                        <div className="mt-2 border border-gray-700 rounded-lg p-4 bg-gray-950">
                                                            <h4 className="font-bold">Key Achievements:</h4>
                                                            <ul className="list-disc pl-5">
                                                                {job.keyAchievements.map((achievement, aIndex) => (
                                                                    <li key={aIndex}>{achievement}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </TimelineContent>
                                        </TimelineItem>
                                </Timeline>
                            ))}
                        </section>
                        <section id='projects' className="flex flex-col pb-5 scroll-mt-32">
                            <div className="flex border-t border-green-500 pt-5 pb-5">
                                <p className='font-bold'>Projects</p>
                            </div>
                            {me.projects.map((project, index) => (
                                <div key={index} className="flex flex-col border-t border-gray-00 pt-3 pb-7 pl-5">
                                    <h3 className="font-bold">{project.name}</h3>
                                    <p className="text-gray-500">{project.description}</p>
                                    <ul className="list-disc pl-5">
                                        {project.technologies.map((tech, tIndex) => (
                                            <li key={tIndex}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                        <section id='skills' className="flex flex-col pb-5 scroll-mt-32">
                            <div className="flex border-t border-purple-500 pt-5 pb-5">
                                <p className='font-bold'>Skills</p>
                            </div>
                            {me.skills && (
                                <div className="flex flex-col pb-7 pl-5">
                                    <div>
                                        <div className="flex items-center">
                                            <h4 className="font-bold text-lg mr-4">Backend</h4>
                                            <div className="flex-grow border-b border-gray-700"></div>
                                        </div>
                                        <ul className="list-disc pl-10 columns-1 md:columns-2 lg:columns-3 xl:columns-4 border border-gray-700 rounded-lg p-4 self-center">
                                            {me.skills.backendSkills.map((skill, index) => (
                                                <p key={index} className="flex border border-gray-700 rounded-lg m-4 p-2 place-content-center">{skill}</p>
                                            ))}
                                        </ul>
                                        <div className="flex items-center mt-5">
                                            <h4 className="font-bold text-lg mr-4">Frontend</h4>
                                            <div className="flex-grow border-b border-gray-700"></div>
                                        </div>
                                        <ul className="list-disc pl-10 columns-1 sm:columns-2 md:columns-2 border border-gray-700 rounded-lg p-4">
                                            {me.skills.frontendSkills.map((skill, index) => (
                                                <p key={index} className="flex border border-gray-700 rounded-lg m-4 p-2 place-content-center">{skill}</p>
                                            ))}
                                        </ul>
                                        <div className="flex items-center mt-5">
                                            <h4 className="font-bold text-lg mr-4">Tools & Platforms</h4>
                                            <div className="flex-grow border-b border-gray-700"></div>
                                        </div>
                                        <ul className="list-disc pl-10 columns-1 md:columns-2 lg:columns-3 xl:columns-4 border border-gray-700 rounded-lg p-4">
                                            {me.skills.toolsPlatforms.map((skill, index) => (
                                                <p key={index} className="flex border border-gray-700 rounded-lg m-4 p-2 place-content-center">{skill}</p>
                                            ))}
                                        </ul>
                                        <div className="flex items-center mt-5">
                                            <h4 className="font-bold text-lg mr-4">Data</h4>
                                            <div className="flex-grow border-b border-gray-700"></div>
                                        </div>
                                        <ul className="list-disc pl-10 border columns-1 sm:columns-2 border-gray-700 rounded-lg p-4">
                                            {me.skills.dataSkills.map((skill, index) => (
                                                <p key={index} className="flex border border-gray-700 rounded-lg m-4 p-2 place-content-center">{skill}</p>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </section>
                        <section id='education' className="flex flex-col pb-5 scroll-mt-32">
                            <div className="flex border-t border-yellow-500 pt-5 pb-5">
                                <p className='font-bold'>Education</p>
                            </div>
                            {me.education.map((edu, index) => (
                                <div key={index} className="flex flex-col border-t border-gray-00 pt-3 pb-7 pl-5">
                                    <h3 className="font-bold">{edu.degree}</h3>
                                    <p className="text-gray-500">{edu.institution} - {edu.year}</p>
                                    <p className="text-gray-500">GPA: {edu.gpa} {edu.honors == "" ? "" : `(${edu.honors})`}</p>
                                    <h4 className="font-bold pt-15">Relevant Courses:</h4>
                                    <ul className="list-disc pl-5 pb-3 columns-1 md:columns-2">
                                        {edu.relevantCourses.map((course, cIndex) => (
                                            <li key={cIndex}>{course}</li>
                                        ))}
                                    </ul>
                                    {edu.funFacts && edu.funFacts.length > 0 && (
                                        <div className="mt-2">
                                            <h4 className="font-bold">Fun Facts:</h4>
                                            <ul className="list-disc pl-5 ">
                                                {edu.funFacts.map((fact, fIndex) => (
                                                    <li key={fIndex}>{fact}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>  
                    </div>
                </div>
            </main>
            <footer className="flex justify-center mt-50">
                <div>
                    <p className='text-xs'>Built with React, Tailwind CSS, and Vite</p>
                </div>
            </footer>
        </div>
    </>
  )
}

export default App
