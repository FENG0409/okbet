$(function(){
  // sidebar
  let SideMenu = $('[data-toggle=collapse-side]');
    var get_sidebar = SideMenu.attr('data-target-sidebar');
    var get_content = SideMenu.attr('data-target-content');
    SideMenu.click(function(event){
        $(get_sidebar).toggleClass('in');
        $(get_content).toggleClass('out');
  });

});