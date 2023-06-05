const data = {
    brandName: "Smash Games",
    pages: [
        {
            name: "index",
            pageName: "Home",
            callToAction: {
                src: "images/SmashGamesLogo-short.jpg",
                altText: "Smash Games Logo"
            }
        },
        {
            name: "blast",
            pageName: "Inferno Blast",
            blocks: [
                {
                    type: "call-to-action",
                    src: "images/Inferno-Jumbotron.jpg",
                    altText: "Inferno Blast Gameplay",
                    buttonLinkSrc: "https://steampowered.com",
                    buttonLinkText: "Buy now on Steam!"
                },
                {
                    type: "short-description",
                    text: "Battle your way through an otherworldly realm of fire and brimstone, taking on legions of demons and hellspawn."
                },
                {
                    type: "long-description",
                    text: "Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?",
                },
                {
                    type: "deck",
                    cards: [
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-2-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Dynamic Environments",
                            body: "Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds."
                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-1-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Upgradable Weapons",
                            body: "Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more."
                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-3-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Epic Boss Battles",
                            body: "Face off against towering demon bosses, each with their own unique strengths and weaknesses."
                        },
                    ],
                },
                {
                    type: "requirements",
                    platforms: [
                        "steam",
                        "playstation",
                        "xbox",
                        "facebook",
                        "twitter",
                        "instagram",
                        "patreon",
                        "twitch",
                        "youtube"
                    ],
                    requirements: [
                        {
                            type: "minimum-reqs",
                            title: "Minimum Requirements",
                            requirements: [
                                {title: "OS", value: "Win7"},
                                {title: "Processor", value: "Intel I3 or Ryzen 3"},
                                {title: "RAM", value: "8gb"},
                                {title: "Graphics", value: "Geforce GTX 570"},
                                {title: "Storage", value: "1gb HDD"},
                            ],
                        },
                        {
                            type: "reccommended-reqs",
                            title: "Reccommened Requirements",
                            requirements: [
                                {title: "OS", value: "Win11"},
                                {title: "Processor", value: "Intel I9 or Ryzen 7"},
                                {title: "RAM", value: "16gb"},
                                {title: "Graphics", value: "Geforce GTX 2080"},
                                {title: "Storage", value: "5 gb SSD"},
                            ],
                        },
                    ],
                },
                {
                    type: "wishlist"
                },
                {
                    type: "faq",
                    questtions: [
                        {question: "What does this do?", answer: "Cool stuff, obviously"},
                        {question: "What does that do?", answer: "Fun stuff, obviously"},
                        {question: "How do you do?", answer: "Well, thanks for asking"}
                    ],
                }
            ],
        },
    ],
}

console.log(data.pages[1].blocks[2].cards[1].body);