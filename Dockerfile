FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5000

CMD ["pnpm","run","dev"]
