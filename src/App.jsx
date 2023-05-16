import { useState } from 'react'
import './App.css'

function App() {

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
