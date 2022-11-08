import { useState} from 'react'
import Create from '../components/create'

export default function Demo() {

  const [cards, setCards] = useState([
    { id:'1', number: '0123 4567 8901 2345', expiration: '11 / 23', cvc: '456'},
    { id:'2', number: '0123 4567 8901 2345', expiration: '11 / 23', cvc: '456'}
  ]);

  return (
    <div className='m-5'>

      <Create/>
    </div>

  )
}