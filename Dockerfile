FROM nginx

#nginx의 default.conf를 삭제
RUN mkdir /allso

WORKDIR /allso
ADD ./build ./build

RUN npm install

RUN npm run build

COPY ./default.conf /etc/nginx/conf.d

#host pc의 nginx.conf를 아래 경로에 복사
COPY /allso/build /usr/share/nginx/html



# 3000포트 개방
EXPOSE 80

# 컨테이너 실행시 자동으로 실행항 command. nginx시작
CMD ["nginx", "-g", "daemon off;"]


