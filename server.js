const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.use(express.static(__dirname+'/dist/angularproject1'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/dist/angularproject1/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
