const express = require('express');
const { exec } = require('child_process');
const app = express();

app.post('/panel', function (req, res) {
    console.log("Post Recieved")
    exec('echo -e '+ req +' | panel', (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });

    res.send(req);
});

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log('Server listening on port '+ PORT);
});

