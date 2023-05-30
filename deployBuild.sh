#!/bin/bash

rm -rf /var/www/production/public_html/*
cp -r /var/www/$1/public_html/react-chatgpt-clone/build/* /var/www/production/public_html/