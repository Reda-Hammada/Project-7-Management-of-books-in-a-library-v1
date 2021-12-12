var selectedRow = null;
document.getElementById("formSubmit").addEventListener("submit", function(event){
    event.preventDefault();
    var work = workData();
    if(selectedRow === null){
        insertWork(work);
        resetForm();


    }

    else {

        updateWork(work);
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
    cell7 = row.insertCell(6).innerHTML = "<button onclick = edit(this)>modifier</button> <button onclick = deleteData(this);>suprimer</button>";

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
    document.getElementById('inputAuthor').value = selectedRow.cells[1].innerHTML;
    document.getElementById('inputPrix').value = selectedRow.cells[2].innerHTML;
    document.getElementById('inputDate').value = selectedRow.cells[3].innerHTML;
    document.getElementById('inputLanguage').value = selectedRow.cells[4].innerHTML;
    document.getElementsByName('workType').value = selectedRow.cells[5].innerHTML;

}

function updateWork(work){

    selectedRow.cells[0].innerHTML = work.title;
    selectedRow.cells[1].innerHTML = work.author;
    selectedRow.cells[2].innerHTML = work.price;
    selectedRow.cells[3].innerHTML = work.date;
    selectedRow.cells[4].innerHTML = work.language;
    selectedRow.cells[5].innerHTML = work.type;


}


// Delete Data

function deleteData(td){

    if(confirm("Do you want to delete this data")){
        row = td.parentElement.parentElement;
        document.getElementById('worksTable').deleteRow(row.rowIndex);
    }
};


