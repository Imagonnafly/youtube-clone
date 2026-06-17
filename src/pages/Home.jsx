import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = ["All", "Gaming", "Music", "React Routers", "Live", "Mixes", "Computer programming", "Podcasts"];

  const mockVideos = [
    {
      id: '1',
      title: 'Build a YouTube Clone with React (No Frameworks Needed)',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500',
      channelName: 'CodeCraft',
      views: '120K',
      timestamp: '5 days ago'
    },
    {
      id: '2',
      title: 'React Router Architecture in 2026',
      thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500',
      channelName: 'DevPulse',
      views: '45K',
      timestamp: '1 week ago'
    },
    {
      id: '3',
      title: 'Lo-Fi Beats to Code/Study to',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
      channelName: 'ChillVibes',
      views: '2.1M',
      timestamp: 'Streaming Now'
    },
    {
      id: '4',
      title: '10 CSS Tricks You Need to Know',
      thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500',
      channelName: 'DesignPro',
      views: '89K',
      timestamp: '2 weeks ago'
    }
  ];

  return (
    <div className="page-container">
      <Sidebar />
      <main className="video-feed">
        {/* Category Chips */}
        <div className="categories">
          {categories.map((cat, index) => (
            <button key={index} className={`chip ${index === 0 ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Video Feed */}
        <div className="video-grid">
          {mockVideos.map((video) => (
            <Link to={`/video/${video.id}`} key={video.id} className="video-card">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-info">
                <div className="channel-avatar"></div>
                <div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-metadata">{video.channelName}</p>
                  <p className="video-metadata">{video.views} views • {video.timestamp}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;