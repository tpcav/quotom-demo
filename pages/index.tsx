import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Team from "../components/OurTeam"
import Faqs from '../components/Faqs'

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
                  <div
                    className="inline-flex items-center rounded-full bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Phase
                    </span>
                    <span className="ml-4 text-sm bg-gray-600 px-3 py-0.5 rounded-full">Prototype</span>
                  </div>
                
                  <h1 className="block mt-8 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-transparent bg-clip-text bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">Split online transactions with multiple<span className="bg-clip-text bg-gradient-to-r from-teal-400 to-teal-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-200"> cards</span><br/></h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Try the demo to learn how the platform works using online virtual cards.
                  </p>
                  <div className="mt-10 sm:mt-12">
                      <div className="sm:flex">

                        <div className="mt-3 sm:mt-0 sm:ml-2 md:w-full lg:w-48 text-center flex justify-center items-center md:items-center">
                          <a
                            type="submit"
                            href="demo"
                            className="lg:w-48 rounded-full bg-sky-600 py-3 px-10 font-medium text-white text-center shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Demo
                          </a>
                          
                          
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}

                    <img className=''
                      src="../quotom_logo.png"
                      alt="Picture of the author"/>


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        <Faqs />
        <Team />
      </main>
    </div>
  )
}
