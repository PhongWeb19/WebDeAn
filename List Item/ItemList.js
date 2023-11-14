var Data = [
    {date : '11-11-2022', name : 'Phat 1', cost : '1111', status : 'Chưa xử lí'},
    {date : '11-11-2023', name : 'Phat 2', cost : '1111', status : 'Đã xử lí'},
    {date : '1-1-2022', name : 'Phat 3', cost : '2222', status : 'Chưa xử lí'},
    {date : '22-11-2023', name : 'Phat 3', cost : '3333', status : 'Đã xử lí'},
    {date : '10-5-2023', name : 'Phat 4', cost : '4444', status : 'Đã xử lí'},
];

function Find(){
    var userName = document.getElementById('TextUserName');
    var statusItem = document.getElementById('SelectOption');
    var filterData;

    console.log(statusItem.value);

    if(userName.value.trim() !== ''){
        filterData = Data.filter(function(item){
            return (item.name === userName.value /*&& item.status === statusItem.value*/);
        });
    }
    
    /*if(statusItem.value.trim() !== ''){
        filterData = Data.filter(function(item){
            return item.status === statusItem.value;
        });
    }
    */
    var obj = document.getElementById('Attribute');
    obj.innerHTML = '';
    filterData.forEach(function(item) {
        var obj = document.getElementById('Attribute');
        obj.innerHTML += `<div class = "Line">
        <div class = "Attribute1">${item.date}</div>
        <div class = "Attribute2">${item.name}</div>
        <div class = "Attribute3">${item.cost}</div>
        <div class = "Attribute4">${item.status}</div>
    </div>`
    });
}

