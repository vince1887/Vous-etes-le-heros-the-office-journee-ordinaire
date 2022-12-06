let chapterObj = {
  michealEnterOffice: {
    subtitle: "Bon matin!",
    text: "Micheal apperçoit Jim! va t-il le saluer ou il l'ignore?",
    img: "imgChap1.png",
    option: [
      { text: "Il le salut", action: goToChapter("activationTasse") },
      { text: "Il l'ignore", action: goToChapter("michealEnterDesk") },
    ],
  },
  activationTasse:  {
    subtitle: "Hey Jim bon matin!",
    text: "salut Micheal voici cette magnifique tasse!!",
    img: "imgTasse.png",
    video: "assets/video/micheal_yes.mp4",
    option: [
      {
        text: "Merci Jim!",
        action: activationTasse(),
      },
    ],
  },
  michealEnterDesk :  {
    subtitle: "Bon je dois me mettre au travail maintenant.",
    text: "J'entend un bruit?? ohhh c'est Dwight qui cogne à ma porte.",
    img: "imgdesk.png",
    option: [
      { text: "Il lui ouvre la porte", action: goToChapter("dwightEnterDesk") },
      { text: "Il l'ignore", action: goToChapter("michealFallAslepp") },
    ],
  },
  michealFallAslepp:  {
    subtitle: "Tu t'es endormie!",
    text: "Tu n'as pas pris ton café, donc tu t'es endormie.",
    img: "imgasleep.png",
    video: "assets/video/micheal_no_god.mp4",
    option: [
      {
        text: "Recommence ta journée",
        action: goToChapter("michealEnterOffice"),
      },
    ],
  },
  dwightEnterDesk:  {
    subtitle: "Dwight entre dans ton bureau",
    text: "Bon matin Micheal! Si tu veux on peut aller sur ma ferme de betrave aujourd'hui.",
    img: "imgferme.png",
    option: [
      { text: "Non je ne peut pas", action: goToChapter("michealExcuseCafe") },
      { text: "Bien sur!", action: goToChapter("farmDay") },
    ],
  },
  farmDay:{
    subtitle: "Tu passe la journée a la ferme de Dwight",
    text: "Tu n'as pas accomplie tes tâches de la journée",
    img: "imgferme.png",
    option: [
      {
        text: "Tu dois reccomencer ta journée",
        action: goToChapter("michealEnterOffice"),
      },
    ],
  },
  michealExcuseCafe:  {
    subtitle:
      "Maintenant que tu as tasser Dwight de ton chemin, tu veux te faire une tasse de café.",
    text: "Attention! as-tu saluer Jim se matin?? Car si oui tu vas pouvoir te fair un café, si non tu ne pourras pas ",
    img: "imgMachinecafe.png",
    option: (optionsArr = [
      { text: "oui", action: verificationTasse() },
      { text: "non", action: verificationTasse() },
    ]),
  },
  michealFaitCafe: {
    subtitle: "Tu te fais un café",
    text: "Grace à cette tasse de café tu vas pouvoir accomplir toutes tes tâches de la journée!!",
    img: "imgVictoire.png",
    option: [
      { text: "Tu as réussi!!", action: goToChapter("michealEnterOffice") },
    ],
  },
  michealPasCafe:  {
    subtitle: "Tu as oublier ta tasse favorite à la maison.",
    text: "Si tu avais salué Jim il t'aurai remis une tasse en guise de cadeau. Meilleur chance la prochiane fois.",
    img: "imgdefaite.png",
    option: [
      { text: "reccomencer", action: goToChapter("michealEnterOffice") },
    ],
  },
};

// nouvelle version (corriger)
function goToChapter(chapterName) {
  //déclanchement audio
  const soundEffectMicheal = new Audio(
    "assets/audio/michael-scott-thank-you-sound-effect.mp3"
  );
  soundEffectMicheal.currentTime = 0;
  soundEffectMicheal.play();

  localStorage.setItem("chapterOngoing", chapterName);
  
  let game = document.querySelector(".game");
  let chapterTitle = game.querySelector(".chapter-title");
  let chapterText = game.querySelector(".chapter-text");

  chapterTitle.innerText = chapterObj[chapterName].subtitle;
  chapterText.innerText = chapterObj[chapterName].text;

  let chapterImgContainer = document.querySelector(".images-mid");

  //verify si video existe
   
  if (chapterObj[chapterName].video != undefined) {
    let videoTag = `<video src="${chapterObj[chapterName].video}" class="image-mid loop muted autoplay playinline `;
    chapterImgContainer.innerHTML = videoTag; 
  } else {
    let imgTag = `<img src="asset/${chapterObj[chapterName].img}" class="image-mid">`;
    chapterImgContainer.innerHTML = imgTag;
  }

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
      buttonPanel.insertAdjacentHTML("beforeend", buttonTag);
    }
  }
}

goToChapter("michealEnterOffice");

//verification tasse caffé

let coffeCupFound = false;

let activationTasse = function () {
  coffeCupFound = true;
  goToChapter(michealEnterDesk);
  localStorage.setItem("tassetrouve", true);
};

let verificationTasse = function () {
  if (coffeCupFound) {
    goToChapter(michealFaitCafe);
  } else {
    goToChapter(michealPasCafe);
  }
};

//verification onload de la page si local storage "existe"

document.addEventListener("DOMContentLoaded", function () {
  let verifLocalStorageChapter = localStorage.getItem("chapterOngoing");
  if (verifLocalStorageChapter == null) {
    goToChapter(michealEnterOffice);
  } else {
    goToChapter(chapterObj[verifLocalStorageChapter]);
  }

  let verifTasseTrouver = localStorage.getItem("tasseTrouve");
  if (verifTasseTrouver == null) {
    coffeCupFound = false;
  } else {
    coffeCupFound = boolean(verifTasseTrouver);
  }
});
