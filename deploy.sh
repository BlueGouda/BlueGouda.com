#!/usr/bin/env bash

make clean
make compile
rsync -ahvc --delete _site/* gouda@blopker.com:public/production/bluegouda
