//https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let totalStart = blueStart + redStart;
    let totalLeft = totalStart - (bluePulled + redPulled);
    let blueLeft = blueStart - bluePulled;
    return blueLeft / totalLeft;
}
