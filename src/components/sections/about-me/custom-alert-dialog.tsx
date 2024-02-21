import { ReactNode } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



interface CertProps {
  children: ReactNode,
  webLink: string,
  title: string
  text: string
  
}

const CustomAlertDialog = ({children, webLink, title, text}: CertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-left max-w-max">
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-zinc-900 text-white border-white/20">
        <AlertDialogHeader>
          <AlertDialogTitle>{ title }</AlertDialogTitle>
          <AlertDialogDescription className="text-white/80">
            { text }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent border-white/20 hover:bg-zinc-700 hover:border-zinc-900 hover:text-white">Cancel</AlertDialogCancel>
          <a href={webLink} target="_blank">          
            <AlertDialogAction className="w-full border border-white/20 hover:bg-zinc-700 hover:border-zinc-900 hover:text-white">Continue</AlertDialogAction>
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default CustomAlertDialog