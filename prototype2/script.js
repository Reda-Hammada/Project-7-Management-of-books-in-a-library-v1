var selectedRow = null;
document.getElementById("formSubmit").addEventListener("submit", function(event){
    event.preventDefault();
    var work = workData();
    if(selectedRow === null){
        insertWork(work);
        resetForm();


    }

    else {


    }

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

function insertWork(work) {

    var table = document.getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length);
    row.insertCell(0).innerHTML = work.title;
    cell2 = row.insertCell(1).innerHTML = work.author;
    cell3 = row.insertCell(2).innerHtML = work.price;
    cell4 = row.insertCell(3).innerHTML = work.date;
    cell5 = row.insertCell(4).innerHTML = work.language;
    cell6 = row.insertCell(5).innerHTML = work.type;
    cell7 = row.insertCell(6).innerHTML = "<button>modifier</button> <button onclick = deleteData(this);>suprimer</button>";

};

function resetForm(){

    document.getElementById("inputTitle").value  = "";
    document.getElementById("inputAuthor").value  = "";
    document.getElementById("inputPrix").value  = "";
    document.getElementById("inputDate").value  = "";
    document.getElementById("inputLanguage").value  = "";
    document.getElementsByName("workType").value = "";
}


//Edit Data 

function edit(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById('inputTitle').value = selectedRow.cells[0].innerHTML;
    d

}


// Delete Data

function deleteData(td){

    if(confirm("Do you want to delete this data")){
        row = td.parentElement.parentElement;
        document.getElementById('worksTable').deleteRow(row.rowIndex);
    }
};


