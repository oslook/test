function openCount(id){
	$.getJSON("http://ostest.jd-app.com/count.php?callback=?", {gid: id, type: 1}, function(data){
//  var obj=$.parseJSON(data);  
//  $.each(obj,function(idx,item){  
//  $('#tb1').append("<tr><td>"+item.totalcount+"</td><td>"+item.highscore+"</td><tr>");  
//})  	
	
	});
}
function clickCount(id){
	$.getJSON("http://ostest.jd-app.com/count.php?callback=?", {gid: id, type: 2}, function(data){});

}
function shareCount(id){
	$.getJSON("http://ostest.jd-app.com/count.php?callback=?", {gid: id, type: 3}, function(data){});
}