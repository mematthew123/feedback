import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'

function App() {

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
        <FeedbackList feedback={feedback}
        
        handleDelete={deleteFeedback}
        
        />
      </div>
    </>
  )
}

export default App
