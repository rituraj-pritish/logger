const Log = require('../models/Log');

module.exports = {
  getLogs: async (req, res) => {
    try {
      const logs = await Log.find({});
      res.send(logs);
    } catch (error) {
      console.log(error);
    }
  },

  addLog: async (req, res) => {
    console.log(req.body);
    const { message, attention, technician, date } = req.body;
    try {
      const existingLog = await Log.findOne({ message });
      if (existingLog) {
        console.log('already');
        return res.send(existingLog);
      }

      const newLog = new Log({
        message,
        attention,
        technician,
        date
      });
      await newLog.save();
      res.send(newLog);
    } catch (error) {
      console.log(error);
    }
  },

  deleteLog: async (req, res) => {
    try {
      await Log.remove({_id: req.params.id})
      res.send('deleted')
    } catch (error) {
      console.log(error);
    }
  },

  updateLog: async (req,res) => {
    const {_id, message,attention,technician,date} = req.body
    try {
      const updatedLog = await Log.findByIdAndUpdate(_id,{
        message,
        attention,
        technician,
        date
      },{new: true})
      await updatedLog.save()
      res.send(updatedLog)
    } catch (error) {
      console.log(error);
    }
  }
};
