function storeData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var terms = document.getElementById("terms").checked;
  
  var data = {
    "name": name,
    "email": email,
    "password": password,
    "dob": dob,
    "terms": terms
  };
  
  var dataString = JSON.stringify(data);
  
  localStorage.setItem(email, dataString);
  
  document.getElementById("regForm").reset();
  
  displayUsers();
}

function displayUsers() {
  var tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";
  
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var dataString = localStorage.getItem(key);
    var data = JSON.parse(dataString);
    
    var row = "<tr><td>" + data.name + "</td><td>" + data.email + "</td><td>" + data.password + "</td><td>" + data.dob + "</td><td>" + data.terms + "</td></tr>";
    
    tableBody.innerHTML += row;
  }
}

window.onload = function() {
  displayUsers();
}
