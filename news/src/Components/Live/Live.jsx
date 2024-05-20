import React, { useRef, useState } from 'react';

export default function Live() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  // Function to start streaming video from camera
  const startVideoStream = async () => {
    try {
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 },
          facingMode: 'user' // or 'environment' for rear-facing camera
          
        },
        audio: true
      });
      console.log(stream,'=======stream')
      videoRef.current.srcObject = stream;
      setStream(stream);

      // Save video as Blob and convert to data URL
      const blob = new Blob([stream], { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);

      // Save URL in localStorage
      localStorage.setItem('videoURL', url);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  // Function to stop streaming video
  const stopVideoStream = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  // Function to play the video stored in localStorage
  const playStoredVideo = () => {
    const storedVideoURL = localStorage.getItem('videoURL');
    if (storedVideoURL) {
      videoRef.current.src = storedVideoURL;
      videoRef.current.play();
    }
  };

  return (
    <>
      <div>
        {/* Video element to display the camera stream */}
        <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', maxWidth: '500px' }} />

        {/* Button to start streaming */}
        <button onClick={startVideoStream}>Start Video</button>

        {/* Button to stop streaming */}
        <button onClick={stopVideoStream}>Stop Video</button>

        {/* Button to play stored video */}
        <button onClick={playStoredVideo}>Play Stored Video</button>
      </div>
    </>
  );
}
