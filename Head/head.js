

const products=[
    {
        id:1,
        name:"But bi",
        price:"5000",
        type:"but"
    },
    {
        id:2,
        name:"But chi",
        price:"2000",
        type:"but"
    },
    {
        id:3,
        name:"But xoa",
        price:"10000",
        type:"but"
    },
    {
        id:4,
        name:"Viet chi bam",
        price:"6000",
        type:"viet chi"
    },
    {
        id:5,
        name:"Viet chi chuot",
        price:"2000",
        type:"viet chi"
    },
    {
        id:6,
        name:"Thuoc",
        price:"4000",
        type:"thuoc"
    }
    

];
//js: head_timkiem
function exitSearchByClickOutside()
{
    document.addEventListener('click',function(event)// bam vao tim kiem sau do click ra ngoai thi tim kiem hidden
    {
    let clicked=event.target;
    let click=document.getElementById("head_timkiem");
    let result=document.getElementById("head_timkiem_result");
    if(!click.contains(clicked))
       result.style="visibility:hidden";
    });
}

function userPressSearch()//khi user an phim vao tim kiem
{
    let valuesearch=document.getElementById("head_timkiem_idkhungtimkiem").value;
    let userresult=``;
    products.map(value=>{
            if(value.name.toUpperCase().includes(valuesearch.toUpperCase()))
                userresult+=`<span><i class='fa-solid fa-coins'></i><div class='outputResultSearch'>${value.name}</div></span>`;
    })
    ouputResultPressSearch(valuesearch,userresult);
}

function ouputResultPressSearch(valuesearch,userresult)//hien ket qua tim kiem o phan tim kiem cua head
{
    let result=document.getElementById("head_timkiem_result");
    if(valuesearch===''||userresult===``)
    result.style="visibility:hidden";
    else
    {
        result.style="visibility:visible";
        document.getElementById("head_timkiem_result_wrap").innerHTML=userresult;
    }
}
 
function userSubmit_EnterSearch()
{
    event.preventDefault();
    let valuesearch=document.getElementById("head_timkiem_idkhungtimkiem");
    if(valuesearch.value=="")
    {
        alert('Tim kiem khong de trong');
    }
    else
    {
       document.getElementById("head_timkiem_result").style="visibility:hidden";
       searchByName(valuesearch.value);
       valuesearch.textContent="";
    }
}

function clickOnSearch()
{
    exitSearchByClickOutside();
    userPressSearch();
}

function searchByName(valuesearch)
{
    let userresult=``;
    products.map(value=>{
            if(value.name.toUpperCase().includes(valuesearch.toUpperCase()))
                userresult+=`<div class='cart'><div class='cart_body'><h5 class='cart_body_name'>${value.name}</h5><p class='cart_body_price'>${value.price}</p><button onclick='addtocart(${value.id})'>Add to cart</button></div></div>`;
    })
    document.getElementById("ketquatimkiem").innerHTML=userresult;
}
/*function enter_trong_head_timkiem(event)
{
  if(event.key=="Enter")
  userSearch();
}*/
/*function click_head_timkiem_idkhungtimkiem()//nhan phim vao input_khungtimkiem thi goi ham nay de hien lich su tim kiem
{
let nhan=document.getElementById("head_timkiem_idkhungtimkiem");
let history=document.getElementById("head_timkiem_result");
let history_wrap=document.getElementById("head_timkiem_result_wrap");
    nhan=addEventListener("keypress",
        function()
        {
            if(history_wrap.innerHTML!=null)// neu lich su tim kiem chua co thi (khong hien) || (khong lam ham nay) 
            {
                history.style="visibility:visible";
            }
            document.getElementById("timkiem_error").style="display:none";
        });
}

function head_timkiem()
{
let nhan=document.getElementById("head_timkiem_idkhungtimkiem");
let history=document.getElementById("head_timkiem_result");
let history_wrap=document.getElementById("head_timkiem_result_wrap");
    event.preventDefault();
    if(history.contains(document.getElementById("timkiem_error")))
    {
        history.removeChild(document.getElementById("timkiem_error"));
    }
    
    if(nhan.value=="")//" " va "": khac nhau: " " co khoang cach con "" thi rong
    {
        history.innerHTML="<span id='timkiem_error' style='color:red;font-size: 15px;background-color: #f8fbfc;padding-left:10px;visibility:visible;width:100%;'> <i class='fa-solid fa-triangle-exclamation' style='padding-right:5px'></i>Tìm kiếm không để trống</span>"+history.innerHTML;
        nhan.focus();
        click_head_timkiem_idkhungtimkiem();
    }
    else
    {
        history_wrap.innerHTML="<span><i class='fa-solid fa-clock-rotate-left'></i><div class='history'></div></span>"+history_wrap.innerHTML;
        document.getElementsByClassName("history")[0].innerText=nhan.value;
        history.style="visibility:visible";
    }
}*/

