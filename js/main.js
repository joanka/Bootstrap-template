
$(document).ready(function(){
	// Sticky menu 
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
	})
	// Cache selectors
	var lastId,
	    topMenu = $("#ul_nav"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });
	// Bind click handler to menu items
	// We can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 1000);
	  e.preventDefault();
	  $("#myNavbar").collapse('hide');
	});
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position 
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class 
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});	
});
	

    

    