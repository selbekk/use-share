// TODO: Remove when TypeScript 3.9 is released
interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}
interface Navigator {
  share?: (shareData: ShareData) => Promise<void>;
}
