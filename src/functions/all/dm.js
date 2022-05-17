module.exports = async (d) => {
  const { decodeJid, sender } = require("../../models/functions.js");
  const split = d.code.split("$dm").length - 1;
  const after = d.code.split("$dm")[split];

  if (d.code.split("$dm").length >= 3) {
    d.isError = true;
    return d.error(`❌ Can't use more than one $dm!`)
  }

  if (after.startsWith("[")) {
    var inside = d.code.split("$dm[")[1].split("]")[0];

    // if (!inside) {
    //   d.isError = true;
    //   return d.error(`❌ WhatscodeError: Usage: $dm[jid (optional)].`);
    // }

    // d.unique = true;
    // return {
    //   type: "sendDM",
    //   response: decodeJid(inside)
    // }
    // d.jid = decodeJid(inside)
    d.jid(decodeJid(inside))
    return ""
  } else {
    // d.jid = decodeJid(sender(d))
    d.jid(decodeJid(sender(d)))
    return ""
  }
};
