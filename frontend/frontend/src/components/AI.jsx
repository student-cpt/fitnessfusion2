import React from 'react';
import ReactPlayer from 'react-player';

const AI = () => {
  const videos = [
    { title: 'Workout Routine 1', url: 'https://youtu.be/YvrKIQ_Tbsk', thumbnail: 'strat.jpg' },
    { title: 'Workout Routine 2', url: 'https://youtu.be/q9dh3X_QxAg', thumbnail: 'get.jpg' },
    { title: 'Workout Routine 3', url: 'https://youtu.be/wnHW6o8WMas', thumbnail: 'today.jpg' },
  ];

  return (
    <div className="App">
      <h1>Welcome to Our Fitness Club</h1>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} />
            <h3>{video.title}</h3>
            <ReactPlayer url={video.url} controls width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AI;
