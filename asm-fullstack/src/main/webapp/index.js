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
            staffsDiv.innerHTML = "";
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
    let modalImage = document.getElementById("modalImage");
    let id = document.getElementById("id");
    let hoVaTen = document.getElementById("name");
    let birthdate = document.getElementById("dob");
    let role = document.getElementById("role");
    let sex = document.getElementById("sex");
    let password = document.getElementById("password")
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
    GetAll();

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
    GetAll();
}
function Delete() {
    let id = document.getElementById("idInputD").value;
    fetch("http://localhost:8080/staffs/" + id , {
        method: "DELETE",
    }).then((response) => {
        console.log(response);
    });
    GetAll();
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


