<?php
// Database configuration
$host = "localhost";
$dbname = "feedbacks";
$username = ""; // Enter your own username 
$password = ""; // Enter your own password

try {
    // Establish a connection to the database
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create the 'feedbacks' database if not exists
    $conn->exec("CREATE DATABASE IF NOT EXISTS $dbname");

    // Switch to the 'feedbacks' database
    $conn->exec("USE $dbname");

    // Create the 'submitted_feedbacks' table if not exists
    $conn->exec("
        CREATE TABLE IF NOT EXISTS submitted_feedbacks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            message TEXT,
            submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Validate form data (you can add more validation)
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);

        if (empty($name) || empty($email) || empty($message)) {
            echo "Please fill out all fields.";
        } else {
            // Prepare the SQL statement
            $stmt = $conn->prepare("INSERT INTO submitted_feedbacks (name, email, message) VALUES (:name, :email, :message)");

            // Bind parameters
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);

            // Execute the statement
            if ($stmt->execute()) {
                // Display success message on the same page or redirect
                echo "Thank you for your feedback!";

                // Check if it's an AJAX request
                if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                    // Send a JSON response
                    echo json_encode(['success' => true]);
                    exit;
                }

                // Reset the form using JavaScript and show a notification
                echo "<script>
                    alert('Thank you for your feedback!');
                    document.getElementById('contact-form').reset();
                    window.location.href = 'indexfeedback.html';
                </script>";
            } else {
                // Display error message
                echo "Error submitting feedback. Please try again later.";
            }
        }
    }

    // Redirect to a thank you page or any other appropriate action after form submission
    // header("Location: thank-you.php");
    // exit();

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;  // Exit the script if the connection fails
}
?>
