export const GOOGLE_ADS_ID = 'AW-18417775316';
export const GOOGLE_CONVERSION_SEND_TO = 'AW-18417775316/f1RCCLHgg-0cENTlo85E';

/**
 * Dispatches Google Ads conversion event
 */
export function trackGoogleConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_CONVERSION_SEND_TO,
    });
    console.log('[Google Ads] Event conversion dispatched:', GOOGLE_CONVERSION_SEND_TO);
  }
}
