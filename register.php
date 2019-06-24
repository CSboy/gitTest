<?php
$username="root";
$password="";
$database="rocket";
$server="localhost";

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$email = $_REQUEST['email'];
$age = $_REQUEST['age'];
$tel = $_REQUEST['tel'];

$query = $conn->prepare("insert into users(username, password, email, age, telephone) values(?, md5(?), ?, ?, ?)");
$query->bind_param('sssds', $username, $password, $email, $age, $tel);
$result = $query->execute();

echo $result;

mysqli_close($conn);
?>
