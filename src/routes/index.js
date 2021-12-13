const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        mensaje: 'welecome to api rest'
    })
})
module.exports = router;
