/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: Apr 2025
// This is the Splash Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene"})
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Title Scene")
  }

  create(data) {
    // pass
  }

  update(time, delta) {
    // pass
  }
}

export default TitleScene 