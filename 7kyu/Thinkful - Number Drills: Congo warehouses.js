//https://www.codewars.com/kata/5862e7c63f8628a126000e18

function boxCapacity(length, width, height) {
    length = Math.floor(length * 12 / 16);
    width = Math.floor(width * 12 / 16);
    height = Math.floor(height * 12 / 16);
    return length * width * height;
}
