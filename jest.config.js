module.exports = async () => {
  return {
    verbose: true,
    snapshotSerializers: ['jest-snapshot-serializer-ansi'],
  };
};
