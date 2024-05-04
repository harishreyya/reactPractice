// src/components/VideoGallery.js

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=BNfAf4To73c&key=AIzaSyAV0I2S_KIN0ZdkTAYtd27BBUTkyCUKaAA`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video Gallery</h1>
      <div className="videos">
        {videos.map((video) => (
          <div key={video.id}>
            <YouTube videoId={video.snippet.resourceId.videoId} />
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
