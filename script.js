var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);

    }
    resetForm();

}

  //Retrieve the data
  function readFormData(){
    var formData ={};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["middlename"] = document.getElementById("middlename").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["course"] = document.getElementById("course").value;
    formData["schoolyear"] = document.getElementById("schoolyear").value;
    return formData;
  }
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.middlename;
    var cell3 = newRow.insertCell(2);  
        cell3.innerHTML = data.lastname;  
    var cell4 = newRow.insertCell(3);   
        cell4.innerHTML = data.age; 
        var cell4 = newRow.insertCell(4);   
        cell4.innerHTML = data.gender;
        var cell4 = newRow.insertCell(5);   
        cell4.innerHTML = data.birthday;  
        var cell4 = newRow.insertCell(6);   
        cell4.innerHTML = data.course; 
        var cell4 = newRow.insertCell(7);   
        cell4.innerHTML = data.schoolyear; 
    var cell5 = newRow.insertCell(8);
        cell5.innerHTML = '<button onClick= onEdit(this) >Edit</button> <button onClick= onDelete(this)>Delete</button>';

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('middlename').value = selectedRow.cells[1].innerHTML;
    document.getElementById('lastname').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;
    document.getElementById('birthday').value = selectedRow.cells[5].innerHTML;
    document.getElementById('course').value = selectedRow.cells[6].innerHTML;
    document.getElementById('schoolyear').value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.middlename;
    selectedRow.cells[2].innerHTML = formData.lastname;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.birthday;
    selectedRow.cells[6].innerHTML = formData.course;
    selectedRow.cells[7].innerHTML = formData.schoolyear;

}

function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
    document.getElementById('firstname').value = '';
    document.getElementById('middlename').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('course').value = '';
    document.getElementById('schoolyear').value = '';
    
}
function searchForm(){
    document.getElementById('firstname').value = '';
    document.getElementById('middlename').value = '';
    document.getElementById('lastname').value = '';
}