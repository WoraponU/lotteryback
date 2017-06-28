module.exports = {
  for: (method, user, resource) => (
    this[method](user, resource)
  ),
};
