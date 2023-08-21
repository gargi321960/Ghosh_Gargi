<?php
$data = json_decode(file_get_contents('php://input'), true);
error_log(print_r($data, true));

// Convert data to CSV format
$csvData = implode(',', array_keys($data)) . "\n" . implode(',', $data) . "\n";

// Append data to the CSV file
$fileName = 'form_data.csv';
file_put_contents($fileName, $csvData, FILE_APPEND);

// Send a success response
http_response_code(200);
?>
