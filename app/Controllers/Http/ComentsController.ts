import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from "App/Models/Comment"
import CommentValidator from 'App/Validators/CommentValidator'

export default class ComentsController {
    async create({ view }: HttpContextContract){
        return view.render('pages/comment')
    }

    async store({ request, view }: HttpContextContract){
        const {name, coment, rating} = await request.validate(CommentValidator)

        const commentaire = await Comment.create({
            name,
            coment,
            rating,
            
        })

        return view.render('pages/comment', {
            commentaire,
        })
    }
}
