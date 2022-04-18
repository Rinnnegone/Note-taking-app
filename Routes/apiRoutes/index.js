const router = require ('express').Router();
const notesRoutes = Require('./notesRoutes')

router.use(notesRoutes);

module.exports = router;