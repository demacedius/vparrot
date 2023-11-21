import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import  Service  from 'App/Models/Service'

export default class ServicesController {
    async index({ view }: HttpContextContract){
        const services = await Service.all()
        const comment = await Comment.all()
        return view.render('pages/index',{
            services,
            comment
        })
    }
}
