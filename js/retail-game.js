var id_nums = [0,0,0,0];

$(document).ready(function(){
  $(".arrow").click(function(e){
  	var element_select = '#' + e.target.id + ".character-item";

  	switch (e.target.id) {
  		case 'hair':
  			var num = 0;
  			id_nums[num]++;
  			if(id_nums[num] > 2) {
  				id_nums[num]=0;
  			}
  			var translate_num = -250*id_nums[num];
  			$(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
  			break;
		case 'shirt':
			var num = 1;
  			id_nums[num]++;
  			if(id_nums[num] > 2) {
  				id_nums[num]=0;
  			}
  			var translate_num = -250*id_nums[num];
  			$(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
			break;
		case 'pants':
			var num = 2;
  			id_nums[num]++;
  			if(id_nums[num] > 2) {
  				id_nums[num]=0;
  			}
  			var translate_num = -250*id_nums[num];
  			$(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
			break;
		case 'shoes':
			var num = 3;
  			id_nums[num]++;
  			if(id_nums[num] > 2) {
  				id_nums[num]=0;
  			}
  			var translate_num = -250*id_nums[num];
  			$(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
  			break;

  	}
  });
});