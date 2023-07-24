// const express = require('express');
// const router = express.Router();
// const dotenv = require('dotenv');
// dotenv.config();
// // const { google } = require('googleapis')

// async function getUserData(access_token) { 
//   const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`)
//   const data = await response.json()
//   console.log('data',data)
// }

// router.get('/', async (req, res, next) => { 
//   const code = req.query.code;
//   console.log('code', code)
//   try {
//     const redirectURL = 'http://localhost:8080';
//     const OAuth2Client = new google.auth.OAuth2(
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       redirectURL
//     );
//     const res = await OAuth2Client.getToken(code);
//     await OAuth2Client.setCredentials(res.tokens);
//     console.log("Token acquired");
//     const user = OAuth2Client.credentials;
//     console.log('credentials', user);
//     await getUserData(user.access_token);
//   }
//   catch (err) { 
//     console.log('Error with GoogleOauth')
//   }
// })

// router.post('/', async (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Referrer-Policy', 'no-referrer-when-downgrade');

//   const redirectURL = 'http://localhost:8080';

//   const OAuth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     redirectURL
//   )

//   const authorizedUrl = OAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
//     prompt: 'consent',
//     include_granted_scopes: true
//   })

//   res.json({url:authorizedUrl})
//  })

// module.exports = router;