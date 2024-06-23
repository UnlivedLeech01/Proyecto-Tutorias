<?php
    $conexion = mysqli_connect("localhost", "root", "", "tutorias");
    $boleta = $_POST['boleta'];
    $nombre = $_POST['nombre'];
    $apaterno = $_POST['apellido1'];
    $amaterno = $_POST['apellido2'];
    $tel = $_POST['telefono'];
    $carrera = $_POST['carrera'];
    $semestre = $_POST['semestre'];
    $preftutor = $_POST['preferenciaTutor'];
    $correo = $_POST['email'];
    $contra = $_POST['password'];
    $regex = '/^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx$/';
    if(preg_match($regex, $correo)){
        $registro = "INSERT INTO `alumno`(`Boleta`, `Nombre`, `Apaterno`, `Amaterno`, `Carrera`, `Correo`, `Contra`, `Telefono`, `Semestre`, `Preferencia`) 
                    VALUES ('$boleta','$nombre','$apaterno','$amaterno','$carrera','$correo','$contra','$tel','$semestre','$preftutor')";
        $query = mysqli_query($conexion, $registro);

        header("Location:../LoginUsuario.html");
    }
    else{
        echo "Correo invalido";
        header("Location:../registro.html");
    }    

?>