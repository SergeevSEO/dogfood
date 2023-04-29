import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
// import { useEffect } from 'react';



function App() {


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
