import {
  Component, OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'gallery-button',
  templateUrl: './gallery-button.component.html',
  styleUrls: ['./gallery-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryButtonComponent implements OnInit {

  ngOnInit(): void {
  }
}
