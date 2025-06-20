import React from 'react';
import Footer from './components/Footer'; // ✅ adjust path if your folder is nested

function App() {
  return (
    <>
      {/* Your other page content goes here */}
      <div className="min-h-screen">
        <h1 className="text-h1 p-8">Welcome to Z Energy</h1>
        {/* More main content */}
      </div>

      <Footer /> {/* ✅ Drop your footer here */}
    </>
  );
}

export default App;
