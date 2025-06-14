<div>
  <h1>🕵️‍♂️ CHeatCHass Extension</h1>
  <p><em>A Chrome extension that analyzes and optimizes in-game decisions in real-time, working discreetly in the background.</em></p>

  <hr>

  <h2>🧩 <strong>Project Structure</strong></h2>
  <pre>
📦Stealth-Helper
├── content.js          # "Innocent" loader script
├── icon.png            # Extension icon
├── manifest.json       # Chrome extension config
├── package.json        # NPM dependencies
└── scripts/
    ├── background.js   # Background service worker
    └── main.js         # Core logic (obfuscated)
  </pre>

  <hr>

  <h2>🔌 <strong>How It Works</strong></h2>

  <h3><strong>1. Content.js (Loader)</strong></h3>
  <ul>
    <li><strong>Looks harmless</strong> – Passes casual inspection.</li>
    <li><strong>Dynamically injects</strong> <code>main.js</code>:</li>
  </ul>
  <pre><code>
const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/main.js');
script.onload = () => script.remove(); // Self-cleaning
(document.head || document.documentElement).appendChild(script);
  </code></pre>

  <h3><strong>2. Main.js (Core)</strong></h3>
  <ul>
    <li><strong>Obfuscated</strong> – Minimizes detection/reverse-engineering.</li>
    <li><strong>Real-time analysis</strong> – Uses optimized algorithms.</li>
    <li><strong>No DOM traces</strong> – Operates purely in memory.</li>
  </ul>

  <hr>

  <h2>🎮 <strong>Usage Guide</strong></h2>

  <h3>1. Activation Process</h3>
  <div style="background: #1e1e1e; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
    <p><strong>Step-by-Step Flow:</strong></p>
    <ol>
      <li>Open Chrome DevTools (F12 or Ctrl+Shift+I)</li>
      <li>Navigate to "Console" tab</li>
      <li>Type these commands:</li>
    </ol>
    <pre><code>// Start the helper
startHelper()

// Stop when done (optional)
stopHelper()</code></pre>
  </div>

  <h3>2. Color Selection Prompt</h3>
  <div style="border: 1px solid #444; padding: 15px; border-radius: 5px; background: #2a2a2a;">
    <p>After activation, you'll see:</p>
    <div style="background: white; color: black; padding: 10px; border-radius: 3px; margin: 10px 0; font-family: Arial;">
      <strong>System Alert:</strong><br>
      "Enter your color (white/black):"<br>
      <input type="text" placeholder="Type 'white' or 'black'" style="margin-top: 5px; padding: 3px;">
    </div>
    <p>The extension will then:</p>
    <ul>
      <li>Analyze the board every 2 seconds</li>
      <li>Output suggestions to console (no visible UI)</li>
      <li>Format: <code style="color: lightgreen;">%cBest move: [move]</code></li>
    </ul>
  </div>

  <h3>3. Real-Time Analysis</h3>
  <div style="display: flex; gap: 15px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 200px; background: #252525; padding: 10px; border-radius: 5px;">
      <strong>✔️ Normal Mode</strong>
      <ul style="margin-top: 5px;">
        <li>1.5s analysis per move</li>
        <li>Console-only output</li>
      </ul>
    </div>
    <div style="flex: 1; min-width: 200px; background: #252525; padding: 10px; border-radius: 5px;">
      <strong>⚡ Turbo Mode</strong>
      <ul style="margin-top: 5px;">
        <li>0.8s analysis (faster)</li>
        <li>Higher CPU usage</li>
      </ul>
    </div>
  </div>

  <hr>

  <h2>🛠 <strong>Setup Guide</strong></h2>
  <div style="background: #1e1e1e; padding: 15px; border-radius: 5px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #444; width: 30%;"><strong>1. Clone Repo</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #444;"><code>git clone https://github.com/Amir1github/CHeatCHass.git</code></td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #444;"><strong>2. Open Extensions</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #444;"><code>chrome://extensions/</code></td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>3. Load Extension</strong></td>
        <td style="padding: 8px;">Enable "Developer Mode" → "Load Unpacked"</td>
      </tr>
    </table>
  </div>

  <div style="border-left: 4px solid #ff5555; padding: 10px; margin: 20px 0; background: #2a2a2a;">
    <strong>⚠️ Important Notes:</strong>
    <ul>
      <li>Works only on Chromium browsers (Chrome/Edge/Brave)</li>
      <li>Refresh target page after extension installation</li>
      <li>Disable when not in use to conserve resources</li>
    </ul>
  </div>

  <hr>

  <div style="text-align: center; margin-top: 30px;">
    <sub>MIT © 2024 | Undetectable by design | Use responsibly</sub>
  </div>
</div>
