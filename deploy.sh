#!/bin/bash

BUCKET_NAME="loomery-lab"
DIST_DIR="dist" # or the name of your build output directory
REGION="eu-west-2"

echo "Building the Astro project..."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed, exiting..."
  exit 1
fi

echo "Build successful."

echo "Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync $DIST_DIR s3://$BUCKET_NAME --region $REGION --delete \
    --exclude ".DS_Store" \
    --exclude "Thumbs.db" \
    --exclude "*.tmp"

if [ $? -ne 0 ]; then
  echo "Failed to sync files to S3, exiting..."
  exit 1
fi

echo "Deployment successful."

echo "Cleaning up local directory..."
rm -rf $DIST_DIR

echo "Deployment completed and local cleanup done."
