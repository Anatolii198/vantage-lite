/* ==========================================================================
   Vantage Lite — every word on the page, in three languages.

   How it works
     Any element with data-i18n="key" gets this file's text for the current
     language. data-i18n-attr="placeholder:key" fills an attribute instead.
     {braces} are replaced by the page with real values.

   Adding a language
     1. copy the whole `en` block and change the key ('cs', 'de', …);
     2. add that key to LANGS below;
     3. add its locale to LOCALES in js/main.js — without that line the new
        language would print English dates and the price in the wrong shape.
   A missing key falls back to English, so the page never shows a blank.

   Removing a language
     Delete its block and its entry in LANGS. Nothing else refers to it.
   ========================================================================== */

const LANGS = ['en', 'pl', 'uk'];

const I18N = {

  /* ===================================================== English ======= */
  en: {
    'doc.title': '{name} — paid media specialist',
    'doc.desc': 'Meta, Google and TikTok ads for e-commerce and B2B. Audits, setup and monthly management.',

    'misc.skip': 'Skip to content',
    'nav.work': 'Results',
    'nav.services': 'What I do',
    'nav.about': 'About',
    'nav.book': 'Email me',
    'nav.menu': 'Menu',
    'nav.theme': 'Light or dark',
    'nav.lang': 'Language',

    'hero.eyebrow': '{city} · working remotely',
    'hero.h': 'I run the ads.\nYou read the numbers.',
    'hero.p': 'Seven years inside Meta and Google accounts, mostly e-commerce and B2B. I take an account, find where the money leaks, and fix it in the open — you work from the same board I do.',
    'hero.cta': 'Write to me',
    'hero.cta2': 'See the results',
    'hero.note': 'No deck, no discovery call about the discovery call. Send the account and a sentence about what hurts.',

    'fig.years': 'years running paid accounts',
    'fig.spend': 'ad spend managed',
    'fig.clients': 'brands worked with',

    'plat.h': 'Platforms I actually run',

    'case.eyebrow': 'Results',
    'case.h': 'Two accounts, six months each',
    'case.p': 'One number per client, month by month, including the months where nothing moved. Names are withheld; the numbers are not rounded up.',
    'case.period': 'six months',
    'case.up': 'up {p}%',
    'case.down': 'down {p}%',
    'case.chart': '{metric}, month by month',
    'case.month': 'Month {n}',

    'case.home': 'Home textiles store',
    'case.home.sector': 'E-commerce · Meta + Google',
    'case.home.what': 'The whole catalogue was one campaign and one audience. We split it by margin, moved the budget to the four products that actually paid, and rebuilt the feed so the ads stopped showing sold-out sizes.',
    'case.home.m1': 'Return on ad spend',
    'case.home.m2': 'Cost per sale',

    'case.saas': 'B2B scheduling tool',
    'case.saas.sector': 'SaaS · Google + LinkedIn',
    'case.saas.what': 'Demo requests were cheap and useless. We stopped counting form fills and started counting demos that showed up, then let the bidding learn on that instead.',
    'case.saas.m1': 'Cost per demo held',
    'case.saas.m2': 'Demos per month',


    'svc.eyebrow': 'What I do',
    'svc.h': 'Three things, and nothing else',
    'svc.p': 'Pick one or stack them. Everything starts with the audit — I do not touch an account I have not read.',
    'svc.from': 'from {p}',
    'svc.mo': '/mo',
    'svc.audit': 'Account audit',
    'svc.audit.d': 'Two days inside your account, then a call and a written list of what to fix, in order.',
    'svc.setup': 'Build from scratch',
    'svc.setup.d': 'New account, tracking, product feed and the first three campaigns. Live in two weeks.',
    'svc.manage': 'Monthly management',
    'svc.manage.d': 'I run the account: budgets, bids, audiences, creative briefs, and a weekly note on what moved.',

    'step.eyebrow': 'How it runs',
    'step.h': 'Five weeks from read access to scale',
    'step.week': 'Week {w}',
    'step.1': 'Audit',
    'step.1.d': 'I get read access and spend two days in the account. Nothing is changed yet.',
    'step.2': 'Plan',
    'step.2.d': 'One page: what to stop, what to keep, what to build, and what it should cost.',
    'step.3': 'Launch',
    'step.3.d': 'The new structure goes live and the old campaigns wind down. Nothing is switched off blindly.',
    'step.4': 'Scale',
    'step.4.d': 'Weekly tests, monthly review. Budget moves to whatever is paying.',


    'about.eyebrow': 'About',
    'about.h': 'Who you would be working with',
    'about.p1': 'I started in an agency in 2019, ran accounts for forty-one brands, and went solo in 2023 — the good part of this job is the account itself, and it kept getting squeezed between status calls.',
    'about.p2': 'I take four clients at a time. That is not a scarcity line, it is how many accounts one person can genuinely watch every day.',
    'about.certs': 'Certifications',
    'about.since': 'Running paid accounts since {y}',


    'cta.h': 'One mail, your account, no deck.',
    'cta.p': 'If it turns out you do not need me, I will say so on the call. That is the whole pitch.',


    'mail.subject': 'Consultation request — from your site',

    'foot.role': 'Paid media, {city}',
    'foot.rights': 'All rights reserved.',
    'foot.note': 'This page sets no cookies and loads nothing from anybody else.',
    'foot.top': 'Back to top'
  },

  /* ====================================================== Polski ======== */
  pl: {
    'doc.title': '{name} — specjalista paid media',
    'doc.desc': 'Reklamy Meta, Google i TikTok dla e-commerce i B2B. Audyty, wdrożenia i prowadzenie kont.',

    'misc.skip': 'Przejdź do treści',
    'nav.work': 'Efekty',
    'nav.services': 'Co robię',
    'nav.about': 'O mnie',
    'nav.book': 'Napisz do mnie',
    'nav.menu': 'Menu',
    'nav.theme': 'Jasny albo ciemny',
    'nav.lang': 'Język',

    'hero.eyebrow': '{city} · pracuję zdalnie',
    'hero.h': 'Ja prowadzę reklamy.\nTy czytasz liczby.',
    'hero.p': 'Siedem lat w kontach Meta i Google, głównie e-commerce i B2B. Biorę konto, znajduję, którędy ucieka budżet, i naprawiam to jawnie — pracujesz na tym samym panelu co ja.',
    'hero.cta': 'Napisz do mnie',
    'hero.cta2': 'Zobacz efekty',
    'hero.note': 'Bez prezentacji i bez rozmowy o tym, kiedy odbędzie się rozmowa. Wystarczy konto i jedno zdanie, co boli.',

    'fig.years': 'lat prowadzenia kont reklamowych',
    'fig.spend': 'obsłużonego budżetu',
    'fig.clients': 'marek we współpracy',

    'plat.h': 'Platformy, które naprawdę prowadzę',

    'case.eyebrow': 'Efekty',
    'case.h': 'Dwa konta, każde przez pół roku',
    'case.p': 'Jedna liczba na klienta, miesiąc po miesiącu — razem z miesiącami, w których nic się nie ruszyło. Nazw nie podaję, liczb nie zaokrąglam w górę.',
    'case.period': 'sześć miesięcy',
    'case.up': 'wzrost o {p}%',
    'case.down': 'spadek o {p}%',
    'case.chart': '{metric}, miesiąc po miesiącu',
    'case.month': 'Miesiąc {n}',

    'case.home': 'Sklep z tekstyliami domowymi',
    'case.home.sector': 'E-commerce · Meta + Google',
    'case.home.what': 'Cały katalog był jedną kampanią i jedną grupą odbiorców. Podzieliliśmy go według marży, przenieśliśmy budżet na cztery produkty, które naprawdę zarabiały, i przebudowaliśmy feed, żeby reklamy przestały pokazywać wyprzedane rozmiary.',
    'case.home.m1': 'Zwrot z wydatków na reklamę',
    'case.home.m2': 'Koszt sprzedaży',

    'case.saas': 'Narzędzie B2B do rezerwacji',
    'case.saas.sector': 'SaaS · Google + LinkedIn',
    'case.saas.what': 'Zgłoszenia na demo były tanie i bezużyteczne. Przestaliśmy liczyć wypełnione formularze, zaczęliśmy liczyć dema, na które ktoś przyszedł, i na tym uczył się algorytm.',
    'case.saas.m1': 'Koszt odbytego demo',
    'case.saas.m2': 'Dema miesięcznie',


    'svc.eyebrow': 'Co robię',
    'svc.h': 'Trzy rzeczy i nic poza tym',
    'svc.p': 'Weź jedną albo złóż kilka. Wszystko zaczyna się od audytu — nie ruszam konta, którego nie przeczytałem.',
    'svc.from': 'od {p}',
    'svc.mo': '/mies.',
    'svc.audit': 'Audyt konta',
    'svc.audit.d': 'Dwa dni w Twoim koncie, potem rozmowa i spisana lista tego, co poprawić, po kolei.',
    'svc.setup': 'Wdrożenie od zera',
    'svc.setup.d': 'Nowe konto, pomiary, feed produktowy i pierwsze trzy kampanie. Start w dwa tygodnie.',
    'svc.manage': 'Prowadzenie konta',
    'svc.manage.d': 'Prowadzę konto: budżety, stawki, odbiorcy, briefy kreatywne i cotygodniowa notatka, co się zmieniło.',

    'step.eyebrow': 'Jak to idzie',
    'step.h': 'Pięć tygodni od dostępu do skalowania',
    'step.week': 'Tydzień {w}',
    'step.1': 'Audyt',
    'step.1.d': 'Dostaję dostęp do odczytu i spędzam dwa dni w koncie. Jeszcze niczego nie zmieniam.',
    'step.2': 'Plan',
    'step.2.d': 'Jedna strona: co wyłączyć, co zostawić, co zbudować i ile to ma kosztować.',
    'step.3': 'Start',
    'step.3.d': 'Nowa struktura rusza, stare kampanie wygasają. Nic nie jest wyłączane w ciemno.',
    'step.4': 'Skalowanie',
    'step.4.d': 'Testy co tydzień, przegląd co miesiąc. Budżet idzie tam, gdzie się zwraca.',


    'about.eyebrow': 'O mnie',
    'about.h': 'Z kim będziesz pracować',
    'about.p1': 'Zaczynałem w agencji w 2019, prowadziłem konta czterdziestu jeden marek, a w 2023 poszedłem na swoje — najlepsza część tej pracy to samo konto, a ono ciągle przegrywało z rozmowami o statusie.',
    'about.p2': 'Biorę czterech klientów naraz. To nie jest zagrywka na niedostępność, tylko tyle kont jeden człowiek jest w stanie naprawdę oglądać codziennie.',
    'about.certs': 'Certyfikaty',
    'about.since': 'Prowadzę konta reklamowe od {y}',


    'cta.h': 'Jeden mail, Twoje konto, zero slajdów.',
    'cta.p': 'Jeśli okaże się, że nie jestem Ci potrzebny, powiem to na rozmowie. To cała oferta.',


    'mail.subject': 'Zapytanie o konsultację — ze strony',

    'foot.role': 'Paid media, {city}',
    'foot.rights': 'Wszelkie prawa zastrzeżone.',
    'foot.note': 'Ta strona nie zapisuje ciasteczek i niczego nie pobiera z zewnątrz.',
    'foot.top': 'Do góry'
  },

  /* ==================================================== Українська ====== */
  uk: {
    'doc.title': '{name} — спеціаліст із платного трафіку',
    'doc.desc': 'Реклама Meta, Google і TikTok для e-commerce та B2B. Аудит, налаштування й ведення кабінетів.',

    'misc.skip': 'Перейти до вмісту',
    'nav.work': 'Результати',
    'nav.services': 'Що я роблю',
    'nav.about': 'Про мене',
    'nav.book': 'Напишіть мені',
    'nav.menu': 'Меню',
    'nav.theme': 'Світла чи темна',
    'nav.lang': 'Мова',

    'hero.eyebrow': '{city} · працюю віддалено',
    'hero.h': 'Я веду рекламу.\nВи читаєте цифри.',
    'hero.p': 'Сім років у кабінетах Meta та Google, здебільшого e-commerce і B2B. Беру кабінет, знаходжу, де витікає бюджет, і лагоджу це відкрито — ви працюєте з тієї самої панелі, що і я.',
    'hero.cta': 'Напишіть мені',
    'hero.cta2': 'Подивитися результати',
    'hero.note': 'Без презентацій і без розмови про те, коли буде розмова. Надішліть кабінет і одне речення про те, що болить.',

    'fig.years': 'років веду рекламні кабінети',
    'fig.spend': 'відкрученого бюджету',
    'fig.clients': 'брендів у роботі',

    'plat.h': 'Платформи, які я справді веду',

    'case.eyebrow': 'Результати',
    'case.h': 'Два кабінети, кожен по півроку',
    'case.p': 'Одна цифра на клієнта, місяць за місяцем — разом із місяцями, коли нічого не рухалося. Назв не називаю, цифр угору не округлюю.',
    'case.period': 'шість місяців',
    'case.up': 'зростання на {p}%',
    'case.down': 'зниження на {p}%',
    'case.chart': '{metric}, місяць за місяцем',
    'case.month': 'Місяць {n}',

    'case.home': 'Магазин домашнього текстилю',
    'case.home.sector': 'E-commerce · Meta + Google',
    'case.home.what': 'Увесь каталог був однією кампанією й однією аудиторією. Розділили його за маржею, перевели бюджет на чотири товари, які справді заробляли, і перебрали фід, щоб реклама перестала показувати розпродані розміри.',
    'case.home.m1': 'Повернення витрат на рекламу',
    'case.home.m2': 'Вартість продажу',

    'case.saas': 'B2B-сервіс для записів',
    'case.saas.sector': 'SaaS · Google + LinkedIn',
    'case.saas.what': 'Заявки на демо були дешеві й марні. Перестали рахувати заповнені форми й почали рахувати демо, на які прийшли, — і вже на цьому вчився алгоритм.',
    'case.saas.m1': 'Вартість проведеного демо',
    'case.saas.m2': 'Демо на місяць',


    'svc.eyebrow': 'Що я роблю',
    'svc.h': 'Три речі і більше нічого',
    'svc.p': 'Беріть одну або складіть кілька. Усе починається з аудиту — я не чіпаю кабінет, якого не прочитав.',
    'svc.from': 'від {p}',
    'svc.mo': '/міс.',
    'svc.audit': 'Аудит кабінету',
    'svc.audit.d': 'Два дні у вашому кабінеті, потім розмова й написаний список того, що виправити, по черзі.',
    'svc.setup': 'Запуск з нуля',
    'svc.setup.d': 'Новий кабінет, аналітика, товарний фід і перші три кампанії. Старт за два тижні.',
    'svc.manage': 'Ведення кабінету',
    'svc.manage.d': 'Веду кабінет: бюджети, ставки, аудиторії, брифи на креативи й щотижнева нотатка про те, що змінилося.',

    'step.eyebrow': 'Як це йде',
    'step.h': 'П’ять тижнів від доступу до масштабування',
    'step.week': 'Тиждень {w}',
    'step.1': 'Аудит',
    'step.1.d': 'Отримую доступ на перегляд і два дні сиджу в кабінеті. Поки що нічого не змінюю.',
    'step.2': 'План',
    'step.2.d': 'Одна сторінка: що вимкнути, що лишити, що зібрати і скільки це має коштувати.',
    'step.3': 'Запуск',
    'step.3.d': 'Нова структура виходить, старі кампанії згортаються. Нічого не вимикається наосліп.',
    'step.4': 'Масштаб',
    'step.4.d': 'Тести щотижня, перегляд щомісяця. Бюджет іде туди, де він повертається.',


    'about.eyebrow': 'Про мене',
    'about.h': 'З ким ви працюватимете',
    'about.p1': 'Почав в агенції у 2019-му, вів кабінети сорока одного бренду, а у 2023-му пішов сам — найкраща частина цієї роботи і є сам кабінет, а він постійно програвав статусним дзвінкам.',
    'about.p2': 'Беру чотирьох клієнтів одночасно. Це не гра в дефіцит, а стільки кабінетів, скільки одна людина здатна справді дивитися щодня.',
    'about.certs': 'Сертифікати',
    'about.since': 'Веду рекламні кабінети з {y}',


    'cta.h': 'Один лист, ваш кабінет, жодного слайда.',
    'cta.p': 'Якщо виявиться, що я вам не потрібен, скажу це на розмові. Оце і вся пропозиція.',


    'mail.subject': 'Запит на консультацію — із сайту',

    'foot.role': 'Платний трафік, {city}',
    'foot.rights': 'Усі права захищено.',
    'foot.note': 'Ця сторінка не ставить кук і нічого не тягне ззовні.',
    'foot.top': 'Нагору'
  }
};
