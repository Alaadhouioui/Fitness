pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Serve Website') {
            steps {
                sh 'python -m SimpleHTTPServer 8080 &'
            }

        stage('Deploy to Web Server') {
            steps {
                sh 'sudo rm -rf /var/www/html/*'  // Clear the existing content (if any)
                sh 'sudo cp -r * /var/www/html/'    // Copy your website files to the web server directory

        stage('Dockerize') {
            steps {
                sh 'docker build -t Fitness .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '100', usernameVariable: 'dhouiouialaa', passwordVariable: 'Liwaliwa007')]) {
                    sh 'docker login -u $dhouiouialaa -p $Liwaliwa007'
                    sh 'docker push Fitness'
                }
            }
        }
    }
}

