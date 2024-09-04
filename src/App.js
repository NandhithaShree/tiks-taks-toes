import ButtonFn from './components/buttons';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Threebythreefn from './components/3by3grid';
import Fourbyfourfn from './components/4by4grid';



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<ButtonFn />} /> {/*This route will render the ButtonFn component when the user navigates to the root URL ("/"). */}
          <Route relative path="/normal_tiktaktoe" element={<Threebythreefn />} />
          <Route relative path="/4by4" element={<Fourbyfourfn />} />
        </Routes>
    </>
  )
}

export default App;
