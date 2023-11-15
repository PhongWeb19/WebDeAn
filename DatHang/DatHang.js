
const ListItems = document.getElementById("list-items");
const PageBtns = document.querySelectorAll(".page-btns");
const navleft = document.getElementById('navleft');
const navright = document.getElementById('navright');
const listPage = document.getElementById('listPage');
const BuyBtn = document.getElementById('BuyBtn');
const ListProducts=[];
const products = [
    {id: 1,img: "/WebDeAn/imgProducts/hinh1.jpg", Name: "Máy tính Flexoffice FLEXIO CAL-01S - Tím",cost: '170.000'},
    {id: 2,img: "/WebDeAn/imgProducts/hinh2.jpg", Name: "Máy tính khoa học Flexoffice FLEXIO Fx590VN - Tím",cost: '382.000'},
    {id: 3,img: "/WebDeAn/imgProducts/hinh3.jpg", Name: "Dao rọc giấy Flexoffice FO-KN02B",cost: '12.000'},
    {id: 4,img: "/WebDeAn/imgProducts/hinh4.jpg", Name: "Bộ bấm kim số 10 và kim bấm Flexoffice FO-ST02-S2",cost: '30.000'},
    {id: 5,img: "/WebDeAn/imgProducts/hinh5.jpg", Name: "Giấy Paper One A3/70 PP-O06",cost: '140.000'},
    {id: 6,img: "/WebDeAn/imgProducts/hinh6.jpg", Name: "Giấy Idea A4/70 PP-ID1",cost: '71.000'},
]

var perPage = 5;
var currentPage =1;
var totalPage=products.length/5;
var start =0;
var end = perPage;
function renderProduct()
{
    xuliNutChuyen(currentPage);
    const content = products.map(function(product,index) {
        if(index >= start && index < end)
        {
            return `
                        <div class="items">
                            <div class="img-item">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="infor-item">
                                <span><a href="#">${product.Name}</a></span>
                            </div>
                            <div class="cost-item">
                                <span>${product.cost}</span>
                            </div>
                            <div class="count-item">
                                <input class = "Products" type="text" value="0">
                            </div>
                        </div>
        `;
        }
    });
    ListItems.innerHTML = content.join('');
    
}

function GetCurrentPage(currentPage)
{
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

function xuliNutChuyen(currentPage)
{
    if(currentPage == 1)
    {
        navleft.style = "padding: 12px 14px;border-radius: 50%;background-color: #f3f5f78c; pointer-events: none;";
    }
    else
    {
        navleft.style ="pointer-events: pointer";
    }

    if(currentPage == Math.ceil(totalPage))
    {
        navright.style = "padding: 12px 14px;border-radius: 50%;background-color: #f3f5f78c; pointer-events: none;";
    }
    else
    {
        navright.style ="pointer-events: pointer";
    }
}

function Moveleft()
{
    if(currentPage < 2)
    {
        return 1;
    }
    currentPage--;
    if(start > 0)
    {
        GetCurrentPage(currentPage);
        renderProduct();
        HoverMovePage(currentPage);
    }
    
    
}

function Moveright()
{
    currentPage++;
    if(end < products.length)
    {
        GetCurrentPage(currentPage);
        renderProduct();
        HoverMovePage(currentPage);
    }
    
}

function RenderListPages()
{
    listPage.innerHTML = `<li><a class="page-btns active">${1}</a></li>`
    for(var i=1;i<totalPage;i++)
    {
        listPage.innerHTML += `<li><a class="page-btns">${i+1}</a></li>`
    }
}

function ChangePage()
{
    const ListPages = document.querySelectorAll('.page-btns');
    ListPages.forEach((ListItem) =>{
        ListItem.onclick = function()
        {
            currentPage = ListItem.textContent;
            GetCurrentPage(currentPage);
            renderProduct();
            HoverListPage(ListItem);
        }
    });
}

function HoverListPage(ListItem)
{
    const ListPages = document.querySelectorAll('.page-btns');
    ListPages.forEach((ListPage) => {
        ListPage.classList.remove('active');
    });
    ListItem.classList.add('active');
}

function HoverMovePage(currentPage)
{
    const ListPages = document.querySelectorAll('.page-btns');
        ListPages.forEach((ListPage) => {
            ListPage.classList.remove('active');
        });
        ListPages[currentPage-1].classList.add('active');
}

function BuyProducts()
{
    const Products = document.querySelectorAll('.items');
    const CostProducts = document.querySelectorAll('.Products');
    const ListCostProducts=Array.from(CostProducts).map((CostProduct,index)=>{
        return {
            CostProduct: CostProduct.value,
            index: index
        }
    }).filter((product) => {
        return product.CostProduct!=0;
    });;
          
    ListCostProducts.forEach((Product) => {

        const item = {
            index: Product.index,
            Value: Product.CostProduct
        };
        ListProducts.push(item);
    });   
    console.log(ListProducts);
    localStorage.setItem('ListProducts',JSON.stringify(ListProducts));
    window.location.href='/WebDeAn/GioHang/GioHang.html';
}

function ModalOverLay()
{
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
}

function startNow()
{
    renderProduct();
    RenderListPages();
    ChangePage();
    ModalOverLay();
}


startNow();
