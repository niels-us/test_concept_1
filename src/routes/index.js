const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to api rest');
    res.json({
        mensaje: 'welcome to api rest'
    })
})
module.exports = router;
