const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csvParser = require('csv-parser');
const app = express();

app.use(bodyParser.json());
app.get('/hello/Shafay', (req, res) => {
    res.send('Hello, shafay');
});

app.post('/profile', (req, res) => {
    const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

    if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newProfile =
    {
        Name,
        Title,
        TargetedKeywords,
        Education,
        Certification,
        Contact
    };

    fs.readFile('profiles.json', 'utf8', (err, data) => 
        {
        if (err && err.code === 'ENOENT') 
        {
            const profiles = [newProfile];
            fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => 
            {
                if (err) throw err;
                res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
            });
        } 
        else if (data) 
        {
            const profiles = JSON.parse(data);
            profiles.push(newProfile);
            fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => 
            {
                if (err) throw err;
                res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
            });
        }
    });
});

app.get('/profiles', (req, res) => {
    const profiles = [];

    fs.createReadStream('profiles.csv')
        .pipe(csvParser())
        .on('data', (row) => {
            profiles.push(row);
        })
        .on('end', () => {
            res.json(profiles);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
