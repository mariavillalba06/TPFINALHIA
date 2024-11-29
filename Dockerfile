FROM mongo:latest

# Instalar cron
RUN apt-get update && apt-get install -y cron

# Crear el directorio de respaldo
RUN mkdir -p /backup

# Configurar la tarea cron para respaldos cada 5 minutos
RUN echo "*/5 * * * * root echo \"Running backup at \$(date)\" >> /var/log/cron.log && /usr/bin/mongodump --host mongo-primary:27017 --out /backup/\$(date +\%F_\%T)" > /etc/cron.d/mongo-backup-cron

# Dar permisos de ejecución al archivo cron
RUN chmod 0644 /etc/cron.d/mongo-backup-cron

# Registrar la tarea en cron
RUN crontab /etc/cron.d/mongo-backup-cron

# Crear el archivo de logs de cron
RUN touch /var/log/cron.log

# Comando para iniciar cron y redirigir logs al contenedor
CMD cron && tail -f /var/log/cron.log
