'use client'

import { navigationLinks } from '@/constants/nav-links'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Nav() {
  return (
    <Disclosure as='nav' className='fixed z-40 w-full bg-zinc-900 bg-gradient-to-b from-zinc-400/30 sm:py-4'>
      {({ open }) => (
        <div className='container px-1'>

          <div className='flex items-center justify-between'>
            {/* flex item */}
            <div className='sm:hidden order-last'>            
              <Disclosure.Button className="rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">                
                {open ? (
                  <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            {/* flex item */}
            <div className='tracking-wide text-xl'>              
              KMF
            </div>
            {/* flex item */}
            <div className='max-sm:hidden'>
              <ul className='flex'>
                {
                  navigationLinks.map(link => (
                    <li
                      key={link.href}
                      className='mx-2'
                    >
                      <Link href={link.href} className='transition-colors text-zinc-400 hover:text-zinc-200'>
                        {link.label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}          
          <Transition        
            show={open}
            enter="transition-all duration-300"
            enterFrom="h-0"
            enterTo="h-[160px]"
            leave="transition-all duration-300"
            leaveFrom="h-[160px]"
            leaveTo="h-0"
            className='overflow-hidden'
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel className="sm:hidden" static>
              <div>
                <ul className='flex flex-col'>
                  {
                    navigationLinks.map(link => (
                      <Link href={link.href} key={link.href}>
                        <li                          
                          className='transition-colors mx-1 my-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded-md ps-1 py-1'
                        >
                          {link.label}                      
                        </li>
                      </Link>
                    ))
                  }
                </ul>
              </div>
            </Disclosure.Panel>
          </Transition>

        </div>
      )}
    </Disclosure>
  )
}