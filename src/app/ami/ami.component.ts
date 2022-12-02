import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Translator } from '../models/translator.model';
import { TranslatorService } from '../services/translator.service';
@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css']
})
export class AmiComponent implements OnInit {

  @ViewChild('Q') string!: ElementRef;
  trans : any
  here = false
  translator: Translator = new Translator();
  constructor(private TranslatorService: TranslatorService,
    private router: Router) { }

  ngOnInit(): void {
 console.log(this.translator)
  }

  saveString(){
    this.translator.prompt="You: "+this.string.nativeElement.value
    console.log(this.translator.prompt)
    this.translator.temperature=0;
    this.translator.model="text-davinci-003"
    this.translator.max_tokens=100
    this.translator.frequency_penalty=0.0;
    this.translator.top_p=1
    this.translator.presence_penalty=0.0
  
    this.TranslatorService.addString(this.translator).subscribe( (data : any) =>{
     this.trans=data.choices[0]?.text

    },
    error => console.log(error));
  }

  
  onSubmit(){
    this.here = true
    this.saveString();
  }

}
