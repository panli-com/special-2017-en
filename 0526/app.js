function FloorList(data) {
  var mlc = 11,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl0 = [];

  for (var i = 0; i < mlc; i++) {
    fl0.push(data[i]);
  }
  for (var i = mlc; i < mlc * 2; i++) {
    fl1.push(data[i]);
  }
  for (var i = mlc * 2; i < mlc * 3; i++) {
    fl2.push(data[i]);
  }
  // for (var i = mlc * 3; i < mlc * 4; i++) {
  //   fl3.push(data[i]);
  // }
  // for (var i = mlc * 4; i < mlc * 5; i++) {

  //   fl4.push(data[i]);
  // }


  FloorAll(fl0, 'Brush', 1);
  FloorAll(fl1, 'Cleaning', 2);
  FloorAll(fl2, 'Other', 3);
  // FloorAll(fl3, 'Feeding', 4);
  // FloorAll(fl4, 'Washing', 5);
  // FloorAll(fl3, 'Accessories', 4);
  // FloorAll(fl4, 'Equipments', 5);

}

function FloorAll(data, imgHead, id) {
  console.log(data)
  var str = '';
  for (var i = 1; i < data.length; i++) {
    var name = data[i]['简短商品名'],
      price = data[i].USA,
      imgUrl = './build/css/images/products/' + (imgHead + (i - 0)) + '.jpg',
      proUrl = data[i].站内链接;

    str += `<li>
            <a href="${proUrl}" target="_blank"><img src="${imgUrl}" width="185" height="185" title="${name}"></a>
            <div class="pro_Price"><a href="${proUrl}" target="_blank">${name}</a><br />
              <span>Price：$${price}</span>
            </div>
            <div>
              <a class="buynow" href="${proUrl}" target="_blank">&nbsp;</a>
            </div>
          </li>`

  };

  // var big_name = data[1]['简短商品名'];
  // var big_price = data[1].USA;
  // var big_img = './build/css/images/products/' + (imgHead + (1 - 0)) + '.jpg';
  // var big_url = data[1].站内链接;

  // var big = `<li>
  //             <a href="${big_url}" target="_blank"><img src="${big_img}" width="330" height="430"></a>
  //             <div class="pro_title"><a href="${big_url}" target="_blank">${big_name}</a><br /> Price：$${big_price}
  //             </div>
  //           </li>`

  var floorAll = $(".food_content");
  var floor = floorAll.eq(id - 1);
  // $("#content_inner .content__floor").eq(id - 1).find('.more').attr("href", data[0].TB链接);

  floor.find('.title_more').attr("href", data[0].TB链接);
  floor.find('ul').html(str);
  // floor.find('.pro-big ul').html(big);
  // floor.find('.small_thumb').html(str);

}