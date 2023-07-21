/**
 * @param msg {string}
 */
const functionDeclarationEnd = (msg) => {
  let format = /dahan/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: "",
    closeGroup: true,
  };
};

module.exports = functionDeclarationEnd;
