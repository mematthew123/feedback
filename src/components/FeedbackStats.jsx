import React from 'react'


// Component to display a feedback item and rating in the feedback list
function FeedbackStats({ feedback }) {


    const average = Math.round(
        feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
      )

  return (


            // Calulate the average rating
            // We can use the reduce method to sum up all the ratings
            // and then divide by the number of ratings
            // The reduce method takes in a callback function
            // The callback function takes in two arguments
            // The first argument is the accumulator
            // The second argument is the current value
            // The accumulator is the total value
            // The current value is the current value in the array
            // The total value is the total value
            // The total value is the total value plus the current value

          


            // Displays the total number of reviews submitted 

    <div className='feedback-stats'>
        
        <h4>{feedback.length}  Reviews  </h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        
        
         </div>
  )
}

export default FeedbackStats