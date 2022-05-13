import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisplayed] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisplayed(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Please enter at least 10 characters')
      setBtnDisplayed(true)
    } else {
      setMessage(null)
      setBtnDisplayed(false)
    }
    // text.trim().length <= 10) {

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please Provide Your Feedback</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="We care about your feedback"
            value={text}
          />

          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
