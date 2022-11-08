import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Thomas Cavalcante',
    role: 'Founder / Product Development',
    imageUrl:
      'https://media-exp1.licdn.com/dms/image/C4D03AQHE6X48o5A1hQ/profile-displayphoto-shrink_400_400/0/1648748496317?e=1673481600&v=beta&t=_sqkMshvqhyaKzBGBQHYFd6o6u29FP97fSXCN7D9s_M',
  },

  {
    name: 'Andrew Rodebaugh',
    role: 'Co-Founder / Software Developer',
    imageUrl:
    'https://media-exp1.licdn.com/dms/image/C4E03AQE9WCSXwjFKQw/profile-displayphoto-shrink_400_400/0/1661798185447?e=1673481600&v=beta&t=gggVYkdSVocjBCyZnB2dv6hGJ_qUmrRZp9RB2YALk4Y',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-gray-900 rounded-lg p-5">
        <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:px-8 lg:py-12 ">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-1 lg:gap-10">
            <div className="space-y-5 sm:space-y-4 ">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center justify-center">Our Team</h2>
              <p className="text-xl text-gray-400 mx-4 text-center">
                Two students at Drexel University trying to disrupt the online payment industry. We are currently seeking incubator space, mentorship, & investments to fully build Quotom.
              </p>
              <div className='flex items-center justify-center'>
                <a
                  href="mailto:contact@quotom.com"
                  className="inline-flex items-center mx-4 justify-center rounded-full bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                >
                  <span className="rounded-full px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    Investment Inquiries
                  </span>
                  <span className="ml-4 text-sm bg-teal-600 px-3 py-0.5 rounded-full">Contact</span>
                  <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <img className="h-16 w-16 rounded-full lg:h-20 lg:w-20" src={person.imageUrl} alt="" />
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className='text-gray-200'>{person.name}</h3>
                        <p className="text-teal-400">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}