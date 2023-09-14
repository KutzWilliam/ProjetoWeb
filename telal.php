<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Viagens360</title>
        <link rel="stylesheet" type="text/css" href="/css/main.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
        <!-- Bootstrap -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <!-- Font Awesome Icons -->
        <script src="https://kit.fontawesome.com/6bb1eca144.js" crossorigin="anonymous"></script>
        <!-- JS -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/jquery.mask.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>
    </head>
    <body class="bg-azul">
        <div class="container-fluid">
            <div class="row py-5 justify-content-center">
                <div class="d-flex col-12 justify-content-center my-5">
                    <a class="nav-link px-2" href="index.php"><img class="img-fluid" src="img/logo.png" alt="Logotipo Viagens360"></a>
                </div>
            </div>
            <div class="container">
                <div class="card mx-3 mt-n5 shadow-lg" style="border-radius: 10px; border-left:8px #fbb03b solid">
                    <div class="card-body">
                        <form action="login.php" method="post" id="formLogin">
                            <div class="row mt-md-4 justify-content-center">
                                <div class="d-flex col-12 col-md-4 justify-content-center mt-5 mt-md-0">
                                    <div class="input-group">
                                        <span class="input-group-text" id="nomeInput">Nome</span>
                                        <input type="text" name="usuario" id="usuario" class="form-control" required>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row mt-0 mt-md-2 justify-content-center">
                                <div class="d-flex col-12 col-md-4 justify-content-center mt-5 mt-md-1">
                                    <div class="input-group">
                                        <span class="input-group-text">Senha</span>
                                        <input type="password" name="senha" id="senha" class="form-control" required>
                                    </div>
                                </div>
                            </div> -->
                            <div class="row mt-0 mt-md-2 justify-content-center">
                                <div class="d-flex col-12 col-md-4 justify-content-center mt-5 mt-md-1">
                                    <input class="btn btn-warning" type="submit" value="Login">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login Efetuado</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Iremos redirecionar você em breve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </body>
</html>