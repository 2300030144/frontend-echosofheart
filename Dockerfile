# Stage 1: Build the frontend application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built application from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the host machine
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
