#!/bin/bash

#Requires one parameter: the username of the user deploying their build to production

rm -rf /var/www/production/public_html/*
cp -r /var/www/$1/public_html/react-chatgpt-clone/build/* /var/www/production/public_html/