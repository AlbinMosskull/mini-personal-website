How to connect:
1. Go to Simply.com
2. Go into Kontrollpanel
3. Log in (separate user/pass from the email account)
4. Go to Mosskull.se/File Manager/Inloggingsuppgifter
    - Here you can see both how to connect via FTP and via SSH

How to update the site
1. Make changes locally
2. Run ```npm run build```, to update the dist/ folder
3. Open filezilla
4. Put in the info from the "How to connect" step to connect to the website through filezilla
5. Go into public_html/ on the remote site, and dist/ local
6. On the remote site you should see see a folder assets/ and a file index.html (among many other files)
7. Use filezilla to upload your local index.html and other files in dist, overwriting the remote
8. The website should now be updated!

