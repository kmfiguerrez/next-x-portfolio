import Image from "next/image"
// Images route.
import framerMotion from '../../../../public/logos/framer-motion.png'
import nest from '../../../../public/logos/nest.svg'
import shadcn from '../../../../public/logos/shadcn-ui.png'


const CodingSKills = () => {
  return (
    // GRID
    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
      
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/html5.svg'
          alt='HTML 5 Logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>HTML</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/css.svg'
          alt='CSS 3 Logo'
          height={23}
           width={23}
        />
        <p className='ms-2'>CSS</p>
      </div>    
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/sass.svg'
          alt='SASS Logo'
          height={28}
          width={28}            
        />
        <p className='ms-2'>SASS</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/bootstrap.svg'
          alt='Bootstrap Logo'
          height={30}
          width={30}
        />
        <p className='ms-2'>Bootstrap</p>
      </div>        
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/tailwind.svg'
          alt='Tailwind Logo'
          height={28}
          width={28}            
        />
        <p className='ms-2'>Tailwind</p>
      </div> 
      <div className='flex items-center'>
        <Image 
          src={framerMotion}
          alt='Framer Motion Logo'
          height={27}
          width={27}            
        />
        <p className='ms-2'>Framer Motion</p>
      </div> 
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/javascript.svg'
          alt='Javascript Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>Javascript</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/typescript.svg'
          alt='Typescript Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>Typescript</p>
      </div>        
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/react.svg'
          alt='React Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>React</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/next.svg'
          alt='Next.js Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>NEXT</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/zod.svg'
          alt='Zod Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>Zod</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src={shadcn}
          alt='Shadcn UI Logo'
          height={25}
          width={25}
          className="rounded-sm"
        />
        <p className='ms-2'>Shadcn UI</p>
      </div>                           
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/express.svg'
          alt='Express.js Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>Express</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src={nest}
          alt='Nest.js Logo'
          height={25}
          width={25}
        />
        <p className='ms-2'>NEST</p>
      </div>         
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/node.svg'
          alt='Node.js Logo'
          height={28}
          width={28}
        />
        <p className='ms-2'>Node</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/mongodb.svg'
          alt='MongoDB Logo'
          height={28}
          width={28}
        />
        <p className='ms-1'>MongoDB</p>
      </div>
      {/* <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/vite.svg'
          alt='Vite Logo'
          height={28}
          width={28}
        />
        <p className='ms-2'>Vite</p>
      </div> */}
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/git.svg'
          alt='Git Logo'
          height={28}
          width={28}
        />
        <p className='ms-2'>GIT</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/logos/github.svg'
          alt='Git Logo'
          height={28}
          width={28}
        />
        <p className='ms-2'>GitHub</p>
      </div>                        

    </div>
  )
}

export default CodingSKills