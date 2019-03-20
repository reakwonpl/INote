import { Component } from '@angular/core';
import { AddNotePage } from '../add-note/add-note.page';
import { NavController } from '@ionic/angular';
import { NoteService } from '../Services/note.service';
import { Note } from 'src/models/noteModel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notes:Promise<Note[]>;

  constructor(public navCtrl:NavController, private nService:NoteService)
  {

  }
//life cycle constructor --> ionViewDidLoad --> ionViewWillEnter --> ionViewDidEnter --> ionViewWillLeave --> ionViewDidLeave --> ionViewWillUnload.
  ionViewWillEnter()
  {
    this.notes = this.getAllNotes();
  }

  addNote()
  {
    this.navCtrl.navigateForward('add-note');
  }

  getAllNotes()
  {
    return this.nService.getAllNotes();
  }
  
}
