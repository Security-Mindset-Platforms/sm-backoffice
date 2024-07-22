FROM node:12.8-alpine AS builder

WORKDIR /usr/src/app
COPY . .

FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/smbackoffice/browser .

EXPOSE 80


# When the container starts, replace the env.js with values from environment variables
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
CMD ["nginx", "-g", "daemon off;"]
