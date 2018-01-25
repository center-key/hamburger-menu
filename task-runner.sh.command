#!/bin/sh
###############
# Task Runner #
###############

# To make this file runnable:
#    $ chmod +x *.sh.command

projectHome=$(cd $(dirname $0); pwd)

info() {
   # Check for Node.js installation and download project dependencies
   cd $projectHome
   pwd
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   npm install
   npm update
   npm outdated
   echo
   }

releaseInstructions() {
   cd $projectHome
   version=$(grep '"version"' package.json | awk -F'"' '{print $4}')
   echo "To tag this release:"
   echo "   cd $(pwd)"
   echo "   git tag --annotate --force --message 'Stable release' v$version"
   echo "   git remote --verbose"
   echo "   git push origin --tags --force"
   echo "   git tag"
   echo "   npm publish"
   echo
   }

echo
echo "Task Runner"
echo "==========="
info
cd $projectHome
npm test
echo
releaseInstructions
sleep 2
echo "Opening:\n   spec/index.html"
open spec/index.html
echo
