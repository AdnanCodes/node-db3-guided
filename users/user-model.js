const db = require("../data/db-config");

module.exports = {
  findUserPosts
};

function findUserPosts(id) {
  db("users as u")
    .join("posts as p", "u.id", "=", "p.user_id")
    .where({ user_id: id })
    .then(posts => {
      return posts;
    });
}
