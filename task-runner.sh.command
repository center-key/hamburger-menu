#!/bin/sh
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
   echo $(echo $banner | sed -e "s/./=/g")
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
      echo $publishFolder
      mkdir -p $publishFolder/dist
      mkdir -p $publishFolder/spec
      cp -R dist/* $publishFolder/dist
      cp -R spec/* $publishFolder/spec
      ls -o $publishFolder
      echo
      }
   test -w $publishSite && publish
   }

runSpecs() {
   cd $projectHome
   npm test
   echo
   }

setupWebServer() {
   cd $projectHome
   port=$(grep web-server package.json | sed -e "s/[^0-9]//g")
   # Requires package.json script: "web-server": "http-server -p 8080 &"
   echo "Web Server (indexzero/http-server on node):"
   test -z $(pgrep -f $projectHome) && npm run web-server
   pgrep -fl http-server
   echo "To stop web server:"
   echo "   $ pgrep -fl http-server"
   echo "   $ pkill -f $projectHome"
   echo
   }

openBrowser() {
   cd $projectHome
   url=http://localhost:$port/spec
   echo "Opening:"
   echo "   $url"
   echo
   sleep 2
   open $url
   }

setupTools
releaseInstructions
publishWebFiles
runSpecs
setupWebServer  #port: ☰ -> &#9776; -> 9776
openBrowser
