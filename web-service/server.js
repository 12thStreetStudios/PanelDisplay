const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log('Server listening on port '+ PORT);
});

app.post('/panel/', (req, res) => {
    console.log(req.body.msg)
    exec(`echo -e ${req.body.msg} | pwrite`, (err) => {
        if (err) {
          // node couldn't execute the command
          return;
        }
    });

    res.send("received");
});





