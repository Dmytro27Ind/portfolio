import React from 'react'
import Project, { ProjectProps } from './Project'

const MyProjects = () => {
  const projects: ProjectProps[] = [
    {
      title: 'React Music Player',
      description: 'This is a music player written in React using libraries such as Redux and MUI for UI elements. This web application also uses the Spotify API.',
      link: 'https://dmytro27ind.github.io/react-music-player/',
      tags: ['React', 'Redux', 'MUI', 'js'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-1.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-2.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-3.PNG', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-4.PNG', maxH: '500' },
      ]
    },
    {
      title: 'React Food Delivery',
      description: 'This is a website prototype for selling and delivering fast food.',
      link: 'https://dmytro27ind.github.io/react-food-delivery/',
      tags: ['React', 'Redux', 'MUI', 'js'],
      images: [
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-1.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-2.PNG' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-3.PNG', maxH: '500' },
        { img: 'https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-food-delivery-4.PNG', maxH: '500' },
      ]
    }
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
            tags={project.tags}
            images={project.images}
          />
        )}
      </div>
    </div>
  )
}

export default MyProjects