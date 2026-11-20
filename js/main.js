/* Khurjini — მთელი ტექსტი და პროდუქტების სია აქ არის.
   1) CONTACT    — WhatsApp-ის ნომერი და სამუშაო საათები
   2) CATEGORIES — „რა დევს ხურჯინში“ ბარათები
   3) SPICES     — სანელებლების გზამკვლევი
   4) GIFTS      — სასაჩუქრე ნაკრებები (ფასი: price)
   5) TEXT       — საიტის ყველა წარწერა სამ ენაზე (en / ka / ru)
   ქვემოთ, ხაზის „ლოგიკა“ შემდეგ, არაფრის შეცვლა არ არის საჭირო. */

var CONTACT = { whatsapp: '995555554730', opens: 11, closes: 22 };

/* TODO: ნამდვილი ფოტოები — images/README.md */
var CATEGORIES = [
  { id: 'spices', img: 'images/spices.jpg',
    en: { name: 'Spices', desc: 'Khmeli-suneli, utskho-suneli, Svan salt, adjika and more. Tell us what you cook and we will help you choose.' },
    ka: { name: 'სანელებლები', desc: 'ხმელი სუნელი, უცხო სუნელი, სვანური მარილი, აჯიკა და სხვა. გვითხარი, რას ამზადებ და არჩევაში დაგეხმარებით.' },
    ru: { name: 'Специи', desc: 'Хмели-сунели, уцхо-сунели, сванская соль, аджика и другие. Расскажите, что готовите, и мы поможем выбрать.' } },
  { id: 'sweets', img: 'images/churchkhela.jpg',
    en: { name: 'Churchkhela & sweets', desc: 'Homemade churchkhela, tklapi fruit leather and dried fruit.' },
    ka: { name: 'ჩურჩხელა და ტკბილეული', desc: 'სახლში დამზადებული ჩურჩხელა, ტყლაპი და ჩირი.' },
    ru: { name: 'Чурчхела и сладости', desc: 'Домашняя чурчхела, тклапи (фруктовая пастила) и сухофрукты.' } },
  { id: 'honey', img: 'images/honey.jpg',
    en: { name: 'Honey & jams', desc: 'Natural honey and homemade jams.' },
    ka: { name: 'თაფლი და მურაბები', desc: 'ნატურალური თაფლი და სახლის მურაბები.' },
    ru: { name: 'Мёд и варенье', desc: 'Натуральный мёд и домашнее варенье.' } },
  { id: 'tea', img: 'images/tea.jpg',
    en: { name: 'Teas', desc: 'Georgian tea and herbal teas.' },
    ka: { name: 'ჩაი', desc: 'ქართული ჩაი და ბალახეული ჩაი.' },
    ru: { name: 'Чай', desc: 'Грузинский чай и травяные сборы.' } },
  { id: 'wine', img: 'images/wine.jpg',
    en: { name: 'Wine & chacha', desc: 'Georgian wine and chacha, plus tkemali sauce and juices.' },
    ka: { name: 'ღვინო და ჭაჭა', desc: 'ქართული ღვინო და ჭაჭა, ასევე ტყემალი და წვენები.' },
    ru: { name: 'Вино и чача', desc: 'Грузинское вино и чача, а также соус ткемали и соки.' } },
  { id: 'giftsets', img: 'images/gifts.jpg',
    en: { name: 'Gift sets', desc: 'A box of Georgia that is easy to take home. See the three sets below.' },
    ka: { name: 'სასაჩუქრე ნაკრებები', desc: 'საქართველო ერთ ყუთში, რომელიც ადვილი წასაღებია. სამი ნაკრები იხილე ქვემოთ.' },
    ru: { name: 'Подарочные наборы', desc: 'Грузия в одной коробке, которую легко увезти домой. Три набора смотрите ниже.' } }
];

/* color — გროვის ფერი ნახატზე.
   TODO: ბოლო ორი (ყვითელი ყვავილი, ქინძი) — მფლობელებმა დაადასტურონ, რომ მაღაზიაში აქვთ. */
