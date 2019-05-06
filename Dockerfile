### Create a node image to build the angular app on
FROM tiangolo/node-frontend:10 as build-stage

#
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

### Run the actual nginx image 
FROM nginx:alpine

# Copy the resulting dist folder that was made in
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html