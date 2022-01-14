import { useRef, useState } from "react";

export default function MediaPlayer() {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying)
  };
  /* const handlePause = () => {
    const video = videoRef.current;
    video.pause();
  }; */

  return (
    <div>
      <video width="400" ref={videoRef} onClick={handlePlay}>
        <source src="video/planeta.mp4" type="video/mp4"></source>
      </video>
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}
