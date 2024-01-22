import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {
  mensagemDoBackEnd!: string;
  constructor(private http: HttpClient){ }
  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/mensagem')
    .subscribe(data=>{this.mensagemDoBackEnd = data.mensagem;
    });
  }
}
