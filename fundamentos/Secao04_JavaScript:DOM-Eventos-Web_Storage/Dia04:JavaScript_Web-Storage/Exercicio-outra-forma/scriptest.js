window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content");
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  };

  const setFontColor = (color) => {
    let pharagraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < pharagraphs.length; index += 1) {
      pharagraphs[index].style.color = color;
      localStorage.setItem("fontColor", color);
    }
  };

  const setFontSize = (size) => {
    let pharagraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < pharagraphs.length; index += 1) {
      pharagraphs[index].style.fontSize = size;
      localStorage.setItem("fontSize", size);
    }
  };

  const setLineHeight = (lineheight) => {
    let pharagraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < pharagraphs.length; index += 1) {
      pharagraphs[index].style.lineHeight = lineheight;
      localStorage.setItem("lineHeight", lineheight);
    }
  };

  const setFontFamily = (fontfamily) => {
    let pharagraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < pharagraphs.length; index += 1) {
      pharagraphs[index].style.fontFamily = fontfamily;
      localStorage.setItem("fontFamily", fontfamily);
    }
  };

  let backgroundColorButton = document.querySelectorAll(
    "#background-color>button"
  );
  for (let index = 0; index < backgroundColorButton.length; index += 1) {
    backgroundColorButton[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML);
    });
  }

  let fontColorButton = document.querySelectorAll("#font-color>button");
  for (let index = 0; index < fontColorButton.length; index += 1) {
    fontColorButton[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML);
    });
  }

  let fontSizeButton = document.querySelectorAll("#font-size>button");
  for (let index = 0; index < fontSizeButton.length; index += 1) {
    fontSizeButton[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);
    });
  }

  let fontHeightButton = document.querySelectorAll("#font-height>button");
  for (let index = 0; index < fontHeightButton.length; index += 1) {
    fontHeightButton[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
    });
  }

  let fontfamilybutton = document.querySelectorAll("#font-family>button");
  for (let index = 0; index < fontfamilybutton.length; index += 1) {
    fontfamilybutton[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
    });
  }
  const initialize = () => {
    let backgroundColor = localStorage.getItem("backgroundColor");
    if (backgroundColor) setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem("fontColor");
    if (fontColor) setFontColor(colorFont);

    let fontSize = localStorage.getItem("fontSize");
    if (fontSize) setFontSize(fontSize);

    let lineHeight = localStorage.getItem("lineHeight");
    if (lineHeight) setLineHeight(lineHeight);

    let fontFamily = localStorage.getItem("fontFamily");
    if (fontFamily) setFontFamily(fontFamily);
  };
  initialize();
};
