import { useEffect, useState } from "react"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

const FeedBackForm = () => {
  const [text, setText] = useState('')  
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const { addFeedBack ,feedbackEdit , updateFeedback } = useContext(FeedBackContext);
  
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            console.log(feedbackEdit.item)
        }
    }, [feedbackEdit])
  

    const handleTextChange = (e)=>{
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedBack = {
                text,
                rating,
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            }else{
                addFeedBack(newFeedBack)
            }
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us:</h2>
            <RatingSelect select={(rating)=>setRating(rating)} />
            <div className="input-group">
                <input
                    onChange={handleTextChange}
                    type='text'
                    value={text}
                    placeholder ="write a review"
                />
                <Button type='submit' isDisabled={btnDisabled} >
                    Sent
                </Button>
            </div>
        </form>
        {message && <div className="message">{message}</div>}
    </Card>   
  )
}

export default FeedBackForm