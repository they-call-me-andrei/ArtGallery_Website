var x = 0;
		$(".menu-open").click(function(){
			$(".full").show();
		});
		$(".full-close").click(function(){
			$(".full").hide();
		});
		$(".full-part2 ul:nth-child(1) li:nth-child(1)").click(function(){
			if(x%2 == 0){
				$(".full-part2 ul:nth-child(1)").animate({
					marginTop:"-180px"
				},500);
				x++;
			}else {
				$(".full-part2 ul:nth-child(1)").animate({
					marginTop:"0px"
				},500);
				x++;
			}
		});
		$(".full-close").click(function(){
			$(".full-part2 ul:nth-child(1)").css('margin-top',"0px");
			x = 0;
		});

function myhref(web){
     window.location.href = web;
}