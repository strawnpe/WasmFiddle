#!/bin/bash

if [ ! -d "/lib" ]
then
    mkdir "lib"
fi

cd lib
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git checkout main
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh