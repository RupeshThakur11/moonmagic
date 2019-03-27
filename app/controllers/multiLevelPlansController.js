const multiLevelPlansModel = require('../models/multiLevelPlansModel.js');

/**
 * multiLevelPlansController.js
 *
 * @description :: Server-side logic for managing multiLevelPlanss.
 */
module.exports = {

  /**
     * multiLevelPlansController.list()
     */
  list(req, res) {
    multiLevelPlansModel.find((err, multiLevelPlanss) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting multiLevelPlans.',
          error: err,
        });
      }
      return res.json(multiLevelPlanss);
    });
  },

  /**
     * multiLevelPlansController.show()
     */
  show(req, res) {
    const { id } = req.params;
    multiLevelPlansModel.findOne({
      _id: id,
    }, (err, multiLevelPlans) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting multiLevelPlans.',
          error: err,
        });
      }
      if (!multiLevelPlans) {
        return res.status(404).json({
          message: 'No such multiLevelPlans',
        });
      }
      return res.json(multiLevelPlans);
    });
  },

  /**
     * multiLevelPlansController.create()
     */
  create(req, res) {
    const multiLevelPlans = new multiLevelPlansModel({
      member: req.body.member,
      memeberLevel: req.body.memeberLevel,
      level: req.body.level,
      maxLevel: req.body.maxLevel,
      incomeStart: req.body.incomeStart,
      incomeEnd: req.body.incomeEnd,
      totalIncome: req.body.totalIncome,
      amount: req.body.amount,
      income: req.body.income,
      stars: req.body.stars,
      reward: req.body.reward,
      rewardPrize: req.body.rewardPrize,
      rewardTypes: req.body.rewardTypes,
      description: req.body.description,
      dateOfPayout: req.body.dateOfPayout,
      dateOfJoinPlan: req.body.dateOfJoinPlan,
      isLevelComplete: req.body.isLevelComplete,
      isNotified: req.body.isNotified,
      scheduledMessages: req.body.scheduledMessages,

    });

    multiLevelPlans.save((err, multiLevelPlans) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating multiLevelPlans',
          error: err,
        });
      }
      return res.status(201).json(multiLevelPlans);
    });
  },

  /**
     * multiLevelPlansController.update()
     */
  update(req, res) {
    const { id } = req.params;
    multiLevelPlansModel.findOne({
      _id: id,
    }, (err, multiLevelPlans) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting multiLevelPlans',
          error: err,
        });
      }
      if (!multiLevelPlans) {
        return res.status(404).json({
          message: 'No such multiLevelPlans',
        });
      }

      multiLevelPlans.member = req.body.member ? req.body.member : multiLevelPlans.member;
      multiLevelPlans.level = req.body.level ? req.body.level : multiLevelPlans.level;
      multiLevelPlans.memeberLevel = req.body.memeberLevel ? req.body.memeberLevel : multiLevelPlans.memeberLevel;
      multiLevelPlans.amount = req.body.amount ? req.body.amount : multiLevelPlans.amount;
      multiLevelPlans.maxLevel = req.body.maxLevel ? req.body.maxLevel : multiLevelPlans.maxLevel;
      multiLevelPlans.incomeStart = req.body.incomeStart ? req.body.incomeStart : multiLevelPlans.incomeStart;
      multiLevelPlans.incomeEnd = req.body.incomeEnd ? req.body.incomeEnd : multiLevelPlans.incomeEnd;
      multiLevelPlans.totalIncome = req.body.totalIncome ? req.body.totalIncome : multiLevelPlans.totalIncome;
      multiLevelPlans.income = req.body.income ? req.body.income : multiLevelPlans.income;
      multiLevelPlans.stars = req.body.stars ? req.body.stars : multiLevelPlans.stars;
      multiLevelPlans.reward = req.body.reward ? req.body.reward : multiLevelPlans.reward;
      multiLevelPlans.rewardPrize = req.body.rewardPrize ? req.body.rewardPrize : multiLevelPlans.rewardPrize;
      multiLevelPlans.rewardTypes = req.body.rewardTypes ? req.body.rewardTypes : multiLevelPlans.rewardTypes;
      multiLevelPlans.description = req.body.description ? req.body.description : multiLevelPlans.description;
      multiLevelPlans.dateOfPayout = req.body.dateOfPayout ? req.body.dateOfPayout : multiLevelPlans.dateOfPayout;
      multiLevelPlans.dateOfJoinPlan = req.body.dateOfJoinPlan ? req.body.dateOfJoinPlan : multiLevelPlans.dateOfJoinPlan;
      multiLevelPlans.isLevelComplete = req.body.isLevelComplete ? req.body.isLevelComplete : multiLevelPlans.isLevelComplete;
      multiLevelPlans.isNotified = req.body.isNotified ? req.body.isNotified : multiLevelPlans.isNotified;
      multiLevelPlans.scheduledMessages = req.body.scheduledMessages ? req.body.scheduledMessages : multiLevelPlans.scheduledMessages;

      multiLevelPlans.save((err, multiLevelPlans) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating multiLevelPlans.',
            error: err,
          });
        }

        return res.json(multiLevelPlans);
      });
    });
  },

  /**
     * multiLevelPlansController.remove()
     */
  remove(req, res) {
    const { id } = req.params;
    multiLevelPlansModel.findByIdAndRemove(id, (err, multiLevelPlans) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the multiLevelPlans.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },

  calculatePlans(req, res) {
    const { id } = req.body;
    multiLevelPlansModel.findOne({
      _id: id,
    }, (err, multiLevelPlans) => {
      if (multiLevelPlans) {
        if ((multiLevelPlans.stars === 'star' || multiLevelPlans.level === 1) && multiLevelPlans.amount >= 1000) {
          const deductedAmountForSilver = multiLevelPlans.rewardPrize - 500;
          multiLevelPlans.stars === 'silver star';
          multiLevelPlans.level === 1;
          multiLevelPlans.save();
        } else if (multiLevelPlans.stars === 'silver star' && multiLevelPlans.level === 1) {
          console.log(multiLevelPlans);
          if (multiLevelPlans.rewardPrize >= 5000) {
            const deductedAmountForGold = multiLevelPlans.rewardPrize - 2500;
            multiLevelPlans.stars === 'gold star';
            multiLevelPlans.level === 1;
            multiLevelPlans.save();
          }
        } else if (multiLevelPlans.stars === 'gold star' && multiLevelPlans.level === 1) {
          if (multiLevelPlans.rewardPrize >= 25000) {
            const deductedAmountForGold = multiLevelPlans.rewardPrize - 12500;
            multiLevelPlans.stars === 'ruby star';
            multiLevelPlans.level === 1;
            multiLevelPlans.save();
          }
        } else if (multiLevelPlans.stars === 'ruby star' && multiLevelPlans.level === 1) {
          if (multiLevelPlans.rewardPrize >= 125000) {
            const deductedAmountForGold = multiLevelPlans.rewardPrize - 62500;
            multiLevelPlans.stars === 'diamond star';
            multiLevelPlans.level === 1;
            multiLevelPlans.save();
          }
        }
      } else if (multiLevelPlans.income <= 1000) {
        res.status(200).send({
          message: 'your current plan is not upgradable please add more member',
          profile: multiLevelPlans,
        });
      } else {
        res.status(400).send(err);
      }
    });
  },

};
