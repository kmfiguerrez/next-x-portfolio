'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Separator } from "@/components/ui/separator"
import Ipv4DialogContent from './ipv4-dialog-content'
import ProjectDialog from './project-dialog'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IPv6DialogContent from './ipv6-dialog-content'
import FCCDialogContent from './fcc-dialog-content'


interface ProjCardProps {
  imgSrc: string | StaticImageData,
  imgAlt: string,
  imgHeight: number,
  imgWidth: number,
  title: string,
  description: string,
  appType: 'frontend' | 'backend'
  dialog: 'ipv4' | 'ipv6' | 'microservices',
}

const ProjectCard = ({imgSrc, imgAlt, imgWidth, imgHeight, title, description, appType, dialog}: ProjCardProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Card 
      className='max-sm:mx-auto w-[320px] max-md:mx-auto' 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}      
      >
      <CardHeader>
        {/* <div className='relative h-[100px] mb-4'>
          <Image src={imgSrc} alt={imgAlt} fill />
        </div> */}
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} className='mx-auto'/>
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>{title}</CardTitle>
        <CardDescription>
          {isHover ? '"Click the button for Info"' : description}
        </CardDescription>
      </CardHeader>

      <CardContent>        
        <div className='flex justify-between'>
          <p className=' text-blue-500 font-semibold'>                        
            <span className='capitalize'>{appType}</span> App
          </p>

          {/* Will render ipv4 or ipv6 dialog */}
          {dialog === 'ipv4' &&
            <ProjectDialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`}
              title='IPV4 SUBNETTING'
              codeLink='https://github.com/kmfiguerrez/IPv4-Subnetting'
              demoLink='https://ipv4subnetting.netlify.app/'
            >
              <Ipv4DialogContent />
            </ProjectDialog>
          }

          {dialog === 'ipv6' &&
            <ProjectDialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`}
              title='IPV6 SUBNETTING'
              codeLink='https://github.com/kmfiguerrez/IPv6-Subnetting'
              demoLink='https://ipv6subnetting.netlify.app/'              
            >
              <IPv6DialogContent />
            </ProjectDialog>
          }

          {/* Change the code link */}
          {dialog === 'microservices' &&
            <ProjectDialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`}
              title='MICROSERVICES'
              codeLink=''
              demoLink='https://www.freecodecamp.org/certification/kmfiguerrez/back-end-development-and-apis'              
            >
              <FCCDialogContent />
            </ProjectDialog>
          } 
        </div>        
      </CardContent>
    </Card>
  )
}

export default ProjectCard