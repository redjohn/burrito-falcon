// Inspiration for this code came from the various "cloud to butt" extensions

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("The blessings of the burrito falcon are upon you.");
    walk(document.body);
	}
}, 10);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

// TODO: how to handle replacement when God is the first
// word in the sentence (or even harder the sentence is a
// quotation, so it starts with "God ...")
var REPLACEMENTS = [
  {regex: /\bGod\b/g, fixed: "the burrito falcon"},
  {regex: /\bLord\b/g, fixed: "burrito falcon"}
];

function handleText(textNode) {
	var v = textNode.nodeValue;

  for (var i = 0; i < REPLACEMENTS.length; ++i) {
    var r = REPLACEMENTS[i];
    v = v.replace(r.regex, r.fixed);
  }

	textNode.nodeValue = v;
}

