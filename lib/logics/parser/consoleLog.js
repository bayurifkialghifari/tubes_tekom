const consoleLog = (msg) => {
  let format = /tampilkan (.*)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`,
  };
};

module.exports = consoleLog;
