function eCart() {
  if (vSession()) {
    if (sessionStorage.getItem('cart') !== '[]') {
      $('#visible').removeClass('d-none');
      $('#cartViewNone').addClass('d-none');
      let cart = JSON.parse(sessionStorage.getItem('cart'));
      var itemCount = {};
      vPacotes();
      cart.forEach(function(item) {
        var itemId = item.id;
        if (itemCount[itemId]) {
          itemCount[itemId] += 1;
        } else {
          itemCount[itemId] = 1;
        }
      });
      var cartHtml = $('#cartView');
      cartHtml.empty();
      var index = 0;
      for (var itemId in itemCount) {
        if (itemCount.hasOwnProperty(itemId)) {
          var itemQuantity = itemCount[itemId];
          var item = pacotes.find(pacote => pacote.id.toString() === itemId);
          var html = `
              <div class="card rounded-3 mb-4">
                  <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                        <img src="img/locations/${item.img}" class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3 text-center py-3 py-md-0">
                        <p class="lead fw-normal mb-2">${item.nome}</p>
                        <p class="text-muted">${item.desc}</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button class="btn btn-link px-2" onclick="rQuant(${item.id})" data-item-id="${item.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input id="form1" min="0" name="quantity" value="${itemQuantity}" type="number" class="form-control form-control-sm text-center" readonly />
                        <button class="btn btn-link px-2" onclick="aQuant(${item.id})" data-item-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                        </div>
                        <div class="row d-flex justify-content-end mt-3 mt-md-0">
                          <div class="col-6 col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">R$ ${item.valor},00</h5>
                          </div>
                          <div class="col-6 col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#" class="text-danger" onclick="rPac(${item.id})" data-item-id="${item.id}"><i class="fas fa-trash fa-lg"></i></a>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>`;
          var element = $(html).hide();
          cartHtml.append(element);
          element.fadeIn(400 * (index + 1));
          index++;
        }
      }
      atPrice();
    }else if (sessionStorage.getItem('cart') === "[]"){
      $('#visible').addClass('d-none');
      $('#cartViewNone').removeClass('d-none');
    }
  }
}
  
function atPrice() {
  if (vSession()) {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    var total = 0;
    cart.forEach(function(item) {
      total += item.valorF;
    });
    if (verificaCupom()) {
      total = total - (total * 0.15);
    }
    $('#total').html(total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));
  }
}
  
function rQuant(itemId) {
  if (vSession()) {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    var itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      eCart();
    }
  }
}
  
function aQuant(itemId) {
  if (vSession()) {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    var item = pacotes.find(pacote => pacote.id === itemId);

    if (item) {
      cart.push(item);

      sessionStorage.setItem('cart', JSON.stringify(cart));
      eCart();
    }
  }
}

function rPac(itemId) {
  if (vSession()) {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    var updatedCart = cart.filter(item => item.id !== itemId);
    
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    eCart();
  }
}

function verificaCupom() {
  var cp = $('#cpDesc');
  if (cp.val() === 'UTFPR') {
      return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  eCart();
});

$('#btnFinish').on('click', function(){
  var modal = new bootstrap.Modal($('#modalInfo'));
  modal.show();
  var cart = [];
  sessionStorage.setItem('cart', cart);
  $('#btn-close-modal1').on('click', function(){
      modalInstance.hide();
      window.location.href = "index.php";
  })
});

  
  