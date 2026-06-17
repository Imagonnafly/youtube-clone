import { useParams, Link } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();
  
  // In a real app, you'd fetch this data based on the 'id'.
  // We use a safe fallback ID just in case an invalid link is clicked.
  const videoId = id && id !== '1' && id !== '2' && id !== '3' && id !== '4' ? id : 'dQw4w9WgXcQ';

  return (
    <div className="view-container">
      {/* LEFT SIDE: Video Player & Info */}
      <div className="player-section">
        <div className="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-info-section">
          <h1 className="video-view-title">Build a YouTube Clone with React (No Frameworks Needed)</h1>
          
          <div className="video-actions-row">
            <div className="channel-info">
              <div className="channel-avatar" style={{ width: '40px', height: '40px' }}></div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>CodeCraft</h3>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>1.2M subscribers</p>
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="chip" style={{ borderRadius: '36px' }}>👍 15K | 👎</button>
              <button className="chip" style={{ borderRadius: '36px' }}>Share</button>
              <button className="chip" style={{ borderRadius: '36px' }}>Download</button>
            </div>
          </div>

          <div className="description-box">
            <span style={{ fontWeight: 'bold' }}>120K views • 5 days ago</span>
            <p style={{ marginTop: '8px' }}>In this tutorial, we will learn how to build a fully functional YouTube UI clone using React and pure CSS. No frameworks required!</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Related Videos */}
      <div className="related-videos">
        {[1, 2, 3, 4, 5].map((item) => (
          <Link to={`/video/kJQP7kiw5Fk`} key={item} className="related-card">
            <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500" alt="thumbnail" className="related-thumbnail" />
            <div>
              <h4 className="video-title" style={{ fontSize: '14px', marginBottom: '4px' }}>React Router Architecture Tutorial</h4>
              <p className="video-metadata">DevPulse</p>
              <p className="video-metadata">45K views • 1 week ago</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;