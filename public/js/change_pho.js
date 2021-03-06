$(function(){
  var _select; //object now selected
  var _index;//number
  var picture = [ 'pic/ghost_house.jpg',
                  'pic/wood_house.jpg',
                  'pic/stone_house.jpg',
                  'pic/gold_house.jpg',
                  'pic/white_house.jpg'];

  $(".list ul li").on("click",function(){
    _select = $(this);//set object
    var num = $(".list ul li").index(_select);
    if(_index !== num){
      _index = num;
      changePhoto();
    }
  });

  function changePhoto(){
    $(".list ul li").fadeTo("fast",1);
    _select.fadeTo("fast",0.5);
    $(".photo img").fadeOut(500,function(){
      $(this).attr("src", picture[_index]).load(function(){
        $(".photo img").fadeIn(500);
      });   
    });
  };
});
