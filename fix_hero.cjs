const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace(
  /<div className="relative w-\[85%\] h-\[85%\] rounded-full border-2 border-accent-primary\/30 overflow-hidden bg-bg-card shadow-\[0_0_40px_var\(--theme-accent-primary\)\] flex items-center justify-center z-10">([\s\S]*?)<\/div>/,
  '<div className="relative w-[85%] h-[85%] rounded-full border-2 border-accent-primary/30 overflow-hidden bg-bg-card shadow-[0_0_40px_var(--theme-accent-primary)] flex items-center justify-center z-10">\n              <img src="/photo.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />\n            </div>'
);
fs.writeFileSync('src/components/Hero.tsx', content);
