import { Routes, Route } from 'react-router-dom';
import HomeTrue from './components/HomeTrue/HomeTrue';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<HomeTrue/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    </div>
  )
}
export default App;