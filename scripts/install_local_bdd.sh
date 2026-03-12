#!/bin/sh

cd ../yulife-bdd-framework
rm -rf dist
pnpm build

cd ../yulife-rn-client
rm -rf node_modules/@yu-life/yulife-bdd-framework
mkdir -p node_modules/@yu-life/yulife-bdd-framework

cp ../yulife-bdd-framework/package.json node_modules/@yu-life/yulife-bdd-framework
cp ../yulife-bdd-framework/pnpm-lock.yaml node_modules/@yu-life/yulife-bdd-framework 2>/dev/null || true
cp -R ../yulife-bdd-framework/dist/* node_modules/@yu-life/yulife-bdd-framework
cd node_modules/@yu-life/yulife-bdd-framework
pnpm install