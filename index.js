#!/usr/bin/env node

// Usage: npx create-yababay-app my-app

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Hack ES6 module rules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

let templateDir = path.resolve(__dirname, '');
fs.cpSync(templateDir, projectDir, { recursive: true });
templateDir = path.resolve(__dirname, 'template');
fs.cpSync(templateDir, projectDir, { recursive: true });

fs.renameSync(
  path.join(projectDir, 'gitignore'),
  path.join(projectDir, '.gitignore')
);

const docsDir = path.join(projectDir, 'docs');
const tmplDir = path.join(projectDir, 'template');
const indexFile = path.join(projectDir, 'index.js');
fs.rmSync(docsDir, { recursive: true });
fs.rmSync(tmplDir, { recursive: true });
fs.unlinkSync(indexFile);

console.log('Success! Your new project is ready.');
console.log('Please execute in your terminal:\n');
console.log(`    cd ${projectName}`);
console.log('    npm i');
console.log('    npm run dev');
console.log("\nDon't forget to edit your package.json!");
