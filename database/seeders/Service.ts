import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from 'App/Models/Service'

export default class extends BaseSeeder {
  public async run () {
    await Service.createMany([
      {
        title: 'Réparation Mécanique',
        content: `Notre garage propose une vaste gamme de services de réparation mécanique pour tous types de véhicules. Nos techniciens certifiés sont compétents pour diagnostiquer et résoudre divers problèmes, qu'il s'agisse de simples réparations telles que le remplacement des freins et des vidanges d'huile ou de révisions plus complexes, comme les moteurs, transmissions et suspensions. Dotés d'outils de pointe, ils garantissent des solutions efficaces pour un fonctionnement optimal de votre véhicule.`
      },
      {
        title: 'Carrosserie',
        content: `Notre équipe dévouée de carrossiers experts se spécialise dans la restauration et la réparation de tout type de dommages sur la carrosserie de votre véhicule. Nous utilisons des techniques avancées pour réparer les éraflures mineures et restaurer les dégâts plus conséquents causés par des accidents. Du redressement de la tôle à la peinture, nous nous engageons à redonner à votre voiture son aspect d'origine avec précision et professionnalisme.`
      },
      {
        title: `Vente de véhicules d'occasion`,
        content: `En plus de nos services de réparation, nous offrons une sélection rigoureuse de véhicules d'occasion. Chaque voiture est méticuleusement inspectée pour assurer sa qualité et sa fiabilité. Que vous recherchiez une berline, un SUV ou tout autre type de véhicule, notre équipe est là pour vous guider dans le choix du véhicule d'occasion qui répond à vos critères et à votre budget. Nous garantissons une transparence totale et une satisfaction client maximale dans l'acquisition de votre prochain véhicule.`
      }
    ])
  }
}
