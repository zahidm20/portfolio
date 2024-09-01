'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'

import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GithubStats } from '@/components/common/GithubStats'

// Mock data untuk menggantikan data dari API
const mockProjects = [
  {
    id: 1,
    type: 'web',
    name: 'Web Project 1',
    description: 'This is a description for Web Project 1.',
  },
  {
    id: 2,
    type: 'mobile',
    name: 'Mobile Project 1',
    description: 'This is a description for Mobile Project 1.',
  },
  {
    id: 3,
    type: 'api',
    name: 'API Project 1',
    description: 'This is a description for API Project 1.',
  },
  {
    id: 4,
    type: 'web',
    name: 'Web Project 2',
    description: 'This is a description for Web Project 2.',
  },
]

export default function Project() {
  const [filter, setFilter] = useState('all')

  // Menggunakan mock data alih-alih data dari API
  const data = { data: mockProjects }
  const isLoading = false
  const error = null

  return (
    <div className="">
      <TextSection icon="⚒️" text="My Personal Projects." />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('all')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'all' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>All {filter == 'all' && `(${mockProjects.length})`}</p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('web')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'web' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Web{' '}
              {filter == 'web' &&
                `(${
                  mockProjects.filter((item) => item.type === 'web').length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('mobile')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'mobile' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Mobile{' '}
              {filter == 'mobile' &&
                `(${
                  mockProjects.filter((item) =>
                    ['android', 'ios', 'flutter', 'mobile'].includes(item.type),
                  ).length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('api')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'api' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              API{' '}
              {filter == 'api' &&
                `(${
                  mockProjects.filter((item) => item.type === 'api').length
                })`}
            </p>
          </button>
        </div>
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {!isLoading &&
          !error &&
          data.data
            .slice(0)
            .reverse()
            .filter((item) => {
              if (filter === 'all') return true
              if (filter === 'mobile')
                return ['android', 'ios', 'flutter', 'mobile'].includes(
                  item.type,
                )
              if (filter === 'web') return item.type === 'web'
              if (filter === 'api') return item.type === 'api'
              return item.type === filter
            })
            .map((item, index) => <ProjectCard {...item} key={index} />)}
        {isLoading && (
          <div className="flex w-3/4 flex-row items-center justify-center">
            <Skeleton
              height={160}
              width={320}
              count={12}
              containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
            />
          </div>
        )}
        {error && <p className="text-center">Error ...</p>}
      </div>
      {/* Tambahan teks statis dengan style yang konsisten */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-orange-primary">
          Explore More Projects
        </h2>
        <p className="mt-2 text-[#616D8A] dark:text-white">
          Dive into a variety of projects that I have worked on, from web
          applications to mobile apps and APIs. Each project showcases my skills
          and creativity.
        </p>
      </div>
    </div>
  )
}
