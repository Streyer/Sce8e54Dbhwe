#!groovy

def pipeline

node {
    stage('Load pipeline') {
        pipeline = fileLoader.fromGit(
                'shared-pipelines/pricing/nightly-protractor',
                'https://collaboration.msi.audi.com/stash/scm/cicd/com.abi.jenkins.pipeline.git',
                'feature/MSIPRIC-854_protractor_pipeline',
                'cicd-automation-read')
    }
}

pipeline.execute()
