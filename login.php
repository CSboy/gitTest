<?php
$username="root";
$password="";
$database="rocket";
$server="localhost";

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}

$user = $_REQUEST['username'];
$ps = $_REQUEST['password'];

$query = $conn->prepare("Select password from users where username=?");
$query->bind_param('s', $user);
$query->execute();
$result = $query->get_result();

while($row = $result->fetch_assoc()){
    if($row['password'] === md5($ps)){
        session_start();
        echo 1;
    }else{
        echo 0;
    }
}

mysqli_close($conn);
?>
