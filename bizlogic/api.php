<?php
$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'exam');

$encodedData = file_get_contents('php://input');  
$decodedData = json_decode($encodedData, true);

$email = $decodedData['Email'];
$password = ($decodedData['Password']); 

// $email = $_POST['email'];
// $password = ($_POST['password']); 

$SQL = "SELECT * FROM user WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "pw WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
