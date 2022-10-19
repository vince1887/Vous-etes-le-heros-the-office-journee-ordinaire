let chapterObj = {
  michealEnterOffice: (michealEnterOffice = {
    subtitle: "Bon matin!",
    text: "Micheal apperçoit Jim! va t-il le saluer ou il l'ignore?",
    img: "imgChap1.png",
    options: (optionMichealEnterOffice = [
      { text: "Il le salut", action: goToChapter(activationTasse) },
      { text: "Il l'ignore", action: goToChapter(michealEnterDesk) },
    ]),
  }),
  activationTasse: (activationTasse = {
    subtitle: "Hey Jim bon matin!",
    text: "salut Micheal voici cette magnifique tasse!!",
    img: "imgTasse.png",
    option: (optionTasse = {
      text: "Merci Jim!",
      action: goToChapter(michealEnterDesk),
    }),
  }),
  michealEnterDesk: (michealEnterDesk = {
    subtitle: "Bon je dois me mettre au travail maintenant.",
    text: "J'entend un bruit?? ohhh c'est Dwight qui cogne à ma porte.",
    img: "imgdesk.png",
    options: (optionMichealEnterdesk = [
      { text: "Il lui ouvre la porte", action: goToChapter(dwightEnterDesk) },
      { text: "Il l'ignore", action: goToChapter(michealFallAslepp) },
    ]),
  }),
  michealFallAslepp: (michealFallAslepp = {
    subtitle: "Tu t'es endormie!",
    text: "Tu n'as pas pris ton café, donc tu t'es endormie.",
    img: "imgasleep.png",
    options: (optionmichealFallAslepp = [
      {
        text: "Recommence ta journée",
        action: goToChapter(michealEnterOffice),
      },
    ]),
  }),
  dwightEnterDesk: (dwightEnterDesk = {
    subtitle: "Dwight entre dans ton bureau",
    text: "Bon matin Micheal! Si tu veux on peut aller sur ma ferme de betrave aujourd'hui.",
    img: "imgferme.png",
    options: (optiondwightEnterDesk = [
      { text: "Non je ne peut pas", action: goToChapter(michealExcuseCafe) },
      { text: "Bien sur!", action: goToChapter(farmDay) },
    ]),
  }),
  farmDay: (farmDay = {
    subtitle: "Tu passe la journée a la ferme de Dwight",
    text: "Tu n'as pas accomplie tes tâches de la journée",
    img: "imgferme.png",
    options: (optiondfarmDay = [
      {
        text: "Tu dois reccomencer ta journée",
        action: goToChapter(michealEnterOffice),
      },
    ]),
  }),
  michealExcuseCafe: (michealExcuseCafe = {
    subtitle:
      "Maintenant que tu as tasser Dwight de ton chemin, tu veux te faire une tasse de café.",
    text: "Attention! as-tu saluer Jim se matin?? Car si oui tu vas pouvoir te fair un café, si non tu ne pourras pas ",
    img: "imgMachinecafe.png",
    options: (optionmichealCafe = [
      { text: "oui", action: goToChapter(michealFaitCafe) },
      { text: "non", action: goToChapter(michealPasCafe) },
    ]),
  }),
  michealFaitCafe: (michealFaitCafe = {
    subtitle: "Tu te fais un café",
    text: "Grace à cette tasse de café tu vas pouvoir accomplir toutes tes tâches de la journée!!",
    img: "imgVictoire.png",
    options: (optionmichealCafe = [
      { text: "Tu as réussi!!", action: goToChapter(michealEnterOffice) },
    ]),
  }),
  michealPasCafe: (michealPasCafe = {
    subtitle: "Tu as oublier ta tasse favorite à la maison.",
    text: "Si tu avais salué Jim il t'aurai remis une tasse en guise de cadeau. Meilleur chance la prochiane fois.",
    img: "imgdefaite.png",
    options: (optionmichealCafe = [
      { text: "reccomencer", action: goToChapter(michealEnterOffice) },
    ]),
  }),
};

function goToChapter(chapterName) {
  //point 1,2,(3)
  let title = chapterName.subtitle;
  let subtitleText = chapterName.text;

  let titleHtml = document.querySelector("h2");
  let subtitleHtml = document.getElementsByClassName("paragraphe");

  titleHtml.innerText = title;
  subtitleHtml.innerText = subtitleText;

  //point 4
  let optionArr = chapterName.option;
  for
}
