 "use client"
 
 /**
 * Help Center UI Components
 * Import these components in your MDX files to create consistent documentation
 */
import { useRef, useState, useEffect } from 'react';
 
import Cinema8Video  from '@components/mdx/Cinema8Video';
import Link from 'next/link'
import { SparklesIcon } from '@heroicons/react/24/outline'

// 2. Step Component (for tutorials)
export function Step({ number, title, children }) {
  return (
    <div className="mb-8 group">
      <div className="flex items-center mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 group-hover:bg-blue-700 transition-colors">
          {number}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="pl-11 prose-sm">{children}</div>
    </div>
  );
}

// 3. Video Tutorial Card
export function VideoTutorial({ title, thumbnail, duration, link }) {
  return (
    <a href={link} className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-200">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Duration label */}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
      </div>
    </a>
  );
}
 

export function C8VideoTutorial({ title, thumbnail, duration, link, videoId }) {
  return (
    <div className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-200">
        {/* Thumbnail preview and play icon */}
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        {/* Embed Cinema8 video if videoId is provided */}
        {videoId && <Cinema8Video videoId={videoId} autoplay={false} />}
      </div>
    </div>
  );
}



export function FeatureHighlight({ icon, title, children }) {
  const Icon = icon || <SparklesIcon className="w-5 h-5" />

  return (
    <div className="border rounded-lg p-5 hover:border-blue-300 transition-colors">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
          {icon ? icon : Icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  )
}



// 5. Comparison Table
export function ComparisonTable({ features, plans }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 border-b">Feature</th>
            {plans.map((plan, i) => (
              <th key={i} className="text-center p-3 border-b">{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="p-3 border-b">{feature.name}</td>
              {plans.map((_, j) => (
                <td key={j} className="text-center p-3 border-b">
                  {feature.values[j] === true ? (
                    <span className="text-green-500">✓</span>
                  ) : feature.values[j] === false ? (
                    <span className="text-gray-300">✗</span>
                  ) : (
                    feature.values[j]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 6. Tooltip (for UI elements explanation)
export function Tooltip({ text, children }) {
  return (
    <span className="relative group inline-block">
      {children}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-gray-800 border-l-transparent border-r-transparent" />
      </span>
    </span>
  );
}

// 7. Keyboard Shortcut
export function Kbd({ keys }) {
  return (
    <span className="inline-flex items-center space-x-1">
      {keys.map((key, i) => (
        <>
          <kbd key={i} className="px-2 py-1 text-xs font-semibold bg-gray-100 border border-gray-300 rounded">
            {key}
          </kbd>
          {i < keys.length - 1 && <span>+</span>}
        </>
      ))}
    </span>
  );
}

// 8. Settings Option
export function SettingOption({ name, description, control }) {
  return (
    <div className="flex items-start justify-between py-4 border-b">
      <div className="mr-4">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div>{control}</div>
    </div>
  );
}

// 9. Video Editor UI Demo
export function EditorDemo({ screenshot, hotspots = [] }) {
  return (
    <div className="relative my-6 border rounded-lg overflow-hidden">
      <img src={screenshot} alt="Editor screenshot" className="w-full" />
      {hotspots.map((hotspot, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 flex items-center justify-center bg-red-500 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 transition-all"
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
        >
          <span className="text-white font-bold">{i + 1}</span>
        </div>
      ))}
    </div>
  );
}
 

export function GifPreview({ src, caption, maxWidth = '100%', staticSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const staticPreview = staticSrc || src.replace('.gif', '-static.jpg');

  return (
    <div className="my-6" style={{ maxWidth }}>
      <div
        className="relative cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <img
          src={src}
          alt={caption}
          className="rounded-lg border"
          style={{
            display: isPlaying ? 'block' : 'none'
          }}
        />
        <img
          src={staticPreview}
          alt={caption}
          className="rounded-lg border"
          style={{
            display: isPlaying ? 'none' : 'block'
          }}
        />
        <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-sm text-center text-gray-500 mt-2">
          {caption} {!isPlaying && '(Click to play)'}
        </p>
      )}
    </div>
  );
}

 
 
 



export function VersionUpdate({ version, date, highlights }) {
  return (
    <div className="my-8 border-l-4 border-blue-500 pl-4">
      <div className="flex items-baseline">
        <h3 className="text-xl font-bold">Version {version}</h3>
        <span className="ml-2 text-sm text-gray-500">{date}</span>
      </div>
      
      <div className="mt-4 space-y-4">
        {highlights.map((highlight, i) => (
          <div key={i} className="flex">
            <div className="flex-shrink-0 mt-1">
              {highlight.type === 'feature' ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              ) : highlight.type === 'improvement' ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  Improved
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                  Fixed
                </span>
              )}
            </div>
            <div className="ml-3">
              <h4 className="font-medium">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.description}</p>
              {highlight.link && (
                <a href={highlight.link} className="text-sm text-blue-600 hover:underline">
                  View release details
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



 
 
 
export function Cinema8VideoPreview({
  videoId,
  posterSrc,
  caption,
  controls= '1',
  maxWidth = '100%',
  useModal = false,
  maskType = 'none'
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const iframeRef = useRef(null);

  const handlePlay = () => {
    useModal ? setShowModal(true) : setIsPlaying(true);
  };

  const handleStop = () => {
    if (useModal) {
      setShowModal(false);
    } else {
      setIsPlaying(false);
      iframeRef.current?.contentWindow?.postMessage({ type: 'pause', videoId }, 'https://cinema8.com');
    }
  };

  useEffect(() => {
    if (isPlaying && iframeRef.current && !useModal) {
      iframeRef.current.contentWindow.postMessage({ type: 'play', videoId }, 'https://cinema8.com');
    }
  }, [isPlaying, videoId, useModal]);

  // Updated fancy mask styles (designed to clip only the edges)
  const maskClass = {
    none: '',
    splash: 'mask-[url(/masks/mask2.png)] mask-no-repeat mask-center mask-size-cover',
    curve: 'mask-[url(/masks/blob-rounded.svg)] mask-no-repeat mask-center mask-size-cover',
    wave: 'mask-[url(/masks/wawe.png)] mask-no-repeat mask-center mask-size-cover',
    smile: 'mask-[url(/masks/brush.webp)] mask-no-repeat mask-center mask-size-cover',
    diamond: 'mask-[url(/masks/Mistletoe-image.webp)] mask-no-repeat mask-center mask-size-cover',
    burst: 'mask-[url(/masks/rounded-burst.svg)] mask-no-repeat mask-center mask-size-cover'
  }[maskType] || '';

  return (
    <>
      <div className="my-8 mx-auto" style={{ maxWidth }}>
        <div className="relative group">
          <div className="relative overflow-hidden aspect-video bg-transparent">
            {!useModal && isPlaying ? (
              <>
                <iframe
                  ref={iframeRef}
                  src={`https://cinema8.com/video/${videoId}?autoplay=1&muted=0&controls=${controls}`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                />
                <button
                  onClick={handleStop}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full p-2 z-50"
                  aria-label="Stop video"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <div
                  className={`w-full h-full bg-cover bg-center cursor-pointer transition-all duration-300 ${maskClass}`}
                  style={{ backgroundImage: `url(${posterSrc})` }}
                  onClick={handlePlay}
                />
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <div className="bg-black/60 hover:bg-black/70 rounded-full p-4 transition">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </>
            )}
          </div>

          {caption && (
            <p className="mt-3 text-sm text-center text-gray-500">
              {caption}{' '}
              {(!isPlaying || useModal) && (
                <span className="text-gray-400 text-xs">(Click to play)</span>
              )}
            </p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              src={`https://cinema8.com/video/${videoId}?autoplay=1&muted=0`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
            <button
              onClick={handleStop}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 z-50"
              aria-label="Close video"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export function FeatureMatrix({ platforms, features }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 border-b bg-gray-50">Feature</th>
            {platforms.map((platform, i) => (
              <th key={i} className="text-center p-3 border-b bg-gray-50">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{platform.name}</span>
                  <span className="text-xs text-gray-500">{platform.version}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="p-3 border-b font-medium">{feature.name}</td>
              {platforms.map((_, j) => (
                <td key={j} className="text-center p-3 border-b">
                  {feature.availability[j] === 'full' ? (
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Available
                    </span>
                  ) : feature.availability[j] === 'partial' ? (
                    <span className="inline-flex items-center text-yellow-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                      </svg>
                      Partial
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-gray-400">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Unavailable
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQ({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div className="my-6 border rounded-lg divide-y">
      {items.map((item, i) => (
        <div key={i} className="p-4">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <h3 className="font-medium">{item.question}</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === i ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${activeIndex === i ? 'mt-3 opacity-100' : 'h-0 opacity-0'}`}
          >
            <div className="text-sm text-gray-600">
              {item.answer}
              {item.link && (
                <a href={item.link} className="text-blue-600 hover:underline ml-2">
                  View related documentation →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function QuickActions({ actions }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {actions.map((action, i) => (
        <a
          key={i}
          href={action.link}
          className="border rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
            {action.icon}
          </div>
          <h4 className="font-medium text-sm">{action.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{action.description}</p>
        </a>
      ))}
    </div>
  );
}

export function BeforeAfterSlider({ before, after }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative my-8 h-64 md:h-96 rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={after} 
          alt="After" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          const startPos = sliderPosition;
          
          const handleMouseMove = (e) => {
            const container = e.currentTarget.parentElement;
            const containerRect = container.getBoundingClientRect();
            const newPos = startPos + ((e.clientX - startX) / containerRect.width * 100);
            setSliderPosition(Math.min(100, Math.max(0, newPos)));
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
        After
      </div>
    </div>
  );
}

export function ProgressTracker({ steps, currentStep }) {
  return (
    <div className="my-8">
      <div className="flex justify-between relative">
        {/* Line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              {i < currentStep ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className={`mt-2 text-sm ${i <= currentStep ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HotspotImage({ src, hotspots }) {
  const [activeHotspot, setActiveHotspot] = useState(null);
  
  const toggleHotspot = (index) => {
    setActiveHotspot(activeHotspot === index ? null : index);
  };

  return (
    <div className="relative my-6 group">
      <img 
        src={src} 
        alt="" 
        className="w-full rounded-lg border border-gray-200 shadow-sm transition-opacity duration-200"
        style={{ opacity: activeHotspot !== null ? 0.9 : 1 }}
      />
      
      {hotspots.map((hotspot, i) => (
        <button
          key={i}
          className={`absolute w-8 h-8 flex items-center justify-center rounded-full 
            ${activeHotspot === i ? 
              'bg-blue-600 ring-4 ring-blue-200 scale-110' : 
              'bg-blue-500 hover:bg-blue-600 scale-100'} 
            text-white font-medium transition-all duration-200 ease-out cursor-pointer
            before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white
            before:animate-spin before:duration-2000 before:ease-linear before:opacity-70
            hover:before:opacity-100`}
          style={{
            left: `${hotspot.x}%`,
            top: `${hotspot.y}%`,
            transform: `translate(-50%, -50%) ${activeHotspot === i ? 'scale(1.1)' : 'scale(1)'}`,
            '--tw-rotate': '360deg',
          }}
          onClick={() => toggleHotspot(i)}
          aria-label={`Hotspot ${i + 1}: ${hotspot.title}`}
          aria-expanded={activeHotspot === i}
        >
          <span className="relative z-10">{i + 1}</span>
        </button>
      ))}
      
      {activeHotspot !== null && (
        <div 
          className="absolute bg-white shadow-2xl rounded-lg p-4 z-10 border-2 border-blue-100 transition-all duration-200"
          style={{
            left: `${Math.min(hotspots[activeHotspot].x + 5, 85)}%`,
            top: `${Math.min(hotspots[activeHotspot].y + 5, 85)}%`,
            minWidth: '220px',
            maxWidth: '320px',
            transform: 'translateY(5px)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <button 
            onClick={() => setActiveHotspot(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-1"
            aria-label="Close hotspot"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h4 className="font-semibold mb-2 text-gray-800 border-b border-blue-100 pb-2">
            {hotspots[activeHotspot].title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {hotspots[activeHotspot].description}
          </p>
        </div>
      )}
    </div>
  );
}
// components/Spacer.jsx
export function Spacer({ size = 'md' }) {
  const sizes = {
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-16',
    xl: 'h-24'
  };
  
  return <div className={`${sizes[size] || sizes.md} w-full`} />;
}

 
  
export function CTA1({
  title = 'Join Us Today!',
  description = 'Get access to exclusive content and features by signing up.',
  buttonText = 'View details',
  buttonLink = '#',
}) {
  const external = isExternal(buttonLink);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="space-y-4 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-blue-100 text-lg opacity-90">{description}</p>
      </div>

      <Link
        href={buttonLink}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="
          bg-white text-blue-600 hover:bg-blue-50
          inline-block py-3 px-8 rounded-full font-medium 
          transition-all duration-300 transform hover:scale-[1.02]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
          shadow-sm hover:shadow-md
          border border-white border-opacity-30
        "
      >
        {buttonText}
        {external && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14" />
          </svg>
        )}
      </Link>
    </div>
  );
}


export function CTA2({
  title = 'Join Us Today!',
  description = 'Get access to exclusive content and features by signing up.',
  buttonText = 'View details',
  buttonLink = '#',
}) {
	
	const external = isExternal(buttonLink);

  return (
    <div className="bg-white text-gray-800 text-center p-8 rounded-xl shadow-xl max-w-md mx-auto border border-gray-100">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <Link
        href={buttonLink}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
        className="
          bg-gradient-to-r from-blue-500 to-blue-600 text-white
          inline-block py-3 px-8 rounded-full font-medium 
          transition-all duration-300 hover:opacity-90
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          shadow-md hover:shadow-lg
        "
      >
        {buttonText}
		{external && (
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            className="inline-block ml-2 w-4 h-4"
		            fill="none"
		            viewBox="0 0 24 24"
		            stroke="currentColor"
		            strokeWidth={2}
		          >
		            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
		            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14" />
		          </svg>
		        )}	
      </Link>
    </div>
  );
}

export function CTA3({
  title = 'Join Us Today!',
  description = 'Get access to exclusive content and features by signing up.',
  buttonText = 'View details',
  buttonLink = '#',
}) {
	
	const external = isExternal(buttonLink);

  return (
    <div className="relative bg-white text-gray-800 text-center p-8 rounded-xl shadow-2xl max-w-2xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-60"></div>
      <div className="relative space-y-4 mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      
      <div className="relative">
        <Link
          href={buttonLink}
		  target={external ? '_blank' : undefined}
		  rel={external ? 'noopener noreferrer' : undefined}
          className="
            bg-blue-600 text-white hover:bg-blue-700
            inline-block py-3 px-8 rounded-lg font-medium 
            transition-all duration-300 hover:-translate-y-1
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            shadow-lg hover:shadow-xl
          "
        >
          {buttonText}
		  {external && (
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              className="inline-block ml-2 w-4 h-4"
		              fill="none"
		              viewBox="0 0 24 24"
		              stroke="currentColor"
		              strokeWidth={2}
		            >
		              <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
		              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14" />
		            </svg>
		          )}
        </Link>
      </div>
    </div>
  );
}


function isExternal(link) {
  return /^https?:\/\//.test(link);
}
