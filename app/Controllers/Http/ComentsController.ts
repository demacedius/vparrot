import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment"

export default class ComentsController {
    async index({ view }: HttpContextContract){
        const comments = await Comment.all()
        return view.render('pages/comment',{
            comments
        })
    }
}
