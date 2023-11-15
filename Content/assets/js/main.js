//    var buttonwrap = document.querySelector('.btn-wrap');

//     var button = document.getElementById('toggleBtn');
// var list = document.querySelector('.menu-list');

// button.addEventListener('click', function() {
//   list.classList.toggle('show-more');
//   buttonwrap.classList.toggle('expanded');
//   if (list.classList.contains('show-more')) {
//     button.textContent = 'Rút gọn';
//   } else {
//     button.textContent = 'Xem thêm';
//   }
// }); 

var currentIndex = 0;
var totalSlides = document.querySelectorAll('.slides img').length;
var slides = document.querySelector('.slides');

function showSlide(index) {
  var translateValue = -index * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

document.querySelector('.next').addEventListener('click', function () {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      document.querySelector('.modal__overlay').style.display = 'block';
    });

    item.addEventListener('mouseout', function () {
      document.querySelector('.modal__overlay').style.display = 'none';
    });
  });
});


document.querySelector('.information__no-goods-delete').addEventListener('click', function () {
  document.querySelector('.information__no-goods').style = 'display: none';
});

function hideElements() {
  // var elements = document.getElementById('aside1');
  var elements = document.querySelectorAll('.hidden');
  elements.forEach(function (element) {
    element.style.display = 'none';
  });
  document.querySelector('.information__no-goods').style.display = 'block';
}

// pagination  
// itemPerPage: 3 , currentPage = 1
// start = 0, end = itemPerPage;
// start = (currentPage - 1) * itemPerPage
// end = currentPage * itemPerPage
function calPrice_current(chuoi1, chuoi2){
  return parseFloat(chuoi1)*(parseFloat(chuoi2) / 100);
}




// Bút bi
// Bút dạ
// Bút lông dầu
// Bút lông kim
// Dao rọc giấy
// Giấy
// Máy tính
// Ngăn tài liệu
// Sách tư duy - Kỹ năng sống

