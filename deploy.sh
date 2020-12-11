#!/bin/bash
echo `date "+[%Y-%m-%d %T]";git pull > /dev/null;echo pull=$?;yarn > /dev/null;echo install=$?;yarn build > /dev/null;echo build=$?` >> pages/api/deploy.log;