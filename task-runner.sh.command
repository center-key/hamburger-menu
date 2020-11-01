#!/bin/bash
###############
# Task Runner #
###############

# To make this file runnable:
#     $ chmod +x *.sh.command

banner="Hamburger Menu"
projectHome=$(cd $(dirname $0); pwd)

setupTools() {
   cd $projectHome
   echo
   echo $banner
   echo $(echo $banner | sed s/./=/g)
   pwd
   test -d .git && git restore dist/* && git pull --ff-only
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   npm install --no-fund
   npm update
   npm outdated
   echo
   }

releaseInstructions() {
   cd $projectHome
   repository=$(grep repository package.json | awk -F'"' '{print $4}' | sed s/github://)
   package=https://raw.githubusercontent.com/$repository/master/package.json
   version=v$(grep '"version"' package.json | awk -F'"' '{print $4}')
   pushed=v$(curl --silent $package | grep '"version":' | awk -F'"' '{print $4}')
   released=$(git tag | tail -1)
   minorVersion=$(echo ${pushed:1} | awk -F"." '{ print $1 "." $2 }')
   echo "Local changes:"
   git status --short
   echo
   echo "Recent releases:"
   git tag | tail -5
   echo
   echo "Release progress:"
   echo "   $version (local) --> $pushed (pushed) --> $released (released)"
   echo
   test -d dist && echo "Next release action:" || echo "When ready to release:"
   checkin=$(test -d dist && echo "dist files" || echo "package.json")
   nextActionBump() {
      echo "   === Increment version ==="
      echo "   Edit pacakge.json to bump $version to next version number"
      echo "   $projectHome/package.json"
      }
   nextActionCommit() {
      echo "   === Commit and push ==="
      echo "   Check in package.json for $version with the message:"
      echo "   Next release"
      }
   nextActionTag() {
      echo "   === Release checkin ==="
      echo "   Check in $checkin with the message:"
      echo "   Release $version"
      echo "   === Tag and publish ==="
      echo "   cd $projectHome"
      echo "   git tag --annotate --message 'Release' $version"
      echo "   git remote --verbose"
      echo "   git push origin --tags"
      echo "   npm publish"
      }
   nextAction() { test "$version" ">" "$released" && nextActionTag || nextActionBump; }
   test "$version" ">" "$pushed" && test -d dist && nextActionCommit || nextAction
   echo
   }

runSpecs() {
   cd $projectHome
   npm test
   echo
   }

setupWebServer() {
   cd $projectHome
   port=$(grep web-server package.json | sed 's/[^0-9]*\([0-9]*\).*/\1/')  #extract port number from script
   echo "Web Server (indexzero/http-server on node):"
   npm run web-server
   sleep 2  #ensure pid is ready to read
   echo "To stop web server:"
   echo "   $ lsof -P -i :$port"
   echo "   $ kill $(lsof -Pt -i :$port)"
   echo
   }

openBrowser() {
   cd $projectHome
   url=http://localhost:$port/docs
   echo "Opening:"
   echo "   $url"
   echo
   sleep 2
   open $url
   }

setupTools
releaseInstructions
runSpecs
setupWebServer  #port: ☰ -> &#9776; -> 9776
openBrowser
