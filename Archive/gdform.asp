<%

Dim emailText, emailAddress, fso, filename, cdo, cdoConfig, f, schema
Dim bErr, errStr, bEmpty, regEx, req_method, key, value, landing_page, host_url, subject_string

subject_string = ""

schema = "http://schemas.microsoft.com/cdo/configuration/"

Set cdoConfig = CreateObject("CDO.Configuration")
cdoConfig.Fields.Item(schema & "sendusing") = 2
cdoConfig.Fields.Item(schema & "smtpserver") = "relay-hosting.secureserver.net"
cdoConfig.Fields.Update

Set cdo = CreateObject("CDO.Message")
Set cdo.Configuration = cdoConfig

emailText = ""

On Error resume next
bErr = false
bEmpty = true
errStr = ""
Set fso = Server.CreateObject("Scripting.FileSystemObject")
host_url = Request.ServerVariables("HTTP_HOST")
req_method = Request.ServerVariables("REQUEST_METHOD")
filename = Server.MapPath("\__gdForm_email_address.formmail")
Set f = fso.OpenTextFile(filename, 1, false)
emailAddress = f.ReadAll
f.close

Function FormatVariableLine(byval var_name, byVal var_value)
	FormatVariableLine = var_name & ": " & var_value
end function

if err.number = 0 then
    Set regEx = New RegExp
    regEx.Pattern = "^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,6})$"
    if (regEx.Test(emailAddress)) then
        if (req_method = "GET") then
            for each Item in request.QueryString
                if item <> "" then
                    bEmpty = false
                    key = item
                    value = Request.QueryString(item)
                    if (lcase(key) = "redirect") then
                        landing_page = value
                    elseif (lcase(key) = "subject") then
                        subject_string = value
                    else
                        line = FormatVariableLine(key, value)
                        emailText = emailText & line & vbCrLf
                    end if
                end if	
            next
        elseif (req_method = "POST") then
            for each Item in request.form
                if item <> "" then
                    bEmpty = false
                    key = item
                    value = Request.form(item)
                    if (lcase(key) = "redirect") then
                        landing_page = value
                    elseif (lcase(key) = "subject") then
                        subject_string = value
                    else
                        line = FormatVariableLine(key, value)
                        emailText = emailText & line & vbCrLf
                    end if
                end if	
            next
        end if
        if(bEmpty = true) AND errStr = "" then
            bErr = true
            errStr = errStr & "<br>No variables sent to form! Unable to process request."
        end if
        if(bErr = false) then
            emailText = emailText & vbCrLf & "-----------------------------------------------------------------" & vbCrLf & "This e-mail was generated from a form submission on your website: " & host_url
            cdo.Subject = host_url & " - " & subject_string
            cdo.From = "formmailer@secureserver.net"
            cdo.To = emailAddress
            cdo.TextBody = emailText
            cdo.Send
            if (landing_page <> "") then
                response.Redirect "http://" & host_url & "/" & landing_page
            else
                response.Redirect "http://" & host_url	
            end if
        else
            Response.Write errStr
        end if
    else
        Response.Write "Email address listed on the server is invalid, cannot send."
    end if
    Set regEx = nothing
else
    Response.Write " An Error Occurred creating mail message. Unable to process form request at this time."
end if

set fso = nothing
set cdo = nothing
%>
