const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/main.js');
script.onload = () => script.remove(); // Clean up after loading
(document.head || document.documentElement).appendChild(script);