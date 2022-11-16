let chapterObj = {
  michealEnterOffice: (michealEnterOffice = {
    subtitle: "Bon matin!",
    text: "Micheal apperçoit Jim! va t-il le saluer ou il l'ignore?",
    img: "imgChap1.png",
    option: [
      { text: "Il le salut", action: goToChapter("activationTasse") },
      { text: "Il l'ignore", action: goToChapter("michealEnterDesk") },
    ],
  }),
  activationTasse: (activationTasse = {
    subtitle: "Hey Jim bon matin!",
    text: "salut Micheal voici cette magnifique tasse!!",
    img: "imgTasse.png",
    option: [
      {
        text: "Merci Jim!",
        action: activationTasse(),
      },
    ],
  }),
  michealEnterDesk: (michealEnterDesk = {
    subtitle: "Bon je dois me mettre au travail maintenant.",
    text: "J'entend un bruit?? ohhh c'est Dwight qui cogne à ma porte.",
    img: "imgdesk.png",
    option: [
      { text: "Il lui ouvre la porte", action: goToChapter("dwightEnterDesk") },
      { text: "Il l'ignore", action: goToChapter("michealFallAslepp") },
    ],
  }),
  michealFallAslepp: (michealFallAslepp = {
    subtitle: "Tu t'es endormie!",
    text: "Tu n'as pas pris ton café, donc tu t'es endormie.",
    img: "imgasleep.png",
    option: [
      {
        text: "Recommence ta journée",
        action: goToChapter("michealEnterOffice"),
      },
    ],
  }),
  dwightEnterDesk: (dwightEnterDesk = {
    subtitle: "Dwight entre dans ton bureau",
    text: "Bon matin Micheal! Si tu veux on peut aller sur ma ferme de betrave aujourd'hui.",
    img: "imgferme.png",
    option: [
      { text: "Non je ne peut pas", action: goToChapter("michealExcuseCafe") },
      { text: "Bien sur!", action: goToChapter("farmDay") },
    ],
  }),
  farmDay: (farmDay = {
    subtitle: "Tu passe la journée a la ferme de Dwight",
    text: "Tu n'as pas accomplie tes tâches de la journée",
    img: "imgferme.png",
    option: [
      {
        text: "Tu dois reccomencer ta journée",
        action: goToChapter("michealEnterOffice"),
      },
    ],
  }),
  michealExcuseCafe: (michealExcuseCafe = {
    subtitle:
      "Maintenant que tu as tasser Dwight de ton chemin, tu veux te faire une tasse de café.",
    text: "Attention! as-tu saluer Jim se matin?? Car si oui tu vas pouvoir te fair un café, si non tu ne pourras pas ",
    img: "imgMachinecafe.png",
    option: (optionsArr = [
      { text: "oui", action: verificationTasse() },
      { text: "non", action: verificationTasse() },
    ]),
  }),
  michealFaitCafe: (michealFaitCafe = {
    subtitle: "Tu te fais un café",
    text: "Grace à cette tasse de café tu vas pouvoir accomplir toutes tes tâches de la journée!!",
    img: "imgVictoire.png",
    option: [
      { text: "Tu as réussi!!", action: goToChapter("michealEnterOffice") },
    ],
  }),
  michealPasCafe: (michealPasCafe = {
    subtitle: "Tu as oublier ta tasse favorite à la maison.",
    text: "Si tu avais salué Jim il t'aurai remis une tasse en guise de cadeau. Meilleur chance la prochiane fois.",
    img: "imgdefaite.png",
    option: [
      { text: "reccomencer", action: goToChapter("michealEnterOffice") },
    ],
  }),
};

//partie 3.1 et 3.2

function goToChapter(chapterName) {
  //point 1,2,3
  let title = chapterObj[chapterName].subtitle;
  let subtitleText = chapterObj[chapterName].text;
  let image = chapterObj[chapterName].img;

  let titleHtml = document.querySelector("h3");
  let subtitleHtml = document.getElementsByClassName("paragraphe");
  let imageHtml = document.getElementsByClassName("images-mid");

  titleHtml.innerText = title;
  subtitleHtml.innerText = subtitleText;
  imageHtml.innerHTML = "<img src='" + image + "' class='images-mid'>";

  //point 4
  let optionArr = chapterObj[chapterName].options;

  for (let i = 0; i < optionArr.length; i++) {
    let parent = document.getElementByClass("btnGoupe");
    let btnChoix = document.createElement("button");
    btnChoix.innerText = this.text;
    btnChoix.setAttribute("class", "btn");
    btnChoix.setAttribute("onclick", "this.action");
    parent.appendChild(btnChoix);
  }
}

//partie 3.2

let coffeCupFound = false;
function activationTasse() {
  coffeCupFound = true;
  goToChapter(michealEnterDesk);
}

function verificationTasse() {
  if (coffeCupFound == true) {
    goToChapter(michealFaitCafe);
  } else {
    goToChapter(michealPasCafe);
  }
}

// nouvelle version (corriger prof)
function goToChapter(chapterName) {
  let game = document.querySelector(".game");
  let chapterTitle = document.querySelector(".chapter-title");
  let chapterText = document.querySelector(".chapter-text");

  let chapterImgContainer = document.querySelector(".images-mid");
  let imgTag = `<img src="asset/${chapterObj[chapterName].img}" class="image-mid">`;
  chapterImgContainer.innerHTML = imgTag;

  let optionArr = chapterObj[chapterName].option;
  let buttonPanel = document.querySelector(".btnGroupe");
  let buttonTag;
  let optionText;
  let optionAction;

  for (var i = 0; i < optionArr.length; i++) {
    optionText = optionArr[i].text;
    optionAction = optionArr[i].action;
    buttonTag = `<button class="btn" onclick="${optionAction}">${optionText}</button>`;
    if (i == 0) {
      buttonPanel.innerHTML = buttonTag;
    } else {
      buttonPanel;
    }
  }
}
