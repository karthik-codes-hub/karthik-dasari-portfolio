const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace(/src="\/photo\.jpg"/g, 'src="/pass_photo.png"');
fs.writeFileSync('src/components/Hero.tsx', content);
