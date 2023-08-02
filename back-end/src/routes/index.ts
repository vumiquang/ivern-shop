import { Router } from "express";

const router = Router()

router.use('/', (req, res, next) => {
  return res.status(200).json({key: 'Hello world'})
})

export default router