const products = [
  { id: 1, img: "/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 2, img: "/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 3, img: "/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 4, img: "/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 5, img: "/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 6, img: "/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 7, img: "/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 8, img: "/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 9, img: "/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
  { id: 10, img: "/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bấm kim" },
  { id: 11, img: "/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
  { id: 12, img: "/WebDeAn/Content/assets/img/product12.jpeg", name: "t", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
  { id: 13, img: "/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
  { id: 14, img: "/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
  { id: 15, img: "/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
  { id: 16, img: "/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
  { id: 17, img: "/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
  { id: 18, img: "/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
  { id: 19, img: "/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
  { id: 20, img: "/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 21, img: "/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 22, img: "/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 23, img: "/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 24, img: "/WebDeAn/Content/assets/img/product12.jpeg", name: "t", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 25, img: "/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 26, img: "/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 27, img: "/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"" },
  { id: 28, img: "/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 29, img: "/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 30, img: "/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 31, img: "/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 32, img: "/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 33, img: "/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 34, img: "/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 35, img: "/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 36, img: "/WebDeAn/Content/assets/img/product12.jpeg", name: "t", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 37, img: "/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 38, img: "/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 39, img: "/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"OEM", sector_title:"" },
  { id: 40, img: "/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 41, img: "/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 42, img: "/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 43, img: "/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 44, img: "/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 45, img: "/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 46, img: "/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 47, img: "/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:"" },
  { id: 48, img: "/WebDeAn/Content/assets/img/product12.jpeg", name: "t", price_old: "1.400.000d", price_current: "", sale_off_percent: "10%", brand_title:"Xukiva", sector_title:""}
]
// sort-cate

// document.getElementById('price-up').addEventListener('change',()=> {
//   price_up(products);
// });
// document.getElementById('price-down').addEventListener('change',()=> {
//   price_down(products);
// });
// document.getElementById('AZ').addEventListener('change',()=> {
//   AtoZ(products);
// });
// document.getElementById('ZA').addEventListener('change',()=> {
//   ZtoA(products);
// });
function price_up(array) {
  array.sort((a, b) => {
    return a.price_current - b.price_current;
  });
  renderProduct(array);
};

function price_down(array) {
  array.sort((a, b) => {
    return b.price_current - a.price_current;
  });
  renderProduct(array);
};

function AtoZ(array) {
  array.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  renderProduct(array);
};

function ZtoA(array) {
  array.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  renderProduct(array);
};





// Hàm bạn muốn thực hiện từ đầu
function myFunction() {
  renderProduct(products);
  renderListPage(products);
  changePage(products);
  btnPrev.addEventListener('click', () => {
    Prev(products);
  });
  btnNext.addEventListener('click', () => {
    Next(products);
  });
  document.getElementById('price-up').addEventListener('change', () => {
    price_up(products);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(products);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(products);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(products);
  });
}
window.onload = function () {
  myFunction();
};

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}

let perPage = 15;
let currentPage = 1;
let start = 0;
let end = perPage;

function calcTotalPage(array) {
  return Math.ceil(array.length / perPage);
}


const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

function renderProduct(array) {
  let totalPage = calcTotalPage(array);
  html = '';
  let content = array.map((item, index) => {
    if (index >= start && index < end) {
      html += '<div class="grid__column-2-4">';
      html += '<a class="home-product-item" onclick="hienali('+item.id+')">';
      html += '<div class="home-product-item__img" style="background-image: url(' + item.img + ');">' + '</div>';
      html += '<h4 class="home-product-item__name">' + item.name + '</h4>';
      html += '<div class="home-product-item__price">';
      html += '<span class="home-product-item__price-old">' + item.price_old + '</span>';
      item.price_current = ("" + calPrice_current(item.price_old, item.sale_off_percent));
      html += '<span class="home-product-item__price-current">' + item.price_current + 'đ' + '</span>';
      html += '</div>';
      html += '<div class="home-product-item__sale-off">';
      html += '<span class="home-product-item__sale-off-percent">' + item.sale_off_percent + '</span>';
      html += '<span class="home-product-item__sale-off-label">GIẢM</span>';
      html += '</div>';
      html += '<div class="home-product-item__action">'
      html += '<span class="home-product-item__action-buy">Mua ngay</span>'
      html += '</div>';
      html += '</a>';
      html += '</div>';
      return html;
    }
  })
  document.getElementById('product').innerHTML = html;
}


function changePage(array) {
  let totalPage = calcTotalPage(array);
  if(currentPage>totalPage){
    currentPage =totalPage;
  }
  const currentPages = document.querySelectorAll('.number-page li');
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener('click', () => {
      let value = i + 1;
      currentPage = value;
      $('.number-page li').removeClass('pagination-item--active');
      currentPages[i].classList.add('pagination-item--active');
      if (currentPage != 1 && currentPage != totalPage) {
        $('.btn-prev').removeClass('button--ative');
        $('.btn-next').removeClass('button--ative');
      }
      
      if (currentPage === 1) {
        $('.btn-prev').addClass('button--ative');
      }
      if (currentPage === totalPage) {
        $('.btn-next').addClass('button--ative');
      }
      getCurrentPage(currentPage);
      renderProduct(array);
    })
  }
}


function renderListPage(array) {
  let totalPage = calcTotalPage(array);
  let html = '';
  html += `<li class="pagination-item pagination-item--active">
  <a href="#" class="pagination-item__link">${1}</a></li>`;
  for (let i = 2; i <= totalPage; i++) {
    html += `<li class="pagination-item">
  <a href="#" class="pagination-item__link">${i}</a></li>`;
  }
  document.getElementById('number-page').innerHTML = html;
}


function renderListPage_local(array) {
  let totalPage = calcTotalPage(array);
  if(totalPage<calcTotalPage(products)){
    
  }
  let html = '';
  if (currentPage > totalPage) {
    currentPage = totalPage;
    getCurrentPage(totalPage);
    renderProduct(array);
    for (let i = 1; i < totalPage; i++) {
      html += `<li class="pagination-item">
        <a href="#" class="pagination-item__link">${i}</a></li>`;
    }
    html += `<li class="pagination-item pagination-item--active">
        <a href="#" class="pagination-item__link">${totalPage}</a></li>`;
    document.getElementById('number-page').innerHTML = html;
  }
  else {
    for (let i = 1; i <= totalPage; i++) {
      if (currentPage === i) {
        html += `<li class="pagination-item pagination-item--active">
  <a href="#" class="pagination-item__link">${i}</a></li>`;
      }
      else {
        html += `<li class="pagination-item">
        <a href="#" class="pagination-item__link">${i}</a></li>`;
      }
    }
    document.getElementById('number-page').innerHTML = html;
  }
}


function Prev(array) {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $('.btn-prev').addClass('button--ative');
  }
  $('.btn-next').removeClass('button--ative');
  $('.number-page li').removeClass('pagination-item--active');
  $(`.number-page li:eq(${currentPage - 1})`).addClass('pagination-item--active');
  getCurrentPage(currentPage);
  renderProduct(array);
};



function Next(array) {
  let totalPage = calcTotalPage(array);
  currentPage++;
  if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  if (currentPage === totalPage) {
    $('.btn-next').addClass('button--ative');
  }
  $('.btn-prev').removeClass('button--ative');
  $('.number-page li').removeClass('pagination-item--active');
  $(`.number-page li:eq(${currentPage - 1})`).addClass('pagination-item--active');
  getCurrentPage(currentPage);
  renderProduct(array);
};

function Prev_local(array) {
  if (currentPage < 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $('.btn-prev').addClass('button--ative');
  }
  $('.btn-next').removeClass('button--ative');
  $('.number-page li').removeClass('pagination-item--active');
  $(`.number-page li:eq(${currentPage - 1})`).addClass('pagination-item--active');
  getCurrentPage(currentPage);
  renderProduct(array);
};



function Next_local(array) {
  totalPage = calcTotalPage(array);
  if (currentPage > totalPage) {
    currentPage = totalPage;
    
  }
  
  if (currentPage === totalPage) {
    $('.btn-next').addClass('button--ative');
  }
  $('.btn-prev').removeClass('button--ative');
  $('.number-page li').removeClass('pagination-item--active');
  $(`.number-page li:eq(${currentPage - 1})`).addClass('pagination-item--active');
  getCurrentPage(currentPage);
  renderProduct(array);
}


// filter
//aside 2

function filter_price() {
  let checkboxes = Array.from(document.getElementsByClassName('filter-price'));
  let arrayOfArrays = [];

  if (checkboxes[0].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current > 10));
  } else {
    arrayOfArrays.push([]);
  }

  if (checkboxes[1].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current >= 10 && product.price_current < 23));
  } else {
    arrayOfArrays.push([]);
  }

  if (checkboxes[2].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current >= 23 && product.price_current < 40));
  } else {
    arrayOfArrays.push([]);
  }

  if (checkboxes[3].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current >= 10 && product.price_current < 23));
  } else {
    arrayOfArrays.push([]);
  }

  if (checkboxes[4].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current >= 10 && product.price_current < 23));
  } else {
    arrayOfArrays.push([]);
  }
  if (checkboxes[5].checked) {
    arrayOfArrays.push(products.filter(product => product.price_current >= 10 && product.price_current < 23));
  } else {
    arrayOfArrays.push([]);
  }

  let combinedArray = [].concat(...arrayOfArrays);
  if(combinedArray.length === 0){
    hideElements();
  }
  console.log(combinedArray);
  getCurrentPage(currentPage);
  renderProduct(combinedArray);
  renderListPage_local(combinedArray);
  changePage(combinedArray);
    btnPrev.addEventListener('click', () => {
      Prev_local(combinedArray);
    });
    btnNext.addEventListener('click', () => {
      console.log(calcTotalPage(combinedArray));
      Next_local(combinedArray);
    });
  

  document.getElementById('price-up').addEventListener('change', () => {
    price_up(combinedArray);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(combinedArray);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(combinedArray);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(combinedArray);
  });
}

