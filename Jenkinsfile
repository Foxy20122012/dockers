pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-app:latest'
        CREDENTIAL_ID = "${env.CREDENTIAL_ID}"
        DEPLOY_SERVER_IP = "${env.DEPLOY_SERVER_IP}"
        DEPLOY_USER = "${env.DEPLOY_USER}"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Desplegar la imagen Docker usando ssh directamente
                    withCredentials([sshUserPrivateKey(credentialsId: CREDENTIAL_ID, keyFileVariable: 'SSH_KEY')]) {
                        sh """
                        ssh -i \$SSH_KEY -o StrictHostKeyChecking=no \$DEPLOY_USER@\$DEPLOY_SERVER_IP '
                        docker stop my-app || true &&
                        docker rm my-app || true &&
                        docker run -d --name my-app -p 3000:3000 my-app:latest'
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            // Limpiar el espacio de trabajo
            cleanWs()
        }
    }
}
