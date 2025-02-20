import { useEffect, useRef } from 'react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true; // Setează muzica să fie în loop
      audio.play(); // Pornește muzica
    }
  }, []);

  return (
    <audio ref={audioRef}>
      <source src="/rose.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
