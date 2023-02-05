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

let createElementMain = document.createElement("main");
createElementMain.classList = "main";
document.body.appendChild(createElementMain);

let buildSectionCorDeFundo = () => {
  let sectionCorDeFundo = document.createElement("section");
  sectionCorDeFundo.classList = "cordefundo";

  sectionCorDeFundo.appendChild(createTitle("Cor de Fundo"));
  sectionCorDeFundo.appendChild(
    createButton("White", () => {
      if (!document.body.classList.contains("whiteBg")) {
        document.body.classList.add("whiteBg");
      } else {
        document.body.classList.remove("whiteBg");
      }
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Black", () => {
      if (!document.body.classList.contains("blackBg")) {
        document.body.classList.add("blackBg");
      } else {
        document.body.classList.remove("blackBg");
      }
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Green", () => {
      if (!document.body.classList.contains("greenBg")) {
        document.body.classList.add("greenBg");
      } else {
        document.body.classList.remove("greenBg");
      }
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Blue", () => {
      if (!document.body.classList.contains("blueBg")) {
        document.body.classList.add("blueBg");
      } else {
        document.body.classList.remove("blueBg");
      }
    })
  );
  sectionCorDeFundo.appendChild(
    createButton("Yellow", () => {
      if (!document.body.classList.contains("yellowBg")) {
        document.body.classList.add("yellowBg");
      } else {
        document.body.classList.remove("yellowBg");
      }
    })
  );

  createElementMain.appendChild(sectionCorDeFundo);
};
buildSectionCorDeFundo();

let buildSectionCorDaFonte = () => {
  let sectionCorDaFonte = document.createElement("section");
  sectionCorDaFonte.classList = "cordafonte";

  sectionCorDaFonte.appendChild(createTitle("Cor da Fonte"));
  sectionCorDaFonte.appendChild(
    createButton("Black", () => {
      document.body.classList = "blackFontColor";
    })
  );
  sectionCorDaFonte.appendChild(
    createButton("Red", () => {
      document.body.classList = "redFontColor";
    })
  );
  sectionCorDaFonte.appendChild(
    createButton("White", () => {
      document.body.classList = "whiteFontColor";
    })
  );

  createElementMain.appendChild(sectionCorDaFonte);
};
buildSectionCorDaFonte();

let buildSectionTamanhoDaFonte = () => {
  let sectionTamanhoDaFonte = document.createElement("section");
  sectionTamanhoDaFonte.classList = "tamanhodafonte";

  sectionTamanhoDaFonte.appendChild(createTitle("Tamanho Da Fonte"));
  sectionTamanhoDaFonte.appendChild(
    createButton("8pt", () => {
      document.body.classList = "pt8";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("10pt", () => {
      document.body.classList = "pt10";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("12pt", () => {
      document.body.classList = "pt12";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("14pt", () => {
      document.body.classList = "pt14";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("20pt", () => {
      document.body.classList = "pt20";
    })
  );

  createElementMain.appendChild(sectionTamanhoDaFonte);
};
buildSectionTamanhoDaFonte();

let buildSectionEspaLinhas = () => {
  let sectionEspaLinhas = document.createElement("section");
  sectionEspaLinhas.classList = "espaeinhas";

  sectionEspaLinhas.appendChild(createTitle("Espaçamento entre as linhas"));
  sectionEspaLinhas.appendChild(
    createButton("1", () => {
      document.body.classList = "line-height1";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("normal", () => {
      document.body.classList = "line-heightnormal";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("1.5", () => {
      document.body.classList = "line-height1e5";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("2.0", () => {
      document.body.classList = "line-height2";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("3.0", () => {
      document.body.classList = "line-height3";
    })
  );

  createElementMain.appendChild(sectionEspaLinhas);
};
buildSectionEspaLinhas();

let buildSectionTipoFonte = () => {
  let sectionTipoFonte = document.createElement("section");
  sectionTipoFonte.classList = "tipofonte";

  sectionTipoFonte.appendChild(createTitle("Tipo da fonte"));
  sectionTipoFonte.appendChild(
    createButton("Arial", () => {
      document.body.classList = "fontArial";
    })
  );
  sectionTipoFonte.appendChild(
    createButton("Times New Roman", () => {
      document.body.classList = "fontTimesNewRoman";
    })
  );

  createElementMain.appendChild(sectionTipoFonte);
};
buildSectionTipoFonte();

let createText = (title) => {
  let newText = document.createElement("p");
  newText.innerHTML = title;
  return newText;
};

let buildSectionText = () => {
  let sectionText = document.createElement("section");
  sectionText.classList = "sectiontext";

  sectionText.appendChild(
    createText(
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    )
  );
  sectionText.classList = "text";

  document.body.appendChild(sectionText);
};
buildSectionText();

// Toggle - pra usar futuramente
//   if (!document.body.classList.contains("blackBg")) {
//     document.body.classList.add("blackBg");
//   } else {
//     document.body.classList.remove("blackBg");
//   }
// })
