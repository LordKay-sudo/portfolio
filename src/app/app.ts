import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { projectsListEnter } from './portfolio.animations';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  EDUCATION,
  EXPERIENCE,
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
import { skillsListEnter } from './skills.animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [skillsListEnter, projectsListEnter],
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
  protected readonly featured = signal<readonly FeaturedWork[]>(FEATURED_WORK);
  protected readonly projects = signal<readonly SelectedProject[]>(SELECTED_PROJECTS);
  protected readonly experience = signal(EXPERIENCE);
  protected readonly education = signal(EDUCATION);
}
