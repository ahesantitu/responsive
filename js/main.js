window.onload=()=>{
	setTimeout(()=>{
	document.querySelector("body").classList.add("display");	
	},1000);
};

document.querySelector('.hamburger-menu').addEventListener('click', () => {
document.querySelector('.container').classList.toggle('change');
});


$(document).ready(function(){ 
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
 
		});


