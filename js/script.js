var input = document.querySelector("input[name=checkbox]");
console.log(input);

function onSetTheme() {
    console.log(input.checked);
    if (input.checked) {
      console.log('Light');
      bgColor = "hsl(0, 0%, 100%)"; // $White_BG
      headTopBgColor = "hsl(225, 100%, 98%)"; //$VeryPaleBlue_TopBG_Patt
      whiteText = "hsl(230, 17%, 14%)"; //$VeryDarkBlue_Text: hsl(230, 17%, 14%)
      cardBgColor = "hsl(227, 47%, 96%)"; //$LightGrayishBlue_CardBG: hsl(227, 47%, 96%)
      cardBgColorHover = "hsl(228, 12%, 44%)"; //$LightGrayishBlue_CardBG_II: hsl(228, 12%, 44%)
      buttonBg = "hsl(230, 22%, 74%)";
      buttonFg = "hsl(227, 47%, 96%)";
    } else {
      console.log('Dark');
      bgColor = "hsl(230, 17%, 14%)"; // $VeryDarkBlue_BG
      headTopBgColor = "hsl(232, 30%, 25%)"; // VeryDarkBlue_TOP_BG_Patt
      whiteText = "hsl(0, 0%, 100%)"; //$White_Text: hsl(0, 0%, 100%)
      cardBgColor = "hsl(228, 28%, 20%)"; //$DarkDesaturatedBlue_CardBG: hsl(228, 28%, 20%)
      cardBgColorHover = "hsl(232, 35%, 25%)"; //$DarkDesaturatedBlue_CardBG_II: hsl(232, 35%, 25%)
      buttonBg = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
      buttonFg = "hsl(228, 28%, 20%)";
    }
    document.querySelector('body').style.setProperty('--main-bg-color', bgColor);
    document.querySelector('body').style.setProperty('--headTop-bg-color', headTopBgColor);
    document.querySelector('body').style.setProperty('--whiteText', whiteText);
    document.querySelector('body').style.setProperty('--card-bg-color', cardBgColor);
    document.querySelector('body').style.setProperty('--card-bg-colorHover', cardBgColorHover);
    document.querySelector('body').style.setProperty('--button-bg', buttonBg);
    document.querySelector('body').style.setProperty('--button-fg', buttonFg);
}
input.addEventListener('change', onSetTheme);
