function Art(name, price, src, id)
{
	this.name = name;
	this.price = price;
	this.src = src;
	this.id = id;
}

function getPrice()
{
	return this.price;
}

function buildGallery(list)
{
	document.write("<div id='info'>&nbsp;</div>");
	for (i = 0; i < list.length; i++) {
		document.write("<img src='" + list[i].src + "' name='" + list[i].name + "' id='" + list[i].id + "' class='galleryItem' width='10%' height='10%'>");
	}
	document.write("<div id='preview'>&nbsp;</div>");
}