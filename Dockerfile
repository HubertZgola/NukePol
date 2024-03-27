# Etap 1: Budowanie aplikacji React
FROM node:latest as build-stage
WORKDIR /boom
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etap 2: Uruchomienie serwera Nginx do serwowania aplikacji
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /boom/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
