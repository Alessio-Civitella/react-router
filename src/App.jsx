 import 'bootstrap/dist/css/bootstrap.min.css';
 import Home from "./components/Home"
 import ChiSiamo from './components/ChiSiamo';
 import ListaPost from './components/ListaPost';
 import AppLayout from "./components/AppLayout"
 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<AppLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/ChiSiamo" element={<ChiSiamo/>}/>
            <Route path="/ListaPost" element={<ListaPost/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )  
}