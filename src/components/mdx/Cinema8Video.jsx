'use client';

import { useImperativeHandle , forwardRef, useRef } from 'react';

const Cinema8Video = forwardRef(({ 
  videoId, 
  autoplay = false, 
  width = '100%', 
  height = 'auto',
  aspectRatio = '16/9',
  className = ''
}, ref) => {
  const iframeRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      iframeRef.current?.contentWindow?.postMessage({
        type: 'play',
        videoId: videoId
      }, 'https://cinema8.com');
    },
    pause: () => {
      iframeRef.current?.contentWindow?.postMessage({
        type: 'pause',
        videoId: videoId
      }, 'https://cinema8.com');
    },
    getIframe: () => iframeRef.current,
  }));

  return (
    <div className={`relative w-full overflow-hidden rounded-lg shadow-md 
      my-6 mx-auto ${className}`}
      style={{
        maxWidth: '100%',
        aspectRatio: aspectRatio
      }}
    >
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-popups allow-downloads"
        src={`https://cinema8.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&raw=0`}
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen
        className="absolute top-0 left-0 w-full h-full"
        loading="lazy"
      />
      
      {/* Optional hover overlay effect */}
      <div className="absolute inset-0 pointer-events-none 
        opacity-0 hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
});

Cinema8Video.displayName = 'Cinema8Video';

export default Cinema8Video;