(function() {

  function cFat(fat) {
    return fat * 9;
  }

  function cProtien(protien) {
    return protien * 4;
  }

  function cCarbs(carbs) {
    return carbs * 4;
  }

  function cAlcohol(alcohol) {
    return alcohol * 7;
  }

  var carbs = $('#carbs');
  var fats = $('#fats');
  var protien = $('#protien');
  carbs.on('keyup change ', function() {
    var c = carbs.val();
    $('.sideC .c').html(cCarbs(c));
    calories();
  });

  fats.on('keyup change  ', function() {
    var f = fats.val();
    $('.sideF .c').html(cFat(f));
    calories();
  });

  protien.on('keyup change ', function() {
    var p = protien.val();
    $('.sideP .c').html(cProtien(p));
    calories();
  });

  var calories = function() {
    var ca = parseInt($('.sideC .c').html());
    var fa = parseInt($('.sideF .c').html());
    var pr = parseInt($('.sideP .c').html());
    var totalC = ca + fa + pr;
    $('.calories span').html(totalC);
    console.log(totalC);
    var perC = Math.ceil(ca / totalC * 100);
    var perF = Math.ceil(fa / totalC * 100);
    var perP = Math.ceil(pr / totalC * 100);
    $('.sideC .percent').html(perC);
    $('.sideF .percent').html(perF);
    $('.sideP .percent').html(perP);

  };
  
  $('.tab1').on('click',function(){
    $('.tabP').show();
    $('.tabC').hide();
    $('.tabF').hide();
    
  });
  
  $('.tab2').on('click',function(){
    $('.tabP').hide();
    $('.tabC').show();
    $('.tabF').hide();
    
  });
  
  $('.tab3').on('click',function(){
    $('.tabP').hide();
    $('.tabC').hide();
    $('.tabF').show();
    
  });

})();