import { Component, computed, input, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { WORK_PREVIEW_COUNT, type SelectedProject } from '../portfolio.data';

@Component({
  selector: 'app-work-list',
  imports: [MatButton],
  templateUrl: './work-list.html',
  styleUrl: './work-list.scss',
})
export class WorkListComponent {
  readonly items = input.required<readonly SelectedProject[]>();

  protected readonly expanded = signal(false);

  protected readonly visible = computed(() => {
    const list = this.items();
    return this.expanded() ? list : list.slice(0, WORK_PREVIEW_COUNT);
  });

  protected readonly canToggle = computed(() => this.items().length > WORK_PREVIEW_COUNT);

  protected toggle(): void {
    this.expanded.update((v) => !v);
  }
}
