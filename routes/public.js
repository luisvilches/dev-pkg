const express = require('express');
const router = express.Router();
const controller = require('.././controllers');
const auth = require('../bin/controllers/auth');

module.exports = router;


/////////////// Routes  /////////////////////////////

router.get('/', controller.main.index)
router.post('/login', auth.auth)

//users

router.get('/users', controller.users.users)
router.post('/users/create', controller.users.createuser)
router.get('/user/:id', controller.users.userid)
router.delete('/user/:id', controller.users.delete)
router.put('/user/update/:id',controller.users.update)



//rutas para pkg
router.get('/pkg', controller.pkg.pkgFind)
//router.get('/pkg/id/:id', controller.pkg.pkgFindById)
router.get('/pkg/:pkg', controller.pkg.pkg)
router.post('/pkg', controller.pkg.pkgCreate)
router.put('/pkg/:id', controller.pkg.pkgUpdate)
router.delete('/pkg/:id', controller.pkg.pkgDelete)

