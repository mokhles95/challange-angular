import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }
 titre = "Les articles du jour"
 listeArticles :Article[] =[
  {titre:'Le championnat du monde',contenu:'Le champion du monde de cetteannée est ....',auteur:'Med Taher',date:'12/12/2005'},
  {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'},
  {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
  ]
  ngOnInit(): void {
  }

}
