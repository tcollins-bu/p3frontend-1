pipeline {
agent any 
stages {
    
    stage ('Hello World') {
      steps {
        echo "hello world"
      }
    }
     stage('npm Install') {
      steps { sh 'npm install' }
        }
  
       stage('ng Build') {
      steps { sh 'ng build --prod' }
        }

    stage('Test') {

        }

        }
      }

