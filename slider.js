// JavaScript Document
$(document).ready(function(){
				
				/*   slider    */
				
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
        slidesToScroll: 1,
		responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
	}); // end slider
	
				/*  form   */

    $('#form').hide();
	$('.contact').click(function(){
	    $('#form').fadeIn();
        $('.contact').hide();
    }); //end click
    $('.send').click(function(){
        $('.contact').fadeIn();
        $('#form').hide();
    }); //end click
}); //end ready