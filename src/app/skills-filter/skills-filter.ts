import { Component, computed, input, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';

import { skillsListEnter } from '../skills.animations';
import {
  SKILL_CATEGORIES,
  type SkillChip,
  type SkillFilter,
} from '../portfolio.data';

@Component({
  selector: 'app-skills-filter',
  imports: [MatButton, MatChip, MatChipSet],
  templateUrl: './skills-filter.html',
  styleUrl: './skills-filter.scss',
  animations: [skillsListEnter],
})
export class SkillsFilterComponent {
  readonly skills = input.required<readonly SkillChip[]>();

  protected readonly categories = SKILL_CATEGORIES;
  protected readonly active = signal<SkillFilter>('All');

  protected readonly filtered = computed(() => {
    const category = this.active();
    const list = this.skills();
    return category === 'All' ? list : list.filter((s) => s.category === category);
  });

  protected select(category: SkillFilter): void {
    this.active.set(category);
  }
}
