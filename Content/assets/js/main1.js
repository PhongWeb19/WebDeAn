const products = [
    { id: 1, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 2, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 3, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 4, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 5, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 6, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 7, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 8, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 9, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Deli", sector_title:"Bấm kim" },
    { id: 10, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bấm kim" },
    { id: 11, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
    { id: 12, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product12.jpeg", name: "t", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
    { id: 13, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product1.jpeg", name: "b", price_old: "1300.000d", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
    { id: 14, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product2.jpeg", name: "C", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Evo office", sector_title:"Bảng vẽ" },
    { id: 15, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product3.jpeg", name: "l", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
    { id: 16, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product4.jpeg", name: "m", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
    { id: 17, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product5.jpeg", name: "o", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
    { id: 18, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product6.jpeg", name: "d", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
    { id: 19, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product7.jpeg", name: "a", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Thiên Long", sector_title:"Bảng vẽ" },
    { id: 20, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product8.jpeg", name: "u", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"Bìa lỗ" },
    { id: 21, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product9.jpeg", name: "g", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"Bìa lỗ" },
    { id: 22, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product10.jpeg", name: "y", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"Bìa lỗ" },
    { id: 23, img: "https://phongweb19.github.io/WebDeAn/Content/assets/img/product11.jpeg", name: "h", price_old: "1.300.000", price_current: "", sale_off_percent: "10%", brand_title:"Idea", sector_title:"Bìa lỗ" },
  ]

  function calPrice_current(chuoi1, chuoi2){
    return parseFloat(chuoi1)*(parseFloat(chuoi2) / 100);
  }
  

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
    // document.getElementById('price-up').addEventListener('change', () => {
    //   price_up(products);
    // });
    // document.getElementById('price-down').addEventListener('change', () => {
    //   price_down(products);
    // });
    // document.getElementById('AZ').addEventListener('change', () => {
    //   AtoZ(products);
    // });
    // document.getElementById('ZA').addEventListener('change', () => {
    //   ZtoA(products);
    // });
  }
  window.onload = function () {
    myFunction();
  };
  
  function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
  }  


function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

let perPage = 5;
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
        html += '<ul class="list__title" >';
        html += '<li class="list__item stt"><i>'+(index+1)+'</i></li>';
        html += '<li class="list__item hinh">';
        html += '<div class="goods-img" style="background-image: url('+item.img+');"></div>';
        html += '</li>';
        html +='<li class="list__item goods-item ten">' + item.name + '</li>';
        html += '<li class="list__item goods-item thuongHieu">'+item.brand_title+'</li>';
        html += '<li class="list__item goods-item loai">'+item.sector_title+'</li>';
        html += '<li class="list__item goods-item gia">' + item.price_old + 'đ </li>';
        html += '<li class="list__item goods-item giamGiam">'+item.sale_off_percent+'</li>';
        html += '<li class="list__item goods-item no-value">';
        html += '<button class="btn-goods" id="btnSua'+(index+1)+'">Sua</button>';
        html += '<button class="btn-goods" id="btnXoa'+(index+1)+'">X</button>';
        html += '</li>';
        html += '</ul>';
        return html;
      }
    })
    document.getElementById('list-goods').innerHTML = html;
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
