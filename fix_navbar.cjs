const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(/import \{ Menu, X, Sun, Moon \} from 'lucide-react';/, "import { Menu, X } from 'lucide-react';");
content = content.replace(/import \{ useTheme \} from '\.\/ThemeProvider';\n/, "");
content = content.replace(/  const \{ theme, setTheme \} = useTheme\(\);\n/, "");

content = content.replace(
  /<button[\s\S]*?onClick=\{[\s\S]*?setTheme[\s\S]*?<\/button>/g,
  ""
);

fs.writeFileSync('src/components/Navbar.tsx', content);
