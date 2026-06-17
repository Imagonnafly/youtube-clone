import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Section 1 */}
      <ul className="sidebar-list">
        <Link to="/" className="sidebar-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"/></svg>
          Home
        </Link>
        <Link to="/" className="sidebar-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.06 1.42.94 2.66 2.25 3.16.32.12.87.35.87.35L5.3 14.8c-1.84.96-2.53 3.23-1.56 5.06s3.24 2.53 5.07 1.56L17 17.5c1.29-.68 2.06-2.04 2-3.49-.06-1.42-.94-2.66-2.25-3.16z"/></svg>
          Shorts
        </Link>
        <Link to="/" className="sidebar-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 7H4V6h16v1zm2 4H2v-1h20v1zm0 4H2v-1h20v1zM4 19h16v-1H4v1z"/></svg>
          Subscriptions
        </Link>
      </ul>

      {/* Section 2 */}
      <ul className="sidebar-list">
        <Link to="/" className="sidebar-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7l6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"/></svg>
          Library
        </Link>
        <Link to="/" className="sidebar-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"/></svg>
          History
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;