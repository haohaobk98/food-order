FROM node:16 as build
RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY . ./
RUN npm install
EXPOSE 3000
RUN npm run build

FROM nginx:1.20.1-alpine
COPY --from=build /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 81
ENTRYPOINT ["nginx", "-g", "daemon off;"]
