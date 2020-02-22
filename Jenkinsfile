pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            
            steps {
                withCredentials([usernamePassword(
                    credentialsId: '5e0f286c-c849-499c-b59b-ab05f5c1aa6f'
                )]) {
                    sh 'npm install' 
                }
            }
        }
    }
}
