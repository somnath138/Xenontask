const PropertyModel = require("../Models/Property");

const getAllProperty = async (req, res) => {
  console.log(req.query);
  try {
    const properties = await PropertyModel.find({
      $or: [
        { PROP_HEADING: { $regex: req.query.search, $options: "i" } },
        { DESCRIPTION: { $regex: req.query.search, $options: "i" } },
      ],
    }).select("PROP_HEADING DESCRIPTION PRICE CONTACT_NAME");
    console.log(properties);
    res.status(201).json({
      data: properties,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};
const getOneProperty =async (req, res) => {
  try {
    const property=await PropertyModel.findById(req.params.id);
    if(!property){
      return res.status(404).send('User not found')
    }
    res.status(201).json({
      data: property,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};
module.exports = {
  getAllProperty,
  getOneProperty,
};
