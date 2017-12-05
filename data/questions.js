const questions = {
    "1": {
      description: "Hoe denkt u over God?",
      answers: {
        "A": {
          text: "Er is één persoonlijke God, de Drie-eenheid van Vader, Zoon en Heilige Geest.",
          influence: [1, 3, 4, 6, 7]
        },
        "B": {
          text: "Er is één persoonlijke God, maar Hij is geen Drie-eenheid.\n",
          influence: [2]
        },
        "C": {
          text: "Er is één God, die niet noodzakelijk een persoon is. ",
          influence: [5]
        },
        "D": {
          text: "Geen mening."
        }
      }
    },
    "2": {
      description: "Hoe denkt u over de Bijbel?",
      answers: {
        "A": {text: "De Bijbel is het gezaghebbende Woord van God en op alle terreinen volledig betrouwbaar.", influence: [1, 3, 4, 6, 7]},
        "B": {text: "De Bijbel is het Woord van God, maar hoeft niet altijd historisch betrouwbaar te zijn. ", influence: [2]},
        "C": {text: "De Bijbel is een waardevol boek en een goede inspiratiebron, maar is puur mensenwerk.", influence: [5]},
        "D": {text: "Geen mening."}
      }
    },
    "3": {
      description: "Hoe denkt u over Jezus?",
      answers: {
        "A": {text: "Jezus was volkomen God en volkomen mens.", influence: [1, 3, 4, 6, 7]},
        "B": {text: "Jezus was meer dan een mens, maar niet God zelf.", influence: [2]},
        "C": {text: "Jezus was een heel bijzonder mens.", influence: [5]},
        "D": {text: "Geen mening."}
      }
    },
    "4": {
      description: "Hoe denkt u over de opstanding van Jezus?",
      answers: {
        "A": {text: "Jezus is lichamelijk opgestaan uit de doden.", influence: [1, 3, 4, 6, 7]},
        "B": {text: "Het verhaal over Jezus' opstanding is symbolisch.", influence: [2]},
        "C": {text: "Geen mening."}
      }
    },
    "5": {
      description: "Hoe wordt een mens gered?",
      answers: {
        "A": {text: "Een mens wordt, zonder dat hij daar enige bijdrage aan levert, gered uit genade alleen, als hij een waar geloof in Jezus Christus heeft.", influence: [3, 4]},
        "B": {text: "God biedt aan iedereen zijn genade aan. Een mens wordt gered wanneer hij er uit vrije wil voor kiest om dit geschenk te aanvaarden en gelooft dat Jezus Christus voor zijn zonden gestorven is.", influence: [6, 7]},
        "C": {text: "God komt een mens in zijn genade tegemoet zodat deze zelf in kan gaan op zijn uitnodiging. Een mens wordt gered door de sacramenten (in het bijzonder de doop) in geloof te ontvangen.", influence: [1]},
        "D": {text: "Alle mensen komen in de hemel.", influence: [2, 5]},
        "E": {text: "Geen mening."}
      }
    },
    "6": {
      description: "Hoe denkt u over uitverkiezing?",
      answers: {
        "A": {text: "God heeft van tevoren sommige mensen naar eigen wil uitverkoren en alleen die mensen zullen gered worden. ", influence: [3, 4]},
        "B": {text: "Elk mens kan uit vrije wil kiezen om Gods genade te aanvaarden en op die manier gered worden.", influence: [1, 6, 7]},
        "C": {text: "Ieder mens is een kind van God en zal uiteindelijk gered worden.", influence: [2, 5]},
        "D": {text: "Geen mening."}
      }
    },
    "7": {
      description: "Waarop moet volgens u in een preek de grootste nadruk liggen?",
      answers: {
        "A": {text: "Hoe een mens bekeerd kan worden, om zo rechtvaardig te zijn voor God.", influence: [4]},
        "B": {text: "Hoe een mens tot eer van God kan leven.", influence: [1, 3, 6, 7]},
        "C": {text: "Hoe een mens in liefde om kan zien naar zijn medemens.", influence: [2, 5]},,
        "D": {text: "Geen mening."}
      }
    },
    "8": {
      description: "Hoe denkt u over de Drie Formulieren van Enigheid (Heidelbergse Catechismus, Nederlandse Geloofsbelijdenis en Dordtse Leerregels)?",
      answers: {
        "A": {text: "Deze zijn gezaghebbend, omdat ze de boodschap van de Schrift vertolken.", influence: [4]},
        "B": {text: "Deze zijn een belangrijke inspiratiebron.", influence: [3]},
        "C": {text: "Deze spelen geen rol.", influence: [1, 2, 5, 6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "9": {
      description: "Hoe denkt u over muziek in de kerk?",
      answers: {
        "A": {text: "Psalmen hebben sterk de voorkeur boven andere liederen omdat ze rechtstreeks uit de Bijbel komen. In de kerk worden dan ook liefst alleen psalmen (en ‘enige gezangen’) gezongen. ", influence: [4]},
        "B": {text: "In de kerk zouden vooral traditionele liederen gezongen moeten worden. Naast psalmen kunnen dit ook (klassieke) gezangen zijn. Voor modernere liederen is wel plaats, maar in beperkte mate.", influence: [1, 2, 3, 5]},
        "C": {text: "De liedcultuur in de kerk moet goed aansluiten op de mens van vandaag. Dat kan het best wanneer de nadruk ligt op moderne liedjes, bij voorkeur onder begeleiding van een worshipband.", influence: [6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "10": {
      description: "Hoe denkt u over de doop?",
      answers: {
        "A": {text: "Iemand mag pas gedoopt worden als hij/zij bewust gelooft.", influence: [6, 7]},
        "B": {text: "Ook de (kleine) kinderen van gelovigen dienen te worden gedoopt.", influence: [1, 2, 3, 4, 5]},
        "C": {text: "Geen mening."}
      }
    },
    "11": {
      description: "Hoe denkt u over vrouwen in het ambt?",
      answers: {
        "A": {text: "Vrouwen mogen predikant/pastoor en ouderling/oudste worden.", influence: [2, 5]},
        "B": {text: "Vrouwen behoren geen predikant/pastoor te worden, maar mogen wel ouderling/oudste zijn.", influence: [3, 6, 7]},
        "C": {text: "Vrouwen behoren geen predikant/pastoor of ouderling/oudste te worden.", influence: [1, 4]},
        "D": {text: "Geen mening."}
      }
    },
    "12": {
      description: "Hoe denkt u over de organisatie van de kerk?",
      answers: {
        "A": {text: "Lokale kerken moeten in grote mate zelfstandig zijn.", influence: [6, 7]},
        "B": {text: "De kerk moet bestuurd worden door bisschoppen.", influence: [1]},
        "C": {text: "De kerk moet bestuurd worden door kerkenraden en synodes.", influence: [2, 3, 4, 5]},
        "D": {text: "Geen mening."}
      }
    },
    "13": {
      description: "In welke mate moet traditie in de kerk een rol spelen?",
      answers: {
        "A": {text: "In grote mate.", influence: [1]},
        "B": {text: "In enige mate.", influence: [2, 3, 4, 5]},
        "C": {text: "In zo klein mogelijke mate.", influence: [6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "14": {
      description: "Hoe denkt u over de aanwezigheid van Christus in avondmaal/eucharistie?",
      answers: {
        "A": {text: "Christus is lichamelijk aanwezig in het brood en de wijn.", influence: [1]},
        "B": {text: "Christus is geestelijk aanwezig in het brood en de wijn.", influence: [2, 3, 4]},
        "C": {text: "Christus is geestelijk aanwezig in de gelovigen. Het brood en de wijn zijn puur symbolisch.", influence: [5, 6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "15": {
      description: "Hoe denkt u over het deelnemen van kinderen aan avondmaal/eucharistie?",
      answers: {
        "A": {text: "Alleen volwassenen mogen (na zelfonderzoek) deelnemen.", influence: [3, 4]},
        "B": {text: "Kinderen mogen deelnemen, maar pas vanaf een bepaalde leeftijd.", influence: [1, 6, 7]},
        "C": {text: "Kinderen mogen deelnemen vanaf het moment dat ze dat zelf willen.", influence: [2, 5, 6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "16": {
      description: "Hoe denkt u over hemel en hel?",
      answers: {
        "A": {text: "Er bestaan een hemel en een hel.", influence: [1, 3, 4, 6, 7]},
        "B": {text: "Alleen de hemel bestaat, en iedereen zal hier naartoe gaan.", influence: [2, 5]},
        "C": {text: "Alleen de hemel bestaat. Mensen die hier niet naartoe gaan, zullen worden vernietigd.", influence: [8]},,
        "D": {text: "Geen mening."}
      }
    },
    "17": {
      description: "Hoe denkt u over de rustdag?",
      answers: {
        "A": {text: "De rustdag is op zaterdag. Een christen behoort zich net als de joden te houden aan het vierde gebod: ‘Gedenk de sabbatdag, dat u die heiligt.’ ", influence: [8]},
        "B": {text: "De rustdag is op zondag. Door op zondag niet te werken en zich meer dan op andere dagen op God te concentreren, neemt een christen het vierde gebod in acht: ‘Gedenk de sabbatdag, dat u die heiligt.’ ", influence: [1, 3, 4]},
        "C": {text: "Een christen hoeft zich niet aan een rustdag te houden, maar het is wel een goed idee om een dag in de week uit te rusten.", influence: [2, 5, 6, 7]},
        "D": {text: "Geen mening."}
      }
    },
    "18": {
      description: "Hoe denkt u over bijzondere gaven van de Geest zoals profeteren, tongentaal en wonderbaarlijke genezingen?",
      answers: {
        "A": {text: "Deze gaven waren voornamelijk bedoeld voor de vroege kerk. Vandaag de dag komen ze (bijna) niet meer voor. ", influence: [1, 4]},
        "B": {text: "Deze gaven komen nog steeds voor, maar niet meer zo vaak als in de vroege kerk. ", influence: [2, 3, 7]},
        "C": {text: "Deze gaven zijn nog steeds beschikbaar en nastrevenswaardig voor alle christenen.", influence: [6]},
        "D": {text: "Deze gaven moeten symbolisch worden gezien.", influence: [5]},
        "E": {text: "Geen mening."}
      }
    },
    "19": {
      description: "Moet er in preken veel nadruk worden gelegd op persoonlijke bekering?",
      answers: {
        "A": {text: "Ja, want er gaan veel mensen naar de kerk die nog niet bekeerd zijn.", influence: [4]},
        "B": {text: "Ja, de kerk moet evangeliserende preken hebben die toegankelijk zijn voor niet-christenen. ", influence: [6, 7]},
        "C": {text: "Nee, dit is slechts een van de vele thema’s waar preken over zouden moeten gaan.", influence: [1, 2, 3, 5]},
        "D": {text: "Geen mening."}
      }
    },
    "20": {
      description: "Moet er in preken veel nadruk worden gelegd op de eindtijd?",
      answers: {
        "A": {text: "Ja, want de kans is groot dat de eindtijd nabij is.", influence: [6, 8]},
        "B": {text: "Nee, dit is slechts een van de vele thema’s waar preken over zouden moeten gaan.", influence: [1, 3, 4, 7]},
        "C": {text: "Nee, ik geloof niet in de eindtijd.", influence: [2, 5]},
        "D": {text: "Geen mening."}
      }
    }
  };

module.exports = questions;
