const BASE_OF_Task1 = [
    {
        question: "I bought a beautiful dress at the mall. «Beautiful» is a(an) _______",
        options: {
            a: "noun",
            b: "adverb",
            c: "preposition",
            d: "adjective"
        },
        correctAnswer: "d"
    },
    {
        question: "What did she ask you to do? «She» is a(an) _______",
        options: {
            a: "noun",
            b: "pronoun",
            c: "adjective",
            d: "adverb"
        },
        correctAnswer: "b"
    },
    {
        question: "I left my shoes under the kitchen table. «Under» is a(an) _______",
        options: {
            a: "preposition",
            b: "adjective",
            c: "pronoun",
            d: "noun"
        },
        correctAnswer: "a"
    },
    {
        question: "She leads an _______ life",
        options: {
            a: "act",
            b: "active",
            c: "activity",
            d: "acting"
        },
        correctAnswer: "a"
    }

];
const BASE_OF_Task_With_Images = [
    {
        question: "I bought a beautiful dress at the mall. «Beautiful» is a(an) _______",
        options: {
            a: "noun",
            b: "adverb",
            c: "preposition",
            d: "adjective"
        },
        imgIndex: 0,
        correctAnswer: "d"
    },
    {
        question: "What did she ask you to do? «She» is a(an) _______",
        options: {
            a: "noun",
            b: "pronoun",
            c: "adjective",
            d: "adverb"
        },
        imgIndex: 1,
        correctAnswer: "b"
    },
    {
        question: "I left my shoes under the kitchen table. «Under» is a(an) _______",
        options: {
            a: "preposition",
            b: "adjective",
            c: "pronoun",
            d: "noun"
        },
        correctAnswer: "a"
    },
    {
        question: "She leads an _______ life",
        options: {
            a: "act",
            b: "active",
            c: "activity",
            d: "acting"
        },
        correctAnswer: "a"
    }

];
const BASE_OF_Task_Select = [
    {
        taskText: 'Official figures show that the number of people taking international flights is decreasing, ' +
            'and that this is __${select#option}__ in significant changes to holidaying habits. ' +
            'As the cost of air tickets increases, it appears that more and more families are choosing ' +
            'to __${select#option}__ their summer holidays at home. People are also becoming more __${select#option}__ of the harm ' +
            'that flying does to the environment, and see it as a way of helping to __${select#option}__ the planet, too. ' +
            'For many parents a summer with no airport queues or overcrowded resorts may seem attractive, ' +
            'but the idea might well be less __${select#option}__ with their teenage children, who are probably __${select#option}__ to flying off ' +
            'to the Mediterranean or Miami as soon as school breaks up. So, the question is, how can ' +
            'young people __${select#option}__ lots of fun when so much will be closed for the holidays, and so many of their ' +
            'friends are __${select#option}__ to be away? The answer may lie at the local sports centre. Nowadays, many centres organise ' +
            'summer activities aimed at young people __${select#option}__ either on indoor or outdoor sports. These might range, ' +
            'for instance, from playing table tennis to __${select#option}__ mountain-biking. As well as being healthy ' +
            'and enjoyable, taking part in activities like these is also an excellent way to __${select#option}__ new friends. ' +
            'For the most popular activities, though, it is advisable to __${select#option}__ early for a place- perhaps two or ' +
            'three months in advance.'
    },
    {
        options: {
            a: "leading",
            b: "resulting",
            c: "causing",
            d: "creating"
        },
        correctAnswer: "b"
    },
    {
        options: {
            a: "pass",
            b: "employ",
            c: "use",
            d: "spend"
        },
        correctAnswer: "d"
    },
    {
        options: {
            a: "aware",
            b: "thoughtful",
            c: "wise",
            d: "familiar"
        },
        correctAnswer: "a"
    },
    {
        options: {
            a: "save",
            b: "secure",
            c: "guard",
            d: "defend"
        },
        correctAnswer: "a"
    },
    {
        options: {
            a: "liked",
            b: "popular",
            c: "approved",
            d: "accepted"
        },
        correctAnswer: "b"
    },
    {
        options: {
            a: "used",
            b: "experienced",
            c: "preferred",
            d: "prepared"
        },
        correctAnswer: "a"
    },
    {
        options: {
            a: "do",
            b: "live",
            c: "cause",
            d: "have"
        },
        correctAnswer: "d"
    },
    {
        options: {
            a: "positive",
            b: "inevitable",
            c: "bound",
            d: "definite"
        },
        correctAnswer: "c"
    },
    {
        options: {
            a: "eager",
            b: "keen",
            c: "fond",
            d: "enthusiastic"
        },
        correctAnswer: "b"
    },
    {
        options: {
            a: "going",
            b: "cycling",
            c: "playing",
            d: "riding"
        },
        correctAnswer: "a"
    },
    {
        options: {
            a: "meet",
            b: "know",
            c: "join",
            d: "make"
        },
        correctAnswer: "d"
    },
    {
        options: {
            a: "demand",
            b: "apply",
            c: "claim",
            d: "order"
        },
        correctAnswer: "b"
    }
];
const BASE_OF_Task_InputText = [
    {
        question: "What I'd love to share to somebody who wanted to take __${input#text}__ this lifestyle.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "By doing the small space lifestyle you're gonna make choices and you end __${input#text}__ becoming really conscious of what you bring into your life.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "Round tables can be really wonderful because they don't have corners and __${input#text}__ .",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "The __${input#text}__ actually makes you feel like it's taking up less volume.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "We __${input#text}__ transforming furniture and both of the bedrooms because it allows us flexibility.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "Open __${input#text}__ is another one.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "I have this beautiful object that I'm looking __${input#text}__, but I can also use it.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "They're flexible, the can move __${input#text}__, any direction and can be folded up and packed __${input#text}__ and they’re really my secret to how I pull this all off.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "__${input#text}__ a moment to think about what you have.",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    },
    {
        question: "And if there's __${input#text}__ one thing you can get rid of today, do it!",
        correctAnswers: {
            a: ["noun", "pronoun", "adjective", "adverb"],
            b: ["noun", "pronoun", "adjective", "adverb"]
        }
    }

];


const IMG_BASE = ['<img class="questionImg" src="src/1.jpg">',
    '<img class="questionImg" src="src/2.jpg">'];

function build(testBase, taskId) {
    let elementById = document.getElementById(taskId);
    let type = elementById.getAttribute("data-type");
    if (type === "test") {
        buildTest(testBase, taskId);
    }
    if (type === "select") {
        buildSelect(testBase, taskId);
    }
    if (type === "input") {
        buildInput(testBase, taskId);
    }
}

window.onload = function () {
    build(BASE_OF_Task1, "task1");
    build(BASE_OF_Task_With_Images, "task2");
    build(BASE_OF_Task_Select, "task3");
    build(BASE_OF_Task_InputText, "task4");
}