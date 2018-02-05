class Subject {
  registerObserver(observer) {
    throw new Error("This method must be overwritten");
  }
  removeObserver(observer) {
    throw new Error("This method must be overwritten");
  }
  notifyObservers() {
    throw new Error("This method must be overwritten");
  }
}

export default Subject;
