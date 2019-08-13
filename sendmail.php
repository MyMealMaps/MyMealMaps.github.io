<!DOCTYPE html>
<html lang="en">
<body>
    <?php
    $to = 'maryjane@email.com';
    $subject = 'Marriage Proposal';
    $message = 'Hi Jane, will you marry me?'; 
     
    // Sending email
    if(mail($to, $subject, $message)){
        echo 'Your mail has been sent successfully.';
    } else{
        echo 'Unable to send email. Please try again.';
    }
    ?>
</body>
</html>