<?php
session_start();
include('conexao.php');

// if(empty($_POST['usuario']) || empty($_POST['senha'])) {
// 	header('Location: telal.php');
// 	exit();
// }

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);

$query = "select usuario from usuario where usuario = '{$usuario}'";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if($row == 1) {
	$_SESSION['usuario'] = $usuario;
	header('Location: telaS.php');
	exit();
} else {
	$_SESSION['nao_autenticado'] = true;
	header('Location: telal.php');
	exit();
} ?>



