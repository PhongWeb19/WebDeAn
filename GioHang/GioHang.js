const SL = document.getElementById('SL');
const SanPhamDaMua = document.getElementById('SanPhamDaMua');
var CostRight;
var SLSP;
var countItems;
var btnsCount;
var btnsRemove;
const products = [
    {id: 1,img: "/WebDeAn/imgProducts/hinh1.jpg", Name: "Máy tính Flexoffice FLEXIO CAL-01S - Tím",cost: '170.000'},
    {id: 2,img: "/WebDeAn/imgProducts/hinh2.jpg", Name: "Máy tính khoa học Flexoffice FLEXIO Fx590VN - Tím",cost: '382.000'},
    {id: 3,img: "/WebDeAn/imgProducts/hinh3.jpg", Name: "Dao rọc giấy Flexoffice FO-KN02B",cost: '12.000'},
    {id: 4,img: "/WebDeAn/imgProducts/hinh4.jpg", Name: "Bộ bấm kim số 10 và kim bấm Flexoffice FO-ST02-S2",cost: '30.000'},
    {id: 5,img: "/WebDeAn/imgProducts/hinh5.jpg", Name: "Giấy Paper One A3/70 PP-O06",cost: '140.000'},
    {id: 6,img: "/WebDeAn/imgProducts/hinh6.jpg", Name: "Giấy Idea A4/70 PP-ID1",cost: '71.000'},
]
localStorage.setItem('Products',JSON.stringify(products));
var tong = 0;
var ListProducts;
function renderProducts()
{
    ListProducts = JSON.parse(localStorage.getItem('ListProducts'));
    if(ListProducts == null || ListProducts.length == 0)
    {
        SanPhamDaMua.innerHTML = `
        <i class="fa-solid fa-cart-flatbed-suitcase icon-SanPhamDaMua"></i>
        <div style="width: 100%;display: flex; justify-content: center;"><button id="continues">Tiếp tục mua hàng</button></div>`;
        SL.innerHTML ='';
        HandleClickContinueBuy();
    }
    else
    {
        var SlProducts=0;
        var CostProducts=0;
        var html=``;
        ListProducts.forEach((ListProduct,index) => {
            products.forEach((product) => {
                if(product.id - 1 == ListProducts[index].index)
                    {
                        SlProducts+=parseInt(ListProducts[index].Value);
                        CostProducts+= (parseInt(ListProducts[index].Value) * parseFloat(product.cost));
                        tong=CostProducts;
                        html += `
                        <div id="${product.id}" class="items">
                        <div class="img-item">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="infor-item">
                            <div><span>${product.Name}</span></div>
                            <div><strong class="btnsRemove">Xóa</strong></div>
                        </div>
                        <div class="cost-item">
                            <span>${product.cost}</span>
                        </div>
                        <div class="count-item">
                            <button class="btnsCount" >-</button>
                            <span id="SLSP">${ListProducts[index].Value}</span>
                            <button class="btnsCount">+</button>
                        </div>
                        </div>
                        `;
                    }
                });
            });
            SanPhamDaMua.innerHTML = html + `
            
            <div id="costProducts">
                <div id="costLeft">
                    <span><a href="/WebDeAn/Content/html/index.html">Tiếp tục mua hàng</a></span>
                </div>
                <div id="costright">
                    <div id="TamTinh">
                        <span>Tạm tính: </span>
                        <strong>${CostProducts}.000đ</strong>
                    </div>
                    <div id="ThanhTien">
                        <span>Thành tiền: </span>
                        <strong>${CostProducts}.000đ</strong>
                    </div>
                    <div id="btnSum">
                        <button id="btn-sum">Thanh toán ngay</button>
                    </div>
                </div>
        </div>`;
            SL.innerHTML = `
                        <h1>
                            Giỏ hàng
                            <span>(${SlProducts} sản phẩm)</span>
                        </h1>`

        countItems = document.querySelectorAll('.count-item');
        CostRight = document.querySelector('#costright');
        SLSP = document.getElementById('SLSP');
        btnsCount = document.querySelectorAll('.btnsCount');
        btnsRemove = document.querySelectorAll('.btnsRemove');
    }
}

