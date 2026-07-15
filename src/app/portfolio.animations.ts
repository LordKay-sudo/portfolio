import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const enterEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
const enterDuration = '460ms';
const staggerDelay = 90;

/** Staggered reveal for featured-work rows. */
export const projectsListEnter = trigger('projectsListEnter', [
  transition(':enter', [
    query(
      '.featured-row',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 1.1rem, 0)',
        }),
        stagger(`${staggerDelay}ms`, [
          animate(
            `${enterDuration} ${enterEase}`,
            style({
              opacity: 1,
              transform: 'translate3d(0, 0, 0)',
            }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
