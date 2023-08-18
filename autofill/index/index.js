function saveform(){
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var postcode = document.getElementById('postcode').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var formdata = {
    "firstname":firstname,
    "lastname":lastname,
    "email":email,
    "address":address,
    "city":city,
    "postcode":postcode,
    "phonenumber":phonenumber
  }; 
  
chrome.storage.sync.set({"formdata":formdata} , function(){
console.log("form saved");
});
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("sav").addEventListener("click",saveform);
})
