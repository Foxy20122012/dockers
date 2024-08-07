pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-app:latest'
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
                    // Desplegar la imagen Docker directamente en el servidor local
                    sh """
                    docker stop my-app || true &&
                    docker rm my-app || true &&
                    docker run -d --name my-app -p 3000:3000 my-app:latest
                    """
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
