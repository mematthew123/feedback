import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
  {
    if (!feedback || feedback.length === 0) {
      return <div>No feedback yet</div>
    }

    return    (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }
}


FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      handleDelete: PropTypes.func.isRequired,
    })
  ).isRequired,
}

export default FeedbackList

