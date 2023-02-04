let createButton = (
  title,
  action = () => {
    alert("Não cadastrado");
  }
) => {
  let newButton = document.createElement("button");
  newButton.innerHTML = title;
  newButton.addEventListener("click", action);
  return newButton;
};

let createTitle = (title) => {
  let newTitle = document.createElement("h2");
  newTitle.innerHTML = title;
  return newTitle;
};

let buildSectionCorDeFundo = () => {
  let sectionCorDeFundo = document.createElement("section");
  sectionCorDeFundo.className = "cordefundo";

  sectionCorDeFundo.appendChild(createTitle("Cor de Fundo"));
  sectionCorDeFundo.appendChild(
    createButton("White", () => {
      document.body.className = "whiteBg";
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Black", () => {
      document.body.className = "blackBg";
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Green", () => {
      document.body.className = "greenBg";
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Blue", () => {
      document.body.className = "blueBg";
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Yellow", () => {
      document.body.className = "yellowBg";
    })
  );

  document.body.appendChild(sectionCorDeFundo);
};
buildSectionCorDeFundo();

let buildSectionCorDaFonte = () => {
  let titleH2 = document.createElement("h2");
  titleH2.innerHTML = "Cor da Fonte";

  let buttonWhite = document.createElement("button");
  buttonWhite.innerHTML = "White";

  let sectionCorDaFonte = document.createElement("section");
  sectionCorDaFonte.className = "cordafonte";
  sectionCorDaFonte.appendChild(titleH2);
  sectionCorDaFonte.appendChild(buttonWhite);

  document.body.appendChild(sectionCorDaFonte);
};
buildSectionCorDaFonte();

let buildSectionTamanhoDaFonte = () => {
  let titleH2 = document.createElement("h2");
  titleH2.innerHTML = "Tamanho da Fonte";

  let button8Pt = document.createElement("button");
  button8Pt.innerHTML = "8pt";

  let sectionTamanhoDaFonte = document.createElement("section");
  sectionTamanhoDaFonte.className = "tamanhodafonte";
  sectionTamanhoDaFonte.appendChild(titleH2);
  sectionTamanhoDaFonte.appendChild(button8Pt);

  document.body.appendChild(sectionTamanhoDaFonte);
};
buildSectionTamanhoDaFonte();

// Toggle - pra usar futuramente
//   if (!document.body.classList.contains("blackBg")) {
//     document.body.classList.add("blackBg");
//   } else {
//     document.body.classList.remove("blackBg");
//   }
// })
