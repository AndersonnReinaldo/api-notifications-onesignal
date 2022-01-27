import {Request, Response} from 'express'

import User from '../schemas/Users'

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.json(users)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        user.fullName()

        console.log(user.firstName)
        
            return res.json(user);

    }
}

export default new UserController()