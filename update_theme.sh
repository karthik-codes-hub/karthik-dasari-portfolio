#!/bin/bash
for file in src/components/*.tsx src/App.tsx; do
  sed -i -E 's/bg-black/bg-white dark:bg-black/g' "$file"
  sed -i -E 's/text-zinc-100/text-zinc-900 dark:text-zinc-100/g' "$file"
  sed -i -E 's/text-zinc-200/text-zinc-800 dark:text-zinc-200/g' "$file"
  sed -i -E 's/text-zinc-300/text-zinc-700 dark:text-zinc-300/g' "$file"
  sed -i -E 's/text-zinc-400/text-zinc-600 dark:text-zinc-400/g' "$file"
  sed -i -E 's/text-zinc-500/text-zinc-500 dark:text-zinc-500/g' "$file"
  sed -i -E 's/bg-zinc-900/bg-zinc-100 dark:bg-zinc-900/g' "$file"
  sed -i -E 's/bg-zinc-800/bg-zinc-200 dark:bg-zinc-800/g' "$file"
  sed -i -E 's/border-zinc-800/border-zinc-200 dark:border-zinc-800/g' "$file"
  sed -i -E 's/border-zinc-700/border-zinc-300 dark:border-zinc-700/g' "$file"
  sed -i -E 's/fill-black/fill-white dark:fill-black/g' "$file"
  
  # Also fix occurrences where we have duplicated bg-white dark:bg-white or something similar
done
