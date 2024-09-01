'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TextSection from '@/components/common/TextSection'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Mock data untuk menggantikan data dari API
const mockEducation = [
  {
    id: 1,
    institution: 'Vocational High School',
    degree: "Madinatul Qur'an",
    description: 'Specialization in Software Engineering',
    startDate: '2021',
    endDate: 'Present',
  },
  {
    id: 2,
    institution: 'Course Platform',
    degree: 'Certificate in Web Development',
    description: 'Completed a course on full-stack web development.',
    startDate: '2022',
    endDate: '2023',
  },
]

export default function MyEducation() {
  const [filter, setFilter] = useState('all')

  const data = { data: mockEducation }
  const isLoading = false
  const error = null

  return (
    <div className="xl:px-40 2xl:px-64">
      <TextSection
        icon="🎓"
        text="My Education"
        classNames="mb-10 text-center"
      />
      <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
        <button
          className="group relative flex cursor-pointer flex-col items-start justify-center"
          onClick={() => setFilter('all')}
        >
          <span
            className={`absolute bottom-0 h-1 ${
              filter == 'all' ? 'w-full' : 'w-0'
            } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
          ></span>
          <p>All {filter == 'all' && `(${mockEducation.length})`}</p>
        </button>
        <button
          className="group relative flex cursor-pointer flex-col items-start justify-center"
          onClick={() => setFilter('ongoing')}
        >
          <span
            className={`absolute bottom-0 h-1 ${
              filter == 'ongoing' ? 'w-full' : 'w-0'
            } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
          ></span>
          <p>
            Ongoing{' '}
            {filter == 'ongoing' &&
              `(${
                mockEducation.filter((item) => item.endDate === 'Present')
                  .length
              })`}
          </p>
        </button>
        <button
          className="group relative flex cursor-pointer flex-col items-start justify-center"
          onClick={() => setFilter('completed')}
        >
          <span
            className={`absolute bottom-0 h-1 ${
              filter == 'completed' ? 'w-full' : 'w-0'
            } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
          ></span>
          <p>
            Completed{' '}
            {filter == 'completed' &&
              `(${
                mockEducation.filter((item) => item.endDate !== 'Present')
                  .length
              })`}
          </p>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {!isLoading &&
          !error &&
          data.data
            .slice(0)
            .reverse()
            .filter((item) => {
              if (filter === 'all') return true
              if (filter === 'ongoing') return item.endDate === 'Present'
              if (filter === 'completed') return item.endDate !== 'Present'
              return false
            })
            .map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex h-40 w-full max-w-[288px] cursor-pointer flex-col justify-between rounded-xl border-2 border-black-primary bg-white p-4 shadow-button-card transition-all hover:scale-105 xl:w-72"
              >
                <div>
                  <h1 className="text-xl font-bold text-black-primary">
                    {item.institution}
                  </h1>
                  <p className="text-md text-[#616D8A] dark:text-[#616D8A]">
                    {item.degree} ({item.startDate} - {item.endDate})
                  </p>
                  <p className="text-md text-[#616D8A] dark:text-[#616D8A]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
        {isLoading && (
          <div className="flex w-full flex-row items-center justify-center">
            <Skeleton
              height={160}
              width={288}
              count={12}
              containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
            />
          </div>
        )}
        {error && <p className="text-center">Error ...</p>}
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-orange-primary">
          Keep Learning, Keep Growing
        </h2>
        <p className="mt-2 text-[#616D8A] dark:text-white">
          My educational journey reflects my commitment to acquiring knowledge
          and honing my skills. Each institution and course I have attended has
          contributed to my growth as a developer and a learner.
        </p>
      </div>
    </div>
  )
}