var SPICES = [
  { color: '#9a8a3a',
    en: { name: 'Khmeli-suneli', use: 'The classic blend. For kharcho, chakhokhbili and stews.' },
    ka: { name: 'ხმელი სუნელი', use: 'კლასიკური ნაზავი. ხარჩოსთვის, ჩახოხბილისთვის და წვნიანებისთვის.' },
    ru: { name: 'Хмели-сунели', use: 'Классическая смесь. Для харчо, чахохбили и рагу.' } },
  { color: '#e9b98c',
    en: { name: 'Svan salt', use: 'Salt with garlic and mountain spices. For everything: meat, potatoes, salads, eggs.' },
    ka: { name: 'სვანური მარილი', use: 'მარილი ნივრით და მთის სანელებლებით. ყველაფერს უხდება: ხორცს, კარტოფილს, სალათს, კვერცხს.' },
    ru: { name: 'Сванская соль', use: 'Соль с чесноком и горными специями. Ко всему: мясу, картофелю, салатам, яичнице.' } },
  { color: '#b9925a',
    en: { name: 'Utskho-suneli', use: 'Blue fenugreek, mild and nutty. For pkhali, satsivi and lobio.' },
    ka: { name: 'უცხო სუნელი', use: 'რბილი, თხილის არომატით. ფხალისთვის, საცივისთვის და ლობიოსთვის.' },
    ru: { name: 'Уцхо-сунели', use: 'Голубой пажитник, мягкий и ореховый. Для пхали, сациви и лобио.' } },
  { color: '#c0391b',
    en: { name: 'Adjika', use: 'Hot pepper, garlic and herbs. For marinades, grilled meat and beans.' },
    ka: { name: 'აჯიკა', use: 'ცხარე წიწაკა, ნიორი და მწვანილი. მარინადისთვის, მწვადისთვის და ლობიოსთვის.' },
    ru: { name: 'Аджика', use: 'Острый перец, чеснок и травы. Для маринадов, шашлыка и фасоли.' } },
  { color: '#e8a628',
    en: { name: 'Imeretian saffron', use: 'Dried marigold petals, golden and gentle. For satsivi and chikhirtma.' },
    ka: { name: 'ყვითელი ყვავილი', use: 'იმერული ზაფრანა, ოქროსფერი და ნაზი. საცივისა და ჩიხირთმისთვის.' },
    ru: { name: 'Имеретинский шафран', use: 'Сушёные лепестки бархатцев, золотистые и мягкие. Для сациви и чихиртмы.' } },
  { color: '#7d6a45',
    en: { name: 'Dried coriander', use: 'Warm and citrusy. For lobio, sauces and mtsvadi.' },
    ka: { name: 'ხმელი ქინძი', use: 'თბილი, ციტრუსის არომატით. ლობიოსთვის, სოუსებისთვის და მწვადისთვის.' },
    ru: { name: 'Кориандр', use: 'Тёплый, с цитрусовой ноткой. Для лобио, соусов и мцвади.' } }
];

/* price: null → გვერდზე ჩანს „ფასი: მოგვწერე WhatsApp-ზე“. ნამდვილი ფასი ჩაწერე რიცხვად, მაგ. price: 45
   TODO: ნაკრებების ნამდვილი შემადგენლობა და ფასები — მფლობელებისგან. */
var GIFTS = [
  { id: 'gift-small', img: 'images/gift-1.jpg', price: null,
    en: { name: 'Small taste', desc: 'Three spices of your choice and a churchkhela.' },
    ka: { name: 'პატარა გემო', desc: 'სამი სანელებელი შენი არჩევანით და ჩურჩხელა.' },
    ru: { name: 'Маленький вкус', desc: 'Три специи на выбор и чурчхела.' } },
  { id: 'gift-supra', img: 'images/gift-2.jpg', price: null,
    en: { name: 'Supra box', desc: 'Spices, adjika, tkemali, churchkhela, tklapi and honey: a Georgian table in one box.' },
    ka: { name: 'სუფრის ყუთი', desc: 'სანელებლები, აჯიკა, ტყემალი, ჩურჩხელა, ტყლაპი და თაფლი: ქართული სუფრა ერთ ყუთში.' },
    ru: { name: 'Супра-бокс', desc: 'Специи, аджика, ткемали, чурчхела, тклапи и мёд: грузинское застолье в одной коробке.' } },
  { id: 'gift-big', img: 'images/gift-3.jpg', price: null,
    en: { name: 'Big khurjini', desc: 'The full bag: spices, sauces, sweets, tea, and wine or chacha.' },
    ka: { name: 'დიდი ხურჯინი', desc: 'სავსე ხურჯინი: სანელებლები, სოუსები, ტკბილეული, ჩაი და ღვინო ან ჭაჭა.' },
    ru: { name: 'Большой хурджин', desc: 'Полный хурджин: специи, соусы, сладости, чай и вино или чача.' } }
];

