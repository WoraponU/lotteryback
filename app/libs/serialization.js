module.exports = {
  protected: (hiddenKey, data) => {
    const protectedData = data;
    protectedData[hiddenKey] = undefined;

    return protectedData;
  },
};
