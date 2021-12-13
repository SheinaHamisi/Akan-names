$(Document).ready(function(){
    function akanNameCalculator(day, month, year, gender) {
        var cc, yy, dd, mm;
    
        var male = ["Kwasi", " Kwadwo", " Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var female = ["Akosua", " Adwoa", " Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
        cc = parseInt(year.slice(0, 2));
        dd = parseInt(day);
        yy = parseInt(year.slice(2, 4));
        mm = parseInt(month);
    
        var akanDay = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    
        if (gender.toLowerCase() === "female"){
            return female[parseInt(akanDay) - 1];
        } else {
            return male[parseInt(akanDay) - 1];
        }
    }

    $("form#form").submit(function(e){
        e.preventDefault();
        var name = $("#name").val();
        var date = $("#date").val();
        date = date.replace(/-/g, '');
        var year = date.slice(0, 4);
        var month = date.slice(4, 6);
        var day = date.slice(6);
        var gender = $("#select-gender").val();
        
        if(gender === "select-gender"){
            alert("No gender specified");
        } else {
            alert("Hi " + name + ", your akan name is: " + akanNameCalculator(day, month, year, gender));
        }
    });

});