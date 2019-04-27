;(function (){
	
	var page = -1;
	var len = 6;
	var stop =false;
	
	function slide(){
		if(!stop){
			page++;
			if(page == len){
				page = 0;
				$(".silde").animate({"left":"0"},456);
				$(".silde-page li a").css({
				color:"red"
			})
			}
			$(".silde").animate({"left":"-"+page*730+"px"},456);
			$(".silde-page li").removeClass("on");
			$(".silde-page li").eq(page).addClass("on");
			
		}
		setTimeout(slide,3000);
	}
	slide();
	
	$(".wheel").mouseover(function(){
		stop = true;
	}).mouseout(function(){
		stop = false;
	});
	$(".wheel").mouseover(function(){
		stop = true;
	}).mouseout(function(){
		stop = false;
	});
	$(".silde-page li").mouseover(function(){
		page = $(this).index();
		$(".silde").stop(true,true).animate({"left":"-"+page*730+"px"},456);
		$(".silde-page li").removeClass("on");
		$(".silde-page li").eq(page).addClass("on");
	});
	 
	
})();
