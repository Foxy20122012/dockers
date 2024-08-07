pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-app:latest'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests inside the Docker container
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to a registry (e.g., Docker Hub)
                    withDockerRegistry(credentialsId: 'dockerhub-credentials', url: 'https://index.docker.io/v1/') {
                        docker.image(DOCKER_IMAGE).push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker image (you can customize this to your deployment strategy)
                    sshagent(['deploy-server-credentials']) {
                        sh """
                        ssh user@your-server 'docker pull my-app:latest && docker stop my-app || true && docker rm my-app || true && docker run -d --name my-app -p 3000:3000 my-app:latest'
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
