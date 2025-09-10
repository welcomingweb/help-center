'use client';
import { useState } from 'react';
import PopupModal from '@components/popup/PopupModal';

export default function PopupModalTrigger({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 relative group"
      >
        Submit Ticket
      </button>

      <PopupModal url={url} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
