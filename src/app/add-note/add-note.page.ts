import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  constructor(private nav:NavController, private nService:NoteService) { }

  saveNote(value: {title: string})
  {
    this.nService.saveNote(value);
  }
  ngOnInit() {
  }

}
