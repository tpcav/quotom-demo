import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Funding', href: '/funding' },
  { name: 'About', href: '/about' },
]

export default function Nav() {
  return (
    <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link href="/">
                  <span className="text-white text-3xl font-semibold">Quotom</span>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:ml-10 md:flex">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="demo" className="text-base font-medium text-white hover:text-gray-300">
                Demo
              </Link>
              <Link
                href="mailto:contact@quotom.com"
                className="inline-flex items-center rounded-full border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition ">
            <div className="overflow-hidden rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5" >
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <h1 className='text-sky-400 text-3xl font-semibold'>Quotom</h1>
                  <img></img>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 text-gray-100" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 px-5 space-y-6 px-2">
                  <Link
                    href="mailto:contact@quotom.com"
                    className="block w-full sm:w-1/2 rounded-full bg-sky-500 py-3 px-4 text-center font-medium text-white shadow hover:bg-sky-600"
                  >
                    Contact
                  </Link>

                  <Link
                    href="demo"
                    className="block w-full rounded-md px-3 py-2 text-center font-medium text-gray-100 hover:bg-gray-900"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
  )
}
    
    