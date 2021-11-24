pipeline {
  
  agent any {
    docker { image 'node:latest' }
    
  options {
    skipStagesAfterUnstable()
    disableConcurrentBuilds()
          }
    
  stages {
    
    stage ('Hello World') {
      steps {
        echo "hello world"
      }
    }
     stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { sh 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
    
    
  }
}
}
