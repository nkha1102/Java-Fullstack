var listStaff;
GetAll();
function GetAll() {
    // get danh sách nhân viên
    fetch("http://localhost:8080/staffs")
        .then(function (response) {
            return response.json();
        })
        .then(function (staffs) {
            // code tạo HTML từ danh sách nhân viên ở đây.
            let staffsDiv = document.getElementById("staffs");
            listStaff = staffs;
            staffs.forEach((staff, index) => {
                let divOngNoi = document.createElement("div");
                let divCha = document.createElement("div");
                let staffButton = document.createElement("button");
                let image = document.createElement("img");
                let name = document.createElement("p");
                image.id = "profile-image";
                staffButton.type = "button";
                staffButton.id = "profile";
                divOngNoi.className = "col-12 col-md-4 col-lg-2 ongNoi";
                divCha.className = "cha";
                staffButton.name = index;
                staffButton.setAttribute("data-bs-toggle", "modal");
                staffButton.setAttribute("data-bs-target", "#myModal");
                staffButton.onclick = modal;
                image.src = staff.image;
                image.alt = "Anh Nhan Vien";
                name.innerHTML = staff.name;
                staffsDiv.append(divOngNoi);
                divOngNoi.append(divCha);
                divCha.append(staffButton);
                staffButton.append(image);
                staffButton.append(name);

            })
        })
        //báo lỗi api
        .catch((error) => {
            alert(error);
        });
}


function modal() {
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    let body = document.getElementById("modalBody");
    let modalImage = document.createElement("img");
    let modalIn4 = document.createElement("div");
    let id = document.createElement("p");
    let hoVaTen = document.createElement("p");
    let birthdate = document.createElement("p");
    let role = document.createElement("p");
    let sex = document.createElement("p");
    let password = document.createElement("p");
    body.append(modalImage);
    body.append(modalIn4);
    modalIn4.append(id);
    modalIn4.append(hoVaTen);
    modalIn4.append(birthdate);
    modalIn4.append(role);
    modalIn4.append(sex);
    modalIn4.append(password);
    modalIn4.id = "thongTinModal";
    modalIn4.className = "col-6";
    modalImage.className = "col-6";
    modalImage.id = "modal-image";
    modalImage.alt = "Anh Nhan Vien"
    listStaff.forEach((staff, index) => {
        if (this.name == index) {
            let ngaySinh = new Date(staff.birthdate);
            modalImage.src = staff.image;
            id.innerHTML = "ID: " + staff.id;
            hoVaTen.innerHTML = "Họ và tên: " + staff.name;
            birthdate.innerHTML = "Ngày sinh: " + ngaySinh.toLocaleDateString('vi-VN', options);
            role.innerHTML = "Chức vụ: " + staff.role;
            sex.innerHTML = "Giới tính: " + staff.sex;
            password.innerHTML = "Mật khẩu: " + staff.password;
        }

    })
}
function modalAdd() {
    document.getElementById("modal-tieude").innerHTML = "Thêm thuyền viên";
    let body = document.getElementById("modalBody");
    let footer = document.getElementById("modalFooter");
    let thongTinAdd = document.createElement("div");
    thongTinAdd.id = "thongTinAdd";
    let addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.className = "btn btn-success";
    addButton.setAttribute("data-bs-dismiss", "modal");
    addButton.setAttribute("onclick", "Add()");
    addButton.innerHTML = "Add";
    let ten = document.createElement("p");
    let ngaySinh = document.createElement("p");
    let role = document.createElement("p");
    let sex = document.createElement("p");
    let password = document.createElement("p");
    let img = document.createElement("p");
    let tenInput = document.createElement("input");
    tenInput.id = "tenInput";
    let ngaySinhInput = document.createElement("input");
    ngaySinhInput.id = "ngaySinhInput";
    let roleInput = document.createElement("input");
    roleInput.id = "roleInput";
    let sexInput = document.createElement("input");
    sexInput.id = "sexInput";
    let passwordInput = document.createElement("input");
    passwordInput.id = "passwordInput";
    let imgInput = document.createElement("input");
    imgInput.id = "imgInput";

    footer.append(addButton);
    body.append(thongTinAdd);
    thongTinAdd.append(ten);
    thongTinAdd.append(tenInput);
    thongTinAdd.append(ngaySinh);
    thongTinAdd.append(ngaySinhInput);
    thongTinAdd.append(role);
    thongTinAdd.append(roleInput);
    thongTinAdd.append(sex);
    thongTinAdd.append(sexInput);
    thongTinAdd.append(password);
    thongTinAdd.append(passwordInput);
    thongTinAdd.append(img);
    thongTinAdd.append(imgInput);

    ten.innerHTML = "Tên: ";
    ngaySinh.innerHTML = "Ngày Sinh: ";
    role.innerHTML = "Chức vụ: ";
    sex.innerHTML = "Giới tính: ";
    password.innerHTML = "Mật khẩu: ";
    img.innerHTML = "Link ảnh: ";
}
function modalUpdate() {
    document.getElementById("modal-tieude").innerHTML = "Chỉnh sửa thuyền viên";
    let body = document.getElementById("modalBody");
    let footer = document.getElementById("modalFooter");
    let thongTinUpdate = document.createElement("div");
    thongTinUpdate.id = "thongTinUpdate";
    let addButton = document.createElement("button");
    addButton.id = "updateButton";
    addButton.className = "btn btn-success";
    addButton.setAttribute("data-bs-dismiss", "modal");
    addButton.setAttribute("onclick", "Update()");
    addButton.innerHTML = "Update";
    let id = document.createElement("p");
    let ten = document.createElement("p");
    let ngaySinh = document.createElement("p");
    let role = document.createElement("p");
    let sex = document.createElement("p");
    let password = document.createElement("p");
    let img = document.createElement("p");
    let idInput = document.createElement("input");
    idInput.id = "idInputU"
    let tenInput = document.createElement("input");
    tenInput.id = "tenInputU";
    let ngaySinhInput = document.createElement("input");
    ngaySinhInput.id = "ngaySinhInputU";
    let roleInput = document.createElement("input");
    roleInput.id = "roleInputU";
    let sexInput = document.createElement("input");
    sexInput.id = "sexInputU";
    let passwordInput = document.createElement("input");
    passwordInput.id = "passwordInputU";
    let imgInput = document.createElement("input");
    imgInput.id = "imgInputU";

    footer.append(addButton);
    body.append(thongTinUpdate);
    thongTinUpdate.append(id);
    thongTinUpdate.append(idInput);
    thongTinUpdate.append(ten);
    thongTinUpdate.append(tenInput);
    thongTinUpdate.append(ngaySinh);
    thongTinUpdate.append(ngaySinhInput);
    thongTinUpdate.append(role);
    thongTinUpdate.append(roleInput);
    thongTinUpdate.append(sex);
    thongTinUpdate.append(sexInput);
    thongTinUpdate.append(password);
    thongTinUpdate.append(passwordInput);
    thongTinUpdate.append(img);
    thongTinUpdate.append(imgInput);

    id.innerHTML = "ID: "
    ten.innerHTML = "Tên: ";
    ngaySinh.innerHTML = "Ngày Sinh: ";
    role.innerHTML = "Chức vụ: ";
    sex.innerHTML = "Giới tính: ";
    password.innerHTML = "Mật khẩu: ";
    img.innerHTML = "Link ảnh: ";

}

