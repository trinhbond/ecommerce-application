import { Navbar, Breadcrumb } from './components/Components';
import { Routes, Route } from 'react-router-dom'
import { Contact, Products, Home, Company } from './pages/Pages'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Breadcrumb />
        <Routes> 
          <Route path='/' index element={<Home />} />
          <Route path='/pages/products' element={<Products />} />
          <Route path='/pages/company' element={<Company />} />
          <Route path='/pages/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
