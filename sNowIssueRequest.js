/**
 * ServiceNow Issue Service Request POST
 */

var xmlRequestBody = document.getElementById("theSNincidentFixletXML").innerHTML;
function postActionViaBfRest() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://mjone1s.service-now.com/api/now/v1/table/incident";	
	var requestBody = '{"short_description":"This is a SNow Incident Test insert"}';

	var client=new XMLHttpRequest();
	client.open("POST",url,true,"Admin","A1rb0rn3");
	client.setRequestHeader('Accept','application/json');
	client.setRequestHeader('Content-Type','application/json');

	client.onreadystatechange = function(){
		if(this.readyState = this.DONE){
			document.getElementById("xmlRpcResult").innerHTML=this.status + this.response;
		}};

		client.send(requestBody);
	}