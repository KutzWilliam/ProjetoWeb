<?php ?>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
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
                    <!-- <ul class="nav col-12 col-md-auto mb-2 justify-content-center">
                        <li><a href=""></a><img src="/img/rss.png" /></li>
                        <li><a href=""></a><img src="/img/linkedin.png" /></li>
                        <li><a href=""></a><img src="/img/face.png" /></li>
                    </ul> -->
                    <ul class="d-flex justify-content-center nav col-12 col-md-auto ms-4 mb-2 me-lg-3 mb-lg-0 text-uppercase">
                        <li><a class="nav-link px-1 px-md-2 linkAtivo disabled" href="">Inicio</a></li>
                        <li><a class="nav-link px-1 px-md-2 text-light" href="pacotes.php">Pacotes</a></li>
                    </ul>
                    <div class="d-flex col-3 col-md-auto justify-content-center">
                        <div class="dropdown justify-content-center me-md-3 mb-md-0 mb-2 ">
                            <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fa fa-user"></i></button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" id="register" href="registro.php">Registro</a></li>
                                <li><a class="dropdown-item" id="login" href="telaS.php">Login</a></li>
                                <li><a class="dropdown-item d-none" id="logout" href="#" onclick="logout();">Sair</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex col-md-auto justify-content-center d-none" id="cart">
                        <div class="me-md-3 mb-md-0 mb-2">
                            <a href="carrinho.php">
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
        <div id="slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active" data-interval="2000">
                    <div class="img" >
                        <img class="d-block img-fluid w-100" src="/img/baner.png" />
                    </div>
                </div>
                <div class="carousel-item" data-interval="2000">
                    <div class="img">
                        <img class="d-block img-fluid w-100" src="/img/baner2.png" />
                    </div>
                </div>
                <div class="carousel-item" data-interval="2000">
                    <div class="img">
                        <img class="d-block img-fluid w-100"  src="/img/baner3.png" />
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container-fluid">
            <div class="px-4 py-5 my-5 text-center">
                <div class="justify-content-center">
                    <h1>OFERTAS QUE NÃO PODEM ESPERAR</h1>
                    <p>Temos as melhores combinações de tarifas num só lugar. Assim, possibilitamos que as pessoas façam viagens baratas, com transparência, segurança e praticidade.</p>
                </div>
                <div class="row justify-content-center pt-5">
                    <div class="col-12 col-md-2">
                        <img src="/img/content-2.png"/>
                        <h3 class="text-uppercase mt-3">Carros</h3> 
                    </div>
                    <div class="col-12 col-md-2 mt-2">
                        <img src="/img/content-1.png"/>
                        <h3 class="text-uppercase mt-3">Passagens</h3>
                    </div>
                    <div class="col-12 col-md-2 mt-2">
                        <img src="/img/content-3.png"/><br>
                        <h3 class="text-uppercase mt-3">Hospedagens</h3>
                    </div>
                    <div class="col-12 col-md-2 mt-2">
                        <img src="/img/content-4.png"/><br>
                        <h3 class="text-uppercase mt-3">Pacotes</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid bloco-imagens-texto">
            <div class="col-12 mt-5 py-3">
                <h2 class="text-center text-uppercase">Principais Destinos</h2>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/maceio.png"/>
                        <div class="card-body">
                            <h5 class="card-title">Maceio</h5>
                            <p class="card-text text-center">A capital do estado nordestino de Alagoas, tornou-se um destino turístico bem popular.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/america do sul.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Chile</h5>
                            <p class="card-text text-center">O mais comprido e estreito país do mundo, o Chile, possui 4.270 Km de extensão, ao longo do Pacífico.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/sydney.png"/>
                        <div class="card-body">
                            <h5 class="card-title">Sydney</h5>
                            <p class="card-text text-center">É popular por suas belas praias, atividades ao ar livre, cultura local e inúmeros bares e restaurantes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/florida.png"/>
                        <div class="card-body">
                            <h5 class="card-title">Flórida</h5>
                            <p class="card-text text-center">As águas azul turquesa brilham ao sol, criando um cenário elegante junto a praias de areia branca e prédios art-déco.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/madrid.png"/>
                        <div class="card-body">
                            <h5 class="card-title">Madrid</h5>
                            <p class="card-text text-center">Madrid é a capital da Espanha e a terceira maior cidade da União Europeia, atrás apenas de Londres e Berlim.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-2 mb-3 mb-md-0 justify-content-center">
                    <div class="card">
                        <img src="/img/africasul.png"/>
                        <div class="card-body">
                            <h5 class="card-title">África do Sul</h5>
                            <p class="card-text text-center">As frutas e os vinhos, famosos mundialmente, enquanto as reservas de vida selvagem irão te encantar e inspirar.</p>
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
                            Central de Vendas e Serviços</span><br>
                            <i class="fa fa-map-pin"></i> Ponta Grossa, PR</span><br>
                            <i class="fa fa-envelope"></i> viagens360@email.com</span><br>
                            <i class="fa fa-phone"></i> (62)99686-4339</span>
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

        <script type="text/javascript" src="js/jquery-3.7.0.min.js"></script>
        <script type="text/javascript" src="js/jquery.mask.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/session.js"></script>
    </body>
</html>