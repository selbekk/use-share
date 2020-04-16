import React from 'react';
import copyToClipboard from 'copy-to-clipboard';

type ShareData = {
  /** A title that describes your content */
  title?: string;
  /** A text describing what your sharing, or the content itself. */
  text?: string;
  /** A URL to the content you're sharing */
  url?: string;
};
/** Hook that lets you trigger the Web Share API.
 * If the Web Share API is not supported, it copies the content to clipboard.
 *
 * @see https://web.dev/web-share/
 *
 * @example
 * const { share, hasShared } = useShare({ url: 'https://my.app' });
 * <button onClick={share} disabled={hasShared}>
 *   {hasShared ? 'Shared' : 'Share!'}
 * </button>
 */
export default function useShare(shareData: ShareData) {
  const [hasShared, setShared] = React.useState(false);

  React.useEffect(() => {
    if (hasShared) {
      const timeoutId = setTimeout(() => setShared(false), 1000);
      return () => clearTimeout(timeoutId);
    }
    return;
  }, [hasShared]);

  /**
   * Triggers the Share functionality of your device if available.
   * Falls back to copying the content to the clipboard if not supported
   */
  const share = () => {
    const fallbackCopyText =
      shareData.url || shareData.text || shareData.title || '';
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => setShared(true))
        .catch(() => {
          const hasCopied = copyToClipboard(fallbackCopyText);
          setShared(hasCopied);
        });
    } else {
      const hasCopied = copyToClipboard(fallbackCopyText);
      setShared(hasCopied);
    }
  };

  return { share, hasShared };
}
