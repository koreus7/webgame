source .env

mkdir dist
mkdir ./dist/lib/
mkdir ./dist/lib/dist
mkdir ./dist/assets

cd dist
cp -r ../src ./src
cp -r ../levels ./levels
cp -r ../lib/dist ./lib
cp -r ../assets ./
cp ../index-release.html ./index.html
cp ../style.css ./style.css
cd ..

zip -r dist.zip dist

./binary/butler/butler push dist.zip koreus737/testgame:web

rm -rf dist
rm -rf dist.zip
