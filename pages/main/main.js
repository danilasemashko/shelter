const PETS = 
[
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-dog-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-dog-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-dog-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-dog-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-cat-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-cat-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-cat-ferddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-dog-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

const CARDS = ["first__card", "second__card", "third__card"];

const getRandomArray = () => {
    if (newRandomNumbers.length === 0) {
        for (let i = 0; i < 3; i++)
        {
            let flag = true;
            while (flag) {
            let random = Math.floor(Math.random() * 8);
                if (newRandomNumbers.indexOf(random) === -1)
                {
                  newRandomNumbers.push(random);
                    flag = false;
                }
            }
            flag = true;
        }
    } 
    else 
    {
        oldRandomNumbers = newRandomNumbers;
        newRandomNumbers = [];
        for (let i = 0; i < 3; i++)
        {
            let flag = true;
            while (flag) {
              let random = Math.floor(Math.random() * 8);
                if (oldRandomNumbers.indexOf(random) === -1 && newRandomNumbers.indexOf(random) === -1)
                {
                    newRandomNumbers.push(random);
                    flag = false;
                }
            }
            flag = true;
        }
    }
}

let oldRandomNumbers = [];
let newRandomNumbers = [];

const cardsSlide = (event) => {
    let targetId = event.currentTarget.id;
    let playAnimationInterval = setInterval(function () { 
        document.querySelectorAll(".pets__content > .cards__and__buttons > .cards > div").forEach(elem => {
            if (targetId === "slideRight")
            {
                elem.style.animation = "slideRight 1s forwards";
            }
            else if (targetId === "slideLeft") 
            {
                elem.style.animation = "slideLeft 1s forwards";
            }
        });
        clearInterval(playAnimationInterval);
    }, 0);
    document.querySelector("#slideLeft").disabled = true;
    document.querySelector("#slideLeft").classList.toggle("disabled");
    document.querySelector("#slideLeft").style.pointerEvents = "none";
    document.querySelector("#slideRight").disabled = true;
    document.querySelector("#slideRight").classList.toggle("disabled");
    document.querySelector("#slideRight").style.pointerEvents = "none";
    setTimeout(function() { 
        document.querySelector("#slideLeft").disabled = false;
        document.querySelector("#slideLeft").classList.toggle("disabled");
        document.querySelector("#slideLeft").style.pointerEvents = "auto";
        document.querySelector("#slideRight").disabled = false;
        document.querySelector("#slideRight").classList.toggle("disabled");
        document.querySelector("#slideRight").style.pointerEvents = "auto";
    }, 1000);
    document.querySelectorAll(".pets__content > .cards__and__buttons > .cards > div").forEach(elem => {
        elem.setAttribute("style", "");
    });
};

const setCards = (event) => {
    getRandomArray();
    for (let i = 0; i < 3; i++)
    {
        let elem = PETS[newRandomNumbers[i]];
        document.querySelector(`.${CARDS[i]} > img`).setAttribute("src", elem.img);
        document.querySelector(`.${CARDS[i]} > img`).setAttribute("alt", elem.type + " " + elem.name);
        document.querySelector(`.${CARDS[i]} > span`).innerText = elem.name;
        document.querySelector(`.${CARDS[i]}`).setAttribute("id", elem.name.toLowerCase());
    }
};

document.querySelector(".first__button").addEventListener("click", cardsSlide);
document.querySelector(".second__button").addEventListener("click", cardsSlide);
document.querySelector(".first__button").addEventListener("click", setCards);
document.querySelector(".second__button").addEventListener("click", setCards);

const setLinkDisabled = (event) => {
    event.preventDefault();
}; 

const goToHead = (event) => {
    if (window.innerWidth - 17 < 768)
    {
        event.preventDefault();
        window.scrollTo(0, 0);
        showHideBurgerMenu();
    }
    else 
    {
        event.preventDefault();
        window.scrollTo(0, 0);
    }
};

const toggleClass = () => {
    document.querySelectorAll(".header__nav > .header__nav__list > .nav__item > .nav__link").forEach(elem => {
        elem.classList.toggle("show");
    });
    document.querySelector(".start-screen__blackout").classList.toggle("show");
    document.querySelector(".burger-menu__btn").classList.toggle("show");
    document.querySelector(".burger-menu__icon").classList.toggle("show");
    document.querySelector(".start-screen__content").classList.toggle("show");
    document.querySelector(".start-screen__wrapper > .header > .header__nav").classList.toggle("show");
    document.querySelector(".start-screen__wrapper > .header").classList.toggle("show");
    document.querySelector(".header__nav__list").classList.toggle("show");
};

const showHideBurgerMenu = () => {
    if (document.querySelector(".header__nav__list").getAttribute("class") === "header__nav__list show")
    {
        let interval1 = setInterval(function () {
            document.querySelector(".header__nav__list").style.animation = "slideOut 0.6s forwards";
            let interval2 = setInterval(function () {
                toggleClass();
                document.querySelector(".header__nav__list").style.animation = "";
                document.querySelector("body").style.overflowY = "visible";
                clearInterval(interval2);
            }, 600);
            clearInterval(interval1);
        }, 0);
    } 
    else 
    {
        toggleClass();
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelectorAll(".header__nav > .header__nav__list > .nav__item").forEach(elem => {
            elem.style.width = "auto";
        });
    }
};

let positionY = 0;

const calculateHeight = (resolution) => {
    if (resolution === "1280")
    {
        if (window.innerHeight <= 500)
        {
            return 188;
        }
        else if (window.innerHeight > 500)
        {
            return (188 - ((window.innerHeight - 500) / 2));
        }
    }
    else if (resolution === "768")
    {
        if (window.innerHeight <= 350)
        {
            return 263;
        }
        else if (window.innerHeight > 350)
        {
            return (263 - ((window.innerHeight - 350) / 2));
        }
    }
    else if (resolution === "320")
    {
        if (window.innerHeight <= 341)
        {
            return 221;
        }
        else if (window.innerHeight > 341)
        {
            return (221 - ((window.innerHeight - 341) / 2));
        }
    }
};

const showModalWindow = (event) => {
    positionY = window.pageYOffset;
    let pet = event.currentTarget.id;
    pet = pet[0].toUpperCase() + pet.slice(1);
    for (let i = 0; i < PETS.length; i++)
    {
        if (PETS[i].name === pet)
        {
            document.querySelector(".modal__window > .modal__window__pet__card > img").setAttribute("src", PETS[i].img);
            document.querySelector(".modal__window > .modal__window__pet__card > img").setAttribute("alt", PETS[i].type + " " + PETS[i].name);
            document.querySelector(".modal__window > .modal__window__pet__card > article > h3").innerText = PETS[i].name;
            document.querySelector(".modal__window > .modal__window__pet__card > article > h4").innerText = PETS[i].type + " - " + PETS[i].breed;
            document.querySelector(".modal__window > .modal__window__pet__card > article > h5").innerText = PETS[i].description;
            document.querySelector(".modal__window > .modal__window__pet__card > article > ul > li:nth-child(1)").innerHTML = "<span>Age:</span> " + PETS[i].age;
            document.querySelector(".modal__window > .modal__window__pet__card > article > ul > li:nth-child(2)").innerHTML = "<span>Inoculations:</span> " + PETS[i].inoculations.join(", ");
            document.querySelector(".modal__window > .modal__window__pet__card > article > ul > li:nth-child(3)").innerHTML = "<span>Diseases:</span> " + PETS[i].diseases.join(", ");
            document.querySelector(".modal__window > .modal__window__pet__card > article > ul > li:nth-child(4)").innerHTML = "<span>Parasites:</span> " + PETS[i].parasites.join(", ");
            break;
        }
    }
    if (document.querySelector(".modal__window").style.display === "" && 
        document.querySelector("body").clientWidth >= 1280)
    {
        window.scrollTo(0, 1496 + calculateHeight("1280"));
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".modal__window").style.display = "flex";
    } 
    else if (document.querySelector(".modal__window").style.display === "" && 
             document.querySelector("body").clientWidth >= 768)
    {
        window.scrollTo(0, 2213 + calculateHeight("768"));
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".modal__window").style.display = "flex";
    }
    else if (document.querySelector(".modal__window").style.display === "" && 
             document.querySelector("body").clientWidth >= 320)
    {
        window.scrollTo(0, 1797 + calculateHeight("320"));
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".modal__window").style.display = "flex";
    }
};
const hideModalWindow = (event) => {
    if (document.querySelector(".modal__window").style.display === "flex")
    {
        if (event.target.closest("section") !== null)
        {
            event.preventDefault();
        } 
        else 
        {
            window.scrollTo(0, positionY);
            positionY = 0;
            document.querySelector("body").style.overflowY = "auto";
            document.querySelector(".modal__window").style.display = "";
        }
    }
};

