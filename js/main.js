var elForm = document.querySelector(".heroForm");
var elOutput = document.querySelector("#inputFarangit");

elForm.addEventListener("submit", function(evt) {

    evt.preventDefault();
    var elCurrentInput = parseFloat(document.querySelector("#inputGradus").value.trim(), 10);

    if (isNaN = (elCurrentInput)) {
        var CurrentResult = (elCurrentInput * (9/5) + 32).toFixed(1);
        elOutput.value = CurrentResult;
    } else {
        elOutput.value = "Only Numbers";
    }


    if (elCurrentInput < 0) {
        document.body.classList = ("bg-info");
    }else if(elCurrentInput < 15) {
        document.body.classList = ("bg-warning");
    }else{
        document.body.classList = ("bg-danger");
    }
})