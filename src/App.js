import ButtonFn from './components/buttons';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nttkfn from './normal_tiktaktoe';



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<ButtonFn />} /> {/*This route will render the ButtonFn component when the user navigates to the root URL ("/"). */}
          <Route relative path="/normal_tiktaktoe" element={<Nttkfn />} />
        </Routes>
    </>
  )
}

export default App;
