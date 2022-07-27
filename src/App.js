import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Moon from './components/Moon'

const App = () => {
  return (
    <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop />} />
                        <Route path='/Shop/:name' element={<Moon />} />
                    <Route path='/Cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
