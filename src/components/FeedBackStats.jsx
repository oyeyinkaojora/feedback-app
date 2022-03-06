import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

const FeedBackStats = () => {
    const { feedback } = useContext(FeedBackContext);
  //calculating the average
//   let average = feedback.reduce((acc, cur) => { 
//       return acc + cur.rating
//     },0)/ feedback.length

    let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/,'')
//   console.log('feedback is: ', feedback)
//   console.log('is feedback an array? ', Array.isArray(feedback))
//   console.log('feedback is type: ', typeof feedback)
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average)? 0 : average} </h4>
    </div>
  )
}

export default FeedBackStats