"use client";
import { useEffect, useState } from "react";

export default function PopupModal({ url, isOpen, onClose, iframeHeight = 400 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    let fallback;
    if (isOpen) {
      fallback = setTimeout(() => {
        setIsLoading(false);
      }, 7000);
    }
    return () => clearTimeout(fallback);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl sm:max-w-2xl transition-all overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Contact Support</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Loader */}
        {isLoading && (
          <div className="flex justify-center items-center" style={{ height: `${iframeHeight}px` }}>
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

		
        {/* Iframe */}
		<div
		  className={`w-full ${isLoading ? 'invisible' : 'visible'}`}
		  style={{
		    padding: '1.5rem', // adds padding around iframe
		    backgroundColor: 'white',
		  }}
		>
		<div className="w-full" style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <iframe
            src={url}
            className="w-full border-none"
            style={{ height: `${iframeHeight}px`, backgroundColor: "transparent", marginTop: "-1px" }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
		</div>
        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
