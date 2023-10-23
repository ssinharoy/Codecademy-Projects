//project to demonstrate Class inheritance
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(status){
      return status;
    }
    getAverageRating(){
      const sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
      const averageRating = sum/this._ratings.length;
      return averageRating;
    }
    toggleCheckOutStatus(){
      return !(this._isCheckedOut);
    }
    addRating(rating){
       if(rating >= 1 && rating <= 5){
        return this._ratings.push(rating);
       } else console.log ("Invalid rating. Please enter a number between 1-5.");
  }
  }
  
  //SubClass Book
  class Book extends Media {
    constructor (author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  //SubClass Movie
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  //Subclass CD
  class CD extends Media {
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this.artist;
    }
    get songs(){
      return this.songs;
    }
    shuffle(){
      return this._songs.sort(() => Math.random() - 0.5);
    }
    }
  
  class Catalog {
    constructor(){
      this._mediaItems = [];
    }
    get mediaItems(){
      return this._mediaItems;
    }
    addItem(item){
      return this._mediaItems.push(item)
    }
    displayCatalog(){
      console.log(this._mediaItems);
    }
    }
  
  
  //Adding a new Book instance and calculating the average rating
    const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
    isCheckedOut = historyOfEverything.toggleCheckOutStatus();
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
    console.log(historyOfEverything.getAverageRating());
  
  //Adding a new Movie instance and calculating the average rating
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  isCheckedOut = speed.toggleCheckOutStatus();
    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);
    console.log(speed.getAverageRating());
  
  //Adding a new CD instance and printing list of shuffled song titles
  const darkSide = new CD('Pink Floyd', 'The Dark Side of the Moon', ['Time', 'Breathe', 'Money']);
  isCheckedOut = darkSide.toggleCheckOutStatus();
  console.log(darkSide.shuffle());
  
  const centralLibrary = new Catalog();
  centralLibrary.addItem(historyOfEverything);
  centralLibrary.addItem(speed);
  centralLibrary.addItem(darkSide);
  centralLibrary.displayCatalog();