const mongoose = require('mongoose');

const { Schema } = mongoose;

const multiLevelPlansSchema = new Schema({
  member: {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User',
  },
  memeberLevel: Number,
  level: Number,
  maxLevel: Number,
  incomeStart: Number,
  incomeEnd: Number,
  totalIncome: Number,
  amount: Number,
  income: Number,
  stars: String,
  reward: String,
  rewardPrize: String,
  rewardTypes: String,
  description: String,
  dateOfPayout: Date,
  dateOfJoinPlan: Date,
  isLevelComplete: Boolean,
  isNotified: Boolean,
  scheduledMessages: Boolean,
});

module.exports = mongoose.model('multiLevelPlans', multiLevelPlansSchema);