document.getElementById('filter2').addEventListener('click', () => {
  filter_price();
});

document.getElementById('reset2').addEventListener('click', () => {
  location.reload();
});

//aside 1

const brands = [
  {id: 1, brand_name:'Deli'},
  {id: 2, brand_name:'Evo office'},
  {id: 3, brand_name:'Thiên Long'},
  {id: 4, brand_name:'Idea'},
  {id: 5, brand_name:'OEM'},
  {id: 6, brand_name:'Xukiva'},
]

function renderBrands(array){
  let html = '';
  let content = array.map((item, index) => {
    html+='<li class="aside__item">';
    html+='<label for="'+item.brand_name+'" class="aside__item-label">';
    html+='<input id="'+item.brand_name+'" class="aside__item-input filter-brand" type="checkbox">';
    html+='<i>'+item.brand_name+'</i>';
    html+='</label>';
    html+='</li>';
    return html;
  });
  document.querySelector('.aside__list-brand').innerHTML = html;
}

function filter_brand_input(array) {
  let checkboxes = Array.from(document.getElementsByClassName('filter-brand'));
  let arrayOfArrays = [];
  let content = array.map((item, index) => {
    if (checkboxes[index].checked) {
      arrayOfArrays.push(products.filter(product => product.brand_title === item.brand_name));
    } else {
      arrayOfArrays.push([]);
    }
  });
 
  let combinedArray = [].concat(...arrayOfArrays);
  if(combinedArray.length === 0){
    hideElements();
  }
  console.log(combinedArray);
  getCurrentPage(currentPage);
  renderProduct(combinedArray);
  renderListPage_local(combinedArray);
  changePage(combinedArray);
    btnPrev.addEventListener('click', () => {
      Prev_local(combinedArray);
    });
    btnNext.addEventListener('click', () => {
      console.log(calcTotalPage(combinedArray));
      Next_local(combinedArray);
    });
  document.getElementById('price-up').addEventListener('change', () => {
    price_up(combinedArray);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(combinedArray);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(combinedArray);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(combinedArray);
  });
}

