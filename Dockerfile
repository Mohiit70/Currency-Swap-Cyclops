FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Create a non-root user and switch to it
RUN adduser -D appuser
USER appuser

EXPOSE 3000

CMD ["npm", "start"]