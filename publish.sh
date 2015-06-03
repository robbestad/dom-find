#!/bin/bash
sh build.sh
npm version patch
git commit -am "`npm view . version`" --allow-empty
git push --tags origin HEAD:master
npm publish
