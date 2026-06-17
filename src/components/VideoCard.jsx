import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Link to={`/video/${video.id}`}>
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="rounded-lg w-full h-48 object-cover hover:rounded-none transition-all"
        />
      </Link>
      <div className="flex gap-3 mt-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div>
          <Link to={`/video/${video.id}`}>
            <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          </Link>
          <p className="text-sm text-gray-500">{video.channelName}</p>
          <p className="text-sm text-gray-500">{video.views} views • {video.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;