//your JS code here. If required.
function callme(){
	let element = document.createElement("div");
	element.id = "browser-info";

	element.innerText = `You are using ${navigator.appName} version ${navigator.appVersion}`;
	document.body.append(element);

}
callme();
