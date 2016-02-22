var x = false;
var s = WScript.StdIn.Read (65535); // limit the amount of characters to 8192 to avoid accidental execution on large documents
var l = s.length;
var o = WScript.StdOut;
var n = WScript.Arguments.Named;
var indent = "  "; // indent character

function AppendIndent(/*int*/ count) {
	for (; count > 0; --count)
		o.Write(indent);
}

var depth = 0;
for (var i=0; i<l; i++) {
	var ch = s.charAt(i);

	if (ch == '\"') {// found string span
		var str = true;
		while (str) {
			o.Write(ch);
			ch = s.charAt(++i);
			if (ch == '\\') {
				o.Write(ch);
				ch = s.charAt(++i);
			}
			else if (ch == '\"')
				str = false;
		}
	}

	switch (ch) {
		case '{':
		case '[':
			o.Write(ch);
			o.WriteLine();
			AppendIndent(++depth);
			break;
		case '}':
		case ']':
			o.WriteLine();
			AppendIndent(--depth);
			o.Write(ch);
			break;
		case ',':
			o.Write(ch);
			o.WriteLine();
			AppendIndent(depth);
			break;
		case ':':
			o.Write(": ");
			break;
		default:
			if (!(ch == ' ' || ch == '\t' || ch == '\r' || ch == '\n'))
				o.Write(ch);
			break;
	}
}
