const { Telegraf, Markup } = require('telegraf');

 const bot = new Telegraf('8360542399:AAHzngxlsQ9_h6FDW_dfSf-aEbPesofAZQs');

 const media = [
'https://radikal.cloud/i/photo-2025-10-14-20-59-48.caL2pD',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZxY3MzcmcwcWFvcnNuaHI2NnB0YmNnZGMxNXpmdzI4OTY3cnV6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JYdR60AJfdKLdLd3Ck/giphy.gif',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTllaXZlMW1nbHc0cWgxcG8zODd1NWtjbXJ3Ym15NzcxcmdmemV0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0vtUh9xw87NZavDlLd/giphy.gif',
]; // Массив с оскорблениями


const responses = [
    'Хмм... Интересно!',
    'А почему бы и нет?',
    'Окей, продолжаем дальше.',
    'Что-то пошло не так?',
    'Ничего себе новость!',
    'Звучит вкусно!',
    'Так держать!',
    'Да ладно?!',
    'Любопытно, расскажите подробнее.',
    'Эй, осторожно!',
    'Вероятно, да!',
    'Может быть, попробуем иначе?',
    'Отвал, куплю за 20 баксов', 
    'У меня 1500 держит при 750✅',
    'Cachyos нихрена не ставится',
    'Отличный патч! Сегодня акция: каждый, кто поставит его до конца дня и опробует, у тех выкуплю отвалы за 20$✅',
    'Хорошо, смешной отвал выкуплю за 20$✅',
    'Если что выкуплю твой отвал за 20$',
    'отвал в каждый дом',
    'Короче брат создавай новую загрузочную флешку ведора 41(допустим не workstation, а xfce) запускай в режиме basic graphics mode и ставь по новой',
    'Ну если не хочешь пробовать, тогда отвал и больше не прикасайся',
    'Флетпаком ничего нельзя ставить',
    'Умница✅😇',
    'Так чё, вышла 25.1 меса или нет',
    'Может попробовать посмотреть модель чипа и найти дрова?',
    'Зачем? Только Федора 40 работает на бц250',
    'Але идиоты виндовс дайте',
    'Отвал всего',
    'Отвал 2',
    'Отвал рейтресинг ядер',
    'Я сделал все обновления ведора 42 и теперь система подыхает☹️это из-за поганого ядра да?😡',
    'Мне кажется давно пора нам разрабатывать собственную отечественную ось для бцшки',
    'Вот поэтому я никогда себе не куплю бц250. Такая пердолинговая вещица',
    'Помогите пожалуйста это по настоящему отвал ядра? Я только недавно центральный процессор собрал',
    'Xeon x3440 и Cmp 30hx',
    'Уважаемый Николай! За исключительную зоркость, аналитический ум и неизменную способность видеть глубже, чем все остальные, мы предоставляем вам грамоту✅ желаем дальнейших успехов!',
    'Пон я в последний раз брал в Грузии повезло-повезло новый в коробке с бетменом за 220$',
    'Ну, как бы уже все, срок годности бцшек вышел',
    'Ну я поставил и всё сломалось',
    'Люди Алё у 0.01% людей линукс не ставится',
    'Отвал Linux*',
    'Не брат, я ее ему и продал, возвратов нет',
    'Только у меня остались полностью рабочие бцшки. 200$ без торга',
    '😡пришлю с неработающими юсб портами',
    'With arch Linux installed I.ll buy it for 25$',
    'Ладно с тебя 10$ за помощь',
    'Думаю пора мне израильское гражданство получать',
    'У меня уже ультра 5 склейка отваливается',
    'Из-за нестабильности образов. Деградация чипа по какой-то неведомой причине происходит быстрее, чем на народной ведоре',
    'Дашь модератора',
    'Я вообще-то много кого спас в ветке linux',
    'Ну виндовс мертворожденная система',
    'Биос спрашивал?',
    'Пробуй выкл вкл много раз',
    'Отвал короче',
    'Ладно убедил брат',
    'Ты мошенник',
    'Мы об этом знали с утра',
    'Отвал❗️❗️❗️❗️',
    'Надо освободиться от оков линукса и установить венду',
    'Бц-250 ток биткоины майнить умеет',
    'Сокращение штаба сотрудников, теперь все силы будут переведены на запуск фортнайта на бцшке',
    'Здравствуйте будет работать фтртнайт на стимос?',
    'Здравствуйте, уже выпустили микрокоды rx 5600m для бц250 чтобы драйвер поставить на венде?',
    'Допустим соберём мне 10 тысяч и я куплю плейстешьон 5 ломанный на ебай, и я поставлю чип с него на бцшку',
    'У меня нет работы🥀🥀🥀🥀',
    'И буду продавать бцшку по 500 лари!!!!',
    'За 5 тысяч есть айфон 8 красный 64 Гб интересует?',
    'Файл неправильно назвал брат',
    'Перепроверь',
    'Поставь анлокнутый биос, сделаешь андервольт',
    'Отвал процессора пожалуйста',
    'Отвал силиката',
    'Здравствуйте когда дрова для макос выйдут',
    'Нее сорри я только irm https://get.activated.win | iex использую',
    'ЗАВТРА',
    // Добавлена сюда
];

const specificText = 'Вот выделил чёрной стрелкой';

const specificImagePath = 'https://radikal.cloud/i/photo-2025-06-28-17-02-43.c0sgHT';

const specificText1 = 'Выделил красной стрелкой. Надо впаять отсутствующие конденсаторы, тогда турбобуст перейдет с дефолтного режима совместимости в обычный, как на плейстейшон файв';

const specificImagePath1 = 'https://radikal.cloud/i/photo-2025-05-31-03-25-16.c03Z6B';

const specificText2 = 'Вон там брат';

const specificImagePath2 = 'https://radikal.cloud/i/photo-2025-09-06-12-22-40.caLgMC';

bot.on('text', async (ctx) => {

    const message = ctx.message.text;
    
    if (message.endsWith('?') && Math.random() <= 0.05 && media.length > 0) {
        // Случайно отправляем изображение, если условие выполнено
        const randomPhoto = media[Math.floor(Math.random() * media.length)];
        await ctx.replyWithPhoto(randomPhoto, {
            reply_to_message_id: ctx.message.message_id,
        });
    } else if (Math.random() <= 0.06 && media.length > 0) {
        // Ответ стандартным способом (случайная фраза)
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        await ctx.reply(randomResponse, {
            reply_to_message_id: ctx.message.message_id,
        });
    } else if (message.endsWith('?') && Math.random() <= 0.07 && media.length > 0) {
        //Ответ с фотографией бцшки
        await ctx.replyWithPhoto(specificImagePath, {
            caption: specificText,
            reply_to_message_id: ctx.message.message_id,
        });
        
    } else if (message.endsWith('?') && Math.random() <= 0.07 && media.length > 0) {
        //Ответ с фотографией бцшки1
        await ctx.replyWithPhoto(specificImagePath1, {
            caption: specificText1,
            reply_to_message_id: ctx.message.message_id,
        });
    } else if (message.includes('где') && message.includes('?') && Math.random() <= 1 && media.length > 0) {
        //Ответ с фотографией бцшки2
        await ctx.replyWithPhoto(specificImagePath2, {
            caption: specificText2,
            reply_to_message_id: ctx.message.message_id,
        });
    }
    
console.log('Полученное сообщение:', ctx.message);

});



bot.launch();
console.log('Started');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));