//end js: head_timkiem

/*function saukhidangnhap(dangnhap)
{
if(dangnhap==1)
    alert("Da dang nhap bang tai khoan user");
else
    alert("Da dang nhap bang tai khoan admin");
danhsachsanpham();
calcu();
let taikhoan=document.getElementsByClassName('head_select_i_taikhoan');
taikhoan[0].innerHTML="<span><i class='fa-regular fa-user'></i><p>//là tên account</p></span><span><ul><li>Thông tin tài khoản</li><li>Đơn hàng</li><li>Đổi mật khẩu</li><li>Đăng xuất</li></ul></span>";
taikhoan[0].style="width:250px;";
}



//js: head_select
 
 function chua_mua_san_pham()
 {
    let giohang=document.getElementsByClassName("head_select_i_giohang");
    giohang[0].innerHTML="<img src='C:\\Study\\web\\Do_An_Web\\hinhanh\\no_cart.png' width='100%' height='auto'>";
    giohang[0].innerHTML=giohang[0].innerHTML+"<p style='margin:0 auto 10px auto;padding-top:0;'>Giỏ hàng đang trống</p>";
    let thongbao=document.getElementsByClassName("head_select_i_thongbao");
    thongbao[0].innerHTML="<img src='C:\\Study\\web\\Do_An_Web\\hinhanh\\no_thongbao.jpg' width='100%' height='auto'>";
    thongbao[0].innerHTML=thongbao[0].innerHTML+"<p style='margin:0 auto 10px auto;padding-top:0;'>Không có thông báo</p>";
 }

/*let chisogiohang=document.getElementsByClassName("thongtin_sp").length;
let giohang_icon=document.getElementsByClassName("fa-solid fa-cart-shopping");
giohang_icon_[0].innerHTML=giohang_icon_[0].innerHTML+"<span class='head_select_i_soluong'></span>";
giohang_icon[0].textContent=chisogiohang;*/


