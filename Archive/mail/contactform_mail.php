<?php
// use Mail;
   
    // print_r($_POST["Name"]);

    $data1=$_POST;
    
    $headers = '';
            $to = "info@innobox.com";
            $subject = "Contact Form Details";
            $message = Contactemail($data1);
            $from = $data1['email'];
           $headers .= 'MIME-Version: 1.0' . "\r\n";  
           $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";  
           $headers .= "From: $from \r\n" ."Reply-To: $from \r\n" . "X-Mailer: PHP/" . phpversion();
           $mailSendOK  = mail($to,$subject,$message,$headers);
           echo $mailSendOK;

    function Contactemail($data1)
    {
        return '<label>Name : </label><strong>'.$data1['name'].'</strong><br><label>Email : </label><strong>'.$data1['email'].'</strong><br><label>Company : </label><strong>'.$data1['company'].'</strong><br><label>Mobile Number : </label><strong>'.$data1['mobilenumber'].'</strong><br><label>Enquiry: </label><strong>'.$data1['job2'].'</strong><br><label>Page Name : </label><strong>'.$data1['contactpage'].'</strong><br><label>Message : </label><strong>'.$data1['message'].'</strong>';
    }  
?>

