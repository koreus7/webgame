class GUISingleton
{
  init(dat, devMode) {
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
  removeFolder(...args) {
    return this.gui.removeFolder(...args);
  }

}

const GUI = new GUISingleton();

export default GUI;

export function showGUI(name, target, keys = Object.keys(target)) {
  const folder = GUI.addFolder(name);
  for(const key of keys) {
    if(typeof key === 'object') {
      const name = key.name;
      delete key.name;
      let row = folder.add(target, name);
      for(const prop in key) {
        row = row[prop].call(row, key[prop])
      }

    } else {
      folder.add(target, key);
    }
  }
}