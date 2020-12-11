#!/bin/bash
echo `date "+%Y-%m-%d %T DEPLOY";git pull;yarn;yarn build` >> deploy.log;