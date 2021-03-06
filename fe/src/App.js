import TopBar from './components/js/TopBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/js/Home';
import AddNote from './components/js/AddNote';
import MyNote from './components/js/MyNote';
import './App.css'
import back from './components/images/deer-anim3.gif'
// style={{backgroundImage:"url("+back+")", backgroundSize:'contain', height:'100vh',backgroundRepeat:'no-repeat'}}
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/addNotes" component={AddNote}/>
        <Route path="/myNotes" component={MyNote}/>
      </div>
    </Router>
  );
}

export default App;
