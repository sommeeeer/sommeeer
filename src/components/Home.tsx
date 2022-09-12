import Image from 'next/image';
import sommeeerlogo from '../../public/images/logo.jpg';
import { SiTypescript } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { FaChild } from 'react-icons/fa';
import Socials from './Socials';

export function Hero() {
  return (
    <div className="flex flex-col items-center mt-12">
      <Image
        className="rounded-full h-2 w-2"
        src={sommeeerlogo}
        alt="sommeeeR logo"
        width={200}
        height={200}
      />
      <h1 className="text-4xl mt-12 bounceInDown z-50">
        sommeee
        <span
          className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-magicpurple-100
         to-magicpurple-300 animate-gradient-text"
        >
          R
        </span>
      </h1>
      <p className="p-6 text-center text-lg md:text-xl">
        Hey :) I am Magnus Dahl Eide! A learner of{' '}
        <a
          className="group hover:text-magicpurple-300 transition-colors duration-300"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
          <SiTypescript className="group-hover:animate-spin inline mx-1 fill-blue-400 bg-magicpurple-100" />
        </a>
        &{' '}
        <a
          className="group hover:text-magicpurple-300 transition-colors duration-300"
          href="https://www.python.org/"
          target="_blank"
          rel="noreferrer"
        >
          Python
          <DiPython className="group-hover:animate-spin inline fill-yellow-400" />
        </a>
      </p>
      <p className="p-6 text-center text-lg md:text-xl">
        I also work in a kindergarden
        <FaChild className="hover:animate-spin inline mx-1" />
      </p>

      <Socials />
    </div>
  );
}
