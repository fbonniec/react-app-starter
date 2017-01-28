#!/bin/bash

function build {
  echo 'Start building 👷'
  webpack --config webpack.config.prod.js --bail
  if [ $? -ne 0 ]; then
      exit 1;
  fi
  cp src/index.html dist
  cp src/index.html dist/200.html
  echo '👏'
}

build
