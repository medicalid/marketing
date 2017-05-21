FROM fedora:25

RUN dnf -y update && dnf -y install cronie htop nodejs procps-ng unzip wget
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u112-b15/jdk-8u112-linux-x64.rpm && dnf -y install *.rpm
RUN wget https://github.com/yfiton/yfiton/releases/download/1.0.0-alpha.3/yfiton-1.0.0-alpha.3.zip && unzip *.zip -d /opt && ln -s /opt/yfiton-1.0.0-alpha.3 /opt/yfiton

ADD tweet.js /opt/tweet.js
ADD tweet.sh /opt/tweet.sh

RUN chmod 0744 /opt/tweet.sh

# Add crontab file in the cron directory
ADD crontab /etc/cron.d/twitter

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/twitter

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Run the command on container startup
CMD /usr/sbin/crond -n -x bit
