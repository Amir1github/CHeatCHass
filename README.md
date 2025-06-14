<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stealth Helper Extension</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #1e1e1e;
            color: #dcdcdc;
        }
        h1 {
            color: #569cd6;
            text-align: center;
            font-size: 2.5em;
        }
        p.subtitle {
            text-align: center;
            font-style: italic;
            color: #888;
            margin-bottom: 30px;
        }
        .section-title {
            color: #9cdcfe;
            border-bottom: 2px solid #444;
            padding-bottom: 10px;
            margin-top: 30px;
        }
        .code-block {
            background: #2d2d2d;
            padding: 15px;
            border-radius: 5px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9em;
            margin: 15px 0;
            overflow-x: auto;
        }
        .code-block span.keyword { color: #569cd6; }
        .code-block span.string { color: #ce9178; }
        .code-block span.variable { color: #9cdcfe; }
        .code-block span.method { color: #dcdcaa; }
        .code-block span.comment { color: #6a9955; }
        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 20px 0;
        }
        .feature-card {
            background: #2d2d2d;
            padding: 15px;
            border-radius: 5px;
            flex: 1;
            min-width: 200px;
            transition: transform 0.2s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-card b {
            color: #9cdcfe;
        }
        .setup-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: #2d2d2d;
            border-radius: 5px;
            overflow: hidden;
        }
        .setup-table td {
            padding: 15px;
            border-bottom: 1px solid #444;
        }
        .setup-table td:first-child {
            font-weight: bold;
            color: #9cdcfe;
            width: 30%;
        }
        .disclaimer {
            background: #2a2a2a;
            padding: 15px;
            border-left: 4px solid #ff5555;
            margin: 20px 0;
            border-radius: 5px;
        }
        .disclaimer b {
            color: #ff5555;
        }
        .footer {
            text-align: center;
            color: #888;
            font-size: 0.8em;
            margin-top: 30px;
        }
        ul {
            padding-left: 20px;
        }
        ul li {
            margin: 10px 0;
        }
        @media (max-width: 600px) {
            .feature-card {
                min-width: 100%;
            }
            .setup-table td {
                display: block;
                width: 100%;
            }
            .setup-table td:first-child {
                border-bottom: none;
            }
        }
    </style>
</head>
<body>
    <div align="center">
        <h1>🕵️‍♂️ Stealth Helper Extension</h1>
        <p class="subtitle"><i>A Chrome extension that analyzes and optimizes in-game decisions in real-time, working discreetly in the background.</i></p>
    </div>

    <h2 class="section-title">🧩 Project Structure</h2>
    <pre class="code-block">
📦Stealth-Helper
├── content.js          <span class="comment"># "Innocent" loader script</span>
├── icon.png            <span class="comment"># Extension icon</span>
├── manifest.json       <span class="comment"># Chrome extension config</span>
├── package.json        <span class="comment"># NPM dependencies</span>
└───scripts/
    ├── background.js   <span class="comment"># Background service worker</span>
    └── main.js         <span class="comment"># Core logic (obfuscated)</span>
    </pre>

    <h2 class="section-title">🔌 How It Works</h2>
    <h3>1. Content.js (Loader)</h3>
    <div class="code-block">
        <span class="keyword">const</span> <span class="variable">script</span> = <span class="variable">document</span>.<span class="method">createElement</span>(<span class="string">'script'</span>);<br>
        <span class="variable">script</span>.<span class="variable">src</span> = <span class="variable">chrome</span>.<span class="variable">runtime</span>.<span class="method">getURL</span>(<span class="string">'scripts/main.js'</span>);<br>
        <span class="variable">script</span>.<span class="variable">onload</span> = () => <span class="variable">script</span>.<span class="method">remove</span>(); <span class="comment">// Self-cleaning</span><br>
        (<span class="variable">document</span>.<span class="variable">head</span> || <span class="variable">document</span>.<span class="variable">documentElement</span>).<span class="method">appendChild</span>(<span class="variable">script</span>);
    </div>

    <h3>2. Main.js (Core)</h3>
    <ul>
        <li>🔒 <b>Obfuscated</b> - Minimizes detection/reverse-engineering</li>
        <li>⚡ <b>Real-time analysis</b> - Uses optimized algorithms</li>
        <li>🧹 <b>No DOM traces</b> - Operates purely in memory</li>
    </ul>

    <h2 class="section-title">🛠 Setup Guide</h2>
    <table class="setup-table">
        <tr>
            <td><b>1. Clone the repo</b></td>
            <td><code>git clone https://github.com/Amir1github/CHeatCHass.git</code></td>
        </tr>
        <tr>
            <td><b>2. Open Extensions</b></td>
            <td>Navigate to <code>chrome://extensions/</code></td>
        </tr>
        <tr>
            <td><b>3. Enable Dev Mode</b></td>
            <td>Toggle switch in top-right corner</td>
        </tr>
        <tr>
            <td><b>4. Load Extension</b></td>
            <td>Click "Load Unpacked" and select the folder</td>
        </tr>
    </table>

    <h2 class="section-title">⚡ Key Features</h2>
    <div class="features">
        <div class="feature-card">
            <b>🕵️ Stealth Mode</b><br>
            No network calls or DOM changes
        </div>
        <div class="feature-card">
            <b>⚡ Fast Analysis</b><br>
            Optimized engine for quick suggestions
        </div>
        <div class="feature-card">
            <b>🧹 Self-Cleaning</b><br>
            Removes traces after execution
        </div>
    </div>

    <div class="disclaimer">
        <b>⚠️ Disclaimer</b><br>
        <i>For educational/research purposes only. Use responsibly and in compliance with platform rules.</i>
    </div>

    <div class="footer">
        <sub>MIT © 2024 | 🔒 Undetectable by design</sub>
    </div>
</body>
</html>