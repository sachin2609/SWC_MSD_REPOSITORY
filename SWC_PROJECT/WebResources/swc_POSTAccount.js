function callOtherDomain() {
  var req = new XMLHttpRequest();
  var url = 'https://httpbin.org/get';

  req.open('GET', url, true);
Xrm.Page.getAttribute("websiteurl").setValue(url ); 

  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     alert("URL is updated successfully");
     // alert(req.responseText );//
    }
  };

  req.send(); 
}

function SetFormBasedOnAccountType() {
	//var targetForm;
var availableForms = Xrm.Page.ui.formSelector.items.get();
var accountType = Xrm.Page.getAttribute("swc_accounttype").getValue();
var currentFormId = Xrm.Page.ui.formSelector.getCurrentItem().getId();

if(accountType == 737670000 && currentFormId == "58c68423-789e-ea11-a812-000d3a0a7552")
{
	return;
}
else if(accountType == 737670001 && currentFormId == "66167678-909e-ea11-a812-000d3a0a7552")
{
	return;
}
for (var i in availableForms) {
     var form = availableForms[i];
	 if(accountType == 737670000 && form.getId() == "58c68423-789e-ea11-a812-000d3a0a7552")
	 {
		 //targetForm = "58c68423-789e-ea11-a812-000d3a0a7552";
		 form.navigate();
	 }
	 else if(accountType == 737670001 && form.getId() == "66167678-909e-ea11-a812-000d3a0a7552")
	 {
		 //targetForm = "66167678-909e-ea11-a812-000d3a0a7552";
		 form.navigate();
	 }
	      
}
}