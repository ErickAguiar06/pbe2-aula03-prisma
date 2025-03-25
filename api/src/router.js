const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

module.exports = router;