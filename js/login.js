
function Login() {
    let username = 'admin';
    let password = 'admin';

    var cekUsername = document.getElementById('username').value;
    var cekPassword = document.getElementById('password').value;

    if (username == cekUsername && password == cekPassword) {
        console.log('user');
        console.log(password);

        window.location.href = "backend1.html";
    } else {
        console.log('tidak di isi!');

        var getErr = document.getElementById("error");
        getErr.style.display = 'block';

    }
}

function Close() {
    var getErr = document.getElementById("error");
    getErr.style.display = 'none';
}

function Daftar() {
    window.location.href = "daftar.html";
}