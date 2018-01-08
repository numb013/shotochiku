$(window).load(function() {
	//画面高さ取得
	h = $(window).height();
	$(".main_img").css("min-height", h + "px");
	});
	$(window).resize(function() {
	//画面リサイズ時の高さ取得
	h = $(window).height();
	$(".main_img").css("min-height", h + "px");
});

jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['images/top1.jpg','images/top2.jpg','images/top3.jpg'], // 切り替える背景画像を指定
    });
});