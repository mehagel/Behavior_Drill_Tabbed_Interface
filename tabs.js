// function tabChange(tab){
//   $('.tabs li').removeClass();
//   $(tab).addClass('active');
// }

// function textChange(id){
//   var tab_name = $(id).children('a').attr('href');
//   $('.tab').hide();
//   $(tab_name).show();
// }

var tabChange = function(tab){
  $('.tabs li').removeClass();
  $(tab).addClass('active');
}

var textChange = function(obj){
  var tab_name = $(obj).children('a').attr('href');
  $('.tab').hide();
  $(tab_name).show();
};

$(document).ready(function () {
  $('#tab1').show();
  $('.tabs li').on('click', function(){
    tabChange(this);
    textChange(this);
  });
});