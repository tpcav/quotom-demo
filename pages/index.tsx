import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Team from "../components/OurTeam"
import Nav from '../components/nav'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Funding', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Example() {
  return (
    <div className="relative">
      <Head>
        <title>Home | Quotom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      <main>
        <div className="bg-gray-900 pt-12 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <a
                    href="mailto:contact@quotom.com"
                    className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-teal-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Investment Inquiries
                    </span>
                    <span className="ml-4 text-sm">Contact</span>
                    <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  </a>

                  <h1 className="block mt-8 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-transparent bg-clip-text bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">Split one payment with multiple<span id="spin" className="bg-clip-text bg-gradient-to-r from-teal-400 to-teal-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-teal-200"></span><br/></h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Try the demo to learn how the platform works using online virtual cards.
                  </p>
                  <div className="mt-12 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">

                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            type="submit"
                            href="demo"
                            className="block w-full rounded-full bg-teal-600 py-3 px-4 font-medium text-white text-center shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}

                    <svg className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" viewBox="0 0 4196 2850" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="980" y="229" width="2325" height="2307" rx="1153.5" fill="#429288"/>
                      <rect x="1388" y="1515" width="2053" height="1335" rx="100" fill="#D9D9D9" fill-opacity="0.8"/>
                      <rect x="1578" y="1825" width="1673" height="236" rx="25" fill="#4DC197"/>
                      <rect x="2687" y="2241" width="564" height="236" rx="25" fill="#4DC197"/>
                      <rect x="2143" width="2053" height="1335" rx="100" fill="#D9D9D9" fill-opacity="0.95"/>
                      <rect x="2333" y="345" width="1673" height="236" rx="25" fill="#4DC197"/>
                      <rect x="3441" y="771" width="565" height="236" rx="25" fill="#4DC197"/>
                      <rect y="889" width="1322" height="892" rx="100" fill="#D9D9D9" fill-opacity="0.4"/>
                      <rect x="156" y="1153" width="1009" height="142" rx="25" fill="#4DC197"/>
                      <rect x="805" y="1432" width="340" height="142" rx="25" fill="#4DC197"/>
                    </svg>


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        <Team />
      </main>
    </div>
  )
}
