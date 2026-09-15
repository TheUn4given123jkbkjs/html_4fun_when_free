async function loadSVInfo(){
    var contentDiv = document.getElementById("content");

    try{
        var res = await fetch("info.php");
        if(!res.ok){
            throw new Error("Không thể kết nối");
        }

        var data = await res.json();
        if(data && data.MSSV){
            contentDiv.innerHTML = `<p>MSSV: ${data.MSSV} - Họ tên: ${data.HoVaTen} - Giới tính: ${data.GioiTinh} - Ngày sinh: ${data.NgaySinh}</p>`;        }
        else{
            contentDiv.innerHTML = "<p>Không có dữ liệu</p>"
        }
    }
    catch(error){
        console.error("Lỗi:", error);
        contentDiv.innerHTML = `<p style="color:red;">Lỗi: ${error.message}</p>`;
    }

}
window.addEventListener("DOMContentLoaded", loadSVInfo);