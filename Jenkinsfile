pipeline {
agent any 
stages {
    
    stage ('Hello World') {
      steps {
        echo "hello world"
      }
    }
     stage('npm Install') {
       
      sh 'node -v' 
      sh 'npm prune'
      sh 'npm install' 
       
        }
  
       stage('ng Build') {
      steps { sh 'ng build' }
        }


        }
      }

