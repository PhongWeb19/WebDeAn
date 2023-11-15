const ListInfoItems = [
{
    id: 1,
    img:"/WebDeAn/Content/assets/img/product1.jpeg",
    name: "Bảng Vẽ Điện Tử Thông Minh Xóa Được Màn Hình LCD 8.5 Inch (Giao Màu Ngẫu Nhiên)",
    price_current: "84.000đ",
    brand_title:"Deli",
    ReviewItem: [
        "Hướng dẫn: Kiểm tra nút nguồn ON OFF phía dưới sản phẩm trước khi sử dụng. Khi Bật nút nguồn sản phẩm mới có thể xóa được (áp dụng cho các sản phẩm có nút nguồn)",
        "Để trẻ em ở nhà học tập, vui chơi",
        "Ghi chú, note công việc",
        "Pin tích hợp 2 năm sử dụng và dễ dàng thay thế",
        "Khả năng tự động xoá với 1 nút bấm"
    ],
    SizeItem: "22.1 x 14.6 x 1.5 cm",
    SpecialFeatures: [
        "Bảng Vẽ Điện Tử Thông Minh Màn Hình LCD 8.5 Inch giúp cho bạn ghi chú những việc quan trọng, thông báo hay để trẻ em ở nhà học tập, vui chơi rất hữu ích.",
        "Không sử dụng phấn truyền thống gây hại cho hô hấp của bé, giữ gìn vệ sinh sạch sẽ.",
        "Pin tích hợp 2 năm sử dụng và dễ dàng thay thế cùng khả năng tự động xoá với 1 nút bấm, nhanh chóng, tiện lợi, đặc biệt tiết kiệm số lần ghi chép hơn các quyển nháp rất nhiều",
        "Kích thước : 8.5 inch, màn hình LCD cho cảm giác như giấy viết.",
        "Bút cảm ứng stylus đầu nhỏ giúp viết và vẽ tự nhiên.",
        "Sản phẩm sử dụng pin nút áo CR2032.",
        "Sản phẩm có nút nguồn, vui lòng bật nút nguồn trước khi sử dụng."
    ],
    IntroDuction: "Evo Office Online  là website thương mại điện tử thuộc Công ty Cổ phần Evo Themes. Chúng tôi có kinh nghiệm hơn 36 năm trong ngành nghiên cứu, sản xuất và phân phối bút viết, văn phòng phẩm, học cụ và dụng cụ mỹ thuật. Evo Office Online cung cấp các mặt hàng cho nhiều đối tượng khách hàng khác nhau, từ học sinh, sinh viên, giới văn phòng, từ sản phẩm cao cấp cho đến các loại bút viết phổ thông. Tất cả đều được tập đoàn Evo Themes nghiên cứu, sản xuất và phân phối.Evo Office Online ra đời với mong muốn mang sự tiện lợi cho khách hàng có nhu cầu văn phòng phẩm, học cụ, sản phẩm mỹ thuật có thể dễ dàng tiếp cận và chọn mua sản phẩm một cách nhanh chóng. Ngoài ra, Evo Office Online còn mong muốn thay đổi thói quen tiêu dùng chọn mua văn phòng phẩm truyền thống, đem đến cho khách hàng một hệ thống cung cấp các sản phẩm văn phòng, giáo dục trực tuyến một nơi uy tín và đáng tin cậy.Evo Office Online đặt mục tiêu trở thành sàn thương mại điện tử hàng đầu Việt Nam chuyên về sản phẩm văn phòng, học cụ, dụng cụ mỹ thuật và tất cả các sản phẩm liên quan đến giáo dục."
    }

]

const RelatedItem = document.getElementById('RelatedItem');
const DescribeItem = document.getElementById('DescribeItem');
const ContentInfomation = document.getElementById('ContentInfomation');
const BorderOfItem = document.getElementById('BorderOfItem');
const AllInfomationOfItem = document.getElementById('AllInfomationOfItem');
console.log(AllInfomationOfItem);
function Add(){
    var quantityItem = document.getElementById('NumberOfItem');
    quantityItem.value++;
    quantityItem.innerHTML = `<div id = "NumberOfItem">${quantityItem.value}</div>`;
}

function Subtract(){
    var quantityItem = document.getElementById('NumberOfItem');
    quantityItem.value--;
    if(quantityItem.value <= 1) quantityItem.value = 1;
    quantityItem.innerHTML = `<div id = "NumberOfItem">${quantityItem.value}</div>`;
}

function ChangeToDescription(){
    var obj1 = document.getElementById('ContentInfomation');
    var obj2 = document.getElementById('IntroductionItem')
    obj1.style.display = 'block';
    obj2.style.display = 'none';
}

function ChangeToIntroduction(){
    var obj1 = document.getElementById('ContentInfomation');
    var obj2 = document.getElementById('IntroductionItem')
    obj2.style.display = 'block';
    obj1.style.display = 'none';
}

function ChangeImage1(){
    document.getElementById("RelateItem1").src = "/WebDeAn/Content Of Item/imgItems/cal 01s.webp";
}

function RestoreImage1(){
    document.getElementById("RelateItem1").src = "/WebDeAn/Content Of Item/imgItems/cal 01s_2.webp";
}

function ChangeImage2(){
    document.getElementById("RelateItem2").src = "/WebDeAn/Content Of Item/imgItems/BamKim_2.webp";
}

