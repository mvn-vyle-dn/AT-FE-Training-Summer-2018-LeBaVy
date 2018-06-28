window.onload = function() {
  var listShoes = [
    {
      'id':1,
      'name':'Giày nữ -Giày nữ hàn quốc',
      'image':'nuhanquoc.jpg',
      'price':125000
    },
    {
      'id':2,
      'name':'Giày thể  thao nữ',
      'image':'thethaonu.jpg',
      'price':265000
    },
    {
      'id':3,
      'name':'Giày slip on nơ hạt',
      'image':'slipom.jpg',
      'price':355000
    },
    {
      'id':4,
      'name':'Giày thể thao nữ xám sọc trắng',
      'image':'ttnusoctrang.jpg',
      'price':435000
    },
    {
      'id':5,
      'name':'Giày Sneaker nữ',
      'image':'sneakernu.jpg',
      'price':135000
    },
    {
      'id':6,
      'name':'Giày lười nữ đen lưới',
      'image':'luoinuden.jpg',
      'price':425000
    },
    {
      'id':7,
      'name':'Giày lười nữ trắng',
      'image':'luoinutrang.jpg',
      'price':725000
    },
    {
      'id':8,
      'name':'Giày Sneaker nữ trắng',
      'image':'sneakernutrang.jpg',
      'price':325000
    }
  ];
  function showCarts(idCartList) {
    var html = '<tr class="table-row">' +
                '<th>Image</th>' +
                '<th>Name</th>' +
                '<th>Price</th>' +
                '<th>Quanlity</th>' +
                '<th>Action</th>' +
              '</tr>';
    for (i in idCartList) {
      var shoeObjectAdd = search(idCartList[i].id, listShoes);
      html +=
      '<tr class="table-row" id="product-item-' + shoeObjectAdd.id + '">' +
        '<td>' +
          '<img class="img-product-cart" src="images/' + shoeObjectAdd.image + '" alt="">' +
        '</td>' +
        '<td>' +
          '<span class="name-product">' + shoeObjectAdd.name + '</span>' +
        '</td>' +
        '<td>' +
          '<span class="price-product">' + shoeObjectAdd.price + ' đ</span>' +
        '</td>' +
        '<td class="quanlity">' + idCartList[i].quanlity + '</td>' +
        '<td><a href="javascript:void(0)" class="item-del" id="' + shoeObjectAdd.id + '"><img class="remove-icon" src="images/remove.png" alt=""></a></td>' +
      '</tr>';
    }
    document.getElementById('cart-table').innerHTML = html;
  }
  function delCart(idCartList) {
    var listItemCartDel = document.getElementsByClassName('item-del');
    for (var i = 0; i < listItemCartDel.length; i++) {
      listItemCartDel[i].addEventListener('click', function() {
        var idDel = this.getAttribute('id');
        document.getElementById('product-item-' + idDel).style.display= 'none';
        idCartList = idCartList.filter(function(el) {
          return el.id !== idDel;
        });
        localStorage.setItem('id-product', JSON.stringify(idCartList));
        localStorage.setItem('total', countProduct(idCartList));
        updateCart(countProduct(idCartList));
      });
    }
  }
  
  function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
      if (myArray[i].id == nameKey) {
        return myArray[i];
      }
    }
  }
  function countProduct(array) {
    var sum = 0;
    for (var index = 0; index < array.length; index++) {
      sum += array[index].quanlity;
    }
    return sum;
  }
  function updateCart(numbers) {
    var numberCart = document.getElementById('quanlity');
    numberCart.innerHTML = numberCart ? numbers : '';
  }
  var total = localStorage.getItem('total');
  if(total){
    updateCart(total);
  }
  var idCartList = JSON.parse(localStorage.getItem('id-product'));
  var cartTable = document.getElementById('cart-table');
  if(cartTable){
    showCarts(idCartList);
    delCart(idCartList);
  }
}