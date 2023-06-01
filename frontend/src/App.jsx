import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
function App() {
 
  

  return ( 
    <div className="w-screen container dark">

      <div className="app">
    <Router>
      <Header></Header>
    
    <Routes>
      
      <Route exact path="/" element = {<NotesListPage/>}/>
      <Route path="/note/:id" element = { <NotePage/> }/>
      </Routes>
    </Router>
    </div>
    </div>
  )
}

export default App
