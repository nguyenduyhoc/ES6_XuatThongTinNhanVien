document.getElementById('btnXuatThongTin').onclick = (event) => {
    event.preventDefault();
    let nhanVien = {};
    let arrTd = [];
    let arrInput = document.querySelectorAll('.form-group input ,select')
        // Tinh tien luong 
    let tienLuong = document.querySelector('#luongCoBan').value;
    let heSoLuong = document.querySelector('select').value
    let tongLuong = 0;
    switch (heSoLuong) {
        case "Nhân Viên":
            {
                tongLuong = tienLuong * 1
            }
            break;
        case "Quản lý":
            {
                tongLuong = tienLuong * 1.5
            }
            break;
        case "Giám đốc":
            {
                tongLuong = tienLuong * 3
            }
            break;
    }
    document.querySelector('#tongLuong').value = tongLuong
        // Moi lan duyet lay ra 1 tagInput
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        //Lay id,value,title tagInput
        let { id, value, title } = tagInput;
        nhanVien = {...nhanVien, [id]: value }
            // Tao thead cho tr 
        arrTd = [...arrTd, title];
        console.log(nhanVien)
    }
    //Tao cot
    let contentTr = `<tr>`;
    for (let i = 0; i < arrTd.length; i++) {
        contentTr += `<td> ${arrTd[i]} </td>`
    }
    contentTr += `</tr>`
    document.querySelector("thead").innerHTML = contentTr;

    //Duyet doi tuong nhan vien
    let contentTrBody = `<tr>`
    for (let thuocTinh in nhanVien) {
        contentTrBody += `<td> ${nhanVien[thuocTinh]}</td>`;
    }
    contentTrBody += `</tr>`
    document.querySelector('tbody').innerHTML = contentTrBody;
}