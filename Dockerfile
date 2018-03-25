FROM arm32v7/node

WORKDIR /root/
ADD ./package.json ./package.json

RUN npm install
ADD ./app.js ./app.js

EXPOSE 3200

CMD ["node", "app.js"]