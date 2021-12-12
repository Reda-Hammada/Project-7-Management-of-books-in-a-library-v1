document.getElementById("formSubmit").addEventListener("submit", function(event){
    event.preventDefault();
    var work = workData();
    insertWork(work);

});

function workData(){
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

function insertWork() {

    var table = document.getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length);
    row.insertCell(0).innerHTML = work.title;
    cell2 = row.insertCell(1).innerHTML = work.author;
    cell3 = row.insertCell(2).innerHtML = work.price;
    cell4 = row.insertCell(3).innerHTML = work.date;
    cell5 = row.insertCell(4).innerHTML = work.language;
    cell6 = row.insertCell(5).innerHTML = "<button>modifier</button> <button>suprimer</button>";

};

