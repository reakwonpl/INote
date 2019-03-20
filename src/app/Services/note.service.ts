import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Note } from 'src/models/noteModel';
///https://ionicframework.com/docs/building/storage

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  
  private notes: Note[] =[];
  constructor(public storage:Storage) { }

  saveNote(note:Note)
  {
    note.createDate = Date.now();    
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getAllNotes()
  {
    
    return this.storage.get('notes').then(
      (notes) => {this.notes == null ? []: notes;
      return this.notes.slice(0);}      
    );
  }
}
