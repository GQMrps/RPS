<?php
$servername = "gamesquestionmar.mysql.domeneshop.no";
$username = "gamesquestionmar";
$password = "mYrLmGE3u4GYCsd";
$db = "gamesquestionmar";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);



// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
$servername = "gamesquestionmar.mysql.domeneshop.no";
$username = "gamesquestionmar";
$password = "mYrLmGE3u4GYCsd";
$db = "gamesquestionmar";
$array = json_decode( $_POST['array'] );
$connect = mysqli_connect($servername, $username, $password, $db);
function option1 ($arrayVar, $conn){
    
    if(is_array ($arrayVar))
    {
        foreach ($arrayVar as $row => $value)
        {
            global $connect;
            $score = mysqli_real_escape_string($conn, $value[0]);
            $player = mysqli_real_escape_string($conn, $value[1]);
            $date = mysqli_real_escape_string($conn, $value[2]);
            $dateCheck = mysqli_real_escape_string($conn, $value[3]);
            $sql = "INSERT INTO WHSTable(score, player, date, dateCheck) VALUES ('".$score."', '".$player."', '".$date."', '".$dateCheck."')";
            mysqli_query($connect, $sql);
            
        }
        
        
    }
}

option1($array, $connect);

?>  