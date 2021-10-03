import React, { useEffect, useState } from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
const cats = [
  {
    key: 'varna',
    id: 'varna',
    value: { text: 'Варна', location: { lat: 43.2140504, lng: 27.9147333 } }
  },
  {
    key: 'sofiya',
    id: 'sofiya',
    value: { text: 'София', location: { lat: 42.6977082, lng: 23.3218675 } }
  },
  {
    key: 'blagoevgrad',
    id: 'blagoevgrad',
    value: {
      text: 'Благоевград',
      location: { lat: 42.0208569, lng: 23.0943385 }
    }
  },
  {
    key: 'burgas',
    id: 'burgas',
    value: {
      text: 'Бургас',
      location: { lat: 42.50479259999999, lng: 27.4626361 }
    }
  },
  {
    key: 'dobrich',
    id: 'dobrich',
    value: { text: 'Добрич', location: { lat: 43.57259, lng: 27.8272606 } }
  },
  {
    key: 'gabrovo',
    id: 'gabrovo',
    value: { text: 'Габрово', location: { lat: 42.8742212, lng: 25.3186837 } }
  },
  {
    key: 'haskovo',
    id: 'haskovo',
    value: { text: 'Хасково', location: { lat: 41.9344366, lng: 25.5554462 } }
  },
  {
    key: 'kurdzhali',
    id: 'kurdzhali',
    value: { text: 'Кърджали', location: { lat: 41.6338439, lng: 25.3777119 } }
  },
  {
    key: 'kyustendil',
    id: 'kyustendil',
    value: { text: 'Кюстендил', location: { lat: 42.2868817, lng: 22.6939308 } }
  },
  {
    key: 'lovech',
    id: 'lovech',
    value: { text: 'Ловеч', location: { lat: 43.1369534, lng: 24.7141906 } }
  },
  {
    key: 'montana',
    id: 'montana',
    value: { text: 'Монтана', location: { lat: 43.4085161, lng: 23.2257292 } }
  },
  {
    key: 'pazardzhik',
    id: 'pazardzhik',
    value: { text: 'Пазарджик', location: { lat: 42.1927654, lng: 24.3335662 } }
  },
  {
    key: 'pernik',
    id: 'pernik',
    value: { text: 'Перник', location: { lat: 42.6051862, lng: 23.0378368 } }
  },
  {
    key: 'pleven',
    id: 'pleven',
    value: { text: 'Плевен', location: { lat: 43.4170423, lng: 24.6066847 } }
  },
  {
    key: 'plovdiv',
    id: 'plovdiv',
    value: { text: 'Пловдив', location: { lat: 42.1354079, lng: 24.7452904 } }
  },
  {
    key: 'razgrad',
    id: 'razgrad',
    value: {
      text: 'Разград',
      location: { lat: 43.53367189999999, lng: 26.5411165 }
    }
  },
  {
    key: 'ruse',
    id: 'ruse',
    value: {
      text: 'Русе',
      location: { lat: 43.83557130000001, lng: 25.9656554 }
    }
  },
  {
    key: 'shumen',
    id: 'shumen',
    value: { text: 'Шумен', location: { lat: 43.2712398, lng: 26.9361286 } }
  },
  {
    key: 'silistra',
    id: 'silistra',
    value: { text: 'Силистра', location: { lat: 44.1147271, lng: 27.2671901 } }
  },
  {
    key: 'sliven',
    id: 'sliven',
    value: { text: 'Сливен', location: { lat: 42.6816536, lng: 26.3228685 } }
  },
  {
    key: 'smolyan',
    id: 'smolyan',
    value: { text: 'Смолян', location: { lat: 41.5774233, lng: 24.7011138 } }
  },

  {
    key: 'stara-zagora',
    id: 'stara-zagora',
    value: {
      text: 'Стара Загора',
      location: { lat: 42.4257769, lng: 25.6344644 }
    }
  },
  {
    key: 'turgovishe',
    id: 'turgovishe',
    value: { text: 'Търговище', location: { lat: 43.2493556, lng: 26.5727357 } }
  },

  {
    key: 'veliko-turnovo',
    id: 'veliko-turnovo',
    value: {
      text: 'Велико Търново',
      location: { lat: 43.0756739, lng: 25.6171514 }
    }
  },
  {
    key: 'vidin',
    id: 'vidin',
    value: { text: 'Видин', location: { lat: 43.996159, lng: 22.8679302 } }
  },
  {
    key: 'vraca',
    id: 'vraca',
    value: { text: 'Враца', location: { lat: 43.2102375, lng: 23.5528803 } }
  },
  {
    key: 'yambol',
    id: 'yambol',
    value: {
      text: 'Ямбол',
      location: { lat: 42.48419990000001, lng: 26.5035023 }
    }
  }
]

