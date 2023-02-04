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

let createText = (title) => {
  let newText = document.createElement("p");
  newText.innerHTML = title;
  return newtitle;
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

  document.body.appendChild(sectionCorDaFonte);
};
buildSectionCorDaFonte();

let buildSectionTamanhoDaFonte = () => {
  let sectionTamanhoDaFonte = document.createElement("section");
  sectionTamanhoDaFonte.className = "tamanhodafonte";

  sectionTamanhoDaFonte.appendChild(createTitle("Tamanho Da Fonte"));
  sectionTamanhoDaFonte.appendChild(
    createButton("8pt", () => {
      document.body.className = "8Pt";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("10pt", () => {
      document.body.className = "10Pt";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("12pt", () => {
      document.body.className = "12Pt";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("14pt", () => {
      document.body.className = "14Pt";
    })
  );
  sectionTamanhoDaFonte.appendChild(
    createButton("20pt", () => {
      document.body.className = "20Pt";
    })
  );

  document.body.appendChild(sectionTamanhoDaFonte);
};
buildSectionTamanhoDaFonte();

// let buildSectionText = () => {
//   let sectionText = document.createElement("section");
//   sectionText.className = "sectiontext";

//   sectionText.appendChild(createText("Oi"));
//   sectionText.className = "text";

//   document.body.appendChild(sectionText);
// };
// buildSectionText();

// Toggle - pra usar futuramente
//   if (!document.body.className.contains("blackBg")) {
//     document.body.className.add("blackBg");
//   } else {
//     document.body.className.remove("blackBg");
//   }
// })
