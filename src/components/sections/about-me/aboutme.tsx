import SkillsTabs from './skills-tabs'
import CustomAlertDialog from './custom-alert-dialog'
import CertCard from './cert-card'
import WiwoCard from './wiwo-card'
import Image from 'next/image'

// Static assets paths
import googleCert from '../../../../public/images/google-cert.png'
import fccLogo from '../../../../public/logos/fcc-logo.svg.svg'
// import itCert from '../../../../public/images/it-cert.jpg'



const AboutMeSection = () => {
  return (
    <section id='about-me' className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 md:mb-16 md:text-5xl">
        ABOUT ME
      </h2>

      {/* What I'm Working On block */}
      <div id='wiwo-block' className='mb-10'>     
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">
          WHAT I'M WORKING ON
        </h3>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className='mb-8'>
            <WiwoCard 
              imgSrc='/next-portfolio/images/web-dev.jpg'
              imgAlt='Web Development Logo'
              title='Web Development'
              description='#coding'
              content="I'm doing Web Development projects."
            />
          </div>
          <div className='md:basis-1/2'>
            <WiwoCard 
              imgSrc={'/next-portfolio/images/it-cert.jpg'}
              imgAlt='IT cert logo'
              title='IT Certifications'
              description='#infrastructure #coding'
              content="I'm taking IT certifications."
            />
          </div>
        </div>

      </div>

      {/* Certs block */}
      <div id='certs-block' className='mb-10'>
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">CERTIFICATIONS</h3>
        
        {/* Cards */}
        {/* <div className="flex flex-col md:flex-row md:justify-between"> */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 ">
          {/* Google card*/}
          <div>            
            <CustomAlertDialog 
              webLink='https://www.coursera.org/account/accomplishments/specialization/certificate/9UQS5TTQDK9X'
              title='View the cert?'
              text='This link will lead you to Coursera site.'
            >
              <CertCard 
                title='Google IT Support'
                description='Google'
                imgSrc='/next-portfolio/logos/google.svg'
                h={50}
                w={50}
              />
            </CustomAlertDialog>
          </div>
          
          <div>            
            <CustomAlertDialog 
              webLink='https://www.freecodecamp.org/certification/kmfiguerrez/back-end-development-and-apis'
              title='View the cert?'
              text='This link will lead you to Freecodecamp site.'
            >
              <CertCard 
                title='Back End Development and APIs'
                description='Freecodecamp'
                imgSrc={fccLogo}
                h={50}
                w={50}
              />
            </CustomAlertDialog>
          </div>

        </div>

      </div>

      {/* Badges block */}
      <div id='badge-block' className='mb-10'>
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">BADGES</h3>
        
        {/* Image */}
        {/* <div className="flex flex-col md:flex-row md:justify-between"> */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 ">          
          <CustomAlertDialog
            webLink='https://www.credly.com/badges/b166c276-cf7f-45d6-a0b2-6f59584dcf48/public_url'
            title='View the badge?'
            text='This link will lead you to Credly.'
          >
            <Image
              src={googleCert}
              alt='Google IT Support badge'
              height={210}
              width={210}              
            />
          </CustomAlertDialog>
        </div>

      </div>

      {/* Skills block */}
      <div id='skills-block' className='mb-32'>

        {/* Sub Heading */}
        <h3 className="text-xl text-blue-600 mb-6 md:text-2xl md:mb-8">
          SKILLS
        </h3>
                
        <SkillsTabs />

      </div>

    </section>
  )
}

export default AboutMeSection