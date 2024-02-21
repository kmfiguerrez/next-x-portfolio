import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"


interface WiwoCardProps {
  imgSrc: string | StaticImageData,
  imgAlt: string,
  title: string,
  description: string,
  content: string,
}

const WiwoCard = ({imgSrc, imgAlt, title, description, content}: WiwoCardProps) => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 sm:w-[380px]">
      <CardHeader>
        <img src={imgSrc as string} alt={imgAlt} className="rounded-sm" />
        {/* <Image
          src={imgSrc}
          alt={imgAlt}
          height={100}
          width={500}
        /> */}
        <CardTitle className='tracking-wide'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>      
    </Card>

  )
}

export default WiwoCard