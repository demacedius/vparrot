 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
    async create({view}: HttpContextContract){
        return view.render('pages/login')
    }

    async store({request, auth, response, session}: HttpContextContract){
        const {email, password} = await request.validate(LoginValidator)

        try{
            await auth.attempt(email,password)
            response.redirect('./dashboard')
        }catch (error) {
            session.flash('auth', 'Authentification impossible')
            response.redirect().back()
        }
    }

    public async logout({ response, auth }: HttpContextContract) {
        
        await auth.logout()
        
        return response.redirect().toRoute('/pages/login')
      }
}
