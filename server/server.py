#!/usr/bin/env python3
import requests
 
 
## Path to file to be uploaded
PathToFile="/home/whataluckyguy/server.key"   #To be defined
 
 
## Filecloud headers.
Headers = {'Accept': 'application/json'}
 
## Filecloud creds
Creds = {'userid': 'lalit', 'password': 'Lalitkumar@0010'}   #To be defined
 
##Filecloud server API endpoints
ServerURL='http://localhost/'   #To be defined
LoginEndPoint = 'core/loginguest'
UploadEndPoint = 'core/upload'
 
## Specify user path inside Filecloud.
FilecloudPath="/lalit"   #To be defined
 
## Upload API params.
UploadApiParams = {'appname': 'explorer', 'path': FilecloudPath, 'offset': 0}
 
 
 
if __name__ == '__main__':
    s = requests.session()
    FileToUpload={'file': (open(PathToFile,'rb'))}
    LoginCall=s.post(ServerURL+LoginEndPoint, data=Creds, headers=Headers).json()
    if LoginCall['command'][0]['result'] == 1:
        print('Login successfull, processing with File upload ...')
        UploadCall=s.post(ServerURL+UploadEndPoint, params=UploadApiParams, files = FileToUpload, cookies = s.cookies)
        if UploadCall.text == 'OK':
            print('Upload successfull.')
        else:
            print('Upload failed.')
 
    else:
        print('login failed.')
 
    