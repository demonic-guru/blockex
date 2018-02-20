
import mongoose from 'mongoose';

const Masternode = mongoose.model('Masternode', {
  active: Number,
  addr: String,
  createdAt: Date,
  ip: String,
  lastAt: Date,
  lastPaidAt: Date,
  network: String,
  proto: String,
  rank: Number,
  status: String,
  txHash: String,
  txOutIdx: Number,
  ver: String
});

export default Masternode;