function modalDelete() {
    document.getElementById("modal-tieude").innerHTML = "Xóa thuyền viên";
    let body = document.getElementById("modalBody");
    let footer = document.getElementById("modalFooter");
    let thongTinUpdate = document.createElement("div");
    thongTinUpdate.id = "thongTinDelete";
    let addButton = document.createElement("button");
    addButton.id = "deleteButton";
    addButton.className = "btn btn-warning";
    addButton.setAttribute("data-bs-dismiss", "modal");
    addButton.setAttribute("onclick", "Delete()");
    addButton.innerHTML = "Delete";
    let id = document.createElement("p");
    let idInput = document.createElement("input");
    idInput.id = "idInputD";

    footer.append(addButton);
    body.append(thongTinUpdate);
    thongTinUpdate.append(id);
    thongTinUpdate.append(idInput);
    id.innerHTML = "ID: ";
}
function Remove() {
    try {
        document.getElementById("thongTinAdd").remove();
    } catch (error) { }
    try {
        document.getElementById("modal-image").remove();
    } catch (error) { }
    try {
        document.getElementById("thongTinModal").remove();
    } catch (error) { }
    try {
        document.getElementById("addButton").remove();
    } catch (error) { }
    try {
        document.getElementById("updateButton").remove();
    } catch (error) { }
    try {
        document.getElementById("thongTinUpdate").remove();
    } catch (error) { }
    try {
        document.getElementById("thongTinDelete").remove();
    } catch (error) { }
    try {
        document.getElementById("deleteButton").remove();
    } catch (error) { }
}
function Add() {

    let name = document.getElementById("tenInput").value;
    let birthdate = document.getElementById("ngaySinhInput").value;
    let role = document.getElementById("roleInput").value;
    let sex = document.getElementById("sexInput").value;
    let password = document.getElementById("passwordInput").value;
    let image = document.getElementById("imgInput").value;

    let postData = {
        "name": name,
        "birthdate": birthdate,
        "role": role,
        "sex": sex,
        "password": password,
        "image": image
    }
    // Post thêm nhân viên mới
    fetch("http://localhost:8080/staffs", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then((response) => {
        console.log(response);
    });

}
function Update() {
    let id = document.getElementById("idInputU").value;
    let name = document.getElementById("tenInputU").value;
    let birthdate = document.getElementById("ngaySinhInputU").value;
    let role = document.getElementById("roleInputU").value;
    let sex = document.getElementById("sexInputU").value;
    let password = document.getElementById("passwordInputU").value;
    let image = document.getElementById("imgInputU").value;

    let patchData = {
        "id": id,
        "name": name,
        "birthdate": birthdate,
        "role": role,
        "sex": sex,
        "password": password,
        "image": image
    }
    fetch("http://localhost:8080/staffs", {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchData)
    }).then((response) => {
        console.log(response);
    });
}
function Delete() {
    let id = document.getElementById("idInputD").value;
    fetch("http://localhost:8080/staffs/" + id , {
        method: "DELETE",
    }).then((response) => {
        console.log(response);
    });
}
function GetOne() {
    // get danh sách nhân viên
    fetch("http://localhost:8080/staffs/1")
        .then(function (response) {
            return response.json();
        }).then(function (staff) {
            // code tạo HTML từ danh sách nhân viên ở đây.
            console.log(staff);
        })
        //báo lỗi api
        .catch((error) => {
            alert(error);
        });
}


