import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Contact, Browse, Home } from './pages/Pages'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes> 
          <Route path='/' index element={<Home />} />
          <Route path='/pages/browse' element={<Browse />} />
          <Route path='/pages/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
