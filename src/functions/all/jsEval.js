module.exports = async (d) => {
  const split = d.code.split("$jsEval").length - 1;
  const after = d.code.split("$jsEval")[split];

  if (after.startsWith("[")) {
    const inside = d.code.split("$jsEval[")[1].split("]")[0];

    try {
      var evaled = await eval(inside)
    } catch (err) {
      return d.client.sendMessage(d.msg.key.remoteJid, { text: `\`\`\`❌ [whatscode.js] | $jsEval error: ${err}!\`\`\`` }, { quoted: d.msg })
    }

    return evaled;
  } else {
    return d.client.sendMessage(d.msg.key.remoteJid, { text: `\`\`\`❌ [whatscode.js] | Usage: $jsEval[code]!\`\`\`` }, { quoted: d.msg })
  }
};