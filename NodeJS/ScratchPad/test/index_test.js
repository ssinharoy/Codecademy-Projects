const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
    //Suite Setup
    before(() => {
        path = './message.txt';
      });
    
    //Suite Teardown
    afterEach(() => {
        fs.unlinkSync(path);
      }); 

  it('creates a new file with a string of text', () => {
   // Setup
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 });
});