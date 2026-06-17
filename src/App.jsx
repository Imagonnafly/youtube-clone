import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import SearchFeed from './pages/SearchFeed';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); // Clear after search
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
        </button>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <svg width="30" height="20" viewBox="0 0 30 20" fill="#FF0000"><path d="M29.5 3.3c-.3-1.3-1.4-2.3-2.7-2.6C24.4 0 15 0 15 0S5.6 0 3.2.7C1.9 1 0.8 2.1 0.5 3.3 0 5.7 0 10 0 10s0 4.3.5 6.7c.3 1.3 1.4 2.3 2.7 2.6 2.4.6 11.8.6 11.8.6s9.4 0 11.8-.6c1.3-.3 2.4-1.3 2.7-2.6.5-2.4.5-6.7.5-6.7s0-4.3-.5-6.7z"/><path d="M11.8 14.3L19.6 10l-7.8-4.3v8.6z" fill="#FFF"/></svg>
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-1px', color: 'var(--text-primary)' }}>YouTube</span>
        </Link>
      </div>

      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
          </button>
        </form>
      </div>

      <div className="nav-right">
        <button onClick={() => setDarkMode(!darkMode)} className="icon-btn" title="Toggle Theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="icon-btn">
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#065fd4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>U</div>
        </button>
      </div>
    </nav>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // THE FIX: This forces the actual <body> tag to accept the theme, preventing the half-page bug!
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;