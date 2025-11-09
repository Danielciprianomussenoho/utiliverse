// components/ui/AdSense.tsx - Versão temporária
'use client';
import { useEffect, useId } from 'react';

export default function AdSense() {
  const adKey = useId();

  // ⚠️ Comente por enquanto
  // useEffect(() => {
  //   try {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (err) {
  //     console.error('AdSense error:', err);
  //   }
  // }, []);

  return (
    <div key={adKey} className="min-h-[90px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
        <div>📊 Anúncios Google AdSense</div>
        <div className="text-xs mt-1">Em breve aqui</div>
      </div>
      
      {/*
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7814674079546155"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
    </div>
  );
}