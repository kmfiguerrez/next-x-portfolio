import ThreadCard from "./thread-card"
import ProjectCard from "./project-card"

// Static Assets
import apiPic from './../../../../public/images/api.png'
import ipv4Logo from './../../../../public/logos/ipv4.svg'
import ipv6Logo from './../../../../public/logos/ipv6.svg'



const ProjectSection = () => {
  return (
    <section id="projects" className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 md:text-5xl md:mb-16">
        PROJECTS
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-y-8 mb-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        
        
        <div>
          <ProjectCard
            imgSrc={apiPic}
            imgAlt="A microservice picture."
            imgHeight={100}
            imgWidth={100}
            title="MICROSERVICES"
            description="#coding"
            appType="backend"
            dialog='microservices'
          />
        </div>        

        <div>
          <ProjectCard
            imgSrc={ipv6Logo}
            imgAlt="Ipv6 logo"
            imgHeight={130}
            imgWidth={130}
            title="IPV6 SUBNETTING"
            description="#coding"
            appType="frontend"
            dialog="ipv6"
          />
        </div>

        <div>
          <ProjectCard            
            imgSrc={ipv4Logo}
            imgWidth={130}
            imgHeight={130}
            imgAlt="Ipv4 logo"
            title="IPV4 SUBNETTING"
            description="#coding"
            appType="frontend"
            dialog='ipv4'
          />
        </div>
        <div>
          <ThreadCard />
        </div>        
      </div>

    </section>
  )
}

export default ProjectSection