export class Errands {
    constructor({
      task,
      date,
      time
    }) {
      this.task = task;
      this.date = date;
      this.time = time;
      this.completed = false;  
    }
  }