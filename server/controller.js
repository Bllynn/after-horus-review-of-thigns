module.exports = {
  // async before the function.  this replaces the .then promise.  try{ try's out this code so taht you can then have a catch on it for better debugging}//
  async getAll(req, res) {
    try {
      const dbI = req.app.get('db');//this is setting req.app.get to be dbI(requests from the database folder that runs your SQL files)
      const favorite_things = await dbI.getAllThings()//this is saying make a variable = await dbI.getAllThings (dbI.getAllThings runs the sql file named getAllThings inside the db folder.)
      res.send(favorite_things);//in the line above, we set favorite_things equal to await.  this becomes our data, so when we res.send, were sending favorite_things becuase that is what we named our data.
    } catch(err) {
      console.log(err);
      res.send(err)
    }
  },
  async getOne(req, res) {//this function grabs one peice of data from the DB based on the id of the item in the URL(+req.params.id) (the + is used so that you get the value not the string.)
    try {
      const dbI = req.app.get('db');
      const favorite_thing = await dbI.getOneThing(+req.params.id)
      res.send(favorite_thing[0]);//becuase were getting an ARRAY back, and we want an OBJECT, were grabbing index 0, which is the only item in the array.
    } catch(err) {
      console.log(err);
      res.send(err)
    }
  }
}

