FROM  ubuntu

MAINTAINER Ifedapo Olarewaju <ifedapoolarewaju@gmail.com>>

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list
RUN apt-get update && apt-get install -y mongodb-org
RUN apt-get install -y ssh
RUN mkdir -p /data/db
EXPOSE 5000
ENTRYPOINT /usr/bin/mongod


RUN apt-get install -y python-setuptools
RUN apt-get install -y build-essential python-dev
RUN easy_install pip
RUN pip install virtualenvwrapper

RUN mkdir /code

ADD requirements.txt /code/requirements.txt
RUN cd /code
RUN ls
RUN pip install -r /code/requirements.txt
ADD . /code/
RUN service mongod start

