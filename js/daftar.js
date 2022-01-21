function Submit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;
    let cek = document.getElementById('cek').value;
    let emailPatt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    if (name == '') {
        document.getElementById('errName').innerHTML = 'Nama pelanggan harus diisi!'
        return false;
    }
    if (name.length > 30) {
        document.getElementById('errName').innerHTML = 'Maksimal 30 karakter'
        return false;
    }
    if (email == '') {
        document.getElementById('errEmail').innerHTML = 'Email harus diisi!';
        return false;
    }
    if (!emailPatt.test(email)) {
        document.getElementById("errEmail").innerHTML = "Penulisan email tidak benar!";
        return false;
    }
    if (username == '') {
        document.getElementById('errUsername').innerHTML = 'Username harus diisi!';
        return false;
    }
    if (pass == '') {
        document.getElementById('errPass').innerHTML = 'Password harus diisi!';
        return false;
    }
    if (cek == '') {
        document.getElementById('errCek').innerHTML = 'Masukkan password kembali!';
        return false;
    }
    if (name != null && email != null && username != null && pass != null) {
        window.location.href = "login.html"
        return false
    }
}

