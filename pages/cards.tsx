import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Nav from '../components/Nav'



const cards = [
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    number: '0000 0000 0000 0000',
    expiration: 'MM / YY',
    role: 'Active',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },

  
  // More cards...
]

export default function Example() {
  
  return (

    
    <div className=''>
      <Nav />
      <div className='h-screen'>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 m-20">
          {cards.map((cards) => (
            <li key={cards.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow h-">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">{cards.number}</h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {cards.role}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">{cards.expiration}</p>
                </div>
                <div className='w-10 h-8 bg-teal-500 rounded-sm'></div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${cards.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <AiFillEdit className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Edit</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${cards.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <AiFillDelete className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Delete</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul> 
      </div>
      
    </div>
    
  )
}