function RestoreImage2(){
    document.getElementById("RelateItem2").src = "/WebDeAn/Content Of Item/imgItems/BamKim_1.webp";
}

function ChangeImage3(){
    document.getElementById("RelateItem3").src = "/WebDeAn/Content Of Item/imgItems/Paper_2.webp";
}

function RestoreImage3(){
    document.getElementById("RelateItem3").src = "/WebDeAn/Content Of Item/imgItems/Paper_1.webp";
}

function ChangeImage4(){
    document.getElementById("RelateItem4").src = "/WebDeAn/Content Of Item/imgItems/Paper_Idea_2.webp";
}

function RestoreImage4(){
    document.getElementById("RelateItem4").src = "/WebDeAn/Content Of Item/imgItems/Paper_Idea_1.webp";
}

function ShowMore()
{
    const DescribeItem = document.getElementById('DescribeItem');
    DescribeItem.style.height = "100%";
    obj = document.getElementById("XemThem");
    obj.style.display = 'none';
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

function HandleUrlItems()
{
    
    let queryString = window.location.search;
    var params = new URLSearchParams(queryString);
    var nameParam = params.get('id');
    HandleInterfaceItem(nameParam);
}
function HandleInterfaceItem(nameParam)
{
    ListInfoItems.forEach((Items) => {
        if(nameParam == Items.id)
        {
            var ReviewItem = Items.ReviewItem.map((Item) => {
                return `
                <li class="LineInfo">${Item}</li>
                    `
            });
            BorderOfItem.innerHTML = `
            <div id = "ImageOfItem"><img src="${Items.img}" alt=""></div>
            <div id="InfoOfItem">

                <div id = "InfoFirstContent">
                    <h2>${Items.name}</h2>
                    <div class = "InfoLine">
                        <h5>Mã sản phẩm: </h5>
                        <a href="">(Đang cập nhật...)</a>
                    </div>
                    <div class = "InfoLine">
                        <h5>Thương hiệu: </h5>
                        <a href="">${Items.brand_title}</a>
                    </div>
                    <div class = "InfoLine">
                        <h5>Tình trạng: </h5>
                        <a href="">Còn hàng</a>
                    </div>
                </div>
                
                <div id = "Boards">
                    <div id = "InfoItemBoard">
                        <div id="FunctionItem">
                            <ul>
                                ${ReviewItem.join('')}
                            </ul>
                        </div>
                        <div id = "Cost">
                            <h2>${Items.price_current}</h2>
                        </div>
    
                        <div id="AddButton">
                            <button class = "Operator" onclick="Subtract()"><h3>-</h3></button>
                            <div><input type="text" name="" id="NumberOfItem" value="1"></div>
                            <button class = "Operator" onclick="Add()"><h3>+</h3></button>
                            <button id="AddItem"><h4>THÊM VÀO GIỎ</h4></button>
                        </div>
                    </div>
                    
                    <div id = "InfotoContact">
                        <div><h4>CHÚNG TÔI LUÔN SẴN SÀNG ĐỂ GIÚP ĐỠ BẠN</h4></div>
                        <div id = "ImageContact"><img src="/WebDeAn/Content Of Item/imgItems/ho tro.webp" alt=""></div>
                        <div><h4>Để được hỗ trợ tốt nhất. Hãy gọi</h4></div>
                        <div id = "PhoneNumber"><h1>1900 9999</h1></div>
                        <div><h4>-----Hoặc-----</h4></div>
                        <div><h4>Chat hỗ trợ trực tuyến</h4></div>
                    </div>
                </div>
            </div>
            `
            var ListSpecialFeatures = Items.SpecialFeatures.map((Item) => {
                            return `
                            <li><h4>${Item}</h4></li>
                            `
                        });
                        
            AllInfomationOfItem.innerHTML = `
                    <div id="ButtonInfomation">
                        <button onclick="ChangeToDescription()"><h4>MÔ TẢ</h4></button>
                        <button onclick="ChangeToIntroduction()"><h4>GIỚI THIỆU</h4></button>
                    </div>
                    <div id="ContentInfomation">    
                        <div id="TableInfomationItem">
                        <div class="ColumnInfomationItem">
                            <div class="AttributeInfomationItem"><h4>Thương hiệu</h4></div>
                            <div class="ContentInfomationItem"><h4>${Items.brand_title}</h4></div>
                        </div>

                        <div class="ColumnInfomationItem">
                            <div class="AttributeInfomationItem"><h4> Kích thước</h4></div>
                            <div class="ContentInfomationItem"><h4>${Items.SizeItem}</h4></div>
                        </div>

                        <div class="ColumnInfomationItem">
                            <div class="AttributeInfomationItem"><h4>Bảo quản</h4></div>
                            <div class="ContentInfomationItem"><h4>Nơi khô ráo, tránh lửa</h4></div>
                        </div>
                    </div>
                <div id="DescribeItem">
                    <ul>
                        <h3>Tính năng nổi bật:</h3>
                        ${ListSpecialFeatures.join('')}
                    </ul>
                    <div id = "IllustrationDescribeItem"><img src="${Items.img}" alt=""></div>
                    <div id="XemThem" onclick="ShowMore()"><button>Xem Them</button></div>
                </div>
            </div>
                <div id = "IntroductionItem">
                    <div id ="AllIntroductionItemInfomation">
                        <p>
                        ${Items.IntroDuction}
                        </p>
                    </div>
            </div>
            `
            
        }
    });
}

HandleUrlItems();
ModalOverLay();
