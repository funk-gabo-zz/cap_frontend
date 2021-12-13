import './style.css';
import 'antd/dist/antd.css';
import {Videos} from '../Videos'
import {Mantenedor} from '../Mantenedor'
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
            <Route exact path="/mantenedor" element={<Mantenedor/>}/>
          </Routes>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App;
