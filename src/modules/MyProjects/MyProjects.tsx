import React from 'react'
import Project, { ProjectProps } from './Project'

const MyProjects = () => {
  const projects: ProjectProps[] = [
    {
      title: 'React Music Player',
      description: 'This is a music player written in React using libraries such as Redux and MUI for UI elements. This web application also uses the Spotify API.',
      link: 'https://dmytro27ind.github.io/react-music-player/',
      git: 'https://github.com/Dmytro27Ind/react-music-player',
      tags: ['React', 'Redux', 'MUI', 'js'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-1.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-2.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-3.PNG', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-4.PNG', maxH: '500' },
      ]
    },
    {
      title: 'Portfolio',
      description: 'This project is my portfolio with a short cv and my projects at the end. Also this project uses github API.',
      link: 'https://dmytro27ind.github.io/portfolio/',
      git: 'https://github.com/Dmytro27Ind/portfolio',
      tags: ['React', 'TypeScript', 'Tailwind', 'Redux'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/portfolio-1.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/portfolio-2.PNG' },
      ],
      left: true,
    },
    {
      title: 'React Food Delivery',
      description: 'This is a website prototype for selling and delivering fast food.',
      link: 'https://dmytro27ind.github.io/react-food-delivery/',
      git: 'https://github.com/Dmytro27Ind/react-food-delivery',
      tags: ['React', 'Redux', 'MUI', 'js'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-1.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-2.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-3.PNG', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-4.PNG', maxH: '500' },
      ],
    },
    {
      title: 'City Desk',
      description: 'Application for notification of failures or breakdowns in the city. We want to make city better and more comfortable for all it\'s owners.',
      git: 'https://github.com/Dmytro27Ind/city-desk',
      tags: ['React Native', 'Redux', 'js'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/city-desk-1.jpg', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/city-desk-2.jpg', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/city-desk-3.jpg', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/city-desk-4.jpg', maxH: '500' },
      ],
      left: true,
    },
  ]
  return (
    <div id='projects' className='my-8 flex flex-col items-center'>
      <h2 className='h2-title mb-24'>Projects</h2>
      <div className='flex flex-col gap-32'>
        {projects.map((project, ind) =>
          <Project key={ind}
            title={project.title}
            description={project.description}
            link={project.link}
            git={project.git}
            tags={project.tags}
            images={project.images}
            left={project.left}
          />
        )}
      </div>
    </div>
  )
}

export default MyProjects