<?php
ob_start();
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

$query = "SELECT * FROM WHSTable ORDER BY score DESC, dateCheck DESC LIMIT 10";

$result = $conn->query($query);

while($row = $result->fetch_row()) {
  $rows[]=$row;
}
$result->close();
$conn->close();

$out = array_values($rows);

ob_end_clean();



echo json_encode($out);
?>  