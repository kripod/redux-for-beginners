# Redux for Beginners

This project-based tutorial aims to provide an opinionated set of good practices
to minimize the effort required to set up and maintain a [Redux] project which
uses [React] as its user interface library.

[Redux]: http://redux.js.org
[React]: https://facebook.github.io/react

## Learn less, code less, do more

Learning the philosophy behind Redux can be exhausting, especially when it comes
to terminology or separation of concerns.

## Organizing actions, reducers, components and containers

Contrary to most of the [official Redux examples], in this project, files are
not organized by nature, but
[by domain][A Better File Structure For React/Redux Applications].

[Official Redux examples]: https://github.com/reactjs/redux/tree/master/examples
[A Better File Structure For React/Redux Applications]: http://marmelab.com/blog/2015/12/17/react-directory-structure.html

## Maintaining code coherence while separating concerns

Action types, action handlers, action creators, action dispatchers, and so on.
There are multiple approaches available to reduce the confusion while improving
code reuse and modularity.

- **Store-connected components** can represent and alter the globally stored
  state of an application. Their state representation should be stored in a file
  separate from the component.
  - [Flux Standard Actions] can be created and handled by [redux-actions]
  - Concepts behind self-contained Redux modules and action naming are borrowed
    from the [Ducks proposal][Ducks: Redux Reducer Bundles].
- **Purely presentational components** cannot access global application state,
  but may optionally have a local view state.

[Flux Standard Actions]: https://github.com/acdlite/flux-standard-action
[redux-actions]: https://github.com/acdlite/redux-actions
[Ducks: Redux Reducer Bundles]: https://github.com/erikras/ducks-modular-redux

## Future-proof solutions with performance in mind

- React-based web frontend projects can be set up with zero configuration by
  [create-react-app].
- The usage of functional React components is preferred over their class-based
  counterparts. In this project, the syntax which functional components are
  declared by not only provide possible gains in performance, but are compatible
  with the [proposed syntax of stateful React components].

[create-react-app]: https://github.com/facebookincubator/create-react-app
[Proposed syntax of stateful React components]: https://github.com/reactjs/react-future/blob/master/07%20-%20Returning%20State/01%20-%20Stateful%20Functions.js
