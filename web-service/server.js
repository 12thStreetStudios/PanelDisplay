const express = require('express');
const { exec } = require('child_process');
const app = express();

app.post('/', function (req, res) {
    exec(`echo -e ${req} | pwrite`, (err, stdout, stderr) => {
        if(err) {
            console.error(err);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        
    });
    res.send(req);
});

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log('Server listening on port '+ PORT);
});

