function vSessao(){
    var r = $('#register');
    var lg = $('#login');
    var l = $('#logout');
    var c = $('#cart');
    if(sessionStorage.getItem('dataForm')){
        r.addClass('d-none');
        lg.addClass('d-none');
        l.removeClass('d-none');
        c.removeClass('d-none');
        return true;
    }else{
        r.removeClass('d-none');
        lg.removeClass('d-none');
        l.addClass('d-none');
        c.addClass('d-none');
        return false;
    }
}

function logout(){
    sessionStorage.removeItem('dataForm');
    sessionStorage.removeItem('cart');
    setTimeout(function() {
        location.reload(true);
        }, 2500);
}

function vCart(){
    if(vSessao()){
        var c = $('#cartCount');
        if(sessionStorage.getItem('cart') !== '[]'){
            c.html(JSON.parse(sessionStorage.getItem('cart')).length);
        }else{
            c.html('0');
        }
    }
}


$(document).ready(function() {
    vSessao();
    vCart();
})