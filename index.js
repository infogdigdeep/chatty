"use strict";
process.title = "Picorg";

const express = require('express');
const fs = require('fs')
const path = require('path')
const picorg = express()
const port = 62222
const result = {};

const storageDir = '/Users/waishum/chatty/'
picorg.get('/locate', (req, res) => {

  fs.exists(storageDir, (exists) => {
    if (exists) {
      fs.readdir(storageDir, (err, files) => {
        console.log(files)
        result.files = []
        files.map(file => {
          result.files.push(storageDir + file);
        })
        return res.json(result)
      })
    }
  })
})

picorg.listen(port, () => {
  console.log('Start Picorg on port ' + port)
})
