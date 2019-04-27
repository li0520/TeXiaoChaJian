function Time(){
    // 获取秒对象
    var second = $(".east-limitdown-spanth").text()
    var sum =parseInt(second - 1)
//			console.log(sum)
    setTimeout(Time,1000);
    $(".east-limitdown-spanth").text(sum)
    if(second == 0 ){
          // 重置秒
        $(".east-limitdown-spanth").text(59)
          // 获取分对象
        var minute = $(".east-limitdown-spant").text()
        var summin =parseInt(minute - 1)
        $(".east-limitdown-spant").text(summin)
        if(minute == 0 ){
              // 重置分
            $(".east-limitdown-spant").text(59)
              // 获取小时对象
            var hour = $(".east-limitdown-spano").text()
            var sumhour =parseInt(hour - 1)
            $(".east-limitdown-spano").text(sumhour)
            if(sumhour == 0){
                console.log("限时购结束")
            }
        }
    }
}
Time()