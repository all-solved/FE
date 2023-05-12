FROM nginx

RUN mkdir /allso

WORKDIR /allso

#/allso/build
RUN mkdir ./build

#host pc의 현재경로의 build 폴더를 workdir의 build폴더로 복사
ADD ./build ./build

#nginx의 default.conf를 삭제
RUN rm /etc/nginx/conf.d/default.conf

#host pc의 nginx.conf를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 3000포트 개방
EXPOSE 3000

# 컨테이너 실행시 자동으로 실행항 command. nginx시작
CMD ["nginx", "-g", "daemon off;"]


