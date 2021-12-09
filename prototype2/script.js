document.getElementById("formSubmit").addEventListener("submit", function (event){
    event.preventDefault();
    var work = readWork();
    insertNewRow(work)
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


function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.type
    cell7 = newRow.insertCell(6)
    cell7.innerHTML = "<button onclick ='Edit(this)'>Update</button> <button onclick='Delete(this)'>Delete</button>";


 

}

function Edit(){


}

function Delete(td){
    if(confirm("Are you sure you want to delete this")){
        
        row = td.parentElement.parentElement;
        document.getElementById("worksTable").deleteRow(row.rowIndex);


    }


}



