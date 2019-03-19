import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
///https://ionicframework.com/docs/building/storage

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //localy dummy not db
  private notes: {title:string}[] = [];
  constructor() { }

  saveNote(note: {title:string})
  {
    this.notes.push(note);
  }

  getAllNotes()
  {
    return this.notes.slice(0);
  }
}
