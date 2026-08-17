import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const enterEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
const enterDuration = '420ms';
const staggerDelay = 40;

/** Staggered entrance for skill pills. */
export const skillsListEnter = trigger('skillsListEnter', [
  transition(':enter', [
    query(
      '.skill-pill',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 0.6rem, 0)',
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
