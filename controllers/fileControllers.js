const { PutObjectCommand } = require('@aws-sdk/client-s3')
const File = require('../models/fileSchema')
const {s3Client} = require('../utils/s3')
const fs = require('fs')

exports.uploadFile = async(req,res) => {
    try {
        const {pdf} = req.files
        const {title} = req.body
        let name = title.replaceAll(/\s/g,'')
        // console.log(pdf.data);
        const params = {
            Key:name,
            Body: fs.readFileSync(pdf.tempFilePath),
            Bucket: process.env.BUCKET,
            ACL: "public-read",
            ContentType: "application/pdf",
            ContentDisposition: "inline"
        }

        await s3Client.send(
            new PutObjectCommand(params)
        )
        const url = `https://${process.env.BUCKET}.s3.${process.env.REGION}.amazonaws.com/${name}`

        console.log(url);

        const file = await File.create({
            title: name,
            link: url
        })

        res.status(200).json(file)

    } catch (error) {
        console.log(error);
    }
}