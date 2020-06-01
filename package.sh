source .env

mkdir dist
mkdir ./dist/lib/
mkdir ./dist/lib/dist
mkdir ./dist/assets

cd dist
cp -r ../src ./src
cp -r ../lib/dist ./lib
cp -r ../assets ./
cp ../index-release.html ./index.html
cp ../style.css ./style.css
cd ..

./binary/butler/butler push ./dist koreus737/testgame:web

rm -rf dist