var TEXT = {
  en: {
    'meta.title': 'Khurjini — Georgian spices and homemade treats in Old Tbilisi',
    'demo': 'Demo / კონცეფცია — photos and prices are placeholders',
    'nav.label': 'Main menu', 'nav.foot': 'Footer menu',
    'nav.bag': 'The shop', 'nav.guide': 'Spice guide', 'nav.gifts': 'Gift sets', 'nav.story': 'Our story', 'nav.visit': 'Visit',
    'open.yes': 'Open now · until 22:00', 'open.no': 'Closed now · opens at 11:00',
    'hero.title': 'A bag full<br>of Georgia',
    'hero.lead': 'Georgian spices, homemade churchkhela, honey, tea and wine from a small family shop in Old Tbilisi. Come in and taste, or order on WhatsApp.',
    'hero.facts': '27 Anton Katalikosi St, Old Tbilisi · every day 11:00–22:00',
    'hero.alt': 'Photo placeholder: heaps of colourful spices in sacks under strings of churchkhela',
    'cta.order': 'Order on WhatsApp', 'cta.visit': 'Visit us', 'cta.directions': 'Get directions',
    'bag.title': "What's in the khurjini",
    'bag.lead': 'Natural, homemade Georgian products at local prices. Add what you like to your khurjini and send the list on WhatsApp.',
    'card.order': 'Order', 'card.add': 'Add to khurjini', 'card.added': 'In your khurjini ✓', 'card.alt': 'Photo placeholder: {n}',
    'bar.send': 'Send my khurjini ({n})',
    'guide.title': 'A short guide to Georgian spices',
    'guide.lead': 'We love explaining spices. Here is the short version; for the long one, come by and taste.',
    'guide.cta': 'Ask us which spice you need',
    'gifts.title': 'Gift sets that fit in a suitcase',
    'gifts.lead': 'An edible souvenir is the easiest one to take home. Pick a box, or tell us what to put in it.',
    'gifts.note': '* Example sets. The shop will confirm contents and prices.',
    'gift.ask': 'Price: ask on WhatsApp', 'gift.price': '{p} GEL',
    'story.title': 'A family shop in Old Tbilisi',
    'story.alt': 'Photo placeholder: the shop front on Anton Katalikosi Street',
    'story.p1': 'Khurjini is small and cosy, and it is run by a married couple. They love to talk about spices, help you choose, and let you taste before you buy.',
    'story.p2': 'Everything on the shelves is natural and homemade, sold at local prices. Travellers find the shop on their walk through the old town, and local hosts send their guests here.',
    'story.pull': 'A khurjini is the woven saddlebag Georgian travellers carried their goods in. Ours is full of Georgia.',
    'rev.title': 'What guests say', 'rev.text': 'Real guest reviews from Google will appear here.',
    'visit.title': 'Visit us', 'visit.address': '27 Anton Katalikosi St, Old Tbilisi',
    'visit.hours.t': 'Hours', 'visit.hours.d': 'Every day, 11:00–22:00',
    'visit.phone.t': 'Phone / WhatsApp',
    'visit.delivery.t': 'Delivery', 'visit.delivery.d': 'Delivery in Tbilisi, same day too, or pickup from the shop',
    'visit.pay.t': 'Payment', 'visit.pay.d': 'Cash, card and contactless',
    'visit.lang.t': 'We speak', 'visit.lang.d': 'English, Georgian, Russian',
    'visit.map': 'Khurjini on the map: 27 Anton Katalikosi St, Old Tbilisi',
    'foot.ship': 'Shipping abroad: details to be confirmed. Write to us and we will tell you what is possible.',
    'foot.by': 'Site concept: Gridline',
    'wa.general': 'Hello! I am writing from the Khurjini website and would like to order.',
    'wa.product': 'Hello! I would like to order from Khurjini: {n}.',
    'wa.advice': 'Hello! Please help me choose spices. I want to cook: ',
    'wa.bag': 'Hello! I would like to order from Khurjini:'
  },
  ka: {
    'meta.title': 'ხურჯინი — ქართული სანელებლები და სახლის ნუგბარი ძველ თბილისში',
    'demo': 'დემო / კონცეფცია — ფოტოები და ფასები ნიმუშია',
    'nav.label': 'მთავარი მენიუ', 'nav.foot': 'ფუტერის მენიუ',
    'nav.bag': 'მაღაზია', 'nav.guide': 'სანელებლები', 'nav.gifts': 'საჩუქრები', 'nav.story': 'ჩვენ შესახებ', 'nav.visit': 'ვიზიტი',
    'open.yes': 'ახლა ღიაა · 22:00-მდე', 'open.no': 'ახლა დაკეტილია · იხსნება 11:00-ზე',
    'hero.title': 'საქართველო<br>ერთ ხურჯინში',
    'hero.lead': 'ქართული სანელებლები, სახლის ჩურჩხელა, თაფლი, ჩაი და ღვინო პატარა საოჯახო მაღაზიიდან ძველ თბილისში. შემოდი და დააგემოვნე, ან შეუკვეთე WhatsApp-ით.',
    'hero.facts': 'ანტონ კათალიკოსის ქ. 27, ძველი თბილისი · ყოველდღე 11:00–22:00',
    'hero.alt': 'ფოტოს ადგილი: ფერადი სანელებლების გროვები ტომრებში, ზემოთ ჩამოკიდებული ჩურჩხელებით',
    'cta.order': 'შეუკვეთე WhatsApp-ით', 'cta.visit': 'გვესტუმრე', 'cta.directions': 'მარშრუტის ნახვა',
    'bag.title': 'რა დევს ხურჯინში',
    'bag.lead': 'ნატურალური, სახლში დამზადებული ქართული პროდუქტები ადგილობრივ ფასად. რაც მოგეწონება, ჩადე ხურჯინში და სია WhatsApp-ით გამოგვიგზავნე.',
    'card.order': 'შეკვეთა', 'card.add': 'ხურჯინში ჩადება', 'card.added': 'ხურჯინშია ✓', 'card.alt': 'ფოტოს ადგილი: {n}',
    'bar.send': 'გამოგზავნე ჩემი ხურჯინი ({n})',
    'guide.title': 'სანელებლების მოკლე გზამკვლევი',
    'guide.lead': 'სანელებლებზე საუბარი გვიყვარს. აქ მოკლე ვერსიაა; გრძელისთვის შემოგვიარე და დააგემოვნე.',
    'guide.cta': 'გვკითხე, რომელი სანელებელი გჭირდება',
    'gifts.title': 'საჩუქარი, რომელიც ჩემოდანში ეტევა',
    'gifts.lead': 'საჭმელი სუვენირი ყველაზე ადვილი წასაღებია. აირჩიე ყუთი ან გვითხარი, რა ჩავდოთ.',
    'gifts.note': '* ნაკრებები ნიმუშია. შემადგენლობას და ფასებს მაღაზია დააზუსტებს.',
    'gift.ask': 'ფასი: მოგვწერე WhatsApp-ზე', 'gift.price': '{p} ₾',
    'story.title': 'საოჯახო მაღაზია ძველ თბილისში',
    'story.alt': 'ფოტოს ადგილი: მაღაზიის ფასადი ანტონ კათალიკოსის ქუჩაზე',
    'story.p1': 'ხურჯინი პატარა და მყუდრო მაღაზიაა, რომელსაც ცოლ-ქმარი უძღვება. უყვართ სანელებლებზე საუბარი, გეხმარებიან არჩევაში და ყიდვამდე გაგემოვნებენ.',
    'story.p2': 'თაროებზე ყველაფერი ნატურალური და სახლში დამზადებულია, ადგილობრივ ფასად. მოგზაურები მაღაზიას ძველ ქალაქში სეირნობისას პოულობენ, ადგილობრივი მასპინძლები კი სტუმრებს აქ აგზავნიან.',
    'story.pull': 'ხურჯინი ნაქსოვი ჩანთაა, რომლითაც ქართველი მგზავრები საგზალს ატარებდნენ. ჩვენი ხურჯინი საქართველოთია სავსე.',
    'rev.title': 'რას ამბობენ სტუმრები', 'rev.text': 'აქ გამოჩნდება სტუმრების ნამდვილი შეფასებები Google-იდან.',
    'visit.title': 'გვესტუმრე', 'visit.address': 'ანტონ კათალიკოსის ქ. 27, ძველი თბილისი',
    'visit.hours.t': 'სამუშაო საათები', 'visit.hours.d': 'ყოველდღე, 11:00–22:00',
    'visit.phone.t': 'ტელეფონი / WhatsApp',
    'visit.delivery.t': 'მიწოდება', 'visit.delivery.d': 'მიწოდება თბილისში, იმავე დღესაც, ან წაღება მაღაზიიდან',
    'visit.pay.t': 'გადახდა', 'visit.pay.d': 'ნაღდი, ბარათი და უკონტაქტო',
    'visit.lang.t': 'ვსაუბრობთ', 'visit.lang.d': 'ქართულად, ინგლისურად, რუსულად',
    'visit.map': 'ხურჯინი რუკაზე: ანტონ კათალიკოსის ქ. 27, ძველი თბილისი',
    'foot.ship': 'საზღვარგარეთ გაგზავნა: პირობები ზუსტდება. მოგვწერე და გეტყვით, რა არის შესაძლებელი.',
    'foot.by': 'საიტის კონცეფცია: Gridline',
    'wa.general': 'გამარჯობა! ხურჯინის საიტიდან გწერთ, მინდა შეკვეთა.',
    'wa.product': 'გამარჯობა! მინდა შევუკვეთო ხურჯინიდან: {n}.',
    'wa.advice': 'გამარჯობა! დამეხმარეთ სანელებლების არჩევაში. მინდა მოვამზადო: ',
    'wa.bag': 'გამარჯობა! მინდა შევუკვეთო ხურჯინიდან:'
  },
  ru: {
    'meta.title': 'Khurjini — грузинские специи и домашние сладости в Старом Тбилиси',
    'demo': 'Демо / концепция — фото и цены условные',
    'nav.label': 'Главное меню', 'nav.foot': 'Меню в подвале',
    'nav.bag': 'Магазин', 'nav.guide': 'Специи', 'nav.gifts': 'Подарки', 'nav.story': 'О нас', 'nav.visit': 'Как найти',
    'open.yes': 'Сейчас открыто · до 22:00', 'open.no': 'Сейчас закрыто · откроется в 11:00',
    'hero.title': 'Грузия в одном<br>хурджине',
    'hero.lead': 'Грузинские специи, домашняя чурчхела, мёд, чай и вино из маленького семейного магазина в Старом Тбилиси. Заходите попробовать или закажите в WhatsApp.',
    'hero.facts': 'ул. Антона Католикоса, 27, Старый Тбилиси · каждый день 11:00–22:00',
    'hero.alt': 'Место для фото: горки разноцветных специй в мешках под связками чурчхелы',
    'cta.order': 'Заказать в WhatsApp', 'cta.visit': 'Как нас найти', 'cta.directions': 'Проложить маршрут',
    'bag.title': 'Что лежит в хурджине',
    'bag.lead': 'Натуральные домашние грузинские продукты по местным ценам. Добавьте в хурджин то, что понравилось, и отправьте список в WhatsApp.',
    'card.order': 'Заказать', 'card.add': 'В хурджин', 'card.added': 'В хурджине ✓', 'card.alt': 'Место для фото: {n}',
    'bar.send': 'Отправить мой хурджин ({n})',
    'guide.title': 'Короткий гид по грузинским специям',
    'guide.lead': 'Мы любим рассказывать о специях. Здесь короткая версия, а за длинной заходите к нам и пробуйте.',
    'guide.cta': 'Спросите, какая специя вам нужна',
    'gifts.title': 'Подарки, которые поместятся в чемодан',
    'gifts.lead': 'Съедобный сувенир проще всего увезти домой. Выберите набор или скажите, что в него положить.',
    'gifts.note': '* Наборы приведены для примера. Состав и цены уточнит магазин.',
    'gift.ask': 'Цена: уточните в WhatsApp', 'gift.price': '{p} ₾',
    'story.title': 'Семейный магазин в Старом Тбилиси',
    'story.alt': 'Место для фото: фасад магазина на улице Антона Католикоса',
    'story.p1': 'Khurjini — маленький уютный магазин, который держит супружеская пара. Они любят рассказывать о специях, помогают выбрать и дают попробовать перед покупкой.',
    'story.p2': 'Всё на полках натуральное и домашнее, по местным ценам. Путешественники находят магазин, гуляя по старому городу, а местные хозяева отправляют сюда своих гостей.',
    'story.pull': 'Хурджин — это тканая перемётная сумка, в которой грузинские путники возили припасы. Наш хурджин полон Грузии.',
    'rev.title': 'Что говорят гости', 'rev.text': 'Здесь появятся настоящие отзывы гостей из Google.',
    'visit.title': 'Приходите к нам', 'visit.address': 'ул. Антона Католикоса, 27, Старый Тбилиси',
    'visit.hours.t': 'Часы работы', 'visit.hours.d': 'Каждый день, 11:00–22:00',
    'visit.phone.t': 'Телефон / WhatsApp',
    'visit.delivery.t': 'Доставка', 'visit.delivery.d': 'Доставка по Тбилиси, в том числе в тот же день, или самовывоз',
    'visit.pay.t': 'Оплата', 'visit.pay.d': 'Наличные, карта и бесконтактная оплата',
    'visit.lang.t': 'Говорим', 'visit.lang.d': 'по-русски, по-английски, по-грузински',
    'visit.map': 'Khurjini на карте: ул. Антона Католикоса, 27, Старый Тбилиси',
    'foot.ship': 'Доставка за границу: условия уточняются. Напишите нам, и мы расскажем, что возможно.',
    'foot.by': 'Концепция сайта: Gridline',
    'wa.general': 'Здравствуйте! Пишу с сайта Khurjini, хочу сделать заказ.',
    'wa.product': 'Здравствуйте! Хочу заказать в Khurjini: {n}.',
    'wa.advice': 'Здравствуйте! Помогите выбрать специи. Хочу приготовить: ',
    'wa.bag': 'Здравствуйте! Хочу заказать в Khurjini:'
  }
};

