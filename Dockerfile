FROM debian:12

# Install build dependencies and git
RUN apt-get update && apt-get install -y nginx-light libnginx-mod-http-fancyindex

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
