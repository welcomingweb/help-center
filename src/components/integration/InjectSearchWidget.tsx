'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function InjectSearchWidget() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scriptId = 'search-widget-script';
    let script = document.getElementById(scriptId);
    const reinitializeWidget = async () => {
	   console.log('reinitializeWidget');
       // Now safely re-initialize
      if (window.SearchWidget?.refresh) {
        console.log('Refreshing SearchWidget...');
        window.SearchWidget.refresh();
      } else if (window.SearchWidget?.open) {
        // fallback in case refresh is not yet available
        console.log('Setting mode for SearchWidget...');
        window.SearchWidget.setMode('popup'); // Default mode
      } else {
        console.warn('SearchWidget not ready to refresh.');
      }
    };

    if (!script) {
      // First time: inject the widget script
      script = document.createElement('script');
      script.src = process.env.NEXT_PUBLIC_SEARCH_WIDGET_URL!;
      script.setAttribute('data-widget-search-id', process.env.NEXT_PUBLIC_SEARCH_WIDGET_ID!);
      script.setAttribute('data-widget', 'search');
	  script.setAttribute('data-widget-placeholder', 'Search articles, features or how-tos…');
      script.id = scriptId;

       script.onerror = (err) => {
        console.error('Failed to load the search widget script:', err);
      };

      document.body.appendChild(script);
    } else {
      // Script already loaded: just refresh the widget
      reinitializeWidget();
    }

    // No need to remove the script on cleanup anymore

  }, [pathname]);

  return null;
}
