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
                sh 'python -m http.server 8080 &'
            }
        }

        stage('Deploy to Web Server') {
            steps {
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r * /var/www/html/'
            }
        }

        stage('Dockerize') {
            steps {
                sh 'docker build -t fitness .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '100', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                }
                sh 'docker push fitness'
            }
        }
    }

    post {
        always {
            sh 'killall python'
        }
    }
}

