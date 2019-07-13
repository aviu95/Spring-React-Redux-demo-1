rm -rf /home/avi/hiring-projects/chart-buster/web/dist/
echo "Cleaned the old patch... Webpacking...."
npm run build
cd dist/
tar -cvzf ../chartbuster.tar.gz *
cd ..
