import { Component, input } from '@angular/core';

import { projectsListEnter } from '../portfolio.animations';
import type { FeaturedWork } from '../portfolio.data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
  animations: [projectsListEnter],
})
export class ProjectsListComponent {
  readonly items = input.required<readonly FeaturedWork[]>();
}
