import { useState } from 'react';

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return { copied, copyToClipboard };
}

export default useCopyToClipboard;
