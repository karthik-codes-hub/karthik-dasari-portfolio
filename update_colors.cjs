const fs = require('fs');
const path = require('path');

const dir = 'src';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const colorMap = [
  // Backgrounds
  [/bg-white dark:bg-black\/[0-9]+/g, 'bg-bg-card'],
  [/bg-white dark:bg-black/g, 'bg-bg-main'],
  [/bg-zinc-100 dark:bg-zinc-900\/50/g, 'bg-bg-card'],
  [/bg-zinc-100 dark:bg-zinc-900/g, 'bg-bg-card'],
  [/bg-zinc-200 dark:bg-zinc-800/g, 'bg-bg-card-hover'],
  [/dark:hover:bg-black\/60/g, 'hover:bg-bg-card-hover'],
  [/bg-white dark:hover:bg-black\/60/g, 'hover:bg-bg-card-hover'],
  [/bg-zinc-900\/50/g, 'bg-bg-card'],
  [/bg-cyan-950\/30/g, 'bg-accent-primary/10'],
  [/bg-cyan-950\/40/g, 'bg-accent-primary/20'],
  [/hover:bg-cyan-950\/40/g, 'hover:bg-accent-primary/20'],
  
  // Text Colors
  [/text-zinc-900 dark:text-zinc-100/g, 'text-text-main'],
  [/text-zinc-800 dark:text-zinc-200/g, 'text-text-main'],
  [/text-zinc-700 dark:text-zinc-300/g, 'text-text-secondary'],
  [/text-zinc-600 dark:text-zinc-400/g, 'text-text-muted'],
  [/text-zinc-500 dark:text-zinc-500/g, 'text-text-muted'],
  [/text-zinc-500/g, 'text-text-muted'],
  [/text-zinc-400/g, 'text-text-muted'],
  [/text-zinc-300/g, 'text-text-secondary'],
  [/text-zinc-200/g, 'text-text-main'],
  [/text-zinc-100/g, 'text-text-main'],
  [/text-cyan-400/g, 'text-accent-primary'],
  [/text-cyan-500/g, 'text-accent-primary'],
  [/text-cyan-300/g, 'text-accent-primary'],

  // Border Colors
  [/border-zinc-200 dark:border-zinc-800\/[0-9]+/g, 'border-border-main'],
  [/border-zinc-200 dark:border-zinc-800/g, 'border-border-main'],
  [/border-zinc-300 dark:border-zinc-700\/[0-9]+/g, 'border-border-main'],
  [/border-zinc-300 dark:border-zinc-700/g, 'border-border-main'],
  [/border-cyan-900\/50/g, 'border-accent-primary/30'],
  [/border-cyan-500\/50/g, 'border-accent-primary/50'],
  [/border-cyan-500\/30/g, 'border-accent-primary/30'],
  [/border-cyan-500\/20/g, 'border-accent-primary/20'],
  [/border-cyan-500/g, 'border-accent-primary'],
  
  // Shadows
  [/shadow-\[0_0_20px_rgba\(6,182,212,0\.3\)\]/g, 'shadow-[0_0_20px_var(--theme-accent-primary)] shadow-accent-primary/30'],
  [/shadow-\[0_0_30px_rgba\(6,182,212,0\.5\)\]/g, 'shadow-[0_0_30px_var(--theme-accent-primary)] shadow-accent-primary/50'],
  [/shadow-\[0_0_10px_rgba\(6,182,212,0\.5\)\]/g, 'shadow-[0_0_10px_var(--theme-accent-primary)] shadow-accent-primary/50'],
  [/shadow-\[0_0_40px_rgba\(6,182,212,0\.15\)\]/g, 'shadow-[0_0_40px_var(--theme-accent-primary)] shadow-accent-primary/15'],
];

walk(dir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    colorMap.forEach(([regex, replacement]) => {
      content = content.replace(regex, replacement);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
