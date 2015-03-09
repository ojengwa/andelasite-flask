FROM  ubuntu

MAINTAINER Ifedapo Olarewaju <ifedapoolarewaju@gmail.com>

EXPOSE 5000


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
CMD python /code/app.py

