import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:"This is from the context",
            rating:10,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false,
    })

    const addFeedBack = (newFeedBack) => {   
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack,...feedback])
    }

    const editFeedback =(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    const updateFeedback = ({id,updItem}) =>{
        setFeedback(
            feedback.map((item)=>(item.id === id ?{
                ...item, ...updItem
            }:item))
        )
        
    }

    const deleteFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete")){
        setFeedback(feedback.filter((item)=> item.id !== id))
        } 
    }

    return <FeedBackContext.Provider
        value = {{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedBack,
            editFeedback,
            updateFeedback,
        }}
    >
        {children}
    </FeedBackContext.Provider>

}

export default FeedBackContext