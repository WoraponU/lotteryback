module.exports = {
  for(method, user, resource) {
    return this[method](user, resource);
  },

  update(user) {
    return !!user;
  },

  // update(user, article) {
  //   return user && user.id === article.authorId
  // },

  // destroy(user, article) {
  //   return user && (user.isAdmin || user.id === article.authorId)
  // },
};
