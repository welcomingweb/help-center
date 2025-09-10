// components/InjectA11yWidget.tsx
'use client';

import { useEffect } from 'react';

export default function InjectA11yWidget() {
  useEffect(() => {
    // Prevent multiple injections
    if (document.querySelector('script[data-widget="a11y"]')) return;

    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_A11Y_WIDGET_URL!;
    script.setAttribute('data-widget-id', process.env.NEXT_PUBLIC_A11Y_WIDGET_ID!);
    script.setAttribute('data-api-url', process.env.NEXT_PUBLIC_A11Y_API_URL!);
    script.setAttribute('data-widget', 'a11y');

    document.body.appendChild(script);
  }, []);

  return null;
}
