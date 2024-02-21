import Image from "next/image"
import vm from '../../../../public/logos/vm.svg'
import docker from '../../../../public/logos/docker.svg'



const InfrastructureSkills = () => {
  return (
    // GRID
    <div className="grid grid-cols-2 gap-x-4 min-h-[445.78px]">
      
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-switch.svg'
          alt='Cisco switch logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Switching</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-router.svg'
          alt='Cisco router logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Routing</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-wrouter.svg'
          alt='Cisco wireless router logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Wireless LANS</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-accesspoint.svg'
          alt='Cisco accesspoint logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>APs</p>
      </div>
      {/* <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-fileserver.svg'
          alt='Cisco fileserver logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>DNS</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/cisco-fileserver.svg'
          alt='Cisco fileserver logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>DHCP</p>
      </div> */}
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/windows-os.svg'
          alt='Windows OS logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Windows OS</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/linux-os.svg'
          alt='Windows OS logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Linux OS</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/powershell.svg'
          alt='Powershell logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Powershell</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/bash.svg'
          alt='BASH logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>BASH</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src={vm}
          alt='BASH logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>Virtual Machine</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src={docker}
          alt='BASH logo'
          height={25}
          width={25}
          />
          <p className='ms-1'>Docker</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/networking.svg'
          alt='Network logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>IPv4 Subnetting</p>
      </div>
      <div className='flex items-center'>
        <Image 
          src='/next-portfolio/icons/networking.svg'
          alt='Network logo'
          height={23}
          width={23}
          />
          <p className='ms-2'>IPv6 Subnetting</p>
      </div>

    </div>
  )
}

export default InfrastructureSkills