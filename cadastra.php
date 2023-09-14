<?php
session_start();
include("conexao.php");

$nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$senha = mysqli_real_escape_string($conexao, trim(md5($_POST['pwd'])));

$sql = "select count(*) as total from usuario where usuario = '$nome'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
	$_SESSION['usuario_existe'] = true;
	header('Location: registro.php');
	exit;
}

$sql = "INSERT INTO usuario (usuario, senha) VALUES ('$nome', '$senha')";

if($conexao->query($sql) === TRUE) {
	$_SESSION['status_cadastro'] = true;
}

$conexao->close();

header('Location: telal.php');
exit;
?>