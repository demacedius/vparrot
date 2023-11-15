import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class extends BaseSeeder {
  public async run () {
    await Comment.create({
      name:'jean dupont',
      coment:'commentaire de test',
      validate: true,
      rating: 4
    })
  }
}
