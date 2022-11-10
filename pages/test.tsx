import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useLocalStorage('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    // 👇️ value of input field
    console.log('old value: ', message);

    // 👇️ set value of input field
    setMessage('New value');
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
