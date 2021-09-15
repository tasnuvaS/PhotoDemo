class Photo {
constructor(width = 8, height = 10){
    this.width = width;
    this.height = height;
}

price (){

    let finalPrice;

    if (this.width === 8 && this.height === 10){
        finalPrice = 4;
    }
    else {
        if (this.width === 10 && this.height === 12){
            finalPrice = 6;
        }   
        else{
            finalPrice = 10;
        }
        
    
    }
    return finalPrice;
}

toString() {
    return `This is a ${this.weidth} by $ {this.height} photo and it cost ${this.price()}`
}

}

let photo1 = new photo1( 8, 10);
console.log
let photo2 = new photo2( 8, 10);
