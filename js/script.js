/* $(".Search").click(function () {
  $("#keyboard").addClass("keyboard_on");
});

if (keyboard_off) {
    $('#keyboard').addClass(keyboard_off);
  }
  else {
    $('#keyboard').removeClass(keyboard_off);
  }


*/

/* Переключатели */

(function($) {
$(function() {

  $('ul.tabs').delegate('li:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current')
      .parents('body').find('div.box').hide().eq($(this).index()).fadeIn(150);
  })

})
})(jQuery)

/* Скрол */

$(function()
{
    $('.scroll-pane').jScrollPane(
    	{
            horizontalGutter: 835,
		}
	);
});


/* Спойлер */

    jQuery(document).ready(function(){
        // Скрываем все спойлеры
        jQuery('.spoiler-body').hide()
        // по клику отключаем класс folded, включаем unfolded, затем для следующего
        // элемента после блока .spoiler-head (т.е. .spoiler-body) показываем текст спойлера
        jQuery('.spoiler-head').click(function(){
            jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
        })
    })
