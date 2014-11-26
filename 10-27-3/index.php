<?

$url = 'http://wx.oslook.com' . $_SERVER['REQUEST_URI'];
if (strpos($_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'], "oslook.com") > 0){
	header("location: index.html");
}else{
	header("location: $url");
}
exit;
?>