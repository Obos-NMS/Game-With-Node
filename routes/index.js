const router = require(`express`).Router()
const UserController = require(`../controllers/UserController`)

router.get('/', (req, res)=>{
    res.send('Game Node')
})

// router.post(`/register`, UserController.register)
// router.post(`/login`, UserController.login)
// router.use(`/carts`, cartRoutes)
// router.use(`/products`, productRoutes)
// router.use(`/banners`, bannerRoutes)

module.exports = router