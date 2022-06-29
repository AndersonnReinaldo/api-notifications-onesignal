import { Router } from "express";

import { SendNotification } from "./handlers"

const routes = Router()

routes.post('/sendNotification',SendNotification)

export default routes
