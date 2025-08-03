@echo off
echo Starting deployment process...

echo Building the project...
npm run build

echo Deploying to GitHub Pages...
npm run deploy

echo Deployment completed!
echo Your site should be available at: https://yourusername.github.io/portfolio
echo (Make sure to replace 'yourusername' with your actual GitHub username)
pause 