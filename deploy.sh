#!/usr/bin/env bash

make compile
rsync -ahvc --delete _site/* gouda@blopker.com:public/production/bluegouda
