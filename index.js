#!/usr/bin/env node

// Usage: npx create-yababay-app my-app

// import spawn from 'cross-spawn'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Hack ES6 module rules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The first argument will be the project name.
const projectName = process.argv[2];

// Create a project directory with the project name.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// A common approach to building a starter template is to
// create a `template` folder which will house the template
// and the files we want to create.
let templateDir = path.resolve(__dirname, '');
fs.cpSync(templateDir, projectDir, { recursive: true });
templateDir = path.resolve(__dirname, 'template');
fs.cpSync(templateDir, projectDir, { recursive: true });

// It is good practice to have dotfiles stored in the
// template without the dot (so they do not get picked
// up by the starter template repository). We can rename
// the dotfiles after we have copied them over to the
// new project directory.
fs.renameSync(
  path.join(projectDir, 'gitignore'),
  path.join(projectDir, '.gitignore')
);

//const projectPackageJson = require(path.join(projectDir, 'package.json'));

// Update the project's package.json with the new project name
//projectPackageJson.name = projectName;

//fs.writeFileSync(
//  path.join(projectDir, 'package.json'),
//  JSON.stringify(projectPackageJson, null, 2)
//);

// Run `npm install` in the project directory to install
// the dependencies. We are using a third-party library
// called `cross-spawn` for cross-platform support.
// (Node has issues spawning child processes in Windows).
// spawn.sync('npm', ['install'], { stdio: 'inherit' });

// Copy css-file for icons building.
// const cssFileIn = path.join(projectDir, 'node_modules/postcss-bootstrap-icons/bootstrap-icons.css');
// const cssFileOut = path.join(projectDir, 'src/bootstrap-icons.css');
// fs.cpSync(cssFileIn, cssFileOut);

// Remove specific files.
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
