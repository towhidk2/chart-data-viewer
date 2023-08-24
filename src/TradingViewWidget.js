import React, { useEffect, useRef } from 'react';


let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_426be') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:NVDA",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            save_image: false,
            withdateranges: true,
            hide_volume: true,
            container_id: "tradingview_426be"
          });
        }
      }
    },
    []
  );

  const styles = {
    width: "100%",
    height: "100vh"
  }

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_426be' style={styles} />
      {/* <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
      </div> */}
    </div>
  );
}

