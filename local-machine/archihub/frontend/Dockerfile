FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY build .

COPY replace_vars.sh /replace_vars.sh

RUN chmod +x /replace_vars.sh

RUN /replace_vars.sh