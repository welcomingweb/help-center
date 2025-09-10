'use client';

import { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react';
import Cinema8Player from 'cinema8-react-player';

const Cinema8Video = forwardRef(({ videoId, autoplay = false }, ref) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Debugging - log when component mounts/updates
  // Ensure player is only initialized once
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy?.(); // Cleanup if available
      }
    };
  }, [videoId]);

  useImperativeHandle(ref, () => ({
    play: () => {
      console.log('Attempting to play');
      playerRef.current?.play();
    },
    pause: () => {
      console.log('Attempting to pause');
      playerRef.current?.pause();
    },
    getPlayer: () => playerRef.current,
  }));

  return (
    <div 
      ref={containerRef}
      className="relative w-full" 
      style={{ paddingTop: '56.25%' }}
    >
      <Cinema8Player
	    key={videoId}
        ref={playerRef}
        id={videoId}
        autoplay={autoplay}
        className="c8-player absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
});

Cinema8Video.displayName = 'Cinema8Video'; // Helps with React DevTools

export default Cinema8Video;