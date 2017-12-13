import mongoose from 'mongoose';

import { MONGO_CONFIG } from 'config';

const schema = new mongoose.Schema({
    title: String,
    body: String
})

const connection = mongoose.createConnection(MONGO_CONFIG.URL);

const Memo = connection.model('memo', schema);
const memo = new Memo();
memo.title  = 'dfsafas';
memo.body  = 'dfsafas';
const promise = memo.save();
promise.then(doc => console.log(doc));
