import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from "@/components/ui/popover"
import { X } from "lucide-react"


const FCCDialogContent = () => {
  return (
    <div className="py-4 px-1 text-black h-[350px] max-h-[400px] overflow-y-scroll">
      <section>
        <h5 className="font-semibold mb-2 underline underline-offset-4 decoration-sky-500 decoration-2">
          ABOUT
        </h5>
        <p>
          A <span className="font-semibold">microservice</span> is a small, independent, and modular component within a software architecture 
          that is designed to perform a specific function.
          <br />
          <br />
          This project is part of the Freecodecamp Back End Developement & APIs certification curriculum,
          where the students are the ones who will build the backend app.
        </p>      
          <br />
        <p>This project is composed of 5 microservices APIs:</p>
          
        <ul className="list-inside list-disc ps-4">
          <li className="font-semibold">Timestamp Microservice</li>
          <li className="font-semibold">Request Header Parser Microservice</li>
          <li className="font-semibold">URL Shortener Microservice</li>
          <li className="font-semibold">Exercise Tracker Microservice</li>
          <li className="font-semibold">File Metadata Microservice</li>
        </ul>
        <br />
        <p>Each of the services returns data in JSON format.</p>          
        <br />
        <p>
          <strong>Note:</strong>
          <br />
          The codes are hosted on Replit and I am using the free tier.
          Each microservice is hosted on its own repl virtual machines.          
          <strong>Replit might stop each virtual machines if requests to each APIs exceeded
          the data limit. </strong>
        </p>

      </section>

      <br />

      <section>
        <h5 className="font-semibold mb-2 underline underline-offset-4 decoration-sky-500 decoration-2">
          STUFF I ADDED IN
        </h5>
        <ul className="list-outside list-disc ps-4">
          <li className="mb-3">
            I used <span className="font-semibold">Next.js</span> because it allows devs to create static websites
            using <span className="font-semibold">React.js</span>. It also optimizes your build, so it provides a
            lot of heavy lifting for you.
          </li>
          <li className="mb-3">
            I used <span className="font-semibold">Typescript</span> to have type system checking at compile time.
            It also helps avoiding bugs during development.
          </li>
          <li className="mb-3">
            I used <span className="font-semibold">Tailwind</span> for easy styling and makes websites responsive
            across screen sizes way easier.
          </li>
          <li className="mb-3">
            I used <span className="font-semibold">Zod</span> for data validation for both compile time and runtime.
          </li>
          <li className="mb-3">
            I used the <span className="font-semibold">React Hook Form and Zod combo</span>  for sanitizing user data
            on forms easier.
          </li>          
        </ul>
      </section>

      <br />

      <section>
        <h5 className="font-semibold mb-2 underline underline-offset-4 decoration-sky-500 decoration-2">
          TECH USED
        </h5>
        <ul className="list-inside list-disc ps-4">
          <li>HTML</li>
          <li>Tailwind</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Zod</li>
          <li>React Hook Form</li>
          <li>Node.js</li>
          <li>REST API</li>
          <li>Mongoose.js</li>
          <li>MongoDB Atlas</li>
        </ul>
      </section>            
    </div>
  )
}

export function MicroservicesPopover() {
  return (
    <Popover modal={true}>
      <PopoverTrigger className='hover:font-semibold'>
        Code
      </PopoverTrigger>
      <PopoverContent side='top' className='min-w-max'>
        <h5 className='font-semibold mb-4 underline underline-offset-4 decoration-sky-500 decoration-2'>
          Code for?
        </h5>
        <ul className='list-inside list-image-[url("/next-portfolio/icons/code.svg")]'>

          <li className='max-sm:mb-2 mb-1 border-b text-black/80 hover:text-amber-400'>
            <a href="https://replit.com/@kmfiguerrez1/fcc-project-timestamp" target='_blank'>
              Timestamp Microservice
            </a>
          </li>
          <li className='max-sm:mb-2 mb-1 border-b text-black/80 hover:text-sky-500'>
            <a href="https://replit.com/@kmfiguerrez1/fcc-project-headerparser" target='_blank'>
              Headparser Microservice
            </a>
          </li>
          <li className='max-sm:mb-2 mb-1 border-b text-black/80 hover:text-pink-500'>
            <a href="https://replit.com/@kmfiguerrez1/fcc-project-urlshortener" target='_blank'>
              URL Shortener Microservice
            </a>
          </li>
          <li className='max-sm:mb-2 mb-1 border-b text-black/80 hover:text-violet-500'>
            <a href="https://replit.com/@kmfiguerrez1/fcc-project-exercisetracker" target='_blank'>
              Exercise Tracker Microservice
            </a>
          </li>
          <li className='text-black/80 hover:text-green-500'>
            <a href="https://replit.com/@kmfiguerrez1/fcc-project-filemetadata" target='_blank'>
              File Metadata Microservice
            </a>
          </li>

        </ul>
        <PopoverClose
         className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center  absolute top-[5px] right-[5px] hover:bg-violet-400 focus:shadow-[0_0_0_2px] focus:shadow-violet-700 outline-none"
        >
          <X className="h-4 w-4" />
        </PopoverClose>
        {/* <PopoverArrow className="" width={15} height={10} /> */}
      </PopoverContent>
    </Popover>
  )
}



export default FCCDialogContent