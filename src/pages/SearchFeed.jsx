import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SearchFeed = () => {
  const { searchTerm } = useParams();

  // Mock results
  const results = [
    { id: '1', title: `${searchTerm} Tutorial for Beginners (2026)`, channel: 'TechAcademy', views: '200K', time: '1 month ago' },
    { id: '2', title: `Mastering ${searchTerm} in 10 Minutes`, channel: 'CodeNinja', views: '1.1M', time: '1 year ago' },
    { id: '3', title: `Why everyone is using ${searchTerm} now`, channel: 'DevTrends', views: '80K', time: '3 days ago' },
  ];

  return (
    <div className="page-container">
      <Sidebar />
      <div className="search-feed">
        <h2 style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
          Search results for: {searchTerm}
        </h2>

        {results.map((video, idx) => (
          <Link to={`/video/${video.id}`} key={idx} className="search-result-card">
            <img 
              src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&sig=${idx}`} 
              alt="Search Thumbnail" 
              className="search-thumbnail" 
            />
            <div className="search-info">
              <h3 style={{ fontSize: '18px', fontWeight: '400', margin: '0' }}>{video.title}</h3>
              <p className="video-metadata">{video.views} views • {video.time}</p>
              
              <div className="channel-info" style={{ marginTop: '12px' }}>
                <div className="channel-avatar" style={{ width: '24px', height: '24px' }}></div>
                <p className="video-metadata">{video.channel}</p>
              </div>
              
              <p className="video-metadata" style={{ marginTop: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Learn everything you need to know about {searchTerm} in this comprehensive step-by-step guide designed for developers of all levels...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;