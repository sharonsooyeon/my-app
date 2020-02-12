# Getting base image
FROM scratch
MAINTAINER sharon kim <sharon.s.kim@wellesley.edu>
RUN go get github.com/sharonsooyeon/my-app
WORKDIR .
ENTRYPOINT ["/tests"]
