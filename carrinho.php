<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Viagens360</title>
        <link rel="stylesheet" type="text/css" href="/css/main.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
        <!-- Bootstrap -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
         <!-- Font Awesome Icons -->
        <script src="https://kit.fontawesome.com/6bb1eca144.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <div class="container-fluid header">
                <div class="d-flex flex-wrap align-items-center justify-content-center p-3">
                    <div class="d-flex align-items-center mb-3 mt-3 me-md-auto">
                        <img src="/img/logo.png" id="imgLogo"/>
                    </div>
                    <ul class="d-flex justify-content-center nav col-12 col-md-auto ms-4 mb-2 me-lg-3 mb-lg-0 text-uppercase">
                        <li><a class="nav-link px-2 px-md-2 text-light" href="index.php">Inicio</a></li>
                        <li><a class="nav-link px-2 px-md-2 text-light" href="pacotes.php">Pacotes</a></li>
                    </ul>
                    <div class="d-flex col-3 col-md-auto justify-content-center">
                        <div class="dropdown justify-content-center me-md-3 mb-md-0 mb-2 ">
                            <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fa fa-user"></i></button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" id="register" href="registro.php">Registro</a></li>
                                <li><a class="dropdown-item d-none" id="logout" href="#" onclick="logout();">Sair</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex col-md-auto justify-content-center d-none" id="cart">
                        <div class="me-md-3 mb-md-0 mb-2">
                            <a href="#">
                                <button type="button" class="btn btn-danger position-relative">
                                    <i class="fa-solid fa-cart-shopping text-light"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" id="cartCount">0</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input placeholder="Buscar" type="search" class="form-control" />
                    </form>
                    
                </div>
            </div>
        </header>
        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <h3 class="fw-normal mb-0 text-black">Carrinho de Compras</h3>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mb-4">
                        <p class="text-muted">Olá, aqui está seu carrinho de compras.</p>
                    </div>
                </div>
                <div class="col-10" id="cartView">          
                </div>
                <div class="col-10 py-5 d-none" id="cartViewNone">
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <h3 class="text-muted">Carrinho Vazio</h3>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div class="col-10" id="visible">
                    <div class="card mb-4">
                        <div class="row card-body p-4 d-flex align-items-center justify-content-center">
                            <div class="col-12 col-md-9">
                                <div class="mb-3 mb-md-0">
                                    <label class="form-label text-muted" for="cpDesc">Cupom de Desconto</label>
                                    <input type="text" name="cpDesc" id="cpDesc" class="form-control">
                                </div>
                            </div>
                            <div class="col-auto col-md-auto">
                                <button type="button" class="btn btn-outline-warning btn-lg ms-4" onclick="atPrice()" id="btnCupom">Aplicar</button>
                            </div>
                        </div>
                    </div>
              
                      <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col-6 col-md-2">
                                    <p class="fs-6 text-uppercase">Valor Total</p>
                                </div>
                                <div class="col-6 col-md-auto align-items-center">
                                    <p class="fs-5 text-muted fw-medium" id="total"></p>
                                </div>
                            </div>
                            <div class="d-flex row justify-content-center">
                                <div class="col-12 col-md-5 d-flex justify-content-center">
                                    <button type="button" class="btn btn-danger btn-block btn-lg" id="btnFinish" data-bs-toggle="modal" data-bs-target="#modalInfo">Finalizar Compra</button>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
        </div>
        <div class="container-fluid bg-azul">
            <div class="row justify-content-center py-5">
                <div class="d-flex col-6 col-md-3 justify-content-center">
                    <img alt="logo" class="w-50" title="logo" src="img/companhias/avianca-logo.png"/>
                </div>
                <div class="d-flex col-6 col-md-3 justify-content-center">
                    <img alt="logo" class="w-50" title="logo" src="img/companhias/azul-logo.png" />
                </div>
                <div class="d-flex col-6 col-md-3 justify-content-center">
                    <img alt="logo" class="w-50" title="logo" src="img/companhias/gol-logo.png"/>
                </div>
                <div class="d-flex col-6 col-md-3 justify-content-center">
                    <img alt="logo" class="w-50" title="logo" src="img/companhias/latam-logo.png"/>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="footer container-fluid py-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-3 mb-3">
                        <h3 class="text-uppercase fw-bold text-center">Presente Em</h3>
                        <p>Brasil, Argentina, Bolívia, Chile, Colômbia, Costa Rica, Equador, El Salvador, Guatemala, Honduras, México, Nicarágua, Panamá, Paraguai, Peru, Porto Rico, República Dominicana, Estados Unidos, Uruguai</p>
                    </div>
                    <div class="col-12 col-md-3 mb-3">
                        <h3 class="text-uppercase fw-bold text-center">Sobre nós</h3>
                        <p>
                            A Viagens360 comercializa os produtos de seus fornecedores apenas de forma direta pelo seu site (www.viagens360.com). Não há qualquer venda por redes sociais (Facebook, Instagram, Twitter, LinkedIn, etc.). Pós-vendas - os canais oficiais de atendimento aos clientes são: por meio de telefone e Minhas Viagens. 
                            Mais esclarecimentos em www.viagens360.com
                        </p>
                    </div>
                    <div class="col-12 col-md-2 mb-3">
                        <h3 class="text-uppercase fw-bold text-center">Contato</h3>
                        <address>
                            Central de Vendas e Serviços<br>
                            <i class="fa fa-map-pin"></i> Ponta Grossa, PR<br>
                            <i class="fa fa-envelope"></i> viagens360@email.com<br>
                            <i class="fa fa-phone"></i> (62)99686-4339
                        </address>
                    </div>
                </div>
            </div>
            <div class="container-fluid footer-2 py-3">
                <div class="row justify-content-center">
                    <div class="d-flex col-12 justify-content-center">
                        <span>Viagens360 Operadora e Agência de Viagens S.A - CNPJ: 10.999.269/0001-19</span>
                    </div>
                    <div class="d-flex col-12 justify-content-center">
                        <span>Rua Doutor Washington Subtil Chueire, 330 - Jardim Carvalho. CEP 84017-220 - Ponta Grossa - PR - Brasil.</span>
                    </div>
                </div>
            </div>
        </footer>
        <div class="modal fade show" id="modalInfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Pedido Enviado</h5>
                        <button type="button" class="btn-close" id="btn-close-modal1" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="d-flex justify-content-center col-md-auto col-12">
                                <img class="img-fluid rounded w-100" src="img/logo_bkp.png" id="p-img">
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="d-flex justify-content-center col-md-auto col-12">
                                <p class="d-flex justify-content-center text-center">Agradecemos por escolher a Viagens360 para um momento tão importante, entraremos em contato pelo e-mail de contato informado no momento do cadastro para informar os próximos passos de pagamento.</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary" id="btn-close-modal1" data-bs-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/jquery-3.7.0.min.js"></script>
        <script type="text/javascript" src="js/jquery.mask.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/session.js"></script>
        <script type="text/javascript" src="js/pacotes.js"></script>
        <script type="text/javascript" src="js/cart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </body>
</html>