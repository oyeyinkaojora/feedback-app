import FeedBackItem from "./FeedBackItem"
import { motion,AnimatePresence } from 'framer-motion'
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";


const FeedBackList = () => {
  const { feedback, deleteFeedback  } = useContext(FeedBackContext);
  if(!feedback || feedback.length === 0){
    return <p>No FeedBack Yet</p>
  }  
  return (
    <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item)=> 
                <motion.div
                   key={item.id}
                   initial ={{opacity:0}}
                   animate={{opacity:1}}
                   exit ={{opacity:0}}
                >
                    <FeedBackItem handleDelete={deleteFeedback} key={item.id} item={item} />
                </motion.div>
            )}
        </AnimatePresence>    
    </div>
  )
}

export default FeedBackList
