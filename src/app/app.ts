import { Component, signal } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './hero/hero';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  FEATURED_WORK,
  GITHUB_PROFILE_URL,
  GITHUB_REPO_URL,
  HERO_HEADLINE,
  HERO_SUBTITLE,
  SELECTED_PROJECTS,
  SKILL_CHIPS,
  SUMMARY,
  type FeaturedWork,
  type SelectedProject,
  type SkillChip,
} from './portfolio.data';
import { ProjectsListComponent } from './projects-list/projects-list';
import { SkillsFilterComponent } from './skills-filter/skills-filter';
import { WorkListComponent } from './work-list/work-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatAnchor,
    HeroComponent,
    WorkListComponent,
    ProjectsListComponent,
    SkillsFilterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly brand = BRAND_NAME;
  protected readonly headline = HERO_HEADLINE;
  protected readonly subtitle = HERO_SUBTITLE;
  protected readonly summary = SUMMARY;
  protected readonly email = CONTACT_EMAIL;
  protected readonly githubUrl = GITHUB_REPO_URL;
  protected readonly githubProfile = GITHUB_PROFILE_URL;

  protected readonly skills = signal<readonly SkillChip[]>(SKILL_CHIPS);
  protected readonly work = signal<readonly SelectedProject[]>(SELECTED_PROJECTS);
  protected readonly projects = signal<readonly FeaturedWork[]>(FEATURED_WORK);
}
