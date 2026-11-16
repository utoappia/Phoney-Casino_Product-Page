// Every text on the site, in English, 繁體中文 (zh-Hant) and 简体中文 (zh-Hans). Rendered by app.js.
window.SITE = {
  email: 'utoappia@gmail.com',
  // Set these once the app is live; until then the buttons say "Coming soon".
  appStore: '',
  playStore: '',

  langNames: { en: 'English', 'zh-Hant': '繁體中文', 'zh-Hans': '简体中文' },

  ui: {
    name: { en: 'Phoney Casino', 'zh-Hant': '賭場來電', 'zh-Hans': '赌场来电' },
    tagline: {
      en: 'A casino world tour in your pocket',
      'zh-Hant': '把全世界的賭場裝進口袋',
      'zh-Hans': '把全世界的赌场装进口袋',
    },
    intro: {
      en: 'Casino tables, slots and arcade games in 9 cities: roulette, blackjack, baccarat, slots, sic bo, pachinko, bowling, pool and more. Play with virtual coins only: there is nothing to buy and nothing to cash out.',
      'zh-Hant': '9 座城市的賭場與遊樂場遊戲：輪盤、21點、百家樂、老虎機、骰寶、柏青哥、保齡球、撞球等等。只用虛擬金幣遊玩：沒有任何購買，也無法兌換現金。',
      'zh-Hans': '9 座城市的赌场与游戏厅游戏：轮盘、21点、百家乐、老虎机、骰宝、柏青哥、保龄球、台球等等。只用虚拟金币游玩：没有任何购买，也无法兑换现金。',
    },
    appStore: { en: 'App Store', 'zh-Hant': 'App Store', 'zh-Hans': 'App Store' },
    playStore: { en: 'Google Play', 'zh-Hant': 'Google Play', 'zh-Hans': 'Google Play' },
    downloadOn: { en: 'Download on the', 'zh-Hant': '前往下載', 'zh-Hans': '前往下载' },
    comingSoon: { en: 'Coming soon', 'zh-Hant': '即將推出', 'zh-Hans': '即将推出' },
    features: { en: 'What’s inside', 'zh-Hant': '遊戲特色', 'zh-Hans': '游戏特色' },
    fine: {
      en: 'For adults 18+. Phoney Casino is a game for entertainment only. It does not offer real-money gambling, and success in it does not mean success at real-money gambling.',
      'zh-Hant': '僅限 18 歲以上成人。賭場來電純屬娛樂，不提供任何真錢賭博；在遊戲中獲勝，不代表在真錢賭博中也會獲勝。',
      'zh-Hans': '仅限 18 岁以上成人。赌场来电纯属娱乐，不提供任何真钱赌博；在游戏中获胜，不代表在真钱赌博中也会获胜。',
    },
    home: { en: 'Home', 'zh-Hant': '首頁', 'zh-Hans': '首页' },
    privacy: { en: 'Privacy', 'zh-Hant': '隱私權', 'zh-Hans': '隐私' },
    support: { en: 'Support', 'zh-Hant': '支援', 'zh-Hans': '支持' },
    updated: { en: 'Last updated', 'zh-Hant': '最後更新', 'zh-Hans': '最后更新' },
    language: { en: 'Language', 'zh-Hant': '語言', 'zh-Hans': '语言' },
    by: { en: 'Made by Utoappia', 'zh-Hant': 'Utoappia 製作', 'zh-Hans': 'Utoappia 制作' },
  },

  // The store screenshots, in store order (assets/shots/<lang>/<id>.jpg), with the store captions.
  features: [
    {
      id: '01-hero',
      title: { en: 'A casino world tour in your pocket', 'zh-Hant': '把全世界的賭場裝進口袋', 'zh-Hans': '把全世界的赌场装进口袋' },
      text: {
        en: 'Casino and arcade games in 9 cities. Virtual coins only, never real money.',
        'zh-Hant': '9 座城市的賭場與遊樂場遊戲。只用虛擬金幣，不涉及真錢。',
        'zh-Hans': '9 座城市的赌场与游戏厅游戏。只用虚拟金币，不涉及真钱。',
      },
    },
    {
      id: '02-roulette',
      title: { en: 'Spin the wheel in full 3D', 'zh-Hant': '立體輪盤，轉出好運', 'zh-Hans': '立体轮盘，转出好运' },
      text: {
        en: 'A real-feel ball that bounces, slows and drops into a pocket.',
        'zh-Hant': '小球彈跳、減速、落袋，手感就像真的一樣。',
        'zh-Hans': '小球弹跳、减速、落袋，手感就像真的一样。',
      },
    },
    {
      id: '03-cards',
      title: { en: 'Blackjack, baccarat & poker tables', 'zh-Hant': '21點、百家樂與撲克牌桌', 'zh-Hans': '21点、百家乐与扑克牌桌' },
      text: {
        en: 'Plus Texas Hold’em, Pai Gow, Dragon Tiger and many more.',
        'zh-Hant': '還有德州撲克、牌九、龍虎等等。',
        'zh-Hans': '还有德州扑克、牌九、龙虎等等。',
      },
    },
    {
      id: '04-slots',
      title: { en: 'Pull the lever on themed slot machines', 'zh-Hant': '主題老虎機，拉霸轉不停', 'zh-Hans': '主题老虎机，拉霸转不停' },
      text: {
        en: 'From a 1970s fruit machine to Japanese pachislot.',
        'zh-Hant': '從 1970 年代的水果機到日本柏青嫂。',
        'zh-Hans': '从 1970 年代的水果机到日本柏青嫂。',
      },
    },
    {
      id: '05-asia',
      title: { en: 'Sic Bo, Fan Tan & Pachinko', 'zh-Hant': '骰寶、番攤與柏青哥', 'zh-Hans': '骰宝、番摊与柏青哥' },
      text: {
        en: 'Local games from Macau, Tokyo, Goa and Saigon.',
        'zh-Hant': '澳門、東京、果阿、西貢的在地玩法。',
        'zh-Hans': '澳门、东京、果阿、西贡的在地玩法。',
      },
    },
    {
      id: '06-arcade',
      title: { en: 'Bowling, pool, pinball & more', 'zh-Hant': '保齡球、撞球、彈珠台玩不完', 'zh-Hans': '保龄球、台球、弹球玩不完' },
      text: {
        en: 'Arcade games to win coins between bets.',
        'zh-Hant': '各式遊樂場遊戲，下注之餘也能贏金幣。',
        'zh-Hans': '各式游戏厅游戏，下注之余也能赢金币。',
      },
    },
    {
      id: '07-empire',
      title: { en: 'Build a business empire', 'zh-Hant': '打造你的商業帝國', 'zh-Hans': '打造你的商业帝国' },
      text: {
        en: 'Lemonade stands, nightclubs and hotels that earn coins every hour.',
        'zh-Hant': '檸檬水攤、夜店、飯店，每小時都在幫你賺金幣。',
        'zh-Hans': '柠檬水摊、夜店、酒店，每小时都在帮你赚金币。',
      },
    },
    {
      id: '08-travel',
      title: { en: 'Fly to 9 cities around the world', 'zh-Hant': '飛往世界 9 座城市', 'zh-Hans': '飞往世界 9 座城市' },
      text: {
        en: 'Las Vegas, Monte Carlo, Macau, Tokyo… each with its own games.',
        'zh-Hant': '拉斯維加斯、蒙地卡羅、澳門、東京……各有在地遊戲。',
        'zh-Hans': '拉斯维加斯、蒙特卡洛、澳门、东京……各有在地游戏。',
      },
    },
    {
      id: '09-sal',
      title: { en: 'Broke? Sal will spot you a loan', 'zh-Hant': '沒錢了？鯊魚哥借你', 'zh-Hans': '没钱了？鲨鱼哥借你' },
      text: {
        en: 'Just pay him back before the interest bites.',
        'zh-Hant': '記得在利息咬人之前還錢。',
        'zh-Hans': '记得在利息咬人之前还钱。',
      },
    },
    {
      id: '10-learn',
      title: { en: 'Learn every game step by step', 'zh-Hant': '每款遊戲，一步步教你玩', 'zh-Hans': '每款游戏，一步步教你玩' },
      text: {
        en: 'Short narrated how-to-play videos for every game.',
        'zh-Hant': '每款遊戲都有附語音的簡短教學影片。',
        'zh-Hans': '每款游戏都有附语音的简短教学视频。',
      },
    },
  ],

  privacy: {
    title: { en: 'Privacy Policy', 'zh-Hant': '隱私權政策', 'zh-Hans': '隐私政策' },
    updated: { en: 'November 15, 2026', 'zh-Hant': '2026 年 11 月 15 日', 'zh-Hans': '2026 年 11 月 15 日' },
    sections: {
      en: [
        {
          p: [
            'This policy applies to the Phoney Casino app on iOS and Android, made by Utoappia. In short: we do not collect your personal information. Ads in the app are served by Unity Ads, which collects some data as described below.',
          ],
        },
        {
          h: 'What we collect',
          p: [
            'Nothing. Phoney Casino has no accounts and no sign-in, and we run no servers that receive information from the app. We never sell or share personal information.',
          ],
        },
        {
          h: 'Your game and its backup',
          p: [
            'Your coins, progress and settings are stored on your device. On iPhone and iPad, a copy is kept in your own iCloud (Apple’s key-value storage), so a reinstall or a new device on the same Apple Account continues your game; we cannot see it. On Android, the app’s data is included in Android’s own backup to your Google account if that is turned on. Apple and Google handle these backups under their own privacy policies.',
          ],
        },
        {
          h: 'Ads',
          p: [
            'The app offers optional video ads: you choose to watch one to earn free coins. These ads are provided by Unity Ads (Unity Technologies). To show ads, measure them and prevent fraud, Unity may collect information such as your device’s IP address, device and app information, and how you interact with the ads, and may use your device’s advertising identifier on Android. On iPhone and iPad the app does not ask to track you, so Apple’s advertising identifier is not shared.',
            'Where the law requires it (for example in the EEA, UK and Switzerland), Unity asks for your consent before showing personalized ads, and each ad has a privacy button where you can review your choice. Learn how Unity uses this information: https://unity.com/legal/game-player-and-app-user-privacy-policy',
          ],
        },
        {
          h: 'Narration',
          p: [
            'The how-to-play videos are narrated by your device’s built-in text-to-speech. Nothing is sent anywhere.',
          ],
        },
        {
          h: 'No real money',
          p: [
            'Coins in Phoney Casino are virtual. They cannot be bought, sold or exchanged for money or prizes, and the app has no in-app purchases. We never ask for payment details.',
          ],
        },
        {
          h: 'Adults only',
          p: ['Phoney Casino is for adults 18 and over. It is not directed to children, and we do not knowingly collect information from anyone under 18.'],
        },
        {
          h: 'Deleting your data',
          p: [
            'Tap Reset game on the app’s Profile tab, or delete the app, to delete its data on your device. On iPhone and iPad, a reset is also copied to your iCloud. You can delete app backups in your device’s iCloud or Google account settings.',
          ],
        },
        { h: 'Changes', p: ['If this policy changes, we will update this page and the date above.'] },
        { h: 'Contact', p: ['Questions about privacy? Email us at utoappia@gmail.com.'] },
      ],
      'zh-Hant': [
        {
          p: [
            '本政策適用於 Utoappia 製作的「賭場來電」App（iOS 與 Android）。簡而言之：我們不蒐集你的個人資料。App 中的廣告由 Unity Ads 提供，Unity 會依下方說明蒐集部分資料。',
          ],
        },
        {
          h: '我們蒐集的資料',
          p: ['沒有。「賭場來電」沒有帳號，也不需要登入；我們沒有接收 App 資料的伺服器，也絕不出售或分享個人資料。'],
        },
        {
          h: '你的遊戲進度與備份',
          p: [
            '你的金幣、進度和設定儲存在你的裝置上。在 iPhone 和 iPad 上，App 會在你自己的 iCloud（Apple 的鍵值儲存）保留一份副本，讓你重新安裝或在同一個 Apple 帳號的新裝置上繼續遊戲；我們看不到這些資料。在 Android 上，如果你開啟了 Android 的備份功能，App 資料會一併備份到你的 Google 帳號。這些備份由 Apple 或 Google 依其隱私權政策處理。',
          ],
        },
        {
          h: '廣告',
          p: [
            'App 提供可自由選擇觀看的影片廣告：你可以選擇觀看以獲得免費金幣。這些廣告由 Unity Ads（Unity Technologies）提供。為了顯示及衡量廣告、防範詐欺，Unity 可能會蒐集你裝置的 IP 位址、裝置與 App 資訊、你與廣告的互動情形，並可能在 Android 上使用裝置的廣告識別碼。在 iPhone 和 iPad 上，App 不會要求追蹤你，因此不會分享 Apple 的廣告識別碼。',
            '在法律要求的地區（例如歐洲經濟區、英國和瑞士），Unity 會在顯示個人化廣告前徵求你的同意，每則廣告也都有隱私權按鈕，讓你查看自己的選擇。了解 Unity 如何使用這些資料：https://unity.com/legal/game-player-and-app-user-privacy-policy',
          ],
        },
        { h: '語音旁白', p: ['教學影片的旁白使用你裝置內建的文字轉語音功能，不會傳送任何資料。'] },
        {
          h: '不涉及真錢',
          p: ['「賭場來電」中的金幣是虛擬的，無法購買、出售，也無法兌換成金錢或獎品；App 沒有任何 App 內購買。我們絕不會要求你的付款資料。'],
        },
        { h: '僅限成人', p: ['「賭場來電」僅供 18 歲以上的成人使用，並非以兒童為對象，我們也不會在知情的情況下蒐集任何未滿 18 歲者的資料。'] },
        {
          h: '刪除你的資料',
          p: [
            '點選 App「個人檔案」分頁中的「重設遊戲」，或刪除 App，即可刪除它在裝置上的資料。在 iPhone 和 iPad 上，重設也會同步到你的 iCloud。你可以在裝置的 iCloud 或 Google 帳號設定中刪除 App 備份。',
          ],
        },
        { h: '政策變更', p: ['如果本政策有所變更，我們會更新本頁面及上方的日期。'] },
        { h: '聯絡我們', p: ['有關隱私權的問題？請寄電子郵件至 utoappia@gmail.com。'] },
      ],
      'zh-Hans': [
        {
          p: [
            '本政策适用于 Utoappia 制作的“赌场来电”应用（iOS 与 Android）。简而言之：我们不收集你的个人信息。应用中的广告由 Unity Ads 提供，Unity 会按下方说明收集部分数据。',
          ],
        },
        {
          h: '我们收集的信息',
          p: ['没有。“赌场来电”没有账号，也不需要登录；我们没有接收应用信息的服务器，也绝不出售或分享个人信息。'],
        },
        {
          h: '你的游戏进度与备份',
          p: [
            '你的金币、进度和设置保存在你的设备上。在 iPhone 和 iPad 上，应用会在你自己的 iCloud（Apple 的键值存储）保留一份副本，让你重新安装或在同一个 Apple 账号的新设备上继续游戏；我们看不到这些数据。在 Android 上，如果你开启了 Android 的备份功能，应用数据会一并备份到你的 Google 账号。这些备份由 Apple 或 Google 按其隐私政策处理。',
          ],
        },
        {
          h: '广告',
          p: [
            '应用提供可自由选择观看的视频广告：你可以选择观看以获得免费金币。这些广告由 Unity Ads（Unity Technologies）提供。为了展示和衡量广告、防范欺诈，Unity 可能会收集你设备的 IP 地址、设备与应用信息、你与广告的互动情况，并可能在 Android 上使用设备的广告标识符。在 iPhone 和 iPad 上，应用不会请求跟踪你，因此不会共享 Apple 的广告标识符。',
            '在法律要求的地区（例如欧洲经济区、英国和瑞士），Unity 会在展示个性化广告前征求你的同意，每条广告也都有隐私按钮，让你查看自己的选择。了解 Unity 如何使用这些信息：https://unity.com/legal/game-player-and-app-user-privacy-policy',
          ],
        },
        { h: '语音旁白', p: ['教学视频的旁白使用你设备内置的文字转语音功能，不会发送任何数据。'] },
        {
          h: '不涉及真钱',
          p: ['“赌场来电”中的金币是虚拟的，无法购买、出售，也无法兑换成金钱或奖品；应用没有任何应用内购买。我们绝不会要求你的付款信息。'],
        },
        { h: '仅限成人', p: ['“赌场来电”仅供 18 岁以上的成人使用，并非以儿童为对象，我们也不会在知情的情况下收集任何未满 18 岁者的信息。'] },
        {
          h: '删除你的数据',
          p: [
            '点击应用“个人资料”标签页中的“重置游戏”，或删除应用，即可删除它在设备上的数据。在 iPhone 和 iPad 上，重置也会同步到你的 iCloud。你可以在设备的 iCloud 或 Google 账号设置中删除应用备份。',
          ],
        },
        { h: '政策变更', p: ['如果本政策有所变更，我们会更新本页面及上方的日期。'] },
        { h: '联系我们', p: ['有关隐私的问题？请发送电子邮件至 utoappia@gmail.com。'] },
      ],
    },
  },

  support: {
    title: { en: 'Support', 'zh-Hant': '支援', 'zh-Hans': '支持' },
    sections: {
      en: [
        {
          h: 'Contact us',
          p: [
            'Questions, ideas or a problem? Email us at utoappia@gmail.com. Please include the app’s version and your device (for example: version 0.1, iPhone 16 with iOS 26).',
          ],
        },
        {
          h: 'Out of coins?',
          p: [
            'Watch a short video ad for free coins, collect from your businesses, try the arcade games, or borrow from Sal (just pay him back before the interest bites). Coins can’t be bought: Phoney Casino has no in-app purchases.',
          ],
        },
        {
          h: 'Can I win real money?',
          p: ['No. Coins are virtual and can’t be exchanged for money or prizes. Phoney Casino is for entertainment only.'],
        },
        {
          h: 'New phone or reinstalled the app',
          p: [
            'On iPhone and iPad your game is kept in your iCloud: sign in with the same Apple Account and open the app, and it picks up where you left off. On Android, your game comes back with Android’s own backup if it is turned on in your device settings.',
          ],
        },
        {
          h: 'No sound',
          p: ['Check the Sound effects and Background music switches in the app’s Settings and your device’s volume. On iPhone the app plays even with the silent switch on.'],
        },
        {
          h: 'How do I play a game?',
          p: ['Every game has a short narrated how-to-play video: tap How to Play inside the game.'],
        },
        { h: 'Privacy', p: ['Read our privacy policy for what the app stores and how ads work.'], link: 'privacy/' },
      ],
      'zh-Hant': [
        {
          h: '聯絡我們',
          p: ['有問題、建議或遇到困難？請寄電子郵件至 utoappia@gmail.com。請註明 App 版本和你的裝置（例如：版本 0.1，iPhone 16，iOS 26）。'],
        },
        {
          h: '金幣用完了？',
          p: ['觀看一段簡短的影片廣告即可獲得免費金幣；也可以向你的事業收錢、玩玩遊樂場遊戲，或向鯊魚哥借錢（記得在利息咬人之前還錢）。金幣無法購買：「賭場來電」沒有任何 App 內購買。'],
        },
        { h: '可以贏真錢嗎？', p: ['不行。金幣是虛擬的，無法兌換成金錢或獎品。「賭場來電」純屬娛樂。'] },
        {
          h: '換了新手機或重新安裝 App',
          p: [
            '在 iPhone 和 iPad 上，你的遊戲進度保存在你的 iCloud：用同一個 Apple 帳號登入並打開 App，就能從上次的進度繼續。在 Android 上，如果你在裝置設定中開啟了 Android 備份，遊戲進度會隨備份一起恢復。',
          ],
        },
        { h: '沒有聲音', p: ['請檢查 App「設定」中的「音效」和「背景音樂」開關，以及裝置的音量。在 iPhone 上，即使開啟靜音開關，App 仍會發出聲音。'] },
        { h: '怎麼玩？', p: ['每款遊戲都有附語音的簡短教學影片：在遊戲中點選「玩法教學」即可觀看。'] },
        { h: '隱私權', p: ['閱讀我們的隱私權政策，了解 App 儲存哪些資料，以及廣告如何運作。'], link: 'privacy/' },
      ],
      'zh-Hans': [
        {
          h: '联系我们',
          p: ['有问题、建议或遇到困难？请发送电子邮件至 utoappia@gmail.com。请注明应用版本和你的设备（例如：版本 0.1，iPhone 16，iOS 26）。'],
        },
        {
          h: '金币用完了？',
          p: ['观看一段简短的视频广告即可获得免费金币；也可以向你的产业收钱、玩玩游戏厅游戏，或向鲨鱼哥借钱（记得在利息咬人之前还钱）。金币无法购买：“赌场来电”没有任何应用内购买。'],
        },
        { h: '可以赢真钱吗？', p: ['不行。金币是虚拟的，无法兑换成金钱或奖品。“赌场来电”纯属娱乐。'] },
        {
          h: '换了新手机或重新安装应用',
          p: [
            '在 iPhone 和 iPad 上，你的游戏进度保存在你的 iCloud：用同一个 Apple 账号登录并打开应用，就能从上次的进度继续。在 Android 上，如果你在设备设置中开启了 Android 备份，游戏进度会随备份一起恢复。',
          ],
        },
        { h: '没有声音', p: ['请检查应用“设置”中的“音效”和“背景音乐”开关，以及设备的音量。在 iPhone 上，即使开启静音开关，应用仍会发出声音。'] },
        { h: '怎么玩？', p: ['每款游戏都有附语音的简短教学视频：在游戏中点击“玩法教学”即可观看。'] },
        { h: '隐私', p: ['阅读我们的隐私政策，了解应用保存哪些数据，以及广告如何运作。'], link: 'privacy/' },
      ],
    },
  },
};
