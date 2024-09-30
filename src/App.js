import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import HomePageServiceSnippets from './Components/HomePageServiceSinppets';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './bg1.png';

function App() {
  return (
    <Router>
      <>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <NavBar />
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative', 
            overflow: 'hidden'
          }}>
            <img 
              src={myImage} 
              alt="Description" 
              style={{ 
                width: '100%', 
                height: 'calc(100vh - 100px - 50px)', // Adjust based on your Navbar and Footer height
                objectFit: 'cover' 
              }} 
            />
            {/* Overlay */}
            <div style={{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  zIndex: 1, // Ensure it appears above the image
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start', // Align to the start (left)
  paddingLeft: '50px', // Space from left
  color: 'white' // Text color
}}>
  <h1 className="display-3" style={{ margin: 0, fontWeight: 500, fontFamily: 'Arial, sans-serif' }}>SHRISHA GROUP OF</h1> {/* Reduced font size and boldness */}
  <h1 className="display-3" style={{ margin: 0, fontWeight: 500, fontFamily: 'Arial, sans-serif' }}>PACKAGING</h1> {/* Reduced font size and boldness */}
  <p className="lead" style={{ margin: '10px 0', fontSize: '1.25rem', fontWeight: 400, fontFamily: 'Arial, sans-serif' }}>Wrap Your Product Smartly...</p> {/* Reduced font size and boldness */}
</div>




          </div>
          <Footer /> 
        </div>
        <Routes>
          <Route path="/" element={<HomePageServiceSnippets />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
