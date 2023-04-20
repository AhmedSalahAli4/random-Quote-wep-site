// var quoteOutput= document.getElementById("quoteOutput")

// function newclic=Math.ceil(Math.random()*20) {
    
// }














// var randomNumber=Math.ceil(Math.random()*10)
// var userGess=Number(window.prompt('enter randowm number'))
// if(randomNumber==userGess){
//     console.log('good work');
// }
// else{
//     console.log('not matched');
// }






function GetValueee()
{
    var myarray=  Array(" 'Oscar Wilde' </br> Be yourself; everyone else is already taken"
    ," 'Marilyn Monroe'         </br> I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    ," 'Albert Einstein'        </br> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.."
    ," 'Frank Zappa'             </br> So many books, so little time."
    ," 'Marcus Tullius Cicero'    </br> A room without books is like a body without a soul"
    ," 'Bernard M. Baruch'       </br> Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    ," 'William W. Purkey'       </br> You've gotta dance like there's nobody watching,Love like you'll never be hurt Sing like theres nobody listening And live like its heaven on earth.");
    var random = myarray[Math.floor(Math.random() * myarray.length)];

    document.getElementById("message").innerHTML=random;
}


