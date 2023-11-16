import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Comment from "App/Models/Comment"
import CommentValidator from 'App/Validators/CommentValidator'

export default class ComentsController {
    async index({ view }: HttpContextContract){
        const comments = await Comment.all()
        return view.render('pages/comment',{
            comments
        })
    }

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

        return view.render('pages/index', {
            commentaire,
        })
    }
}
