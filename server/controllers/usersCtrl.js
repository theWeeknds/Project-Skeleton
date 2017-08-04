module.exports = {
  getUsers: ( req, resp, next ) => {
    const db = req.app.get('db');

    db.users.get_all_users().then( (results) => {
      console.log('hello')
       resp.status(200).json( results)
    }).catch(e => resp.send(e))
  },
  getUser: (req, resp, next ) => {
    const db = req.app.get('db');
    if(req.user){
      db.users.get_user([req.user.id]).then( (user) => {
        console.log(user)
        return resp.status(200).json(user)
      }).catch( e =>  resp.json(e))
    } else {
      return resp.status(200).json(null)
    }
  }
};
