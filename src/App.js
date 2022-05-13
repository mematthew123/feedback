import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'

function App() {


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
setFeedback([...feedback, newFeedback])

  }
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete this feedback?')) {


    setFeedback(feedback.filter(feedback => feedback.id !== id))

    
  }
  }


  return (
               // The feedback list component passing the state as a prop


    <>
      <Header />
     
      <div className="container">

      <FeedbackForm handleAdd ={addFeedback} />





        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        
        handleDelete={deleteFeedback}
        
        />
      </div>
    </>
  )
}

export default App
