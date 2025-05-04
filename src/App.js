import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VoiceSearch from './components/VoiceSearch';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
  }, [isDark]);

  const handleSearch = (query) => {
    if (!query) return;
    setHistory((prevHistory) => [query, ...prevHistory]); // Add query to history
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          style={{
            width: '250px',
            padding: '20px',
            borderRight: '1px solid #ddd',
            height: '100vh',
            overflowY: 'auto',
            backgroundColor: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '#000',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>History</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {history.length > 0 ? (
              history.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '8px',
                    cursor: 'pointer',
                    color: '#4285f4',
                  }}
                  onClick={() => window.open(`https://www.google.com/search?q=${item}`, '_blank')}
                >
                  {item}
                </li>
              ))
            ) : (
              <li style={{ color: '#555' }}>No history yet</li>
            )}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', marginLeft: isSidebarOpen ? '250px' : '0' }}>
        <button className="dark-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="logo"
        />

        <SearchBar onSearch={handleSearch} />
        <VoiceSearch onVoiceResult={handleSearch} />
      </div>
    </div>
  );
}

export default App;