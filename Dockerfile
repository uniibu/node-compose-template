FROM node:10.10.0-alpine
ADD . /code
WORKDIR /code
CMD ["nodex", "index.js"]