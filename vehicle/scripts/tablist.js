function createTabList() {
	var curBodyId = document.body.id;
  console.log(curBodyId);
	var tabUl = document.createElement("UL");

	var indexItem = document.createElement("LI");
	if (curBodyId == "ABSTRACT") {
		var absLabel = document.createTextNode("[Abstract]");
		indexItem.appendChild(absLabel);
	} else {
		var absLabel = document.createTextNode("Abstract");
		var linkToAbsDoc = document.createElement("A");
		linkToAbsDoc.setAttribute("href", "index.html");
		linkToAbsDoc.appendChild(absLabel);
		indexItem.appendChild(linkToAbsDoc);
	}

  var contribItem = document.createElement("LI");
  if (curBodyId == "CONTRIB") {
    var contribLabel = document.createTextNode("[Contributions]");
    contribItem.appendChild(contribLabel);
  } else {
    var contribLabel = document.createTextNode("Contributions");
    var linkToContribDoc = document.createElement("A");
    linkToContribDoc.setAttribute("href", "contrib.html");
    linkToContribDoc.appendChild(contribLabel);
    contribItem.appendChild(linkToContribDoc);
  }

  var rsltItem = document.createElement("LI");
  if (curBodyId == "RSLT") {
    var rsltLabel = document.createTextNode("[Results]");
    rsltItem.appendChild(rsltLabel);
  } else {
    var rsltLabel = document.createTextNode("Results");
    var linkToRsltDoc = document.createElement("A");
    linkToRsltDoc.setAttribute("href", "rslt.html");
    linkToRsltDoc.appendChild(rsltLabel);
    rsltItem.appendChild(linkToRsltDoc);
  }

  tabUl.appendChild(indexItem);
  tabUl.appendChild(contribItem);
  tabUl.appendChild(rsltItem);
  var tabArea = document.getElementById("navlist");
  tabArea.appendChild(tabUl);
}
