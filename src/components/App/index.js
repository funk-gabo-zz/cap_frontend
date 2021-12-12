import './style.css';
import 'antd/dist/antd.css';
import {Videos} from '../Videos'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Sidebar } from '../Sidebar';
import { Home } from '../Home';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/videos" element={<Videos/>}/>
          </Routes>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App;
