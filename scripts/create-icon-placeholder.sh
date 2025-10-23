#!/bin/bash

# Create placeholder PNG icons from SVG
# Since we don't have ImageMagick, we'll create a simple script that documents the process

echo "📱 Creating App Icon Placeholders..."

cd public/icons

# Create a placeholder icon using base64 encoded 1x1 pixel PNG
# This is a temporary solution until proper icons are generated

cat > placeholder-icon.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Generate PWA Icons</title>
    <style>
        body {
            font-family: system-ui;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #000;
            color: #fff;
        }
        .container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px;
            border-radius: 20px;
        }
        h1 { margin-top: 0; }
        .icon-preview {
            width: 512px;
            height: 512px;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            border-radius: 128px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto;
            position: relative;
        }
        .infinity {
            font-size: 200px;
            color: white;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        button {
            background: white;
            color: #667eea;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            margin: 10px;
        }
        button:hover {
            transform: scale(1.05);
        }
        .sizes {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 20px;
        }
        .size-box {
            background: rgba(255,255,255,0.1);
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 PWA Icon Generator</h1>
        <p>Generate all required icon sizes for your Progressive Web App</p>
        
        <div class="icon-preview" id="iconPreview">
            <div class="infinity">∞</div>
        </div>

        <div style="text-align: center;">
            <button onclick="generateIcons()">📥 Generate All Sizes</button>
            <button onclick="downloadSVG()">📄 Download SVG</button>
        </div>

        <h3>Required Sizes:</h3>
        <div class="sizes">
            <div class="size-box">72x72</div>
            <div class="size-box">96x96</div>
            <div class="size-box">128x128</div>
            <div class="size-box">144x144</div>
            <div class="size-box">152x152</div>
            <div class="size-box">192x192</div>
            <div class="size-box">384x384</div>
            <div class="size-box">512x512</div>
        </div>

        <h3 style="margin-top: 30px;">Instructions:</h3>
        <ol>
            <li>Visit <a href="https://realfavicongenerator.net/" target="_blank" style="color: #fff;">realfavicongenerator.net</a></li>
            <li>Upload the SVG file from <code>public/icons/icon.svg</code></li>
            <li>Generate all sizes</li>
            <li>Download and extract to <code>public/icons/</code></li>
        </ol>
    </div>

    <script>
        function generateIcons() {
            const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            sizes.forEach(size => {
                canvas.width = size;
                canvas.height = size;
                
                // Create gradient
                const gradient = ctx.createLinearGradient(0, 0, size, size);
                gradient.addColorStop(0, '#3b82f6');
                gradient.addColorStop(1, '#8b5cf6');
                
                // Draw rounded rectangle
                const radius = size / 4;
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(0, 0, size, size, radius);
                ctx.fill();
                
                // Draw infinity symbol
                ctx.fillStyle = 'white';
                ctx.font = `bold ${size * 0.4}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('∞', size / 2, size / 2);
                
                // Download
                canvas.toBlob(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `icon-${size}x${size}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                });
            });
            
            alert('All icon sizes generated! Check your downloads folder.');
        }

        function downloadSVG() {
            const svg = document.querySelector('.icon-preview').innerHTML;
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'mindful-life-icon.svg';
            a.click();
            URL.revokeObjectURL(url);
        }
    </script>
</body>
</html>
EOF

echo "✅ Icon generator HTML created at public/icons/placeholder-icon.html"
echo ""
echo "📋 To generate icons:"
echo "1. Open public/icons/placeholder-icon.html in a browser"
echo "2. Click 'Generate All Sizes' button"
echo "3. Or visit https://realfavicongenerator.net/"
echo ""