const searchInput_brand = document.querySelector('.search__input-brand');
searchInput_brand.addEventListener('input', function() {
  let userInput = searchInput_brand.value.toLowerCase();
  let suggestions = brands.filter(item => item.brand_name.toLowerCase().includes(userInput.toLowerCase()));

  // Hiển thị các gợi ý trong suggestionsContainer
  renderBrands(suggestions);
  document.getElementById('filter1').addEventListener('click', () => {
    filter_brand_input(suggestions);
  });
});

function filter_brand() {
  let checkboxes = Array.from(document.getElementsByClassName('filter-brand'));
  let arrayOfArrays = [];
  let content = brands.map((item, index) => {
    if (checkboxes[index].checked) {
      arrayOfArrays.push(products.filter(product => product.brand_title === item.brand_name));
    } else {
      arrayOfArrays.push([]);
    }
  });
 
  let combinedArray = [].concat(...arrayOfArrays);
  if(combinedArray.length === 0){
    hideElements();
  }
  console.log(combinedArray);
  getCurrentPage(currentPage);
  renderProduct(combinedArray);
  renderListPage_local(combinedArray);
  changePage(combinedArray);
    btnPrev.addEventListener('click', () => {
      Prev_local(combinedArray);
    });
    btnNext.addEventListener('click', () => {
      console.log(calcTotalPage(combinedArray));
      Next_local(combinedArray);
    });
  document.getElementById('price-up').addEventListener('change', () => {
    price_up(combinedArray);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(combinedArray);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(combinedArray);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(combinedArray);
  });
}

document.getElementById('filter1').addEventListener('click', () => {
  filter_brand();
});

document.getElementById('reset1').addEventListener('click', () => {
  location.reload();
});



//aside 3
const sectors = [
  {id: 1, sector_name:'Bấm kim'},
  {id: 2, sector_name:'Bảng vẽ'},
  {id: 3, sector_name:'Bìa lỗ'},
  {id: 4, sector_name:'Bút bi'},
  {id: 5, sector_name:'Bút dạ'},
  {id: 6, sector_name:'Bút lông dầu'},
  {id: 7, sector_name:'Bút lông kim'},
  {id: 8, sector_name:'Dao rọc giấy'},
  {id: 9, sector_name:'Giấy'},
  {id: 10, sector_name:'Máy tính'},
  {id: 11, sector_name:'Ngăn tài liệu'},
  {id: 12, sector_name:'Sách tư duy - Kỹ năng sống'},
]

