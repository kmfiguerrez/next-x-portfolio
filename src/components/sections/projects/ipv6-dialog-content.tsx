import React from 'react'

const IPv6DialogContent = () => {
  return (
    <div className="py-4 px-1 text-black h-[350px] max-h-[400px] overflow-y-scroll">

      <h5 className="font-semibold mb-2">ABOUT</h5>
      <p>
        IPv6 Address subnetting is the process of splitting a network into smaller networks known as Subnets.
        This project is a web app and can be used by anyone whether they're learning or practicing subnetting
        for free.
        <br />
        <br />
        I developed this project as one of my personal project to help me check my work or whenever I'm
        practicing ipv6 subnetting.
        <br />
        <br />
        This also useful to anyone who's going for the CCNA exam or any other equivalent certifications.
        <br />
        <br />
        <strong>Note:</strong> This app is on a free hosting plan so access to this app is limited.
      </p>
      <br />
      <h5 className="font-semibold mb-2">CHALLENGES I FACED</h5>
      <ul className="list-outside list-disc ps-4">
        <li className='mb-1'>
          IPv6 works with a very large number that is outside Javascript max safe integers.
          So Javascript loses precision when it comes to handling those numbers outside its max safe limit
          which is very problematic.
        </li>
        <li>Organizing code.</li>
      </ul>
      <br />
      <h5 className="font-semibold mb-2">SOLUTIONS I MADE</h5>
      <ul className="list-outside list-disc ps-4">
        <li className='mb-1'>
          I used a newer Javascript data type called <strong>BigInt</strong> that came with ES2020 that can handle numbers
          outside Javascript max safe integers.
        </li>
        <li>
          I used a class based <strong>Object-Oriented Programming</strong> to group related code that is responsible
          for calculating prefixes (subnets). I also used Functional Programming to make each custom
          algorithm a function so that they will be resuable and easier to read.
        </li>
      </ul>
      <br />
      <h5 className="font-semibold mb-2">TECH USED</h5>
      <ul className="list-inside list-disc ps-4">
        <li>HTML</li>
        <li>SASS</li>
        <li>Bootstrap 5</li>
        <li>Typescript</li>
      </ul>
      <br />
      <h5 className="font-semibold mb-2">FEATURES</h5>
      <ul className="list-inside list-disc ps-4">
        <li>Conversions</li>
        <li>Validations</li>
        <li>Generators</li>
        <li>Utilities</li>
      </ul>
    </div>
  )
}

export default IPv6DialogContent