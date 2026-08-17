import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const enterEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Staggered reveal for featured-work rows. */
export const projectsListEnter = trigger('projectsListEnter', [
  transition(':enter', [
    query(
      '.featured-row',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 0.75rem, 0)',
        }),
        stagger('50ms', [
          animate(
            `400ms ${enterEase}`,
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
