document.getElementById('formSubmit').addEventListener("submit", function(event){
    event.preventDefault();
    var work = workData();
    insertNewWork = work;

});

function workData(){

    var work = {};
    work["Title"] = document.getElementById('inputTitle').value;
    work["Author"] = document.getElementById('inputAuthor').value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["Date"] = document.getElementById('inputDate').value;
    work["language"] = document.getElementById('inputLanguage').value;
    var checkedvalues = document.getElementsByName("workType");
    for( i = 0; i < checkedvalues.length; i++){
        if(checkedvalues[i].checked){
            work["type"] = checkedvalues[i];
            break;
        }
    }
    return work;
}

function insertNewWork(work){

    var tableBody = document.getElementsByTagName('tbody')[0];
    var row = tableBody.insertRow(tableBody.length);
    var cell = row.insertCell(0).innerHTML = work['title'];
    cell = row.insertCell(1);
    cell.innerHTML = work.author;
    cell = row.insertCell(2);
    cell.innerHTML = work.price;
    cell = row.insertCell(3);
    cell.innerHTML = work.date;
    cell = row.insertCell(4);
    cell.innerHTML = work.language
    cell = row.insertCell(5)
    cell.innerHTML = work.type
    cell = row.insertCell(6)



    
}