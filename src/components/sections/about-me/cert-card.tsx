import Image from "next/image"
import {
  Card,  
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CertCardProps {
  title: string,
  description: string,
  imgSrc: string,  
  h: number,
  w: number
  titleSize?: string,
}

const CertCard = ( {title, imgSrc, h, w, description, titleSize=''}: CertCardProps ) => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 max-w-fit">
      <CardHeader className="flex-row space-x-1">
        <Image src={imgSrc} alt='Google logo' height={h} width={w}/>
        <div>
          <CardTitle className={`${titleSize} wr`}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>        
      </CardHeader>
    </Card>
  )
}

export default CertCard