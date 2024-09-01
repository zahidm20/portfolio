'use client'

import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { animatePageOut } from '@/utils/animation/animatePage'
import { useRouter } from 'next/navigation'
import ScrambleText from '@/components/common/ScrambleText'
import { useState, useRef } from 'react'
import { cn } from '@/utils/styles/cn'

export default function Home() {
  const router = useRouter()

  const [isCrack, setIsCrack] = useState(0)
  const [animate, setAnimate] = useState(false)

  const getImage = (crackValue: number) => {
    if (crackValue < 5) {
      return '/egg.png'
    } else if (crackValue < 10) {
      return '/hatch.png'
    } else {
      return '/chicken.png'
    }
  }

  const handleCrack = () => {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 500)
    setIsCrack(isCrack + 1)
  }

  const constraintsRef = useRef(null)

  return (
    <motion.div
      className="flex w-full items-center justify-center space-x-6"
      ref={constraintsRef}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col items-center gap-3 text-black-primary  xl:mt-16 xl:items-start 2xl:mt-24"
      >
        <h1 id="scramble" className="text-3xl font-bold md:text-6xl"></h1>
        <ScrambleText>zahid maulana</ScrambleText>
        <h2 className="text-xl font-bold dark:text-white md:text-4xl">
          Hi, Folks{' '}
          <span className="hidden w-12 md:inline-block">
            <Image src={'/wave.gif'} alt="welcome" width={100} height={100} />
          </span>{' '}
        </h2>
        <h2 className="text-xl font-bold dark:text-white md:text-3xl">
          I&apos;m{' '}
          <TypeAnimation
            sequence={[
              'Junior Web Developer',
              5000,
              'Mobile Developer',
              5000,
              'Fullstack Developer',
              5000,
            ]}
            wrapper="span"
            speed={40}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', display: 'inline-block' }}
            className="text-orange-primary"
          />
        </h2>
        <p className="max-w-lg text-center text-sm dark:text-white md:max-w-2xl md:text-left md:text-base">
          I am a <b>Fullstack Developer</b> from Indonesia, I have a strong
          understanding of programming languages and have experience in{' '}
          <b>Mobile And Web Developer</b> projects.
        </p>
        <div className="flex gap-4">
          <a
            onClick={() => animatePageOut('/resume', router)}
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black-primary bg-yellow-primary p-2 shadow-button shadow-black-primary hover:bg-orange-primary md:p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-black-primary"
              viewBox="0 0 448 512"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <p className="text-xs font-semibold sm:text-sm md:text-lg">
              My Resume
            </p>
          </a>
          <a
            onClick={() => animatePageOut('/about', router)}
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black-primary bg-white p-2 shadow-button shadow-black-primary hover:bg-blue-gray-50/20 md:p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-black-primary"
              viewBox="0 0 512 512"
            >
              <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
            <p className="text-xs font-semibold sm:text-sm md:text-lg">
              See More About Me
            </p>
          </a>
        </div>
      </motion.div>
      <motion.div className="hidden h-full w-80 cursor-pointer items-center lg:flex">
        <motion.img
          drag={isCrack >= 10}
          onClick={() => handleCrack()}
          dragConstraints={constraintsRef}
          src={getImage(isCrack)}
          className={cn(
            'hidden aspect-square rounded-xl md:block xl:mt-16 xl:items-start',
            animate ? (isCrack < 10 ? 'animate-wiggle' : '') : '',
          )}
          alt="profile"
          width={400}
          height={400}
        />
      </motion.div>
    </motion.div>
  )
}
