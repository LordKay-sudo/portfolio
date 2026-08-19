import { Component, input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  imports: [MatAnchor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  readonly brand = input.required<string>();
  readonly headline = input.required<string>();
  readonly subtitle = input.required<string>();
}
