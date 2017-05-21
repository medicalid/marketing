# Installation

1. Move to `docker/` folder.
2. Build the docker image `docker build -t medicalid-promotion .`.
3. Copy `docker-container@medicalid-promotion.service` to `/etc/systemd/system`.
4. Reload systemd: `systemctl daemon-reload`.
5. Enable the service at system startup: `systemctl enable
   docker-container@medicalid-promotion.service`.
6. Start the service: `systemctl start docker-container@medicalid-promotion.service`.

