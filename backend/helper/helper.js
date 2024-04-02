export const successResponse =(res,msg,data)=>{
    res.json({
        code :200,
        status:true,
        message:res.__(msg),
        body:data
    })
}
export const successError =(res,msg,data)=>{
    res.json({
        code :200,
        status:true,
        message:res.__(msg),
        body:data
    })
}

export const errorResponse =(res,msg,data)=>{
    res.json({
        code :400,
        status:false,
        message:res.__(msg),
        body:data
    })
}






// module.exports = {

//     generatorRandomChar: (length) => {

//         if (typeof length == "undefined")
//             length = 2;
//         var token = "";
//         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//         for (var i = 0; i < length; i++)
//             token += possible.charAt(Math.floor(Math.random() * possible.length));
//         return token;
//     },

//     showParamsErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5001, "error_description": "Missing Params or Params data type error!", "message": message, "data": {}, "error": {} };
//         return resData;
//     },

//     showValidationErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5002, "error_description": "Validation Error!", "message": __(message), "data": {}, "error": {} };
//         return resData;
//     },

//     showValidationExcelErrorResponse: (message, data) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5002, "error_description": "Validation Error!", "message": __(message), "data": data, "error": {} };
//         return resData;
//     },

//     showFailureErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 50011, "error_description": "Failure!", "message": __(message), "data": {}, "error": {} };
//         return resData;
//     },

//     showFailureErrorResponseNew: (message, data) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 50011, "error_description": "Failure!", "message": __(message), "data": data, "error": {} };
//         return resData;
//     },

//     showInternalServerErrorResponse: (message, error) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5003, "error_description": "Internal Coding error or Params Undefined!", "message": message, "data": {}, "error": error };
//         return resData;
//     },

//     showUnathorizedErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5004, "error_description": "Invalid Login Credential!", "message": __(message), "data": {}, "error": {} };
//         return resData;
//     },

//     showDatabaseErrorResponse: (message, error) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5005, "error_description": "Database error!", "message": __(message), "data": {}, "error": error };
//         return resData;
//     },

//     showAWSImageUploadErrorResponse: (message, error) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5006, "error_description": "AWS error!", "message": __(message), "data": {}, "error": error };
//         return resData;
//     },

//     showTwillioErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5007, "error_description": "Twillio Api Error!", "message": message, "data": {}, "error": {} };
//         return resData;
//     },

//     showGoogleMapsErrorResponse: (message) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5008, "error_description": "Google Maps Api Error!", "message": message, "data": {}, "error": {} };
//         return resData;
//     },

//     showStripeErrorResponse: (message, code) => {
//         var resData = { "status": "failure", "status_code": 200, "error_code": 5009, "stripe_error_code": code, "error_description": "Stripe Api Error!", "message": message, "data": {}, "error": {} };
//         return resData;
//     },

//     showSuccessResponse: (message, data) => {
//         var resData = { "status": "success", "status_code": 200, "message": __(message), "data": data };
//         return resData;
//     },
//     showErrorResponse: (message, data) => {
//         var resData = { "status": "failure", "status_code": 400, "message": __(message), "data": data };
//         return resData;
//     },
    

//     showTokeUnAuthErrorResponse: (message, data) => {
//         var resData = { "status": "failure", "status_code": 401, "message": __(message), "data": data };
//         return resData;
//     },
//     showTokeForbiddenErrorResponse: (message, data) => {
//         var resData = { "status": "failure", "status_code": 403, "message": __(message), "data": data };
//         return resData;
//     },



//     showSuccessResponseWithUser: (message, data, user) => {
//         var resData = { "status": "success", "status_code": 200, "message": __(message), "data": data, "user": user };
//         return resData;
//     },

//     showSuccessResponseWithExtraData: (message, data, extraData) => {
//         var resData = { "status": "success", "status_code": 200, "message": __(message), "data": data, "extraData": extraData };
//         return resData;
//     },

//     showSuccessResponseCount: (message, data, count) => {
//         var resData = { "status": "success", "status_code": 200, "message": __(message), "data": data, "totalcount": count };
//         return resData;
//     },

//     roundNumber: (num) => {
//         return Math.round(num * 100) / 100;
//     },

//     sendPushNotificationPatient: (title, body, registrationToken) => {
//         var payload = {
//             notification: {
//                 title: title,
//                 body: body,
//                 sound: "default"
//             }
//         };

//         admin.messaging().sendToDevice(registrationToken, payload)
//             .then((response) => {
//                 // Response is a message ID string.
//                 console.log(title + ' firebase sent message:', response);
//             })
//             .catch((error) => {
//                 console.log('Firebase Error sending message:', error);
//             });
//     },

//     sendPushNotificationCaregiver: (title, body, registrationToken) => {

//         var driverFDB = app.get("driverFDB");

//         var payload = {
//             notification: {
//                 title: title,
//                 body: body,
//                 sound: "default"
//             }
//         };

//         admin.messaging(driverFDB).sendToDevice(registrationToken, payload)
//             .then((response) => {
//                 // Response is a message ID string.
//                 //console.log(title + ' firebase sent message:', response);
//             })
//             .catch((error) => {
//                 //console.log('Firebase Error sending message:', error);
//             });
//     },

//     emitPatientSocket: (socketId, data) => {
//         var io = app.get('socketio');
//         console.log("patient_socket hit!!", socketId, data);
//         io.to(socketId).emit('patient_socket', data);
//     },

//     emitCaregiverSocket: (socketId, data) => {
//         var io = app.get('socketio');
//         console.log("caregiver_socket hit!!", socketId, data);
//         io.to(socketId).emit('caregiver_socket', data);
//     },

//     sendNotificationPatient: async (data) => {
//         //console.log("Notification Data", data);
//         try {
//             var messages = [];
//             if (data.length > 0) {
//                 data.forEach((element) => {
//                     element = JSON.parse(JSON.stringify(element));
//                     if (element.token != '') {
//                         messages.push({
//                             notification: { title: element.notification.title, body: element.notification.body },
//                             token: element.token,
//                         });
//                     }
//                 });
//             }

//             try {
//                 admin.messaging().sendAll(messages).then((response) => {
//                     console.log('Message Successfully sent message:', response);
//                 }).catch((error) => {
//                     console.log('Message  Error sending message:', error);
//                 });
//             } catch (error) {
//                 console.log("errorssss", error);
//             }
//             return { status: 1, message: 'Message Send successfully.' };
//         } 
//         catch (error) {
//             console.log("error", error);
//             return { status: 0, message: 'Unable to Send notification.' };
//         }
//     },
    
// }