export default function Create () {

  function submitCard() {
    alert('Cards submitted');
  }

  return (
    <div className="grid place-items-center">
      <div className="w-2/3 rounded-lg m-10 ">
        <fieldset>
          <legend className="block text-sm font-medium text-gray-200">Card 1</legend>
          <div className="mt-1 -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="card-number" className="sr-only">
                Card number
              </label>
              <input
                type="text"
                required
                name="card-number"
                id="card-number"
                className="relative text-white block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0000-0000-0000-0000"
              />
            </div>
            <div className="flex -space-x-px">
              <div className="w-1/2 min-w-0 flex-1">
                <label htmlFor="card-expiration-date" className="sr-only">
                  Expiration date
                </label>
                <input
                  type="text"
                  required
                  name="card-expiration-date"
                  id="card-expiration-date"
                  className="relative text-white block w-full rounded-none rounded-bl-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="MM / YY"
                />
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="card-cvc" className="sr-only">
                  CVC
                </label>
                <input
                  type="text"
                  required
                  name="card-cvc"
                  id="card-cvc"
                  className="relative block w-full rounded-none rounded-br-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="block text-sm font-medium text-gray-200">Billing address</legend>
          <div className="mt-1 -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                required
                name="country"
                autoComplete="country-name"
                className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div>
              <label htmlFor="postal-code" className="sr-only">
                ZIP / Postal code
              </label>
              <input
                type="text"
                required
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="relative block w-full rounded-none rounded-b-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="ZIP / Postal code"
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="w-2/3 rounded-lg m-5 mb-5">
        <fieldset>
          <legend className="block text-sm font-medium text-gray-200">Card 2</legend>
          <div className="mt-1 -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="card-number" className="sr-only">
                Card number
              </label>
              <input
                type="text"
                required
                name="card-number"
                id="card-number"
                className="relative text-white block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0000-0000-0000-0000"
              />
            </div>
            <div className="flex -space-x-px">
              <div className="w-1/2 min-w-0 flex-1">
                <label htmlFor="card-expiration-date" className="sr-only">
                  Expiration date
                </label>
                <input
                  type="text"
                  required
                  name="card-expiration-date"
                  id="card-expiration-date"
                  className="relative text-white block w-full rounded-none rounded-bl-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="MM / YY"
                />
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="card-cvc" className="sr-only">
                  CVC
                </label>
                <input
                  type="text"
                  required
                  name="card-cvc"
                  id="card-cvc"
                  className="relative block w-full rounded-none rounded-br-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="block text-sm font-medium text-gray-200">Billing address</legend>
          <div className="mt-1 -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                required
                name="country"
                autoComplete="country-name"
                className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div>
              <label htmlFor="postal-code" className="sr-only">
                ZIP / Postal code
              </label>
              <input
                type="text"
                required
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="relative block w-full rounded-none rounded-b-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="ZIP / Postal code"
              />
            </div>
          </div>
        </fieldset>
      </div>
      

      <button onClick={submitCard} type="submit" className="p-4 bg-gray-700 w-36 rounded-full text-lg">Submit</button>
    </div>
  )
}