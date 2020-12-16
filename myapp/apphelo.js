const express = require('express')
const apphelo= express()
const port = 3000

apphelo.get('/', (req, res) => {
    res.send('Hello World!')
})

apphelo.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})