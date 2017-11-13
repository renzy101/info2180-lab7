<?php
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if(isset($_GET['country']) && !empty($_GET['country'])){
    $country = $_GET['country'];
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%';");
} else if(isset($_GET['all']) && $_GET['all']=="true"){
    $stmt = $conn->query("SELECT * FROM countries");
} else {
    echo "";
    die();
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';