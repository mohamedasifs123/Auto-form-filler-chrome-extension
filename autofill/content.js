chrome.runtime.onMessage.addListener(
   function(request, sender , sendResponse ){
       try{

            document.getElementById("first_name").value = request.firstname;
            document.getElementById("last_name").value =request.lastname;
            document.getElementById("email").value =request.email;
            document.getElementById("address").value =request.address;
            document.getElementById("city").value =request.city;
            document.getElementById("zip").value =request.postcode;
            document.getElementById("phone").value =request.phonenumber;
            sendResponse({status: "success"})
           }catch(error){
               console.log(error);
               sendResponse({status:error})
}return true})