/*let product_in_cart=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
function addtocart(id)
{
    let checkproducts=product_in_cart.some(value=>value.id===id);
    if(!checkproduct)
    {
       let sanpham=product.find(value=>value.id===id);
       product_in_cart.unshift({...sanpham,soluong:1});
       localStorage.setItem('product',JSON.stringify(product_in_cart));
    }
    else
    {
        let getindex=product_in_cart.findIndex(value=>value.id===id);
        let sanpham=product_in_cart.find(value=>value.id===id);
        product_in_cart[getindex]={...sanpham,soluong:++sanpham.soluong};
        localStorage.setItem('products',JSON.stringify(product_in_cart));
    }
}
function danhsachsanpham()
{
    if(product_in_cart.length===0)
    {
        let giohang=document.getElementsByClassName("head_select_i_giohang");
        giohang[0].innerHTML="<img src='C:\\Study\\web\\Do_An_Web\\hinhanh\\no_cart.png' width='100%' height='auto'>";
        giohang[0].innerHTML=giohang[0].innerHTML+"<p style='margin:0 auto 10px auto;padding-top:0;'>Giỏ hàng đang trống</p>";
    }
    else
    {
        let data=``;
        product_in_cart.map(value=>{
            data+=`<span class="thongtin_sp">
            <span class="img_sp">none</span>
            <span class="mota_sp">
                <span class="ten_sp" style="font-size: 14px;"><b>${value.name}</b></span>
                <span class="gia_sp" style="color:red"><i class="fa-solid fa-dong-sign" style="color: red;font-size:12px;" ></i><span><b>${value.price}</b></span></span>
                <span class="sl_sp">
                    <span>+</span>
                    <span>${value.soluong}</span>
                    <span>-</span>
                </span>
            </span>
            <span class="delete">x</span>
         </span>`;
        });
        document.getElementsByClassName("head_select_i_giohang")[0].innerHTML="<span class='head_select_i_giohang_sanpham'></span>";
        document.getElementsByClassName("head_select_i_giohang_sanpham")[0].innerHTML=data;
        document.getElementsByClassName("head_select_i_giohang_sanpham")[0].style="display:grid;gap:10px;font-size:13px;color:black; width:100%; height:90px;margin: 10px;overflow-y: auto;";
    }
}
function hiensanpham()
{
    let data=``;
    products.map(value=>{
         data+=`<div class='cart'><div class='cart_body'><h5 class='cart_body_name'>${value.name}</h5><p class='cart_body_price'>${value.price}</p><button onclick='addtocart(${value.id})'>Add to cart</button></div></div>`;
    });
    document.getElementById("list_sanpham").innerHTML=data;
}
function calcu()
{
    let total=0;
    for(let i=0;i<product_in_cart.length;i++) 
    {
        total+=product_in_cart[i].soluong;
    }
   document.getElementsByClassName('head_select_i_soluong')[0].textContent=total;
}
function load()
{
    hiensanpham();
    calcu();
}
function search()
{
    searchByName();
    searchNangcao();
}
 
 
 function searchNangcao(selected)
 {
    let userselect=document.getElementsByClassName("serchNangcao").value;
    for(let i=0;i<userselect.length;i++)
    {
        if(userselect[i]===selected)
          {
            switch (i)
            {
                case 0:
                    {
                        searchByPrice();
                        break;
                    }
            }
          }
    }

    
 }
 function searchByPrice()
 {
    let valuesearch=parseFloat(document.getElementById("head_timkiem_idkhungtimkiem").value);
    let userresult=``;
    products.map(value=>{
            if(parseFloat(value.price)===valuesearch)
                userresult+=`<span><i class="fa-solid fa-coins"></i><div class='history'>${value.name}</div></span>`;
            })
    result_search(valuesearch,userresult);
 }
 function searchByPricerange()
 {
    event.preventDefault();
    let valuesearch=document.getElementById("head_timkiem_idkhungtimkiem").value;
    let pricerange=valuesearch.split(" ");
    let userresult=``;
    product.map(value=>{
            if(parseFloat(value.price)>=parseFloat(pricerange[0]) && parseFloat(value.price)<=parseFloat(pricerange[1]))
                userresult+=`<span><i class="fa-solid fa-coins"></i><div class='history'>${value.name}</div></span>`;
            
            })
           
    result_search(valuesearch,userresult);
 }
 function searchByType()
 {
    let valuesearch=document.getElementById("head_timkiem_idkhungtimkiem").value;
    let userresult=``;
    products.map(value=>{
            if(value.type===valuesearch)
                userresult+=`<span><i class="fa-solid fa-coins"></i><div class='history'>${value.name}</div></span>`;
            })
            console.log(userresult);
    result_search(valuesearch,userresult);
 }
 function truockhidangnhap(ten_form)
{
    alert("chuadangnhap");
    let ten=document.forms[ten_form].elements.dangnhapordangki.value;
    let dangnhap;//dang nhap:-1_admin,1_user
    if(ten=="Đăng nhập")
      {
        dangnhap=prompt("Ban daang dang nhap bang tai khoan admin hay user(-1_admin,1_user): ");
        saukhidangnhap(dangnhap);
      }
    else
      {
        alert("Ban da dang ki");
        saukhidangnhap(1);
      }
}
*/