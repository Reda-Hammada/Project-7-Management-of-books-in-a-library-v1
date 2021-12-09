document.getElementById("formSubmit").addEventListener("submit", function (event){
    event.preventDefault();
    var work = readWork();
});



function readWork(){

    var work = {};
    work["title"] = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            work["type"] = cheackValues[i].value;
            break;
        }
}

return work;

}

function insertNewRow(work){

    var
}