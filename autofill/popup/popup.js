function autofill(){
  chrome.storage.sync.get("formdata", function(data){
    var formdata = data.formdata;
    if(formdata)
    {
      chrome.tabs.query({active
:true , currentWindow:true},function(tabs){
      chrome.tabs.sendMessage(tabs[0].id,formdata, function(response){
        console.log(response);
      })  
      })
    }
    
  })}



document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("autofill").addEventListener("click",autofill);
});