document.querySelector(".modal__window").addEventListener("click", hideModalWindow);
document.querySelector(".modal__window__close").addEventListener("click", hideModalWindow);
document.querySelectorAll(".cards__and__buttons > .cards > div").forEach(elem => {
    elem.addEventListener("click", showModalWindow, true);
});
setCards();
document.querySelector(".donation > .donation__content > .information > a").
addEventListener("click", setLinkDisabled);
document.querySelector(".start-screen > .start-screen__wrapper > .header > .header__logo > .header__logo__link").
addEventListener("click", setLinkDisabled);
document.querySelector(".start-screen > .start-screen__wrapper > .header > .header__nav > .header__nav__list > .nav__item:nth-child(1) > .nav__link").
addEventListener("click", goToHead);
document.querySelector(".start-screen > .start-screen__wrapper > .header > .header__nav > .header__nav__list > .nav__item:nth-child(3) > .nav__link").
addEventListener("click", setLinkDisabled);
document.querySelector(".start-screen > .start-screen__wrapper > .header > .header__nav > .header__nav__list > .nav__item:nth-child(4) > .nav__link").
addEventListener("click", setLinkDisabled);
document.querySelector(".start-screen__blackout").addEventListener("click", showHideBurgerMenu);
document.querySelector(".burger-menu__btn").addEventListener("click", showHideBurgerMenu);
document.querySelector(".start-screen__wrapper > .start-screen__content > .content > button").addEventListener("click", () => {
    window.location = "../pets/pets.html";
});
document.querySelector(".pets > .pets__content > button").addEventListener("click", () => {
    window.location = "../pets/pets.html";
});