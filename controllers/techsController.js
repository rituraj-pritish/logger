const Technician = require('../models/Technician');

module.exports = {
  getTechs: async (req, res) => {
    const techs = await Technician.find({});
    res.send(techs);
  },

  addTech: async (req, res) => {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    try {
      const existingTech = await Technician.findOne({ firstName, lastName });
      if (existingTech) {
        console.log('already');
        return res.send(existingTech);
      }

      const newTech = new Technician({
        firstName,
        lastName
      });
      await newTech.save();
      res.send(newTech);
    } catch (error) {
      console.log(error);
    }
  },

  deleteTech: async (req, res) => {
    console.log('delete');
    try {
      await Technician.deleteOne({_id: req.params.id})
      res.send('deleted')
    } catch (error) {
      console.log(error);
    }
  }
};
