

export default function Hero () {
  return (
    <div className="bg-gray-800 rounded-md p-2 my-5">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block text-indigo-600">Split payments between cards, family, & friends.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Try the demo to get started creating virtual cards to combine payments.
          </p>
          <a
            href="/demo"
            className="mt-8 inline-flex w-1/2 items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Demo
          </a>
        </div>
      </div>
  )
}