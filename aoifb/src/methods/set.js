async function set(model, key, value) {

  let fb = require("firebase")
  let db = fb.database()

  let result = db.ref(model+"/"+key).set(value)
  
  return typeof result !== undefined;

}

module.exports = set