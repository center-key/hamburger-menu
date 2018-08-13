#!/bin/sh
###############
# Task Runner #
###############

# To make this file runnable:
#     $ chmod +x *.sh.command

projectHome=$(cd $(dirname $0); pwd)

setupTools() {
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
   echo "   git tag | tail -10"
   echo "   npm publish"
   echo
   }

publishWebFiles() {
   cd $projectHome
   publishWebRoot=$(grep ^DocumentRoot /private/etc/apache2/httpd.conf | awk -F\" '{ print $2 }')
   publishSite=$publishWebRoot/centerkey.com
   publishFolder=$publishSite/hamburger-menu
   publish() {
      echo "Publishing:"
      mkdir -p $publishFolder/dist
      mkdir -p $publishFolder/spec
      cp -v  dist/* $publishFolder/dist
      cp -vR spec/* $publishFolder/spec
      echo
      }
   test -w $publishSite && publish
   }

runSpecs() {
   cd $projectHome
   npm test
   echo
   }

openWebBrowser() {
   url=http://localhost:9776/spec
   test -z $(pgrep -f 9776) && npm run web-server  #to shutdown web server: pkill -f 9776
   pgrep -fl 9776
   echo "Opening:"
   echo "   $url"
   echo
   sleep 2
   open $url
   }

echo
echo "Task Runner"
echo "==========="
setupTools
releaseInstructions
publishWebFiles
runSpecs
openWebBrowser
