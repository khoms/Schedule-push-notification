const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase-service-account");

const FIREBASE_DATABASE_URL = "https://khoms-3883c.firebaseio.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIREBASE_DATABASE_URL,
});

const firebaseAdmin = {};

firebaseAdmin.sendMulticastNotification = (payload) => {
  const message = {
    notification: {
      title: payload.title,
      body: payload.body,
    },
    tokens: payload.tokens,
    data: payload.data || {},
  };
  return admin.messaging().sendMulticast(message);

  module.exports = firebaseAdmin;
};
