function akanNameCalculator(day, month, year, gender) {
    var cc, yy, dd, mm;

    var male = ["Kwasi", " Kwadwo", " Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", " Adwoa", " Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    gender = "MAle";

    year = year.toString();

    cc = parseInt(year[0].toString() + year[1]);
    dd = day;
    yy = parseInt(year[2].toString() + year[3]);
    mm = month;

    var akanDay = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    if (gender.toLowerCase() === "female"){
        return female[parseInt(akanDay) - 1];
    } else {
        return male[parseInt(akanDay) - 1];
    }
}