/* ============================ ლოგიკა ============================ */
(function () {
  var doc = document, root = doc.documentElement;
  root.classList.add('js');
  var LANGS = ['en', 'ka', 'ru'];
  var lang = 'en';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('khurjini.lang');
    if (LANGS.indexOf(q) > -1) lang = q; else if (LANGS.indexOf(saved) > -1) lang = saved;
  } catch (e) {}
  var bag = [];   // ხურჯინში ჩადებული ნივთების id-ები

  function t(key, vars) {
    var s = (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || '';
    if (vars) for (var k in vars) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  function wa(text) { return 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(text); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function byId(id) { return CATEGORIES.concat(GIFTS).filter(function (x) { return x.id === id; })[0]; }

  function card(p, isGift) {
    var x = p[lang] || p.en, inBag = bag.indexOf(p.id) > -1;
    var price = isGift ? '<p class="price">' + esc(p.price ? t('gift.price', { p: p.price }) : t('gift.ask')) + '</p>' : '';
    return '<li class="card reveal">' +
      '<div class="card-img"><img src="' + p.img + '" width="800" height="600" loading="lazy" alt="' + esc(t('card.alt', { n: x.name })) + '"></div>' +
      '<div class="card-body"><h3>' + esc(x.name) + (isGift ? '*' : '') + '</h3><p>' + esc(x.desc) + '</p>' + price +
      '<div class="card-foot">' +
      '<a class="btn btn-main" href="' + wa(t('wa.product', { n: x.name })) + '" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>' + esc(t('card.order')) + '</span></a>' +
      '<button type="button" class="btn btn-quiet btn-add" data-add="' + p.id + '" aria-pressed="' + inBag + '">' + esc(t(inBag ? 'card.added' : 'card.add')) + '</button>' +
      '</div></div></li>';
  }

  function render() {
    doc.getElementById('cats').innerHTML = CATEGORIES.map(function (p) { return card(p, false); }).join('');
    doc.getElementById('giftlist').innerHTML = GIFTS.map(function (p) { return card(p, true); }).join('');
    doc.getElementById('spices').innerHTML = SPICES.map(function (s) {
      var x = s[lang] || s.en;
      return '<li class="reveal"><svg viewBox="0 0 92 72" aria-hidden="true"><path d="M8 54C22 18 38 8 46 8s24 10 38 46Z" fill="' + s.color + '"/>' +
        '<path d="M4 52h84l-8 16H12Z" fill="#c9a877"/><path d="M4 52h84v5H4Z" fill="#a78655"/></svg>' +
        '<h3>' + esc(x.name) + '</h3><p>' + esc(x.use) + '</p></li>';
    }).join('');
  }

  function updateBag() {
    var bar = doc.getElementById('bagbar'), txt = doc.getElementById('bagbar-text');
    if (bag.length) {
      var lines = bag.map(function (id) { var p = byId(id); return '• ' + (p[lang] || p.en).name; });
      bar.href = wa(t('wa.bag') + '\n' + lines.join('\n'));
      txt.textContent = t('bar.send', { n: bag.length });
      bar.classList.add('has-items');
    } else {
      bar.href = wa(t('wa.general'));
      txt.textContent = t('cta.order');
      bar.classList.remove('has-items');
    }
    bar.setAttribute('aria-label', txt.textContent);
  }

  /* „ახლა ღიაა“ — თბილისის დროით (UTC+4) */
  function updateOpen() {
    var el = doc.getElementById('open');
    if (!el) return;
    var h = (new Date().getUTCHours() + 4) % 24;
    var isOpen = h >= CONTACT.opens && h < CONTACT.closes;
    el.hidden = false;
    el.classList.toggle('closed', !isOpen);
    doc.getElementById('open-text').textContent = t(isOpen ? 'open.yes' : 'open.no');
  }

  function applyLang() {
    root.lang = lang;
    doc.title = t('meta.title');
    doc.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n')); });
    doc.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    doc.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-i18n-alt')); });
    doc.querySelectorAll('[data-i18n-title]').forEach(function (el) { el.title = t(el.getAttribute('data-i18n-title')); });
    doc.querySelectorAll('[data-wa]').forEach(function (el) { el.href = wa(t('wa.' + el.getAttribute('data-wa'))); });
    doc.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    render();
    watch();
    updateBag();
    updateOpen();
  }

  doc.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('khurjini.lang', lang); } catch (e) {}
      applyLang();
    });
  });

  doc.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-add]') : null;
    if (!b) return;
    var id = b.getAttribute('data-add'), i = bag.indexOf(id);
    if (i > -1) bag.splice(i, 1); else bag.push(id);
    var on = bag.indexOf(id) > -1;
    b.setAttribute('aria-pressed', String(on));
    b.textContent = t(on ? 'card.added' : 'card.add');
    updateBag();
  });

  /* რბილი გამოჩენა გადახვევისას */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -6% 0px' }) : null;
  function watch() {
    doc.querySelectorAll('.reveal:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  var y = doc.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  applyLang();
  setInterval(updateOpen, 60000);
})();
