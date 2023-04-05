import { Navbar, Breadcrumb } from './components/Components';
import { Contact, Products, Home, Company, NotFound } from './pages/Pages';
import { Routes, Route } from 'react-router-dom';

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
