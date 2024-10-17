const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')


const authenticate = () => {

    const credentials = require('../../../config/client.json')
    const { client_id, client_secret, redirect_uris } = credentials.installed
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])


    const tokenPath = path.join(__dirname, '../../../config/token.json')
    const token = JSON.parse(fs.readFileSync(tokenPath, 'utf8'))
    oAuth2Client.setCredentials(token)

    return oAuth2Client
}


const authenticateServiceAccount = () => {

    const credentials = require('../../../config/service-account.json')
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });
    return auth.getClient();
}

module.exports = {
    authenticate,
    authenticateServiceAccount,
};