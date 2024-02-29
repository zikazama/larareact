# Base image for PHP application
FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    sudo \
    git \
    nginx \
    supervisor

# Create application directory
WORKDIR /var/www

# Clone your Laravel repository
COPY . .

# Install Composer dependencies
RUN composer install

# Generate Node.js environment and install dependencies
RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN sudo apt-get update && sudo apt-get install -y nodejs

# Copy React application directory (within Laravel project)
COPY resources/js/ ./js

# Install React dependencies
WORKDIR /var/www/js
RUN npm install

# Build React application for production (monolith)
RUN npm run build

# Set permissions for Laravel storage directory
RUN chmod -R 777 storage

# Expose PHP port (default: 9000)
EXPOSE 9000

# Expose WebSocket port (default: 6001)
EXPOSE 6001

# Copy Nginx configuration
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Define command to run services
CMD ["supervisord", "-n"]

# Define additional commands for development (optional)

# HEALTHCHECK ["CMD", "php", "-r", "echo 'Laravel is up!';"]

ENTRYPOINT ["/bin/bash", "-c"]

# Run commands in sequence:
# 1. Start PHP artisan serve
# 2. Start php artisan websocket:serve
RUN ["php", "artisan", "serve"], ["php", "artisan", "websocket:serve"]
