// responses.js

// Перетасовка (Фишер-Йетс)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Функции действий бота --- //

async function sendGif(ctx, gifs) {
  const shuffled = shuffle([...gifs]);
  const randomGif = shuffled[Math.floor(Math.random() * shuffled.length)];
  await ctx.replyWithAnimation(randomGif, {
    reply_to_message_id: ctx.message.message_id,
  });
}

async function sendRandomResponse(ctx, responses) {
  const shuffled = shuffle([...responses]);
  const randomResponse = shuffled[Math.floor(Math.random() * shuffled.length)];
  await ctx.reply(randomResponse, {
    reply_to_message_id: ctx.message.message_id,
  });
}

async function sendPhoto1(ctx, img, text) {
  await ctx.replyWithPhoto(img, {
    caption: text,
    reply_to_message_id: ctx.message.message_id,
  });
}

async function sendPhoto2(ctx, img, text) {
  await ctx.replyWithPhoto(img, {
    caption: text,
    reply_to_message_id: ctx.message.message_id,
  });
}

async function sendPhoto3(ctx, img, text) {
  await ctx.replyWithPhoto(img, {
    caption: text,
    reply_to_message_id: ctx.message.message_id,
  });
}

module.exports = {
  shuffle,
  sendGif,
  sendRandomResponse,
  sendPhoto1,
  sendPhoto2,
  sendPhoto3
};
