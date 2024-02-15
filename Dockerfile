# Use the official Node.js image as the base image for the server
FROM node:14-alpine AS server

# Set the working directory for the server
WORKDIR /app/server

# Copy package.json and package-lock.json to the container
COPY server/package*.json ./

# Install dependencies for the server
RUN npm install

# Copy the rest of the server code to the container
COPY server/ .

# Expose the port on which the server will run
EXPOSE 5000

# Start the server
CMD ["npm", "start"]


# Use the official Node.js image as the base image for the client
FROM node:14-alpine AS client

# Set the working directory for the client
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY client/package*.json ./

# Install dependencies for the client
RUN npm install

# Copy the rest of the client code to the container
COPY client/ .

# Expose the port on which the client will run
EXPOSE 3000

# Start the client
CMD ["npm", "start"]


# Use the official PostgreSQL image as the base image for the database
FROM postgres:latest AS database

# Set the environment variables for PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Expose the port on which the PostgreSQL server will run
EXPOSE 5432


# Use the official pgAdmin image as the base image for the pgAdmin
FROM dpage/pgadmin4:5 AS pgadmin

# Set the environment variables for pgAdmin
ENV PGADMIN_DEFAULT_EMAIL=admin@example.com
ENV PGADMIN_DEFAULT_PASSWORD=admin

# Expose the port on which pgAdmin will run
EXPOSE 80
