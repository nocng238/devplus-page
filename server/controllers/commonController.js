const Common = require("../models/commonModel");

const commonController = {
  create: async (req, res) => {
    try {
      const { tag, title, video, concerns } = req.body;
      const common = new Common({
        tag,
        title,
        video,
        concerns,
      });
      await common.save();
      res.status(200).json({ msg: "create common success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { tag, title, video, concerns } = req.body;
      await Common.findOneAndUpdate(
        { tag: "common1" },
        { tag, title, video, concerns }
      );
      res.status(200).json({ msg: "Update common success" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  infoAll: async (req, res) => {
    try {
      const common = await Common.findOne({ tag: "common1" });
      res.status(200).json(common);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  addConcern: async (req, res) => {
    try {
      const { content, detail } = req.body;
      const common = await Common.findOne({ tag: "common1" });
      common.concerns.push({
        content,
        detail,
      });
      await common.save();
      res.status(200).json({ msg: "add success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  deleteConcern: async (req, res) => {
    try {
      const concernId = req.params.id;
      const common = await Common.findOne({ tag: "common1" });
      await common.concerns.id(concernId).remove();
      await common.save();
      res.status(200).json({ msg: "delete success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  editConcern: async (req, res) => {
    try {
      const { content, detail } = req.body;
      const concernId = req.params.id;
      const thing = await Common.findOne({
        tag: "common1",
        "concerns.id": concernId,
      });
      thing.concerns.id(concernId).content = content;
      thing.concerns.id(concernId).detail = detail;

      // console.log(thing.concerns.id(concernId))
      await thing.save();
      res.status(200).json({ msg: "edit success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = commonController;
