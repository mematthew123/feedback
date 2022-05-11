// Component to display a feedback item and rating in the feedback list
// Styles pulled from the index.css file based on classNames
//Once we establish the state of the component, we can use the useState hook to set the state of the component

import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default FeedbackItem
