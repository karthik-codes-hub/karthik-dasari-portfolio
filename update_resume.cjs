const fs = require('fs');

['src/components/Navbar.tsx', 'src/components/Hero.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/href="\/resume\.pdf"/g, 'href="/karthik_resume.pdf"');
  fs.writeFileSync(file, content);
});
