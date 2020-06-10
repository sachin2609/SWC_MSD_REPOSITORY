function GetExternalAPI() {
var entity = {};

entity["swc_site"] ="America"

var req = new XMLHttpRequest();

req.open("PATCH", Xrm.Page.context.getClientUrl() + "/api/data/v9.0/accounts(7bc5731a-4994-ea11-a812-000d3af02d13)", true);

req.setRequestHeader("OData-MaxVersion", "4.0");

req.setRequestHeader("OData-Version", "4.0");

req.setRequestHeader("Accept", "application/json");

req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

req.onreadystatechange = function () {

   if (this.readyState === 4) {

       req.onreadystatechange = null;

       if (this.status === 204) {

           //Success - No Return Data - Do Something

       }

       else {

           alert(this.statusText);

       }

   }

};

req.send(JSON.stringify(entity));
}