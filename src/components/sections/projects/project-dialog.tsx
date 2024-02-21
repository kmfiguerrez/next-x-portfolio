import Image from 'next/image'
import { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { MicroservicesPopover } from './fcc-dialog-content'






// type imageProps = React.ImgHTMLAttributes<HTMLImageElement>
interface ProjDialogProps {
  className: string,
  title: string,
  codeLink: string,
  demoLink: string,
  children: ReactNode,
}

const ProjectDialog = ({ className, title, codeLink, demoLink, children }: ProjDialogProps) => {
  

  return (
    <Dialog>

      <DialogTrigger>
        <Image 
           src='/next-portfolio/icons/plus-circle.svg'
           alt='Plus-Circle icon'
           height={30}
           width={30}
           className={className}     
        />
      </DialogTrigger>

      <DialogContent onInteractOutside={e => e.preventDefault()}>
        <DialogHeader className="border-b pb-2">
          <DialogTitle className="text-black font-bold text-lg">{title}</DialogTitle>          
        </DialogHeader>
        
        {/* Body */}        
        {children}
        
        <DialogFooter className="flex-row justify-center text-black border-t pt-4 space-x-8">
          {/* Code link */}
          <div className='flex space-x-2'>
            <Image 
              src='/next-portfolio/icons/code.svg'
              alt='A code icon'
              height={25}
              width={25}
            />
            {/* For now will make a choice here.
                Because the microservices project are hosted on replit,
                and each services are hosted on each own VMs.
            */}

            {title.toLowerCase() === 'microservices' ? (
                <MicroservicesPopover />
              ) : (
            
              <a href={codeLink} target="_blank" className='hover:font-semibold'>
                Code
              </a>
            )}

          </div>

          {/* Demo link */}
          <div className='flex space-x-2'>
            <Image 
              src='/next-portfolio/icons/demo.svg'
              alt='A demo icon'
              height={25}
              width={25}
            />
            <a href={demoLink} target="_blank" className='hover:font-semibold'>
              Demo
            </a>
          </div>
        </DialogFooter>
        
      </DialogContent>

    </Dialog>

  )
}

export default ProjectDialog


