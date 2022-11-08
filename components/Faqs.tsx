import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id: 1,
    question: "How does it work?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    id: 2,
    question: "Can you give me an example?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    id: 3,
    question: "What can go wrong?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Faqs() {
  return (
    <div className="bg-gray-800 m-4 mt-12 sm:mt-44 lg:mt-10 rounded-lg">
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-8 px-10 sm:px-10 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200">Frequently Asked Questions</h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6 pb-4 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base font-medium text-white md:col-span-5">{faq.question}</dt>
                <dd className="mt-2 md:col-span-7 md:mt-0">
                  <p className="text-base text-gray-400">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

