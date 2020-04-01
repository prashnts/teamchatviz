# Author Xqua In The Moon

FROM node:12.16

# Copy the code into the docker container
RUN mkdir /app
WORKDIR /app
RUN mkdir /app/client

# Install npm packages
# Here we first copy the packages json file so that if we modify the code
# we don't have to reinstall the whole thing as long as the packages.json won't change
COPY ./package.json /app
COPY ./client/package.json /app/client

# Actually install the
RUN npm install -g jspm
RUN npm install
WORKDIR /app/client
RUN npm install
RUN jspm install

# copy the app
WORKDIR /app
COPY . /app

# exposing the ports
EXPOSE 3333

# Starting the node stack
CMD npm run up && npm run start
