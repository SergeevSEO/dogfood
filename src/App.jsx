import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { useEffect } from 'react';



function App() {
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) navigate('/signin')
  }, [navigate])

  return (
    <>
    <Header />
    
    <main className="main">
        <div className="container">
            <Outlet />
        </div>
    </main>

    <Footer />
    </>
  );
}

export default App;
