$(document).ready(function() {
	var getDocumentHeight = $(window).height();
	var getDocumentWidth = $(window).width();
	$('.goDown').click(function(){
		$(window).scrollTop(getDocumentHeight);
	});
	getAutoHeight();
	$(window).on('resize', getAutoHeight);

	if(getDocumentWidth <= 667){
		//alert(getDocumentWidth);
		$(".mapSection h2").text('Find us');
	}
});

function getAutoHeight(){
	var getDocumentHeight = $(window).height();
	$('.getDocumentHeight').height(getDocumentHeight);
}
