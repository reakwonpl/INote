import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../Services/note.service';
import { Note } from 'src/models/noteModel';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  formGroup: FormGroup;
  note:Note;
  date:Date;
  title:string = '';
  content:string = '';

  constructor(private nav:NavController, private nService:NoteService) {
    this.formGroup = new FormGroup(
      {
        title:new FormControl(),
        content: new FormControl(),
        date: new FormControl()
      }
    );
   }

  saveNote(note: Note)
  {
    this.nService.saveNote(note);
    //save note then take back to home page
    this.nav.pop();
  }
  ngOnInit() {
  }

}
