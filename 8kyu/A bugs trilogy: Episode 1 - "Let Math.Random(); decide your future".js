//https://www.codewars.com/kata/562e98755e9214cd2500003d

function yourFutureCareer() {
    let career = Math.random();

    if (career <= 0.32) {
        return 'FrontEnd Developer';
    } else if (career <= 0.65) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }
}
