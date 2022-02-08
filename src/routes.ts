import { Router } from "express";

import {sendNotification} from "./controllers/Notifications.config";

const routes = Router()

routes.post('/', (req, res) => {
    sendNotification(req.body)
})

export default routes
