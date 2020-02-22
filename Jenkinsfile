#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
               
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy...'
                 sh 'npm run build'
            }
        }
    }
}
