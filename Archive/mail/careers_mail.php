<?php

$data1=$_POST;
if(!empty($data1['name']) || !empty($data1['email']) || !empty($data1['mobilenumber']) || !empty($data1['company']) || !empty($data1['message']) || !empty($_FILES['file']['name']))
{
    
    $allowedExtensions = array("pdf","doc","docx","sql","png");
    $files = array();

    foreach($_FILES as $name =>$file)
    {
        $file_name = $file['name'];
         $temp_name = $file['tmp_name'];
         $file_type = $file['type'];
         $path_parts = pathinfo($file_name);
         $ext = $path_parts['extension'];
         if(!in_array($ext,$allowedExtensions))
         {
             die("File $file_name has the extensions $ext which is not allowed");
         }
         array_push($files,$file);
    }

        $to = "careers@innobox.com";
        $preSub = "Applying job for ";
        $subjectPost = $data1['selectedjob1'];
        $subject = $preSub. $subjectPost;
        $message = Sampleemail($data1);
        $from = $data1['email'];
        $headers = "FROM: $from";
        // boundary 
        $semi_rand = md5(time()); 
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
        
        // // headers for attachment 
        // $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/alternative;\n" . " boundary=\"{$mime_boundary}\""; 
        // // multipart boundary 
        // $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n"; 
        // $message .= "--{$mime_boundary}\n";
        // headers for attachment 
        $headers .= "\nMIME-Version: 1.0\n"
        .  "Content-Type: multipart/mixed;\n"
        .  " boundary=\"{$mime_boundary}\""; 
        // multipart boundary 
        $message = "This is a multi-part message in MIME format.\n\n"
        . "--{$mime_boundary}\n"
        . "Content-Type: text/html; charset=\"iso-8859-1\"\n"
        . "Content-Transfer-Encoding: 7bit\n\n"
        . $message
        . "\n\n"; 
        $message .= "--{$mime_boundary}\n";
 
        //preparing attachemts
        for($count=0;$count<count($files);$count++)
        {
            $file = fopen($files[$count]['tmp_name'],"rb");
            $data = fread($file,filesize($files[$count]['tmp_name']));
            fclose($file);
            $data = chunk_split(base64_encode($data));
            $name = $files[$count]['name'];
            $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$name."\"\n" . 
                "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" . 
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                $message .= "--{$mime_boundary}--\n";
        }
        //Send MAil
        $mailSendOK  = mail($to,$subject,$message,$headers);
        if($mailSendOK)
        {
            echo "ok";
        }
        else
        {
            echo "no Ok";
        }
    }
    function Sampleemail($data1)
    {
        return '<!DOCTYPE html>
        <html>
        <head>
            <title></title>
        </head>
        <body>
            <label>Name : </label><strong>'.$data1['name'].'</strong><br><label>Email : </label><strong>'.$data1['email'].'</strong><br><label>Mobile Number : </label><strong>'.$data1['mobilenumber'].'</strong><br><label>Higher Qualification : </label><strong>'.$data1['company'].'</strong><br><label>Applied for : </label><strong>'.$data1['selectedjob1'].'</strong><br><label>Message : </label><strong>'.$data1['message'].'</strong>
        </body>
        </html>';
    }  

?>