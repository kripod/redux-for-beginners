let nextId = 0;

export default class Todo {
  id = nextId++;
  text;
  isCompleted = false;

  constructor(params) {
    Object.assign(this, params);
  };
}
