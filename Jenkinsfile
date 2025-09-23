pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Moizahmad496/E-Commerce-Store-Automation.git'
            }
        }
        stage('Run Tests') {
            steps {
                echo "Here I would run my Cypress automation tests"
            }
        }
    }
}
