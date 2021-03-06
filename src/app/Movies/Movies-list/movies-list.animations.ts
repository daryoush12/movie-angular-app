import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const MoviesListAnimations = [
    trigger('flyInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
      trigger('fadeIn',[
      state('in', style({opacity: 1})),
      transition('void => *', [
         style({opacity: 0}),
         animate(1000)
      ]),
  ])
];

