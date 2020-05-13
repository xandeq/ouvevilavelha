import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {

	//private API_URL = "http://localhost:50043";
	private API_URL = "http://localhost:60406";
	//private API_URL = "http://dev.vilavelha.local/ouvidoriaapi";
	//private API_URL = "https://sistemas.vilavelha.es.gov.br/ouvidoriaapi";

  constructor(public http: Http) {
    console.log('Hello EventosProvider Provider');
  }

  public getTodosEventos() {
  	return new Promise(resolve => {
  		this.http.get(this.API_URL + "/api/Eventos/GetTodosEventos")
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }

  public getEventos() {
    return this.http.get(this.API_URL + "/api/Eventos/GetTodosEventos");
  }

  public ConsultarEvento(protocolo:string, senha:string){
    return new Promise(resolve => {
  		this.http.get(this.API_URL + "/api/Eventos/ConsultarEvento/" + protocolo + "/" + senha)
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }

  public ObterTodosAssuntos(idtipo:string){
    return new Promise(resolve => {
  		this.http.get(this.API_URL + "/api/Assuntos/GetTodosAssuntos/" + idtipo)
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }

  public ObterTodosBairros(){
    return new Promise(resolve => {
  		this.http.get(this.API_URL + "/api/Bairros/GetTodosBairros")
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }

  public ObterTodosTiposLogradouros(){
    return new Promise(resolve => {
  		this.http.get(this.API_URL + "/api/TiposLogradouros/GetTodosTiposLogradouros")
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }

  public RegistrarEvento(evento:any){
		let headers = new Headers();
		//headers.append('Access-Control-Allow-Origin' , '*');
		//headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', '*');
		//headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    return new Promise(resolve => {
  		this.http.post(this.API_URL + "/api/Eventos/RegistrarEvento/", evento, {headers: headers})
  		.map(res => res.json())
  		.subscribe(data => {
  			resolve(data);
  		})
  	}).catch(error => { console.log(error) });
  }
}
