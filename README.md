# datass-serverless

## Step 1

### Website

Create Website Stack

https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=datass-serverless-stack&templateURL=https://github.com/benneb2/datass-service-aws/blob/master/website/website.yaml

Click Next, Next, Next, Create


## Step 2

### Pipeline

Create Pipeline Stack

Create Token.
https://github.com/settings/tokens

Name:datass-aws-pipeline
tick  admin:repo_hook
Generate Token.
Copy Token.


https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=datass-pipeline-stack&templateURL=https://github.com/benneb2/datass-service-aws/blob/master/pipeline/main.yaml




Click Next.

appName:datass-aws-pipeline

GitHubRepoName:datass-service-aws
GitHubUser:benneb2
GitHubToken:Created token

Click Next, Next.
Click Acknowledge.
Click Create.




