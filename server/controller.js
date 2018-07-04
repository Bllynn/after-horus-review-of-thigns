module.exports = {
  async getAll(req, res) {
    try {
      const dbI = req.app.get('db');
      const favorite_things = await dbI.getAllThings()
      res.send(favorite_things);
    } catch(err) {
      console.log(err);
      res.send(err)
    }
  },
  async getOne(req, res) {
    try {
      const dbI = req.app.get('db');
      const favorite_thing = await dbI.getOneThing(+req.params.id)
      res.send(favorite_thing[0]);
    } catch(err) {
      console.log(err);
      res.send(err)
    }
  }
}

