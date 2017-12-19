import mongoose from 'mongoose';

import { MONGO_CONFIG } from 'background_config/';

const connection = mongoose.createConnection(MONGO_CONFIG.URL + '/' + MONGO_CONFIG.DB_NAME);

const notificationLogSchema = new mongoose.Schema({ ok: Boolean, type: String, text: String })
const NotificationLog = connection.model('notification_log', notificationLogSchema);

export const storeNotificationLog = payload => {
    const notification_log = new NotificationLog({
        ok: payload.ok,
        type: payload.type,
        text: payload.text,
    });
    return notification_log.save();
};
