var url = "upload.php?url=",
	Upload = {
	try :function(str){
		$.ajax({
			// dataType: "JSON",
			type: "get",
			url: url+str,
			
			error : function(){
				$(".errorlog").empty();
				$(".errorlog").append("Your link is really missing");
				return;
			},
			success : function(data){
				
			}
		})
	}
}