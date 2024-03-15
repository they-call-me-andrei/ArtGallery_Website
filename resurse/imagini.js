function showHeight(img){
			$(".full-picture .picture .height").show();
			$(".full-picture .picture .width").hide();
			$(".full-picture .picture .height").css('background-image','url('+ img +')');
		}

		function showWidth(img){
			$(".full-picture .picture .height").hide();
			$(".full-picture .picture .width").show();
			$(".full-picture .picture .width").css('background-image','url('+ img +')');
		}

		var x;
		$(".photo").click(function(){

			var y = $(this).attr('class').split(',')[1];
			x = parseInt($(this).attr('id'),10);
			if(x == 1){
				$(".full-picture .sec1 p").hide();
			}
			var img = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1'); 
			if($(this).parent().hasClass('height') == true){
				showHeight(img);
			}else{
				showWidth(img);
			}
			$(".full-picture").css('display', 'flex');
			$(".full-picture .picture p").text(y);
		});
		$(".full-picture .sec3 p").click(function(){
			if(x<8){
				if(x == 7){
					$(this).hide();
				}
				$(".full-picture .sec1 p").show();
				x++;
				var img2 = $("#" + x).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1'); 
				var y = $("#" + x).attr('class').split(',')[1];
				$(".full-picture .picture p").text(y);
				if($("#" + x).parent().hasClass('height') == true){
					showHeight(img2);
				}else{
					showWidth(img2);
				}
			}
		});
		$(".full-picture .sec1 p").click(function(){
			if(x>1){
				if(x == 2){
					$(this).hide();
				}
				$(".full-picture .sec3 p").show();
				x--;
				var img2 = $("#" + x).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1'); 
				var y = $("#" + x).attr('class').split(',')[1];
				$(".full-picture .picture p").text(y);
				if($("#" + x).parent().hasClass('height') == true){
					showHeight(img2);
				}else{
					showWidth(img2);
				}
			}
		});
		$(".sec3 .part1").click(function(){
			$(".full-picture").hide();
		});