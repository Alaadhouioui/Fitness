# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy your web application files to the container
COPY . /app

# Install any dependencies your application may have (if needed)
# RUN npm install

# Expose the port that your application will run on
EXPOSE 80

# Define the command to start your web application
CMD ["node", "app.js"]  # Replace "app.js" with the main JavaScript file of your application

# Specify any environment variables needed
# ENV VAR_NAME=value

# Define any volume mounts or other configurations
# VOLUME /app/data
# ...

