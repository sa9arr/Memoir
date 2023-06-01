import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  

  return ( 
    <div>
    <Router>
      <Header></Header>
    
    <Routes>
      
      <Route exact path="/" element = {<NotesListPage/>}/>
      <Route path="/note/:id" element = { <NotePage/> }/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