const counties = [
  {
    key: 'blagoevgrad',
    id: 'bansko',
    value: {
      id: 'bansko',
      text: 'Банско',
      location: { lat: 41.8404241, lng: 23.485653 },
      alt: 982.6496817854372
    }
  },
  {
    key: 'blagoevgrad',
    id: 'belica',
    value: {
      id: 'belica',
      text: 'Белица',
      location: { lat: 41.9507744, lng: 23.5592214 },
      alt: 988.327581991052
    }
  },
  {
    key: 'blagoevgrad',
    id: 'blagoevgrad',
    value: {
      id: 'blagoevgrad',
      text: 'Благоевград',
      location: { lat: 42.0208569, lng: 23.0943385 },
      alt: 970.4438933086606
    }
  },
  {
    key: 'blagoevgrad',
    id: 'dobrinishe',
    value: {
      id: 'dobrinishe',
      text: 'Добринище',
      location: { lat: 41.8201945, lng: 23.5592856 },
      alt: 985.2539060730492
    }
  },
  {
    key: 'blagoevgrad',
    id: 'goce-delchev',
    value: {
      id: 'goce-delchev',
      text: 'Гоце Делчев',
      location: { lat: 41.5728211, lng: 23.7282719 },
      alt: 986.451202710857
    }
  },
  {
    key: 'blagoevgrad',
    id: 'hadzhidimovo',
    value: {
      id: 'hadzhidimovo',
      text: 'Хаджидимово',
      location: { lat: 41.5166281, lng: 23.8529825 },
      alt: 990.2954035283082
    }
  },
  {
    key: 'blagoevgrad',
    id: 'kresna',
    value: {
      id: 'kresna',
      text: 'Кресна',
      location: { lat: 41.7204847, lng: 23.1664374 },
      alt: 966.5149971002078
    }
  },
  {
    key: 'blagoevgrad',
    id: 'melnik',
    value: {
      id: 'melnik',
      text: 'Мелник',
      location: { lat: 41.5246053, lng: 23.3915096 },
      alt: 971.3232035111608
    }
  },
  {
    key: 'blagoevgrad',
    id: 'petrich',
    value: {
      id: 'petrich',
      text: 'Петрич',
      location: { lat: 41.39810809999999, lng: 23.2066849 },
      alt: 960.7128501328374
    }
  },
  {
    key: 'blagoevgrad',
    id: 'razlog',
    value: {
      id: 'razlog',
      text: 'Разлог',
      location: { lat: 41.8859984, lng: 23.4628413 },
      alt: 982.7645331512539
    }
  },
  {
    key: 'blagoevgrad',
    id: 'sandanski',
    value: {
      id: 'sandanski',
      text: 'Сандански',
      location: { lat: 41.5678434, lng: 23.2803538 },
      alt: 967.714101054995
    }
  },
  {
    key: 'blagoevgrad',
    id: 'simitli',
    value: {
      id: 'simitli',
      text: 'Симитли',
      location: { lat: 41.8896733, lng: 23.10602 },
      alt: 967.903629063266
    }
  },
  {
    key: 'blagoevgrad',
    id: 'yakoruda',
    value: {
      id: 'yakoruda',
      text: 'Якоруда',
      location: { lat: 42.0178132, lng: 23.6688363 },
      alt: 994.5127423147791
    }
  },
  {
    key: 'burgas',
    id: 'aheloj',
    value: {
      id: 'aheloj',
      text: 'Ахелой',
      location: { lat: 42.6460137, lng: 27.6493846 },
      alt: 1179.136034448169
    }
  },
  {
    key: 'burgas',
    id: 'ahtopol',
    value: {
      id: 'ahtopol',
      text: 'Ахтопол',
      location: { lat: 42.0993861, lng: 27.9407145 },
      alt: 1176.2869276453682
    }
  },
  {
    key: 'burgas',
    id: 'ajtos',
    value: {
      id: 'ajtos',
      text: 'Айтос',
      location: { lat: 42.7031175, lng: 27.250644 },
      alt: 1163.68745268267
    }
  },
  {
    key: 'burgas',
    id: 'bulgarovo',
    value: {
      id: 'bulgarovo',
      text: 'Българово',
      location: { lat: 42.6219466, lng: 27.3064912 },
      alt: 1163.85580975977
    }
  },
  {
    key: 'burgas',
    id: 'burgas',
    value: {
      id: 'burgas',
      text: 'Бургас',
      location: { lat: 42.50479259999999, lng: 27.4626361 },
      alt: 1167.2936516797727
    }
  },
  {
    key: 'burgas',
    id: 'carevo',
    value: {
      id: 'carevo',
      text: 'Царево',
      location: { lat: 42.1695527, lng: 27.8454151 },
      alt: 1174.2286995128256
    }
  },
  {
    key: 'burgas',
    id: 'chernomorec',
    value: {
      id: 'chernomorec',
      text: 'Черноморец',
      location: { lat: 42.4442625, lng: 27.6383198 },
      alt: 1173.0881006501477
    }
  },
  {
    key: 'burgas',
    id: 'kableshkovo',
    value: {
      id: 'kableshkovo',
      text: 'Каблешково',
      location: { lat: 42.6583824, lng: 27.5707096 },
      alt: 1176.1218731561512
    }
  },
  {
    key: 'burgas',
    id: 'kameno',
    value: {
      id: 'kameno',
      text: 'Камено',
      location: { lat: 42.5735447, lng: 27.2950398 },
      alt: 1162.046597013579
    }
  },
  {
    key: 'burgas',
    id: 'karnobat',
    value: {
      id: 'karnobat',
      text: 'Карнобат',
      location: { lat: 42.6511052, lng: 26.9803526 },
      alt: 1150.7418570756936
    }
  },
  {
    key: 'burgas',
    id: 'kiten',
    value: {
      id: 'kiten',
      text: 'Китен',
      location: { lat: 42.2342735, lng: 27.7702053 },
      alt: 1172.8544457913497
    }
  },
  {
    key: 'burgas',
    id: 'malko-turnovo',
    value: {
      id: 'malko-turnovo',
      text: 'Малко Търново',
      location: { lat: 41.9797938, lng: 27.5250475 },
      alt: 1155.4958183852057
    }
  },
  {
    key: 'burgas',
    id: 'nesebur',
    value: {
      id: 'nesebur',
      text: 'Несебър',
      location: { lat: 42.6601365, lng: 27.7205593 },
      alt: 1182.5628435943445
    }
  },
  {
    key: 'burgas',
    id: 'obzor',
    value: {
      id: 'obzor',
      text: 'Обзор',
      location: { lat: 42.8174622, lng: 27.8799533 },
      alt: 1193.7488465605154
    }
  },
  {
    key: 'burgas',
    id: 'pomorie',
    value: {
      id: 'pomorie',
      text: 'Поморие',
      location: { lat: 42.5680485, lng: 27.6155705 },
      alt: 1175.5409443991693
    }
  },
  {
    key: 'burgas',
    id: 'primorsko',
    value: {
      id: 'primorsko',
      text: 'Приморско',
      location: { lat: 42.2683746, lng: 27.753286 },
      alt: 1173.0862890289357
    }
  },
  {
    key: 'burgas',
    id: 'sozopol',
    value: {
      id: 'sozopol',
      text: 'Созопол',
      location: { lat: 42.4172628, lng: 27.6961748 },
      alt: 1174.7959250463375
    }
  },
  {
    key: 'burgas',
    id: 'sredec',
    value: {
      id: 'sredec',
      text: 'Средец',
      location: { lat: 42.3451878, lng: 27.1812505 },
      alt: 1150.995157061344
    }
  },
  {
    key: 'burgas',
    id: 'sungurlare',
    value: {
      id: 'sungurlare',
      text: 'Сунгурларе',
      location: { lat: 42.7631088, lng: 26.7734586 },
      alt: 1144.9163230640956
    }
  },
  {
    key: 'burgas',
    id: 'sveti-vlas',
    value: {
      id: 'sveti-vlas',
      text: 'Свети Влас',
      location: { lat: 42.71340319999999, lng: 27.7587542 },
      alt: 1185.670860474293
    }
  },
  {
    key: 'dobrich',
    id: 'balchik',
    value: {
      id: 'balchik',
      text: 'Балчик',
      location: { lat: 43.4269047, lng: 28.1617188 },
      alt: 1222.9762785157984
    }
  },
  {
    key: 'dobrich',
    id: 'dobrich',
    value: {
      id: 'dobrich',
      text: 'Добрич',
      location: { lat: 43.57259, lng: 27.8272606 },
      alt: 1212.505816946954
    }
  },
  {
    key: 'dobrich',
    id: 'general-toshevo',
    value: {
      id: 'general-toshevo',
      text: 'Генерал Тошево',
      location: { lat: 43.70167620000001, lng: 28.0396345 },
      alt: 1225.379027685349
    }
  },
  {
    key: 'dobrich',
    id: 'kavarna',
    value: {
      id: 'kavarna',
      text: 'Каварна',
      location: { lat: 43.43305609999999, lng: 28.3351756 },
      alt: 1230.6832714381508
    }
  },
  {
    key: 'dobrich',
    id: 'shabla',
    value: {
      id: 'shabla',
      text: 'Шабла',
      location: { lat: 43.5379436, lng: 28.5352333 },
      alt: 1242.3653780282418
    }
  },
  {
    key: 'dobrich',
    id: 'tervel',
    value: {
      id: 'tervel',
      text: 'Тервел',
      location: { lat: 43.7488391, lng: 27.4071834 },
      alt: 1199.032456750791
    }
  },
  {
    key: 'gabrovo',
    id: 'dryanovo',
    value: {
      id: 'dryanovo',
      text: 'Дряново',
      location: { lat: 42.9774839, lng: 25.4781665 },
      alt: 1094.9874905552695
    }
  },
  {
    key: 'gabrovo',
    id: 'gabrovo',
    value: {
      id: 'gabrovo',
      text: 'Габрово',
      location: { lat: 42.8742212, lng: 25.3186837 },
      alt: 1085.5188454466345
    }
  },
  {
    key: 'gabrovo',
    id: 'plachkovci',
    value: {
      id: 'plachkovci',
      text: 'Плачковци',
      location: { lat: 42.827923, lng: 25.4816844 },
      alt: 1091.3276173935012
    }
  },
  {
    key: 'gabrovo',
    id: 'sevlievo',
    value: {
      id: 'sevlievo',
      text: 'Севлиево',
      location: { lat: 43.0266904, lng: 25.1034006 },
      alt: 1080.1162456033742
    }
  },
  {
    key: 'gabrovo',
    id: 'tryavna',
    value: {
      id: 'tryavna',
      text: 'Трявна',
      location: { lat: 42.87665200000001, lng: 25.4988388 },
      alt: 1093.3048376316979
    }
  },
  {
    key: 'haskovo',
    id: 'dimitrovgrad',
    value: {
      id: 'dimitrovgrad',
      text: 'Димитровград',
      location: { lat: 42.0545053, lng: 25.5945249 },
      alt: 1076.365083058032
    }
  },
  {
    key: 'haskovo',
    id: 'harmanli',
    value: {
      id: 'harmanli',
      text: 'Харманли',
      location: { lat: 41.9304124, lng: 25.9025865 },
      alt: 1086.1061341716727
    }
  },
  {
    key: 'haskovo',
    id: 'haskovo',
    value: {
      id: 'haskovo',
      text: 'Хасково',
      location: { lat: 41.9344366, lng: 25.5554462 },
      alt: 1071.6532384586108
    }
  },
  {
    key: 'haskovo',
    id: 'ivajlovgrad',
    value: {
      id: 'ivajlovgrad',
      text: 'Ивайловград',
      location: { lat: 41.52669789999999, lng: 26.1242717 },
      alt: 1084.8547387434191
    }
  },
  {
    key: 'haskovo',
    id: 'lyubimec',
    value: {
      id: 'lyubimec',
      text: 'Любимец',
      location: { lat: 41.8473747, lng: 26.0855362 },
      alt: 1091.6112076118143
    }
  },
  {
    key: 'haskovo',
    id: 'madzharovo',
    value: {
      id: 'madzharovo',
      text: 'Маджарово',
      location: { lat: 41.6332599, lng: 25.8603494 },
      alt: 1076.650647675009
    }
  },
  {
    key: 'haskovo',
    id: 'merichleri',
    value: {
      id: 'merichleri',
      text: 'Меричлери',
      location: { lat: 42.1373946, lng: 25.4961024 },
      alt: 1074.3393275908072
    }
  },
  {
    key: 'haskovo',
    id: 'simeonovgrad',
    value: {
      id: 'simeonovgrad',
      text: 'Симеоновград',
      location: { lat: 42.0349858, lng: 25.8310015 },
      alt: 1085.8057812522786
    }
  },
  {
    key: 'haskovo',
    id: 'svilengrad',
    value: {
      id: 'svilengrad',
      text: 'Свиленград',
      location: { lat: 41.7654876, lng: 26.2019433 },
      alt: 1094.336937992053
    }
  },
  {
    key: 'haskovo',
    id: 'topolovgrad',
    value: {
      id: 'topolovgrad',
      text: 'Тополовград',
      location: { lat: 42.08510010000001, lng: 26.333087 },
      alt: 1108.230602337009
    }
  },
  {
    key: 'kurdzhali',
    id: 'ardino',
    value: {
      id: 'ardino',
      text: 'Ардино',
      location: { lat: 41.583389, lng: 25.1336814 },
      alt: 1045.1436506582645
    }
  },
  {
    key: 'kurdzhali',
    id: 'dzhebel',
    value: {
      id: 'dzhebel',
      text: 'Джебел',
      location: { lat: 41.496324, lng: 25.3042376 },
      alt: 1050.0328420225824
    }
  },
  {
    key: 'kurdzhali',
    id: 'krumovgrad',
    value: {
      id: 'krumovgrad',
      text: 'Крумовград',
      location: { lat: 41.471294, lng: 25.6553103 },
      alt: 1063.9589161125282
    }
  },
  {
    key: 'kurdzhali',
    id: 'kurdzhali',
    value: {
      id: 'kurdzhali',
      text: 'Кърджали',
      location: { lat: 41.6338439, lng: 25.3777119 },
      alt: 1056.5716957837726
    }
  },
  {
    key: 'kurdzhali',
    id: 'momchilgrad',
    value: {
      id: 'momchilgrad',
      text: 'Момчилград',
      location: { lat: 41.5272762, lng: 25.4093944 },
      alt: 1055.1829393235334
    }
  },
  {
    key: 'kyustendil',
    id: 'boboshevo',
    value: {
      id: 'boboshevo',
      text: 'Бобошево',
      location: { lat: 42.1509661, lng: 22.9995007 },
      alt: 969.4511743226261
    }
  },
  {
    key: 'kyustendil',
    id: 'bobov-dol',
    value: {
      id: 'bobov-dol',
      text: 'Бобов дол',
      location: { lat: 42.3663864, lng: 23.0051872 },
      alt: 974.6466501195342
    }
  },
  {
    key: 'kyustendil',
    id: 'dupnica',
    value: {
      id: 'dupnica',
      text: 'Дупница',
      location: { lat: 42.2613275, lng: 23.1124424 },
      alt: 976.762497591286
    }
  },
  {
    key: 'kyustendil',
    id: 'kocherinovo',
    value: {
      id: 'kocherinovo',
      text: 'Кочериново',
      location: { lat: 42.0845882, lng: 23.0557885 },
      alt: 970.2933646487957
    }
  },
  {
    key: 'kyustendil',
    id: 'kyustendil',
    value: {
      id: 'kyustendil',
      text: 'Кюстендил',
      location: { lat: 42.2868817, lng: 22.6939308 },
      alt: 959.6555670475864
    }
  },
  {
    key: 'kyustendil',
    id: 'rila',
    value: {
      id: 'rila',
      text: 'Рила',
      location: { lat: 42.133322, lng: 23.5499485 },
      alt: 992.237563233917
    }
  },
  {
    key: 'kyustendil',
    id: 'sapareva-banya',
    value: {
      id: 'sapareva-banya',
      text: 'Сапарева баня',
      location: { lat: 42.2899734, lng: 23.2686255 },
      alt: 984.0295534495617
    }
  },
  {
    key: 'lovech',
    id: 'aprilci',
    value: {
      id: 'aprilci',
      text: 'Априлци',
      location: { lat: 42.833333, lng: 24.916667 },
      alt: 1067.263894861111
    }
  },
  {
    key: 'lovech',
    id: 'letnica',
    value: {
      id: 'letnica',
      text: 'Летница',
      location: { lat: 42.433333, lng: 25.65 },
      alt: 1088.41499145
    }
  },
  {
    key: 'lovech',
    id: 'lovech',
    value: {
      id: 'lovech',
      text: 'Ловеч',
      location: { lat: 43.1369534, lng: 24.7141906 },
      alt: 1066.094888230918
    }
  },
  {
    key: 'lovech',
    id: 'lukovit',
    value: {
      id: 'lukovit',
      text: 'Луковит',
      location: { lat: 43.2078347, lng: 24.1629941 },
      alt: 1044.0306549298753
    }
  },
  {
    key: 'lovech',
    id: 'teteven',
    value: {
      id: 'teteven',
      text: 'Тетевен',
      location: { lat: 42.9186875, lng: 24.2588927 },
      alt: 1041.1598348873313
    }
  },
  {
    key: 'lovech',
    id: 'troyan',
    value: {
      id: 'troyan',
      text: 'Троян',
      location: { lat: 42.8903751, lng: 24.7129702 },
      alt: 1059.948561713122
    }
  },
  {
    key: 'lovech',
    id: 'ugurchin',
    value: {
      id: 'ugurchin',
      text: 'Угърчин',
      location: { lat: 43.1062248, lng: 24.4126891 },
      alt: 1052.3388643171097
    }
  },
  {
    key: 'lovech',
    id: 'yablanica',
    value: {
      id: 'yablanica',
      text: 'Ябланица',
      location: { lat: 43.0323483, lng: 24.0991868 },
      alt: 1037.0446001243624
    }
  },
  {
    key: 'montana',
    id: 'berkovica',
    value: {
      id: 'berkovica',
      text: 'Берковица',
      location: { lat: 43.2370452, lng: 23.1251092 },
      alt: 999.8613917353358
    }
  },
  {
    key: 'montana',
    id: 'bojchinovci',
    value: {
      id: 'bojchinovci',
      text: 'Бойчиновци',
      location: { lat: 43.4715011, lng: 23.3326981 },
      alt: 1014.3074111201179
    }
  },
  {
    key: 'montana',
    id: 'brusarci',
    value: {
      id: 'brusarci',
      text: 'Брусарци',
      location: { lat: 43.6627485, lng: 23.0665766 },
      alt: 1007.1501328417851
    }
  },
  {
    key: 'montana',
    id: 'chiprovci',
    value: {
      id: 'chiprovci',
      text: 'Чипровци',
      location: { lat: 43.3842632, lng: 22.8849367 },
      alt: 992.8461171081394
    }
  },
  {
    key: 'montana',
    id: 'lom',
    value: {
      id: 'lom',
      text: 'Лом',
      location: { lat: 43.8178375, lng: 23.2383326 },
      alt: 1018.2534816377525
    }
  },
  {
    key: 'montana',
    id: 'montana',
    value: {
      id: 'montana',
      text: 'Монтана',
      location: { lat: 43.4085161, lng: 23.2257292 },
      alt: 1008.1944399124401
    }
  },
  {
    key: 'montana',
    id: 'vulchedrum',
    value: {
      id: 'vulchedrum',
      text: 'Вълчедръм',
      location: { lat: 43.6949739, lng: 23.4427005 },
      alt: 1024.328186493017
    }
  },
  {
    key: 'montana',
    id: 'vurshec',
    value: {
      id: 'vurshec',
      text: 'Вършец',
      location: { lat: 43.1938764, lng: 23.2865813 },
      alt: 1005.8377144507514
    }
  },
  {
    key: 'pazardzhik',
    id: 'batak',
    value: {
      id: 'batak',
      text: 'Батак',
      location: { lat: 41.9441773, lng: 24.2189688 },
      alt: 1015.8447213703682
    }
  },
  {
    key: 'pazardzhik',
    id: 'belovo',
    value: {
      id: 'belovo',
      text: 'Белово',
      location: { lat: 42.216667, lng: 24 },
      alt: 1013.200008
    }
  },
  {
    key: 'pazardzhik',
    id: 'bracigovo',
    value: {
      id: 'bracigovo',
      text: 'Брацигово',
      location: { lat: 42.0249443, lng: 24.3708245 },
      alt: 1024.1825421575754
    }
  },
  {
    key: 'pazardzhik',
    id: 'kostandovo',
    value: {
      id: 'kostandovo',
      text: 'Костандово',
      location: { lat: 42.0232458, lng: 24.112477 },
      alt: 1013.2845478178465
    }
  },
  {
    key: 'pazardzhik',
    id: 'panagyurishe',
    value: {
      id: 'panagyurishe',
      text: 'Панагюрище',
      location: { lat: 42.5007907, lng: 24.1859626 },
      alt: 1027.9225343406279
    }
  },
  {
    key: 'pazardzhik',
    id: 'pazardzhik',
    value: {
      id: 'pazardzhik',
      text: 'Пазарджик',
      location: { lat: 42.1927654, lng: 24.3335662 },
      alt: 1026.7004500219693
    }
  },
  {
    key: 'pazardzhik',
    id: 'peshera',
    value: {
      id: 'peshera',
      text: 'Пещера',
      location: { lat: 42.0298857, lng: 24.2987265 },
      alt: 1021.2726974505612
    }
  },
  {
    key: 'pazardzhik',
    id: 'rakitovo',
    value: {
      id: 'rakitovo',
      text: 'Ракитово',
      location: { lat: 41.9894875, lng: 24.0874836 },
      alt: 1011.421091528655
    }
  },
  {
    key: 'pazardzhik',
    id: 'septemvri',
    value: {
      id: 'septemvri',
      text: 'Септември',
      location: { lat: 42.2166069, lng: 24.124969 },
      alt: 1018.4743327476862
    }
  },
  {
    key: 'pazardzhik',
    id: 'strelcha',
    value: {
      id: 'strelcha',
      text: 'Стрелча',
      location: { lat: 42.5060515, lng: 24.3209906 },
      alt: 1033.7892789746159
    }
  },
  {
    key: 'pazardzhik',
    id: 'surnica',
    value: {
      id: 'surnica',
      text: 'Сърница',
      location: { lat: 41.74081, lng: 24.0200146 },
      alt: 1002.614865615826
    }
  },
  {
    key: 'pazardzhik',
    id: 'velingrad',
    value: {
      id: 'velingrad',
      text: 'Велинград',
      location: { lat: 42.0275439, lng: 23.9915523 },
      alt: 1008.3060175173958
    }
  },
  {
    key: 'pazardzhik',
    id: 'vetren',
    value: {
      id: 'vetren',
      text: 'Ветрен',
      location: { lat: 42.2788788, lng: 24.0479305 },
      alt: 1016.7195390003234
    }
  },
  {
    key: 'pernik',
    id: 'batanovci',
    value: {
      id: 'batanovci',
      text: 'Батановци',
      location: { lat: 42.6020275, lng: 22.9551034 },
      alt: 977.9339463121435
    }
  },
  {
    key: 'pernik',
    id: 'breznik',
    value: {
      id: 'breznik',
      text: 'Брезник',
      location: { lat: 42.7412596, lng: 22.9080799 },
      alt: 979.120189943442
    }
  },
  {
    key: 'pernik',
    id: 'pernik',
    value: {
      id: 'pernik',
      text: 'Перник',
      location: { lat: 42.6051862, lng: 23.0378368 },
      alt: 981.5313265092121
    }
  },
  {
    key: 'pernik',
    id: 'radomir',
    value: {
      id: 'radomir',
      text: 'Радомир',
      location: { lat: 42.5442629, lng: 22.9615802 },
      alt: 976.8835046282346
    }
  },
  {
    key: 'pernik',
    id: 'trun',
    value: {
      id: 'trun',
      text: 'Трън',
      location: { lat: 42.8343426, lng: 22.6503696 },
      alt: 970.213691463025
    }
  },
  {
    key: 'pernik',
    id: 'zemen',
    value: {
      id: 'zemen',
      text: 'Земен',
      location: { lat: 42.4779376, lng: 22.7471341 },
      alt: 966.2513428786322
    }
  },
  {
    key: 'pleven',
    id: 'belene',
    value: {
      id: 'belene',
      text: 'Белене',
      location: { lat: 43.6445087, lng: 25.1246359 },
      alt: 1096.5523901218824
    }
  },
  {
    key: 'pleven',
    id: 'cherven-bryag',
    value: {
      id: 'cherven-bryag',
      text: 'Червен бряг',
      location: { lat: 43.28045119999999, lng: 24.0828513 },
      alt: 1042.3166704465064
    }
  },
  {
    key: 'pleven',
    id: 'dolna-mitropoliya',
    value: {
      id: 'dolna-mitropoliya',
      text: 'Долна Митрополия',
      location: { lat: 43.4680701, lng: 24.5193991 },
      alt: 1065.8109588886769
    }
  },
  {
    key: 'pleven',
    id: 'dolni-dubnik',
    value: {
      id: 'dolni-dubnik',
      text: 'Долни Дъбник',
      location: { lat: 43.408835, lng: 24.442316 },
      alt: 1061.0124622618603
    }
  },
  {
    key: 'pleven',
    id: 'gulyanci',
    value: {
      id: 'gulyanci',
      text: 'Гулянци',
      location: { lat: 43.643574, lng: 24.6955006 },
      alt: 1077.7999079031445
    }
  },
  {
    key: 'pleven',
    id: 'iskur',
    value: {
      id: 'iskur',
      text: 'Искър',
      location: { lat: 43.1745167, lng: 23.8994394 },
      alt: 1031.846745495938
    }
  },
  {
    key: 'pleven',
    id: 'knezha',
    value: {
      id: 'knezha',
      text: 'Кнежа',
      location: { lat: 43.4927972, lng: 24.0807647 },
      alt: 1047.3398155180187
    }
  },
  {
    key: 'pleven',
    id: 'kojnare',
    value: {
      id: 'kojnare',
      text: 'Койнаре',
      location: { lat: 43.3615249, lng: 24.1502631 },
      alt: 1047.192234752201
    }
  },
  {
    key: 'pleven',
    id: 'levski',
    value: {
      id: 'levski',
      text: 'Левски',
      location: { lat: 43.361454, lng: 25.1430955 },
      alt: 1090.241178940857
    }
  },
  {
    key: 'pleven',
    id: 'nikopol',
    value: {
      id: 'nikopol',
      text: 'Никопол',
      location: { lat: 43.700859, lng: 24.8946628 },
      alt: 1087.9181488753452
    }
  },
  {
    key: 'pleven',
    id: 'pleven',
    value: {
      id: 'pleven',
      text: 'Плевен',
      location: { lat: 43.4170423, lng: 24.6066847 },
      alt: 1068.3494704826628
    }
  },
  {
    key: 'pleven',
    id: 'pordim',
    value: {
      id: 'pordim',
      text: 'Пордим',
      location: { lat: 43.3779829, lng: 24.8476432 },
      alt: 1077.8406418349014
    }
  },
  {
    key: 'pleven',
    id: 'slavyanovo',
    value: {
      id: 'slavyanovo',
      text: 'Славяново',
      location: { lat: 43.4650355, lng: 24.8715019 },
      alt: 1081.0407130218173
    }
  },
  {
    key: 'pleven',
    id: 'trustenik',
    value: {
      id: 'trustenik',
      text: 'Тръстеник',
      location: { lat: 43.52097200000001, lng: 24.4721915 },
      alt: 1065.0535610501381
    }
  },
  {
    key: 'plovdiv',
    id: 'asenovgrad',
    value: {
      id: 'asenovgrad',
      text: 'Асеновград',
      location: { lat: 42.0133722, lng: 24.8784393 },
      alt: 1045.2271300660075
    }
  },
  {
    key: 'plovdiv',
    id: 'banya',
    value: {
      id: 'banya',
      text: 'Баня',
      location: { lat: 42.5534647, lng: 24.8318455 },
      alt: 1056.6810609201038
    }
  },
  {
    key: 'plovdiv',
    id: 'brezovo',
    value: {
      id: 'brezovo',
      text: 'Брезово',
      location: { lat: 42.3467171, lng: 25.076002 },
      alt: 1061.8863626930342
    }
  },
  {
    key: 'plovdiv',
    id: 'hisarya',
    value: {
      id: 'hisarya',
      text: 'Хисаря',
      location: { lat: 42.5043656, lng: 24.7062087 },
      alt: 1050.1217271747007
    }
  },
  {
    key: 'plovdiv',
    id: 'kalofer',
    value: {
      id: 'kalofer',
      text: 'Калофер',
      location: { lat: 42.61302620000001, lng: 24.9674802 },
      alt: 1063.9398879105815
    }
  },
  {
    key: 'plovdiv',
    id: 'karlovo',
    value: {
      id: 'karlovo',
      text: 'Карлово',
      location: { lat: 42.641321, lng: 24.8059394 },
      alt: 1057.7580246619473
    }
  },
  {
    key: 'plovdiv',
    id: 'klisura',
    value: {
      id: 'klisura',
      text: 'Клисура',
      location: { lat: 42.6930655, lng: 24.4496426 },
      alt: 1043.8301929733905
    }
  },
  {
    key: 'plovdiv',
    id: 'krichim',
    value: {
      id: 'krichim',
      text: 'Кричим',
      location: { lat: 42.0426268, lng: 24.4669673 },
      alt: 1028.6555751217036
    }
  },
  {
    key: 'plovdiv',
    id: 'kuklen',
    value: {
      id: 'kuklen',
      text: 'Куклен',
      location: { lat: 42.0343423, lng: 24.7873041 },
      alt: 1041.9180252335934
    }
  },
  {
    key: 'plovdiv',
    id: 'luki',
    value: {
      id: 'luki',
      text: 'Лъки',
      location: { lat: 41.8329932, lng: 24.8314256 },
      alt: 1038.7728582711059
    }
  },
  {
    key: 'plovdiv',
    id: 'perushica',
    value: {
      id: 'perushica',
      text: 'Перущица',
      location: { lat: 42.057517, lng: 24.5479535 },
      alt: 1032.4259716414595
    }
  },
  {
    key: 'plovdiv',
    id: 'plovdiv',
    value: {
      id: 'plovdiv',
      text: 'Пловдив',
      location: { lat: 42.1354079, lng: 24.7452904 },
      alt: 1042.652904607954
    }
  },
  {
    key: 'plovdiv',
    id: 'purvomaj',
    value: {
      id: 'purvomaj',
      text: 'Първомай',
      location: { lat: 42.0969057, lng: 25.2204628 },
      alt: 1061.703444201958
    }
  },
  {
    key: 'plovdiv',
    id: 'rakovski',
    value: {
      id: 'rakovski',
      text: 'Раковски',
      location: { lat: 42.27158439999999, lng: 24.9431037 },
      alt: 1054.384513252502
    }
  },
  {
    key: 'plovdiv',
    id: 'sadovo',
    value: {
      id: 'sadovo',
      text: 'Садово',
      location: { lat: 42.1309052, lng: 24.9394681 },
      alt: 1050.722366259524
    }
  },
  {
    key: 'plovdiv',
    id: 'sopot',
    value: {
      id: 'sopot',
      text: 'Сопот',
      location: { lat: 42.6538885, lng: 24.754802 },
      alt: 1055.8885643475771
    }
  },
  {
    key: 'plovdiv',
    id: 'stambolijski',
    value: {
      id: 'stambolijski',
      text: 'Стамболийски',
      location: { lat: 42.1333129, lng: 24.5376727 },
      alt: 1033.853441706888
    }
  },
  {
    key: 'plovdiv',
    id: 'suedinenie',
    value: {
      id: 'suedinenie',
      text: 'Съединение',
      location: { lat: 42.274693, lng: 24.5465554 },
      alt: 1037.6980937424921
    }
  },
  {
    key: 'razgrad',
    id: 'car-kaloyan',
    value: {
      id: 'car-kaloyan',
      text: 'Цар Калоян',
      location: { lat: 43.60865159999999, lng: 26.2369348 },
      alt: 1144.1573487451153
    }
  },
  {
    key: 'razgrad',
    id: 'isperih',
    value: {
      id: 'isperih',
      text: 'Исперих',
      location: { lat: 43.7162095, lng: 26.8307163 },
      alt: 1172.9372148058646
    }
  },
  {
    key: 'razgrad',
    id: 'kubrat',
    value: {
      id: 'kubrat',
      text: 'Кубрат',
      location: { lat: 43.7961375, lng: 26.5005343 },
      alt: 1160.6210440262664
    }
  },
  {
    key: 'razgrad',
    id: 'loznica',
    value: {
      id: 'loznica',
      text: 'Лозница',
      location: { lat: 43.3718286, lng: 26.6080322 },
      alt: 1154.039011961681
    }
  },
  {
    key: 'razgrad',
    id: 'razgrad',
    value: {
      id: 'razgrad',
      text: 'Разград',
      location: { lat: 43.53367189999999, lng: 26.5411165 },
      alt: 1155.432257570676
    }
  },
  {
    key: 'razgrad',
    id: 'zavet',
    value: {
      id: 'zavet',
      text: 'Завет',
      location: { lat: 42.8348661, lng: 27.0653216 },
      alt: 1159.3394266894377
    }
  },
  {
    key: 'ruse',
    id: 'borovo',
    value: {
      id: 'borovo',
      text: 'Борово',
      location: { lat: 43.4842145, lng: 25.8055786 },
      alt: 1122.1353151390097
    }
  },
  {
    key: 'ruse',
    id: 'byala',
    value: {
      id: 'byala',
      text: 'Бяла',
      location: { lat: 42.87990080000001, lng: 27.8811178 },
      alt: 1195.5395654571143
    }
  },
  {
    key: 'ruse',
    id: 'dve-mogili',
    value: {
      id: 'dve-mogili',
      text: 'Две могили',
      location: { lat: 43.5917533, lng: 25.8706558 },
      alt: 1127.7472453428143
    }
  },
  {
    key: 'ruse',
    id: 'glodzhevo',
    value: {
      id: 'glodzhevo',
      text: 'Глоджево',
      location: { lat: 43.7330332, lng: 26.3882503 },
      alt: 1154.03822645981
    }
  },
  {
    key: 'ruse',
    id: 'marten',
    value: {
      id: 'marten',
      text: 'Мартен',
      location: { lat: 43.90462, lng: 26.0742806 },
      alt: 1144.781381516372
    }
  },
  {
    key: 'ruse',
    id: 'ruse',
    value: {
      id: 'ruse',
      text: 'Русе',
      location: { lat: 43.83557130000001, lng: 25.9656554 },
      alt: 1138.2193386379304
    }
  },
  {
    key: 'ruse',
    id: 'senovo',
    value: {
      id: 'senovo',
      text: 'Сеново',
      location: { lat: 43.649578, lng: 26.3635629 },
      alt: 1150.7583951614563
    }
  },
  {
    key: 'ruse',
    id: 'slivo-pole',
    value: {
      id: 'slivo-pole',
      text: 'Сливо поле',
      location: { lat: 43.943756, lng: 26.2045157 },
      alt: 1151.5248440189694
    }
  },
  {
    key: 'ruse',
    id: 'vetovo',
    value: {
      id: 'vetovo',
      text: 'Ветово',
      location: { lat: 43.7032915, lng: 26.2638552 },
      alt: 1147.8169197193906
    }
  },
  {
    key: 'shumen',
    id: 'kaolinovo',
    value: {
      id: 'kaolinovo',
      text: 'Каолиново',
      location: { lat: 43.6165639, lng: 27.091526 },
      alt: 1181.6392749275115
    }
  },
  {
    key: 'shumen',
    id: 'kaspichan',
    value: {
      id: 'kaspichan',
      text: 'Каспичан',
      location: { lat: 43.3178261, lng: 27.1541211 },
      alt: 1176.2574957081406
    }
  },
  {
    key: 'shumen',
    id: 'novi-pazar',
    value: {
      id: 'novi-pazar',
      text: 'Нови пазар',
      location: { lat: 43.3472628, lng: 27.1970594 },
      alt: 1178.9180811990104
    }
  },
  {
    key: 'shumen',
    id: 'pliska',
    value: {
      id: 'pliska',
      text: 'Плиска',
      location: { lat: 43.3625303, lng: 27.1255402 },
      alt: 1176.232058826368
    }
  },
  {
    key: 'shumen',
    id: 'shumen',
    value: {
      id: 'shumen',
      text: 'Шумен',
      location: { lat: 43.2712398, lng: 26.9361286 },
      alt: 1165.5596799342381
    }
  },
  {
    key: 'shumen',
    id: 'smyadovo',
    value: {
      id: 'smyadovo',
      text: 'Смядово',
      location: { lat: 43.0634259, lng: 27.013334 },
      alt: 1163.2867070209506
    }
  },
  {
    key: 'shumen',
    id: 'veliki-preslav',
    value: {
      id: 'veliki-preslav',
      text: 'Велики Преслав',
      location: { lat: 43.1645409, lng: 26.8179674 },
      alt: 1157.5852506921667
    }
  },
  {
    key: 'shumen',
    id: 'vurbica',
    value: {
      id: 'vurbica',
      text: 'Върбица',
      location: { lat: 42.99817609999999, lng: 26.6726912 },
      alt: 1146.87707327852
    }
  },
  {
    key: 'silistra',
    id: 'alfatar',
    value: {
      id: 'alfatar',
      text: 'Алфатар',
      location: { lat: 43.9458522, lng: 27.2865748 },
      alt: 1199.1317832050445
    }
  },
  {
    key: 'silistra',
    id: 'dulovo',
    value: {
      id: 'dulovo',
      text: 'Дулово',
      location: { lat: 43.82223949999999, lng: 27.139699 },
      alt: 1189.3223895359101
    }
  },
  {
    key: 'silistra',
    id: 'glavinica',
    value: {
      id: 'glavinica',
      text: 'Главиница',
      location: { lat: 43.9111814, lng: 26.8343379 },
      alt: 1178.327479275795
    }
  },
  {
    key: 'silistra',
    id: 'silistra',
    value: {
      id: 'silistra',
      text: 'Силистра',
      location: { lat: 44.1147271, lng: 27.2671901 },
      alt: 1202.884650045322
    }
  },
  {
    key: 'silistra',
    id: 'tutrakan',
    value: {
      id: 'tutrakan',
      text: 'Тутракан',
      location: { lat: 44.0386035, lng: 26.61951 },
      alt: 1172.2860462542849
    }
  },
  {
    key: 'sliven',
    id: 'kermen',
    value: {
      id: 'kermen',
      text: 'Кермен',
      location: { lat: 42.5062334, lng: 26.2641687 },
      alt: 1116.3908848191745
    }
  },
  {
    key: 'sliven',
    id: 'kotel',
    value: {
      id: 'kotel',
      text: 'Котел',
      location: { lat: 42.8867502, lng: 26.449686 },
      alt: 1134.3410763504373
    }
  },
  {
    key: 'sliven',
    id: 'nova-zagora',
    value: {
      id: 'nova-zagora',
      text: 'Нова Загора',
      location: { lat: 42.4936347, lng: 26.0085439 },
      alt: 1105.1975635655133
    }
  },
  {
    key: 'sliven',
    id: 'shivachevo',
    value: {
      id: 'shivachevo',
      text: 'Шивачево',
      location: { lat: 42.6863368, lng: 26.0305741 },
      alt: 1111.149853129957
    }
  },
  {
    key: 'sliven',
    id: 'sliven',
    value: {
      id: 'sliven',
      text: 'Сливен',
      location: { lat: 42.6816536, lng: 26.3228685 },
      alt: 1123.5035550753514
    }
  },
  {
    key: 'sliven',
    id: 'tvurdica',
    value: {
      id: 'tvurdica',
      text: 'Твърдица',
      location: { lat: 42.7015624, lng: 25.8960346 },
      alt: 1105.801137384459
    }
  },
  {
    key: 'smolyan',
    id: 'chepelare',
    value: {
      id: 'chepelare',
      text: 'Чепеларе',
      location: { lat: 41.72476229999999, lng: 24.6856207 },
      alt: 1030.0016559354594
    }
  },
  {
    key: 'smolyan',
    id: 'devin',
    value: {
      id: 'devin',
      text: 'Девин',
      location: { lat: 41.7429109, lng: 24.3915387 },
      alt: 1018.1738266680019
    }
  },
  {
    key: 'smolyan',
    id: 'dospat',
    value: {
      id: 'dospat',
      text: 'Доспат',
      location: { lat: 41.645973, lng: 24.1595237 },
      alt: 1006.1468717030601
    }
  },
  {
    key: 'smolyan',
    id: 'madan',
    value: {
      id: 'madan',
      text: 'Мадан',
      location: { lat: 41.4985802, lng: 24.9399327 },
      alt: 1034.9717973335526
    }
  },
  {
    key: 'smolyan',
    id: 'nedelino',
    value: {
      id: 'nedelino',
      text: 'Неделино',
      location: { lat: 41.4563919, lng: 25.0787983 },
      alt: 1039.6764907058537
    }
  },
  {
    key: 'smolyan',
    id: 'rudozem',
    value: {
      id: 'rudozem',
      text: 'Рудозем',
      location: { lat: 41.4870546, lng: 24.847786 },
      alt: 1030.8614544711156
    }
  },
  {
    key: 'smolyan',
    id: 'smolyan',
    value: {
      id: 'smolyan',
      text: 'Смолян',
      location: { lat: 41.5774233, lng: 24.7011138 },
      alt: 1027.0086644440717
    }
  },
  {
    key: 'smolyan',
    id: 'zlatograd',
    value: {
      id: 'zlatograd',
      text: 'Златоград',
      location: { lat: 41.3798446, lng: 25.096521 },
      alt: 1038.4901389806366
    }
  },
  {
    key: 'sofiya',
    id: 'bankya',
    value: {
      id: 'bankya',
      text: 'Банкя',
      location: { lat: 42.7074024, lng: 23.1469675 },
      alt: 988.5468553622219
    }
  },
  {
    key: 'sofiya',
    id: 'botevgrad',
    value: {
      id: 'botevgrad',
      text: 'Ботевград',
      location: { lat: 42.9076508, lng: 23.7933663 },
      alt: 1020.917452556888
    }
  },
  {
    key: 'sofiya',
    id: 'bozhurishe',
    value: {
      id: 'bozhurishe',
      text: 'Божурище',
      location: { lat: 42.7634974, lng: 23.2020027 },
      alt: 992.198782136243
    }
  },
  {
    key: 'sofiya',
    id: 'buhovo',
    value: {
      id: 'buhovo',
      text: 'Бухово',
      location: { lat: 42.7647225, lng: 23.5661457 },
      alt: 1007.7996812550682
    }
  },
  {
    key: 'sofiya',
    id: 'dolna-banya',
    value: {
      id: 'dolna-banya',
      text: 'Долна баня',
      location: { lat: 42.3106792, lng: 23.7647948 },
      alt: 1005.5046090366283
    }
  },
  {
    key: 'sofiya',
    id: 'dragoman',
    value: {
      id: 'dragoman',
      text: 'Драгоман',
      location: { lat: 42.921675, lng: 22.929844 },
      alt: 984.1873119687
    }
  },
  {
    key: 'sofiya',
    id: 'elin-pelin',
    value: {
      id: 'elin-pelin',
      text: 'Елин Пелин',
      location: { lat: 42.6690733, lng: 23.6013116 },
      alt: 1007.0460946365403
    }
  },
  {
    key: 'sofiya',
    id: 'etropole',
    value: {
      id: 'etropole',
      text: 'Етрополе',
      location: { lat: 42.8346414, lng: 23.9986631 },
      alt: 1027.9741279679124
    }
  },
  {
    key: 'sofiya',
    id: 'godech',
    value: {
      id: 'godech',
      text: 'Годеч',
      location: { lat: 43.0111019, lng: 23.0472316 },
      alt: 991.2868268605
    }
  },
  {
    key: 'sofiya',
    id: 'ihtiman',
    value: {
      id: 'ihtiman',
      text: 'Ихтиман',
      location: { lat: 42.4382418, lng: 23.8161718 },
      alt: 1010.7164575987412
    }
  },
  {
    key: 'sofiya',
    id: 'koprivshica',
    value: {
      id: 'koprivshica',
      text: 'Копривщица',
      location: { lat: 42.6361225, lng: 24.3602919 },
      alt: 1038.6283895841577
    }
  },
  {
    key: 'sofiya',
    id: 'kostenec',
    value: {
      id: 'kostenec',
      text: 'Костенец',
      location: { lat: 42.3073037, lng: 23.8577293 },
      alt: 1009.3561990874883
    }
  },
  {
    key: 'sofiya',
    id: 'kostinbrod',
    value: {
      id: 'kostinbrod',
      text: 'Костинброд',
      location: { lat: 42.81301759999999, lng: 23.2154337 },
      alt: 993.9227715897327
    }
  },
  {
    key: 'sofiya',
    id: 'momin-prohod',
    value: {
      id: 'momin-prohod',
      text: 'Момин проход',
      location: { lat: 42.3303921, lng: 23.8710358 },
      alt: 1010.4703052471372
    }
  },
  {
    key: 'sofiya',
    id: 'novi-iskur',
    value: {
      id: 'novi-iskur',
      text: 'Нови Искър',
      location: { lat: 42.8207849, lng: 23.3637763 },
      alt: 1000.4552393940179
    }
  },
  {
    key: 'sofiya',
    id: 'pirdop',
    value: {
      id: 'pirdop',
      text: 'Пирдоп',
      location: { lat: 42.7033735, lng: 24.177048 },
      alt: 1032.441510871428
    }
  },
  {
    key: 'sofiya',
    id: 'pravec',
    value: {
      id: 'pravec',
      text: 'Правец',
      location: { lat: 42.8942503, lng: 23.9188434 },
      alt: 1025.980855686103
    }
  },
  {
    key: 'sofiya',
    id: 'samokov',
    value: {
      id: 'samokov',
      text: 'Самоков',
      location: { lat: 42.3369976, lng: 23.5527975 },
      alt: 997.154731230786
    }
  },
  {
    key: 'sofiya',
    id: 'slivnica',
    value: {
      id: 'slivnica',
      text: 'Сливница',
      location: { lat: 42.8519742, lng: 23.0378716 },
      alt: 987.2182794261126
    }
  },
  {
    key: 'sofiya',
    id: 'sofiya',
    value: {
      id: 'sofiya',
      text: 'София',
      location: { lat: 42.6977082, lng: 23.3218675 },
      alt: 995.7902931940636
    }
  },
  {
    key: 'sofiya',
    id: 'svoge',
    value: {
      id: 'svoge',
      text: 'Своге',
      location: { lat: 42.962082, lng: 23.3439215 },
      alt: 1002.9034696845631
    }
  },
  {
    key: 'sofiya',
    id: 'zlatica',
    value: {
      id: 'zlatica',
      text: 'Златица',
      location: { lat: 42.7147833, lng: 24.1390477 },
      alt: 1031.0941915738633
    }
  },
  {
    key: 'stara-zagora',
    id: 'chirpan',
    value: {
      id: 'chirpan',
      text: 'Чирпан',
      location: { lat: 42.2020702, lng: 25.3248541 },
      alt: 1068.761270532958
    }
  },
  {
    key: 'stara-zagora',
    id: 'gulubovo',
    value: {
      id: 'gulubovo',
      text: 'Гълъбово',
      location: { lat: 42.1357845, lng: 25.8651308 },
      alt: 1089.8475774531125
    }
  },
  {
    key: 'stara-zagora',
    id: 'gurkovo',
    value: {
      id: 'gurkovo',
      text: 'Гурково',
      location: { lat: 42.6572754, lng: 25.7953904 },
      alt: 1100.3610723433162
    }
  },
  {
    key: 'stara-zagora',
    id: 'kazanluk',
    value: {
      id: 'kazanluk',
      text: 'Казанлък',
      location: { lat: 42.6194408, lng: 25.3929575 },
      alt: 1082.233648908166
    }
  },
  {
    key: 'stara-zagora',
    id: 'krun',
    value: {
      id: 'krun',
      text: 'Крън',
      location: { lat: 42.6657758, lng: 25.373802 },
      alt: 1082.5929473255917
    }
  },
  {
    key: 'stara-zagora',
    id: 'muglizh',
    value: {
      id: 'muglizh',
      text: 'Мъглиж',
      location: { lat: 42.6067702, lng: 25.5454425 },
      alt: 1088.4087982548135
    }
  },
  {
    key: 'stara-zagora',
    id: 'nikolaevo',
    value: {
      id: 'nikolaevo',
      text: 'Николаево',
      location: { lat: 42.6334045, lng: 25.7859264 },
      alt: 1099.3418306184287
    }
  },
  {
    key: 'stara-zagora',
    id: 'pavel-banya',
    value: {
      id: 'pavel-banya',
      text: 'Павел баня',
      location: { lat: 42.5953065, lng: 25.2061654 },
      alt: 1073.6643409026951
    }
  },
  {
    key: 'stara-zagora',
    id: 'radnevo',
    value: {
      id: 'radnevo',
      text: 'Раднево',
      location: { lat: 42.2922585, lng: 25.9366201 },
      alt: 1096.918241885496
    }
  },
  {
    key: 'stara-zagora',
    id: 'shipka',
    value: {
      id: 'shipka',
      text: 'Шипка',
      location: { lat: 42.74809219999999, lng: 25.3215337 },
      alt: 1082.447257253007
    }
  },
  {
    key: 'stara-zagora',
    id: 'stara-zagora',
    value: {
      id: 'stara-zagora',
      text: 'Стара Загора',
      location: { lat: 42.4257769, lng: 25.6344644 },
      alt: 1087.5620675853925
    }
  },
  {
    key: 'turgovishe',
    id: 'antonovo',
    value: {
      id: 'antonovo',
      text: 'Антоново',
      location: { lat: 43.1492363, lng: 26.1606045 },
      alt: 1128.8101053213434
    }
  },
  {
    key: 'turgovishe',
    id: 'omurtag',
    value: {
      id: 'omurtag',
      text: 'Омуртаг',
      location: { lat: 43.1082798, lng: 26.417685 },
      alt: 1138.8209566482628
    }
  },
  {
    key: 'turgovishe',
    id: 'opaka',
    value: {
      id: 'opaka',
      text: 'Опака',
      location: { lat: 43.4469709, lng: 26.1737448 },
      alt: 1137.1699286696262
    }
  },
  {
    key: 'turgovishe',
    id: 'popovo',
    value: {
      id: 'popovo',
      text: 'Попово',
      location: { lat: 43.3490572, lng: 26.22682 },
      alt: 1136.907920354104
    }
  },
  {
    key: 'turgovishe',
    id: 'turgovishe',
    value: {
      id: 'turgovishe',
      text: 'Търговище',
      location: { lat: 43.2493556, lng: 26.5727357 },
      alt: 1149.253695554115
    }
  },
  {
    key: 'varna',
    id: 'aksakovo',
    value: {
      id: 'aksakovo',
      text: 'Аксаково',
      location: { lat: 43.2590366, lng: 27.8173779 },
      alt: 1203.3529686921313
    }
  },
  {
    key: 'varna',
    id: 'beloslav',
    value: {
      id: 'beloslav',
      text: 'Белослав',
      location: { lat: 43.1871069, lng: 27.7041727 },
      alt: 1196.4630679709617
    }
  },
  {
    key: 'varna',
    id: 'devnya',
    value: {
      id: 'devnya',
      text: 'Девня',
      location: { lat: 43.2197379, lng: 27.5583738 },
      alt: 1191.065692586227
    }
  },
  {
    key: 'varna',
    id: 'dolni-chiflik',
    value: {
      id: 'dolni-chiflik',
      text: 'Долни чифлик',
      location: { lat: 42.9937585, lng: 27.7170617 },
      alt: 1191.6606570593995
    }
  },
  {
    key: 'varna',
    id: 'dulgopol',
    value: {
      id: 'dulgopol',
      text: 'Дългопол',
      location: { lat: 43.0496561, lng: 27.3463886 },
      alt: 1177.2526248069605
    }
  },
  {
    key: 'varna',
    id: 'ignatievo',
    value: {
      id: 'ignatievo',
      text: 'Игнатиево',
      location: { lat: 43.2480843, lng: 27.7790289 },
      alt: 1201.3897836393364
    }
  },
  {
    key: 'varna',
    id: 'provadiya',
    value: {
      id: 'provadiya',
      text: 'Провадия',
      location: { lat: 43.177032, lng: 27.4405725 },
      alt: 1184.80247693082
    }
  },
  {
    key: 'varna',
    id: 'suvorovo',
    value: {
      id: 'suvorovo',
      text: 'Суворово',
      location: { lat: 43.331546, lng: 27.5912198 },
      alt: 1195.5702099598109
    }
  },
  {
    key: 'varna',
    id: 'varna',
    value: {
      id: 'varna',
      text: 'Варна',
      location: { lat: 43.2140504, lng: 27.9147333 },
      alt: 1206.3086917287583
    }
  },
  {
    key: 'varna',
    id: 'vulchi-dol',
    value: {
      id: 'vulchi-dol',
      text: 'Вълчи дол',
      location: { lat: 43.4055329, lng: 27.5511887 },
      alt: 1195.874027551958
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'byala-cherkva',
    value: {
      id: 'byala-cherkva',
      text: 'Бяла черква',
      location: { lat: 43.20540889999999, lng: 25.3108082 },
      alt: 1093.5638178704726
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'debelec',
    value: {
      id: 'debelec',
      text: 'Дебелец',
      location: { lat: 43.0433499, lng: 25.6204347 },
      alt: 1102.7893353822017
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'dolna-oryahovica',
    value: {
      id: 'dolna-oryahovica',
      text: 'Долна Оряховица',
      location: { lat: 43.1566619, lng: 25.7394877 },
      alt: 1110.8303681481088
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'elena',
    value: {
      id: 'elena',
      text: 'Елена',
      location: { lat: 42.9292248, lng: 25.8748158 },
      alt: 1110.7857841367918
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'gorna-oryahovica',
    value: {
      id: 'gorna-oryahovica',
      text: 'Горна Оряховица',
      location: { lat: 43.1208016, lng: 25.6896757 },
      alt: 1107.759409028041
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'kilifarevo',
    value: {
      id: 'kilifarevo',
      text: 'Килифарево',
      location: { lat: 42.994952, lng: 25.6215569 },
      alt: 1101.5976090807687
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'lyaskovec',
    value: {
      id: 'lyaskovec',
      text: 'Лясковец',
      location: { lat: 43.1081378, lng: 25.7197227 },
      alt: 1108.7293503293881
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'pavlikeni',
    value: {
      id: 'pavlikeni',
      text: 'Павликени',
      location: { lat: 43.2387332, lng: 25.3065925 },
      alt: 1094.225001308621
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'polski-trumbesh',
    value: {
      id: 'polski-trumbesh',
      text: 'Полски Тръмбеш',
      location: { lat: 43.3709965, lng: 25.6329015 },
      alt: 1111.7244812413446
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'strazhica',
    value: {
      id: 'strazhica',
      text: 'Стражица',
      location: { lat: 43.2305864, lng: 25.9670152 },
      alt: 1122.5692941537131
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'suhindol',
    value: {
      id: 'suhindol',
      text: 'Сухиндол',
      location: { lat: 43.184363, lng: 25.164289 },
      alt: 1086.7037908129068
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'svishov',
    value: {
      id: 'svishov',
      text: 'Свищов',
      location: { lat: 43.618351, lng: 25.3506225 },
      alt: 1105.7523502734973
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'veliko-turnovo',
    value: {
      id: 'veliko-turnovo',
      text: 'Велико Търново',
      location: { lat: 43.0756739, lng: 25.6171514 },
      alt: 1103.4760599533286
    }
  },
  {
    key: 'veliko-turnovo',
    id: 'zlatarica',
    value: {
      id: 'zlatarica',
      text: 'Златарица',
      location: { lat: 43.0495626, lng: 25.8926662 },
      alt: 1114.6679544578042
    }
  },
  {
    key: 'vidin',
    id: 'belogradchik',
    value: {
      id: 'belogradchik',
      text: 'Белоградчик',
      location: { lat: 43.6278347, lng: 22.682956 },
      alt: 989.6082548753733
    }
  },
  {
    key: 'vidin',
    id: 'bregovo',
    value: {
      id: 'bregovo',
      text: 'Брегово',
      location: { lat: 44.148433, lng: 22.6420092 },
      alt: 999.6092261515836
    }
  },
  {
    key: 'vidin',
    id: 'dimovo',
    value: {
      id: 'dimovo',
      text: 'Димово',
      location: { lat: 43.7415128, lng: 22.7271253 },
      alt: 994.1188422171539
    }
  },
  {
    key: 'vidin',
    id: 'dunavci',
    value: {
      id: 'dunavci',
      text: 'Дунавци',
      location: { lat: 43.9161851, lng: 22.8171602 },
      alt: 1002.042630799553
    }
  },
  {
    key: 'vidin',
    id: 'gramada',
    value: {
      id: 'gramada',
      text: 'Грамада',
      location: { lat: 43.8326425, lng: 22.6605631 },
      alt: 993.2723612109918
    }
  },
  {
    key: 'vidin',
    id: 'kula',
    value: {
      id: 'kula',
      text: 'Кула',
      location: { lat: 43.8897418, lng: 22.5193167 },
      alt: 988.3669954754282
    }
  },
  {
    key: 'vidin',
    id: 'vidin',
    value: {
      id: 'vidin',
      text: 'Видин',
      location: { lat: 43.996159, lng: 22.8679302 },
      alt: 1006.1010930801018
    }
  },
  {
    key: 'vraca',
    id: 'byala-slatina',
    value: {
      id: 'byala-slatina',
      text: 'Бяла Слатина',
      location: { lat: 43.468773, lng: 23.9366071 },
      alt: 1040.4949404200884
    }
  },
  {
    key: 'vraca',
    id: 'kozloduj',
    value: {
      id: 'kozloduj',
      text: 'Козлодуй',
      location: { lat: 43.77556149999999, lng: 23.7246154 },
      alt: 1038.558360506547
    }
  },
  {
    key: 'vraca',
    id: 'krivodol',
    value: {
      id: 'krivodol',
      text: 'Криводол',
      location: { lat: 43.3682573, lng: 23.4751109 },
      alt: 1018.0746496572347
    }
  },
  {
    key: 'vraca',
    id: 'mezdra',
    value: {
      id: 'mezdra',
      text: 'Мездра',
      location: { lat: 43.1462073, lng: 23.7143397 },
      alt: 1023.1838166788198
    }
  },
  {
    key: 'vraca',
    id: 'miziya',
    value: {
      id: 'miziya',
      text: 'Мизия',
      location: { lat: 43.6912379, lng: 23.8533974 },
      alt: 1042.1844605266413
    }
  },
  {
    key: 'vraca',
    id: 'oryahovo',
    value: {
      id: 'oryahovo',
      text: 'Оряхово',
      location: { lat: 43.7322366, lng: 23.9607343 },
      alt: 1047.8565015173353
    }
  },
  {
    key: 'vraca',
    id: 'roman',
    value: {
      id: 'roman',
      text: 'Роман',
      location: { lat: 43.1456045, lng: 23.9253661 },
      alt: 1032.2743832683075
    }
  },
  {
    key: 'vraca',
    id: 'vraca',
    value: {
      id: 'vraca',
      text: 'Враца',
      location: { lat: 43.2102375, lng: 23.5528803 },
      alt: 1017.7255515720713
    }
  },
  {
    key: 'yambol',
    id: 'bolyarovo',
    value: {
      id: 'bolyarovo',
      text: 'Болярово',
      location: { lat: 42.1493052, lng: 26.8077623 },
      alt: 1129.928554911754
    }
  },
  {
    key: 'yambol',
    id: 'elhovo',
    value: {
      id: 'elhovo',
      text: 'Елхово',
      location: { lat: 42.17202700000001, lng: 26.5693199 },
      alt: 1120.4820761944375
    }
  },
  {
    key: 'yambol',
    id: 'straldzha',
    value: {
      id: 'straldzha',
      text: 'Стралджа',
      location: { lat: 42.600227, lng: 26.6897128 },
      alt: 1136.9878238448055
    }
  },
  {
    key: 'yambol',
    id: 'yambol',
    value: {
      id: 'yambol',
      text: 'Ямбол',
      location: { lat: 42.48419990000001, lng: 26.5035023 },
      alt: 1125.98008976331
    }
  }
]

function roundTo (n, digits) {
  var negative = false
  if (digits === undefined) {
    digits = 0
  }
  if (n < 0) {
    negative = true
    n = n * -1
  }
  var multiplicator = Math.pow(10, digits)
  n = parseFloat((n * multiplicator).toFixed(11))
  n = (Math.round(n) / multiplicator).toFixed(2)
  if (negative) {
    n = (n * -1).toFixed(2)
  }
  return n
}

const Cart = ({ id }) => {
  const [region, setRegion] = useState([])
  const [product, setProduct] = useState({
    image: {
      url: ''
    }
  })
  const handleAddrTypeChange = e =>
    setRegion(counties.filter(c => c.key === e.target.value))

  useEffect(() => {
    const url = 'https://strapi.rudixlab.com/products/' + id

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()

        setProduct(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [id])
  const ContactForm = () => (
    <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
      {({ handleChange, success, error }) => (
        <>
          <Honeypot />
          {success && <p>Thanks for contacting us!</p>}
          {error && (
            <p>
              Sorry, we could not reach our servers. Please try again later.
            </p>
          )}
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea
              type='text'
              name='message'
              id='message'
              rows='4'
              onChange={handleChange}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </>
      )}
    </NetlifyForm>
  )
  return (
    <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8'>
      <div className='rounded-t-lg'>
        <img
          alt=''
          src={'https://strapi.rudixlab.com' + product.image.url}
          className='rounded-lg'
        />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='leading-loose'>
          <ContactForm></ContactForm>
          <form
            className='max-w-xl  p-5 bg-white rounded shadow-xl'
            //action='https://formspree.io/f/xjvjzgna'

            method='POST'
            data-netlify='true'
          >
            <input
              className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
              id='cus_email'
              name='image'
              type='hidden'
              required=''
              placeholder='Име'
              aria-label='Email'
              value={'https://strapi.rudixlab.com' + product.image.url}
            />
            <p className='text-gray-800 font-medium'>Информация за поръчка</p>
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label className='hidden block text-sm text-gray-600'>Име</label>
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='name'
                type='text'
                required=''
                placeholder='Име'
                aria-label='Email'
              />
            </div>
            <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
              <label className='hidden block text-sm text-gray-600'>
                Фамилия
              </label>
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='family'
                name='family'
                type='text'
                required=''
                placeholder='Фамилия'
                aria-label='Email'
              />
            </div>

            <div className='mt-2'>
              <label className=' block text-sm text-gray-600'>Доставка</label>
              <div className='inline-block mt-2 w-1/2 pr-1'>
                <select
                  placeholder='Град'
                  onChange={e => handleAddrTypeChange(e)}
                  name='region'
                  id='dog-names'
                  className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded mt-1'
                >
                  <option value='rigatoni'>Регион</option>
                  {cats.map(city => (
                    <option key={city.id} value={city.key}>
                      {city.value.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className='inline-block mt-2 w-1/2 pr-1'>
                <select
                  placeholder='Град'
                  onChange={e => handleAddrTypeChange(e)}
                  disabled={region.length === 0}
                  name='region'
                  id='dog-names'
                  className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded mt-1'
                >
                  <option value='rigatoni'>Населено Място</option>
                  {region.map(city => (
                    <option key={city.id} value={city.key}>
                      {city.value.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='mt-2'>
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='office_ekont'
                type='text'
                required=''
                placeholder='Офис Еконт клон'
                aria-label='Email'
              />
            </div>
            <div className='mt-2'>
              <label className='hidden text-sm block text-gray-600'>
                Телефон
              </label>
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='tel'
                type='text'
                required=''
                placeholder='Телефон'
                aria-label='Email'
              />
            </div>

            <div className='mt-4'>
              <button
                className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                type='submit'
              >
                {roundTo(product.price, 2)} лв.
              </button>
            </div>
            <div style={{ paddingTop: 10 }}>
              <button
                type='submit'
                className='snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
              >
                Завърши Поръчката
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
