<?php

   
    // print_r($_POST["Name"]);

    $data=$_POST;
    echo $data;
    $headers = '';
            $to = "info@innobox.com";
            $subject = "Ask for Quote";
            $message = Sampleemails($data);
            $from = $data['email'];
           $headers .= 'MIME-Version: 1.0' . "\r\n";  
           $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";  
           $headers .= "From: $from \r\n" ."Reply-To: $from \r\n" . "X-Mailer: PHP/" . phpversion();
           mail($to,$subject,$message,$headers);

    function Sampleemails($data)
    {
        return '<label>Name : </label><strong>'.$data['name'].'</strong><br><label>Email : </label><strong>'.$data['email'].'</strong><br><label>Mobile Number : </label><strong>'.$data['mobilenumber'].'</strong><br><label>Company : </label><strong>'.$data['company'].'</strong><br><label>Enquiry: </label><strong>'.$data['job2'].'</strong><br><label>Page Name : </label><strong>'.$data['latestworks'].'</strong><br><label>Message : </label><strong>'.$data['message'].'</strong>';
    }  
?>
