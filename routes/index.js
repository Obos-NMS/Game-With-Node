const router = require(`express`).Router()
const UserController = require(`../controller/UserManagement`)

router.get('/', (req, res)=>{
    res.send('Game Node')
})

// router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.post(`/edit/user`, UserController.changePassword)
router.get(`/read/list`, UserController.readList)
// router.use(`/banners`, bannerRoutes)

module.exports = router