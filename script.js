function linux() {
	const bdy =  document.querySelector(".welcome");
	let list = [];
	let listLinks = [];
	list.push("Exceptions");
	list.push("Exceptions");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	for (let i = 0; i < listLinks.length;i++) {
		div = document.createElement('div');
		div.setAttribute('style',"padding:5px;width:900px;height:500px;border-radius:12px;background-color:black;position: relative;display: flex;flex-flow: column;");
		vid = document.createElement('iframe');
		vid.src = listLinks[i];
		vid.setAttribute('height',"90%");
		vid.setAttribute('width',"99.7%");
		vid.setAttribute('frameborder',"0");
		vid.setAttribute('scrolling',"no");
		vid.setAttribute('seamless',"");
		vid.setAttribute('allowfullscreen',"allowfullscreen");
		title = document.createElement('h4');
		title.setAttribute('id',"vTit");
		let str = new String(list[i]);
		title.innerHTML = str.toUpperCase();
		div.append(vid);
		div.append(title);
		bdy.append(div);
	}	
}
function programming() {
	const bdy =  document.querySelector(".welcome");
	let list = [];
	let listLinks = [];
	list.push("Exceptions");
	list.push("Exceptions");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	for (let i = 0; i < listLinks.length;i++) {
		div = document.createElement('div');
		div.setAttribute('style',"padding:5px;width:900px;height:500px;border-radius:12px;background-color:black;position: relative;display: flex;flex-flow: column;");
		vid = document.createElement('iframe');
		vid.src = listLinks[i];
		vid.setAttribute('height',"90%");
		vid.setAttribute('width',"99.7%");
		vid.setAttribute('frameborder',"0");
		vid.setAttribute('scrolling',"no");
		vid.setAttribute('seamless',"");
		vid.setAttribute('allowfullscreen',"allowfullscreen");
		title = document.createElement('h4');
		title.setAttribute('id',"vTit");
		let str = new String(list[i]);
		title.innerHTML = str.toUpperCase();
		div.append(vid);
		div.append(title);
		bdy.append(div);
	}	
}
function networking() {
	const bdy =  document.querySelector(".welcome");
	let list = [];
	let listLinks = [];
	list.push("Exceptions");
	list.push("Exceptions");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	listLinks.push("https://drive.google.com/file/d/1cf-FomFuJlSp-K9pkzRTlKiAEh0mYpml/preview");
	for (let i = 0; i < listLinks.length;i++) {
		div = document.createElement('div');
		div.setAttribute('style',"padding:5px;width:900px;height:500px;border-radius:12px;background-color:black;position: relative;display: flex;flex-flow: column;");
		vid = document.createElement('iframe');
		vid.src = listLinks[i];
		vid.setAttribute('height',"90%");
		vid.setAttribute('width',"99.7%");
		vid.setAttribute('frameborder',"0");
		vid.setAttribute('scrolling',"no");
		vid.setAttribute('seamless',"");
		vid.setAttribute('allowfullscreen',"allowfullscreen");
		title = document.createElement('h4');
		title.setAttribute('id',"vTit");
		let str = new String(list[i]);
		title.innerHTML = str.toUpperCase();
		div.append(vid);
		div.append(title);
		bdy.append(div);
	}	
}