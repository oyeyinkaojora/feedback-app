import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import {FeedBackProvider } from './context/FeedBackContext';
import AboutPage from "./pages/AboutPage";



function App() {

  return (
    <FeedBackProvider>
      <Router>
        <Header/>      
        <div className="container">
          <Routes>
            <Route path="/" exact element={
              <>
                  <FeedBackForm/>
                  <FeedBackStats />
                  <FeedBackList />
              </>
            }>
              
            </Route> 
            <Route path="/about" element={<AboutPage/>}/>     
          </Routes>     
        </div>   
      </Router>
    </FeedBackProvider>

  
  );
}

export default App;
