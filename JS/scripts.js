$(Document).ready(() => {
    let akanNameCalculator = (day, month, year, gender) => {
        let cc, yy, dd, mm;
    
        let male = ["Kwasi", " Kwadwo", " Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", " Adwoa", " Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
        cc = parseInt(year.slice(0, 2));
        dd = parseInt(day);
        yy = parseInt(year.slice(2, 4));
        mm = parseInt(month);
    
        let akanDay = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    
        if (gender.toLowerCase() === "female"){
            return female[parseInt(akanDay) - 1];
        } else {
            return male[parseInt(akanDay) - 1];
        }
    }

    $("form#form").submit((e) => {
        e.preventDefault();

        let name = $("#name").val();
        let date = $("#date").val();
        date = date.replace(/-/g, '');
        let year = date.slice(0, 4);
        let month = date.slice(4, 6);
        let day = date.slice(6);
        let gender = $("#select-gender").val();

        let outputText = document.getElementById("output-text");
        
        if(gender === "select-gender"){
            alert("No gender specified");
        } else if (name === ""){
            alert("Name field cannot be empty")
        } else if (date === ""){
            alert("date fields cannot be empty")
        } else {
            outputText.innerHTML = "Hi " + name + ", your akan name is: " + "<span id='akan-name'>"+ akanNameCalculator(day, month, year, gender) + "</span>";
        }
    });

});