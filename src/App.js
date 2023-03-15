import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import { Home, Contact } from './pages';

// components
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
