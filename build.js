const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up environment for 32-bit Windows build...');

// Set environment variable to disable SWC
process.env.DISABLE_NEXT_SWC = '1';
process.env.NEXT_DISABLED = '1';

console.log('Installing Babel dependencies...');
try {
  // Install required Babel dependencies
  execSync('npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader', { stdio: 'inherit' });
  
  console.log('Building application...');
  
  // Run the build
  execSync('npx next build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
  console.log('You can now start the application with: npm start');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