function renderSectors(array){
  let html = '';
  let content = array.map((item, index) => {
    html+='<li class="aside__item">';
    html+='<label for="'+item.sector_name+'" class="aside__item-label">';
    html+='<input id="'+item.sector_name+'" class="aside__item-input filter-sector" type="checkbox">';
    html+='<i>'+item.sector_name+'</i>';
    html+='</label>';
    html+='</li>';
    return html;
  });
  document.querySelector('.aside__list-sector').innerHTML = html;
}

function filter_sector_input(array) {
  let checkboxes = Array.from(document.getElementsByClassName('filter-sector'));
  let arrayOfArrays = [];
  let content = array.map((item, index) => {
    if (checkboxes[index].checked) {
      arrayOfArrays.push(products.filter(product => product.sector_title === item.sector_name));
    } else {
      arrayOfArrays.push([]);
    }
  });
 
  let combinedArray = [].concat(...arrayOfArrays);
  if(combinedArray.length === 0){
    hideElements();
  }
  console.log(combinedArray);
  getCurrentPage(currentPage);
  renderProduct(combinedArray);
  renderListPage_local(combinedArray);
  changePage(combinedArray);
    btnPrev.addEventListener('click', () => {
      Prev_local(combinedArray);
    });
    btnNext.addEventListener('click', () => {
      console.log(calcTotalPage(combinedArray));
      Next_local(combinedArray);
    });
  document.getElementById('price-up').addEventListener('change', () => {
    price_up(combinedArray);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(combinedArray);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(combinedArray);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(combinedArray);
  });
}

const searchInput_sector = document.querySelector('.search__input-sector');
searchInput_sector.addEventListener('input', function() {
  let userInput = searchInput_sector.value.toLowerCase();
  let suggestions = sectors.filter(item => item.sector_name.toLowerCase().includes(userInput.toLowerCase()));

  // Hiển thị các gợi ý trong suggestionsContainer
  renderSectors(suggestions);
  document.getElementById('filter3').addEventListener('click', () => {
    filter_sector_input(suggestions);
  });
});



function filter_sector() {
  let checkboxes = Array.from(document.getElementsByClassName('filter-sector'));
  let arrayOfArrays = [];
  let content = sectors.map((item, index) => {
    if (checkboxes[index].checked) {
      arrayOfArrays.push(products.filter(product => product.sector_title === item.sector_name));
    } else {
      arrayOfArrays.push([]);
    }
  });
 
  let combinedArray = [].concat(...arrayOfArrays);
  if(combinedArray.length === 0){
    hideElements();
  }
  console.log(combinedArray);
  getCurrentPage(currentPage);
  renderProduct(combinedArray);
  renderListPage_local(combinedArray);
  changePage(combinedArray);
    btnPrev.addEventListener('click', () => {
      Prev_local(combinedArray);
    });
    btnNext.addEventListener('click', () => {
      console.log(calcTotalPage(combinedArray));
      Next_local(combinedArray);
    });
  document.getElementById('price-up').addEventListener('change', () => {
    price_up(combinedArray);
  });
  document.getElementById('price-down').addEventListener('change', () => {
    price_down(combinedArray);
  });
  document.getElementById('AZ').addEventListener('change', () => {
    AtoZ(combinedArray);
  });
  document.getElementById('ZA').addEventListener('change', () => {
    ZtoA(combinedArray);
  });
}

document.getElementById('filter3').addEventListener('click', () => {
  filter_sector();
});

document.getElementById('reset3').addEventListener('click', () => {
  location.reload();
});



function MoveToSignUp()
{
  window.location.href="/WebDeAn/Account/demotk.html";
}

function MoveToLogIn()
{
  window.location.href="/WebDeAn/Account/demotk.html";
}


function hienali(IdItem){
  window.location.href=`/WebDeAn/Content Of Item/ContentOfItem.html?id=${IdItem}`;
}







                                    
