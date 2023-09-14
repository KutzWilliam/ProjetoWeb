const pacotesString = sessionStorage.getItem('produtos');
const html01 = $('#pacotesN');
const html02 = $('#pacotesI');
let pacotes = '';

function vSession(){
    if(sessionStorage.getItem('dataForm')){
        return true;
    }else{
        return false;
    }
}

function vPacotes(){
    if(pacotesString){
        pacotes = JSON.parse(pacotesString);
        return true;
    }else{
        return false;
    }
}

function limpaPacotes() {
    html01.empty();
    html02.empty();
}

function ordena(){
    if(vPacotes()){
        limpaPacotes();
        var pacotesN = pacotes.filter(pacotes => pacotes.type === 'nacional');
        var pacotesI = pacotes.filter(pacotes => pacotes.type === 'internacional');
        pacotesN.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html01.append(element);
            element.fadeIn(400 * (index + 1));
        });
        pacotesI.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html02.append(element);
            element.fadeIn(400 * (index + 1));
        });
    }
}

function ordenaA(){
    if(vPacotes()){
        limpaPacotes();
        var pacotesN = pacotes.filter(pacotes => pacotes.type === 'nacional');
        var pacotesI = pacotes.filter(pacotes => pacotes.type === 'internacional');
        pacotesN.sort(function(a, b) {
            var nomeA = a.nome.toUpperCase();
            var nomeB = b.nome.toUpperCase();
            if (nomeA < nomeB) {
              return -1;
            }
            if (nomeA > nomeB) {
              return 1;
            }
            return 0;
        });
        pacotesI.sort(function(a, b) {
            var nomeA = a.nome.toUpperCase();
            var nomeB = b.nome.toUpperCase();
            if (nomeA < nomeB) {
              return -1;
            }
            if (nomeA > nomeB) {
              return 1;
            }
            return 0;
        });
        pacotesN.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html01.append(element);
            element.fadeIn(400 * (index + 1));
        });
        pacotesI.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html02.append(element);
            element.fadeIn(400 * (index + 1));
        });
    }
}

function ordenaB(){
    if(vPacotes()){
        limpaPacotes();
        var pacotesN = pacotes.filter(pacotes => pacotes.type === 'nacional');
        var pacotesI = pacotes.filter(pacotes => pacotes.type === 'internacional');
        pacotesN.sort(function(a, b) {
            var valorA = parseFloat(a.valor.replace('.', '').replace(',', '.'));
            var valorB = parseFloat(b.valor.replace('.', '').replace(',', '.'));
            return valorA - valorB;
        });
        pacotesI.sort(function(a, b) {
            var valorA = parseFloat(a.valor.replace('.', '').replace(',', '.'));
            var valorB = parseFloat(b.valor.replace('.', '').replace(',', '.'));
            return valorA - valorB;
        });
        pacotesN.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html01.append(element);
            element.fadeIn(400 * (index + 1));
        });
        pacotesI.forEach(function(item, index){
            var html = `
            <div class="d-flex col-12 col-md-3 mb-3 mb-md-0 justify-content-center mt-3">
            <div class="card text-black">
                <a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">
                    <img src="img/locations/${item.img}" class="card-img-top" alt="${item.nome}"/>
                </a>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title"><a href="#" data-bs-toggle="modalPInfo" data-bs-target="#modalPInfo" class="text-decoration-none text-black" onclick="pInfo(${item.id})">${item.nome}</a></h5>
                        <p class="text-muted">${item.desc}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fw-light">Saindo de <span class="fw-medium">${item.partida}</span></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="fs-6">${item.tipo}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                            <div class="d-flex justify-content-start">
                                <span class="fs-6 text-muted fw-light">Preço por ${item.qtdPessoas}</span>
                            </div>
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="fs-6">R$</span><span class="fs-3 mb-2">${item.valor}</span><span class="fs-6">.00</span>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 justify-content-center">
                            <button type="button" class="btn btn-danger flex-fill ms-1" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            var element = $(html).hide();
            html02.append(element);
            element.fadeIn(400 * (index + 1));
        });
    }
}

function pInfo(id){
    var modal = $('#myModal');
    if(pacotesString){
        const pacotes = JSON.parse(pacotesString);
        const pacote = pacotes.find(pacote => pacote.id === id);
        modal.find('#p-title').text(pacote.nome);
        modal.find('#p-desc').text(pacote.desc);
        modal.find('#p-origem').text(pacote.partida);
        modal.find('#p-tipo').text(pacote.tipo);
        if(pacote.tipo === 'Hotel + Aéreo'){
            modal.find('#p-tipo-i').html(`<i class='fa fa-hotel'></i> <i class='mx-1 fa fa-plane'></i>`);
        }else{
            modal.find('#p-tipo-i').html(`<i class='fa fa-hotel'></i>`);
        }
        modal.find('#p-price').text(pacote.valor);
        modal.find('#p-qtdPessoas').text(pacote.qtdPessoas);
        modal.find('#p-img').attr('src', `img/locations/${pacote.img}`);
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
        $('#btn-close-modal').on('click', function(){
            modalInstance.hide();
        })
    }
}

function addToCart(id){
    if(vSession()){
        if(sessionStorage.getItem('cart') !== '[]'){
            var cart = JSON.parse(sessionStorage.getItem("cart"));
        }else{
            var cart = [];
        }
        if(pacotesString){
            const pacotes = JSON.parse(pacotesString);
            const pacote = pacotes.find(pacote => pacote.id === id);
            cart.push(pacote);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            vCart();
        }
    }else{
        var modal = new bootstrap.Modal($('#modalError'));
        modal.show();        
    }
}

$(document).ready(function() {
    ordena();
})