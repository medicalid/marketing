#!/bin/bash

export JAVA_HOME=/usr/java/latest

node /opt/tweet.js >> /var/log/tweet.log 2>&1
