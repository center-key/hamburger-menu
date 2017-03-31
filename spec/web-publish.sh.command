#!/bin/sh

# To make this file runnable:
#    $ chmod +x *.sh.command

cd $(dirname $0)/..
echo
pwd
webServerRoot=$(grep ^DocumentRoot /private/etc/apache2/httpd.conf | awk -F\" '{ print $2 }')
webFolder=$webServerRoot/centerkey.com/hamburger-menu
echo $webFolder
mkdir -p $webFolder
ls $webFolder
cp -vR * $webFolder
echo
sleep 2
open http://localhost/centerkey.com/hamburger-menu/spec
