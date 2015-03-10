FROM ubuntu:14.04

# Update packages
RUN apt-get update -y

# Install Python Setuptools
RUN apt-get install -y python-setuptools

RUN apt-get install -y curl
RUN apt-get install -y unzip
RUN apt-get install -y git


# Install pip
RUN easy_install pip

RUN git clone https://github.com/andela-bojengwa/andelasite-flask

RUN ls andelasite-flask/

RUN mkdir randomfolder
# Bundle app source
ADD randomfolder /src


# Add and install Python modules
ADD andelasite-flask/requirements.txt /src/requirements.txt
RUN cd /src; pip install -r requirements.txt


# Expose
EXPOSE  5000

# Run
CMD ["python", "/src/app.py"]
