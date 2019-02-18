const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: ${process.env.secretAccessKey},
    accessKeyId: ${process.env.accessKeyId},
    region: 'us-east-1' // region of your bucket
});

const s3 = new aws.S3();


