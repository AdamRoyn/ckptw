module.exports = async (d) => {
  var inside = d.code.split("$sendButton[")[1].split("]")[0];
  const [text, foot = "", img = "", ...btn] = inside.split(";");

  /* Actually you can send a regular message or a picture message with
     a footer without having to include a button (give the button field blank) */
  if (!text) {
    d.isError = true;
    return d.error(
      `❌ [whatscode.js] | Usage: $sendButton[text;footer (optional);image url (optional);buttonId:buttonText;buttonId:buttonText;...].`
    );
  }

  const buttons = [];

  for (let bttns of btn) {
    const [id, display] = bttns.split(":");
    buttons.push({
      buttonId: id,
      buttonText: { displayText: display },
      type: 1,
    });
  }

  var buttonMessage;

  img.trim() === ""
    ? (buttonMessage = {
        text: text,
        buttons: buttons,
        footer: foot,
        headerType: 1,
      })
    : (buttonMessage = {
        image: { url: img },
        caption: text,
        footer: foot,
        buttons: buttons,
        headerType: 4,
      });

  return JSON.stringify(buttonMessage);
};
