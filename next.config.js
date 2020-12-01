module.exports = {
  generateBuildId: async () => {
    return process.env.BUILD_ID;
  },
};
