<?php 

//devolve as boas vindas ao utilizador com nome e apelido
    if(isset($_GET['n']) and isset($_GET['a']) ){
        $nome = $_GET['n'];
        $apelido = $_GET['a'];
        $frase_final= "Sr('a'). $nome $apelido";
    }

?>