var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 

  }
};

Menu.init();

document.querySelector('.menu').onclick = function() { 
if (document.querySelector('.nav-list').style.visibility === "visible")
   {document.querySelector('.nav-list').style.visibility = "hidden"}
else 
   {document.querySelector('.nav-list').style.visibility = "visible"}
}

$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$(window).height()){
    $('.head-top').css({'height': $('.head-top').height(),'width': $('.head-top').width()}).addClass('fixed');
  }else{
    $('.head-top').removeClass('fixed');
  }
});