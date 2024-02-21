import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ThreadCard = () => {
  return (
    <Card className='max-sm:mx-auto w-[320px] max-md:mx-auto'>
      <CardHeader>        
        <Image 
          src='/next-portfolio/icons/gear.svg'
          alt='Ipv4 logo'
          height={70}
          width={70}
          className='animate-spin-slow mx-auto mb-7'
        />        
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>THREAD CLONE</CardTitle>
        <CardDescription>UNDER CONSTRUCTION</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <p className='text-red-500 font-semibold basis-3/4'>
            Both UI and logic are not yet finished
          </p>
          <Image 
           src='/next-portfolio/icons/warning.svg'
           alt='Plus-Circle icon'
           height={30}
           width={30}          
          />
        </div>        
      </CardContent>      
    </Card>
  )
}

export default ThreadCard