function HandleCosts(ParentElement1,Bieuthuc)
{
            const SoLuong = ParentElement1.querySelector('#SLSP').innerText;
            const GiaTien = ParentElement1.querySelector('.cost-item span').innerText;
            if(Bieuthuc == '-')
            {
                tong-=( parseFloat(GiaTien)); 
            }
            else if(Bieuthuc == '+')
            {
                tong+=( parseFloat(GiaTien)); 
            }
            CostRight.innerHTML = `
            <div id="TamTinh">
            <span>Tạm tính: </span>
            <strong>${tong}.000đ</strong>
            </div>
            <div id="ThanhTien">
                <span>Thành tiền: </span>
                <strong>${tong}.000đ</strong>
            </div>
            <div id="btnSum">
                <button id="btn-sum">Thanh toán ngay</button>
            </div>
            `
}
function GiamSL(SlItems,ChildSLSP,ParentElement1,Bieuthuc)
{
    
    if(!isNaN(SlItems))
    {
        if(SlItems > 1)
        {
            SlItems--;
            ChildSLSP.innerText = SlItems;
            HandleCosts(ParentElement1,Bieuthuc);
            CapNhatLocal(ParentElement1,SlItems);
        }
    }
}

function TangSL(SlItems,ChildSLSP,ParentElement1,Bieuthuc)
{
    if(!isNaN(SlItems))
    {
        SlItems++;
        ChildSLSP.innerText=SlItems;
        HandleCosts(ParentElement1,Bieuthuc);
        CapNhatLocal(ParentElement1,SlItems);
    }
}


function HandleCounts()
{
        btnsCount.forEach((btn,index1) => {
            btn.onclick = function()
            {
                var ParentElement = this.closest('.count-item');
                var ParentElement1 = this.closest('.items');
                var ChildSLSP = ParentElement.querySelector('#SLSP');
                var SlItems=ParentElement.querySelector('#SLSP').textContent;
                if(btn.textContent == '-')
                {
                    GiamSL(SlItems,ChildSLSP,ParentElement1,btn.textContent);
                }
                else if(btn.textContent == '+')
                {
                    TangSL(SlItems,ChildSLSP,ParentElement1,btn.textContent);
                }
            }
        });
}

function CapNhatLocal(ParentElement1,SlItems)
{
    ListProducts.forEach((ListProduct) => {
        if(parseInt(ListProduct.index) == parseInt(ParentElement1.id)-1)
        {
            ListProduct.Value = SlItems;
        }
    });
    
    localStorage.setItem('ListProducts',JSON.stringify(ListProducts));
    renderProducts();
    HandleCounts();
    HandleClickRemove();
}
function HandleClickContinueBuy()
{
    continues.onclick = function()
    {
        window.location.href='/WebDeAn/DatHang/DatHang.html';
    }
}

function HandleClickRemove()
{
    btnsRemove.forEach((btn) => {
        console.log(btn);
        btn.onclick = function ()
        {
            const ParentElement = this.closest('.items');
            RemoveItems(ParentElement.id);
            renderProducts();
            HandleCounts();
            HandleClickRemove();
        }
    });
}

function RemoveItems(id)
{
    const items = document.querySelectorAll('.items');

    const ListItems=Array.from(items).filter((item)=>{
        return item.id != id;
    });
    const NewListProducts =[];
    ListItems.forEach((item)=>{
        const temp = {
            index: item.id-1,
            Value: item.querySelector('#SLSP').innerText
        };
        NewListProducts.push(temp);
    });
    localStorage.setItem('ListProducts',JSON.stringify(NewListProducts));   
}

function MoveToSignUp()
{
  window.location.href="/WebDeAn/Account/demotk.html";
}

function MoveToLogIn()
{
  window.location.href="/WebDeAn/Account/demotk.html";
}


function start()
{
    renderProducts();
    HandleCounts();
    HandleClickRemove();
}

start();
