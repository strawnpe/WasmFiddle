#!/bin/bash
# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
if [ ! -d "/lib" ]
then
    mkdir "/lib"
fi

# if ! [ -x "$(command -v git)" ]
# then
#     mkdir 'something'
# fi
cd lib
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh