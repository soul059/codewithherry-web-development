import express from "express";
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})
export default router 