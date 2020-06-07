class GUI
{
  init(dat) {
    if (window.__DEV_MODE) {
      this.dat = dat;
      this.gui = new dat.GUI();
    }
  }

  add(...args) {
    if(this.gui) {
      return this.gui.add(...args);
    }
    return this;
  }

  addFolder(...args) {
    if(this.gui) {
      return this.gui.addFolder(...args);
    }
    return this;
  }

  min() {
    return this;
  }
  max() {
    return this;
  }
  step() {
    return this;
  }

}

export default new GUI;
