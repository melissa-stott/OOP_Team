const http = require('http')
const fs = require('fs');


function ManagerHTML(name, id, email, number) {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meet The Team</title>
</head>
<body>
    <header style="background-color: aqua; font-size: 30px; text-align: center; padding: 60px; color: midnightblue; text-shadow: 5px 5px 10px orchid;">
        <h1>Our Dynamic Team</h1>
    </header>
    <div class="card">
        <div class="container" style="background-color: lightgray; color: midnightblue;">
            <h4><b>${name}</b></h4>
            <p>Manager</p>
        </div>
        <div class="subContainer">
            <p>${id}</p>
            <p>${email}</p>
            <p>${number}</p>
        </div>
    </div>
    
</body>
</html>`
       
};


function EngineerHTML (name, id, email, githubName) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meet The Team</title>
</head>
<body>
    <header style="background-color: aqua; font-size: 30px; text-align: center; padding: 60px; color: midnightblue; text-shadow: 5px 5px 10px orchid;">
        <h1>Our Dynamic Team</h1>
    </header>
    <div class="card">
        <div class="container" style="background-color: lightgray; color: midnightblue;">
            <h4><b>${name}</b></h4>
            <p>Engineer</p>
        </div>
        <div class="subContainer">
            <p>${id}</p>
            <p>${email}</p>
            <p>${githubName}</p>
        </div>
    </div>
    
</body>
</html>`
        
};

function InternHTML (name, id, email, university) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meet The Team</title>
</head>
<body>
    <header style="background-color: aqua; font-size: 30px; text-align: center; padding: 60px; color: midnightblue; text-shadow: 5px 5px 10px orchid;">
        <h1>Our Dynamic Team</h1>
    </header>
    <div class="card">
        <div class="container" style="background-color: lightgray; color: midnightblue;">
            <h4><b>${name}</b></h4>
            <p>Engineer</p>
        </div>
        <div class="subContainer">
            <p>${id}</p>
            <p>${email}</p>
            <p>${university}</p>
        </div>
    </div>
    
</body>
</html>`
        
};

module.exports.ManagerHTML = ManagerHTML
module.exports.EngineerHTML = EngineerHTML
module.exports.InternHTML = InternHTML