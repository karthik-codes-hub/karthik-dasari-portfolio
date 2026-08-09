const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace(
  /            <\/div>\n                <\/div>\n              \)}\n            <\/div>/g,
  '            </div>'
);
fs.writeFileSync('src/components/Hero.tsx', content);
