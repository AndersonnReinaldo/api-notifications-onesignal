import { Request, Response} from 'express'

export default async function sendNotification(req:Request, res:Response): Promise<void> {

  const { tokenAuthorization, data } = req.body;

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Basic ${tokenAuthorization}`
  };

  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var requestHttp = https.request(options, function(resHttp) {  
    resHttp.on('data', function(data) {
      res.status(200).json({
        msg:'Notificacao enviada!',
        data: JSON.parse(data)
      })
    });
  });
  
  requestHttp.on('error', (error) => {
    res.status(500).json({
      msg:error.message
    })
  });
  
  requestHttp.write(JSON.stringify(data));
  requestHttp.end();















}

  

