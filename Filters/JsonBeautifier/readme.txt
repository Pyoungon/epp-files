Purpose
=================================================
	Beautifies JSON blocks.
About
=================================================
	The code was ported from a famous C# JSON library, fastJSON.
	Library: http://www.codeproject.com/Articles/159450/fastJSON
	Original author: Mehdi Gholam
	Author: wmjordan@163.com (W. Jordan)
	Version: 2015-4-3

Installation
=================================================
1, Copy JsonBeautifier.js to "(EditPlusDir)\filters\JsonBeautifier\JsonBeautifier.js"
2, Setup the following Tool Settings in EditPlus:

	COMMAND=CScript.exe
	ARGUMENT="$(AppDir)\filters\JsonBeautifier\JsonBeautifier.js" //NoLogo
	RUN_AS_TEXT_FILTER=Replace

