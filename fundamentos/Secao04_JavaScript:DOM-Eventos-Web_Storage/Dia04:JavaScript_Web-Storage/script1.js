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
createElementMain.className = "main";
document.body.appendChild(createElementMain);

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

  createElementMain.appendChild(sectionCorDeFundo);
};
buildSectionCorDeFundo();

let buildSectionCorDaFonte = () => {
  let sectionCorDaFonte = document.createElement("section");
  sectionCorDaFonte.className = "cordafonte";

  sectionCorDaFonte.appendChild(createTitle("Cor da Fonte"));
  sectionCorDaFonte.appendChild(
    createButton("Black", () => {
      document.body.className = "blackFontColor";
    })
  );
  sectionCorDaFonte.appendChild(
    createButton("Red", () => {
      document.body.className = "redFontColor";
    })
  );
  sectionCorDaFonte.appendChild(
    createButton("White", () => {
      document.body.className = "whiteFontColor";
    })
  );

  createElementMain.appendChild(sectionCorDaFonte);
};
buildSectionCorDaFonte();

let buildSectionTamanhoDaFonte = () => {
  let sectionTamanhoDaFonte = document.createElement("section");
  sectionTamanhoDaFonte.className = "tamanhodafonte";

  sectionTamanhoDaFonte.appendChild(createTitle("Tamanho Da Fonte"));
  sectionTamanhoDaFonte.appendChild(
    createButton("8pt", () => {
      document.body.className = "pt8";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("10pt", () => {
      document.body.className = "pt10";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("12pt", () => {
      document.body.className = "pt12";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("14pt", () => {
      document.body.className = "pt14";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("20pt", () => {
      document.body.className = "pt20";
    })
  );

  createElementMain.appendChild(sectionTamanhoDaFonte);
};
buildSectionTamanhoDaFonte();

let buildSectionEspaLinhas = () => {
  let sectionEspaLinhas = document.createElement("section");
  sectionEspaLinhas.className = "espaeinhas";

  sectionEspaLinhas.appendChild(createTitle("Espaçamento entre as linhas"));
  sectionEspaLinhas.appendChild(
    createButton("1", () => {
      document.body.className = "line-height1";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("normal", () => {
      document.body.className = "line-heightnormal";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("1.5", () => {
      document.body.className = "line-height1e5";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("2.0", () => {
      document.body.className = "line-height2";
    })
  );
  sectionEspaLinhas.appendChild(
    createButton("3.0", () => {
      document.body.className = "line-height3";
    })
  );

  createElementMain.appendChild(sectionEspaLinhas);
};
buildSectionEspaLinhas();

let buildSectionTipoFonte = () => {
  let sectionTipoFonte = document.createElement("section");
  sectionTipoFonte.className = "tipofonte";

  sectionTipoFonte.appendChild(createTitle("Tipo da fonte"));
  sectionTipoFonte.appendChild(
    createButton("Arial", () => {
      document.body.className = "fontArial";
    })
  );
  sectionTipoFonte.appendChild(
    createButton("Times New Roman", () => {
      document.body.className = "fontTimesNewRoman";
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
  sectionText.className = "sectiontext";

  sectionText.appendChild(
    createText(
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    )
  );
  sectionText.className = "text";

  document.body.appendChild(sectionText);
};
buildSectionText();

// Toggle - pra usar futuramente
//   if (!document.body.className.contains("blackBg")) {
//     document.body.className.add("blackBg");
//   } else {
//     document.body.className.remove("blackBg");
//   }
// })
