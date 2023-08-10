import express from "express"
import {
    createUser,
    createCandidate,
    createCandidateStatus,
    getData
    } from '../controllers/employee.js'
           
const router = express.Router()
// router for insert data
router.post("/createUser", createUser)
router.post("/createCandidate", createCandidate)
router.post("/createCandidateStatus", createCandidateStatus)
router.get("/get/:id", getData)
export default router 