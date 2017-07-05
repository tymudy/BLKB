import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'snippet-component',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {

  @Input('code') code: string;

  ngOnInit(): void {
  }
}
