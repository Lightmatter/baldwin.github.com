move_window = function(){
    if (window.location.hash) {
        var current_promise = window.location.hash
        current_promise = current_promise.slice(1)
    } else {
        var current_promise = "one"
    } 
    $("[data-url='" + current_promise + "']").click()
}

$(document).ready(function(){


    $('.highlight').hover(function(){
        $(this).addClass("animated pulse")
    })

    $('.play-video').hover(function(){
        $(this).addClass("animated pulse")
    })


//width less than 786
if (( $(window).width() <= 768 || $(window).width() <= 1024 )) {
    $('.fliptext0').insertBefore('.flipimage0');
    $('.fliptext1').insertBefore('.flipimage1');
    $('.fliptext2').insertBefore('.flipimage2');
}
else {
    $('.flipimage0').insertBefore('.fliptext0');
    $('.flipimage1').insertBefore('.fliptext1');
    $('.flipimage2').insertBefore('.fliptext2');
}
})

//show iframe upon clicking butotn.
$('.play-video').click(function() {
    $('iframe').removeClass('hide')
    $('.play-video').hide()
    $('#bb').hide()
})



//5 promises rotate images


$('.highlight').click(function(){
    $(".main-holder").addClass('hide')
    id = $(this).data('img')
    $('#' + id).removeClass('hide')
});

$('.highlight').click(function(){
    $(".text-holder").addClass('hide')
    id = $(this).data('txt')
    $('#' + id).removeClass('hide')
});



$('.highlight').click(function() {
    promise = $(this)
    url = "five_things.html#" + promise.data('url')
    title = promise.children('p').text()
    pageObject = {'title':title, 'url':url}
    history.pushState(pageObject, pageObject.title, pageObject.url)
})

move_window()
window.onpopstate = move_window


;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


        })(jQuery)
