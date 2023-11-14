import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  Service  from 'App/Models/Service'

export default class ServicesController {
    async index({ view }: HttpContextContract){
        const services = await Service.all()
        return view.render('pages/index',{
            services
        })
    }
}
