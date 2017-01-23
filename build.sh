#!/bin/bash

function build {
  echo 'Start building 👷'
  webpack --config webpack.config.prod.js --bail
  if [ $? -ne 0 ]; then
      exit 1;
  fi
  cp web/index.html dist
  cp web/index.html dist/200.html
  echo '👏'
}

build
