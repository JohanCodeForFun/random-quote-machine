import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Quote Garden - A REST API for quotes.
  const API_ENDPOINT = "https://quote-garden.onrender.com/api/v3/quotes";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      return response.json()
    })
    .then(result => {
      setData(result.data);
      setError(null)
    })
    .catch(err => {
      setError(err)
      setData(null)
      console.error(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);
  
  console.log(data)


  return (
    <>
      <div id='quote-box'>
        <div id='text'>
          <h3>&quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias quas obcaecati deleniti? &quot;</h3>
        </div>
        <div id='author'>
          <p>- author</p>
        </div>
        <div id='button-box'>
          <button id='tweet-quote'>tweet</button>
          <button id='new-quote'>new qoute</button>
        </div>
       </div>
       <div id='created-box'>
        <p>by Johan</p>
       </div>
    </>
  )
}

export default App
