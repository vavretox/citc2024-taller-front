FROM node:lts as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

#COPY .env.dev .env

RUN npm run build

FROM starsaminf/angular-react-configs-nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
