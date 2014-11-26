<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<title>Link Conform</title>
</head>
<body>
	
<a>请点击确认：</a>
<table border="1">
<tr>
<th>link</th>
<th>status</th>
</tr>
<?php
$links=array(
"http://oslook.lima-city.at",
"http://oslook.lima-city.ch",
"http://oslook.lima-city.de",
"http://oslook.12hp.at",
"http://oslook.12hp.de",
"http://oslook.12hp.ch",
"http://oslook.4lima.at",
"http://oslook.4lima.de",
"http://oslook.4lima.ch",
"http://oslook.2ix.at",
"http://oslook.2ix.de",
"http://oslook.2ix.ch",
"http://oslook.lima.zone",
"http://go20141103.github.io",
"http://ad20141031.github.io",
"http://oslook.lima-city.rocks",
"http://oslook.webspace.rocks",
"http://ad201410310100.sinaapp.com/",
"http://1.ad201410310100.sinaapp.com/",
"http://2.ad201410310100.sinaapp.com/",
"http://3.ad201410310100.sinaapp.com/",
"http://4.ad201410310100.sinaapp.com/",
"http://5.ad201410310100.sinaapp.com/",
"http://6.ad201410310100.sinaapp.com/",

);


$arrlength=count($links);

for($x=0;$x<$arrlength;$x++) {
  echo "<tr><td><a href='". $links[$x]. "/WXTEST'>".$links[$x] ."</a></td><td></td>";
  echo "</tr>";
}

?>
</table>

</body>
</html>
