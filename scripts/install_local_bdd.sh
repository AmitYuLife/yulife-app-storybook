#!/bin/sh

cd ../yulife-bdd-framework
rm -rf dist
yarn build

cd ../yulife-rn-client
rm -rf node_modules/@yu-life/yulife-bdd-framework
mkdir -p node_modules/@yu-life/yulife-bdd-framework

cp ../yulife-bdd-framework/package.json node_modules/@yu-life/yulife-bdd-framework
cp ../yulife-bdd-framework/yarn.lock node_modules/@yu-life/yulife-bdd-framework
cp -R ../yulife-bdd-framework/dist/* node_modules/@yu-life/yulife-bdd-framework
cd node_modules/@yu-life/yulife-bdd-framework
yarn 