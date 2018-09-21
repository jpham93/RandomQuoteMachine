//List of Possible Colors
var colorList = [ 'Crimson',
                  'FireBrick',
                  'MediumVioletRed',
                  'Tomato',
                  'DarkOrange',
                  'MediumSeaGreen',
                  'DarkOliveGreen',
                  'CadetBlue',
                  'SteelBlue',
                  'LightSkyBlue',
                  'Grey',
                  'Black' ];
//List of JS objects. Authors and Quotes respectively
var quoteList = [ {author: 'Tyrion Lannister', quote: 'Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'},
                  {author: 'Eddard Stark', quote: 'The man who passes the sentence should swing the sword.'},
                  {author: 'Cersei Lannister', quote: 'When you play the game of thrones, you win or you die. There is no middle ground.'},
                  {author: 'Syrio Forel', quote: 'There is only one god, and his name is Death. And there is only one thing we say to Death: "Not today."'},
                  {author: 'Lord Varys', quote: 'Power resides where men believe it resides. It’s a trick, a shadow on the wall. And a very small man can cast a very large shadow.'},
                  {author: 'Arya Stark', quote: 'Anyone can be killed.'},
                  {author: 'Tyrion Lannister', quote: 'We’ve had vicious kings and we’ve had idiot kings, but I don’t know if we’ve ever been cursed with a vicious idiot boy king.'},
                  {author: 'Daenerys Targaryen', quote: 'All men must die, but we are not men.'},
                  {author: 'Jorah Mormont', quote: 'There’s a beast in every man, and it stirs when you put a sword in his hand.'},
                  {author: 'Petyr "Littlefinger" Baelish', quote: 'Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again — the fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love ... illusions. Only the ladder is real, the climb is all there is.'},
                  {author: 'Tyrion Lannister', quote: 'I did not kill Joffrey but I wish that I had. Watching your vicious bastard die gave me more relief than a thousand lying whores. I wish I was the monster you think I am. I wish I had enough poison for the whole pack of you. I would gladly give my life to watch you all swallow it. I will not give my life for Joffrey’s murder and I know I’ll get no justice here. So I will let the gods decide my fate. I demand a trial by combat.'},
                  {author: 'Rodrick Cassel', quote: 'Gods help you Theon Greyjoy, now you are truly lost.'},
                  {author: 'Olenna Tyrell', quote: 'Oh no please, seduce away. It’s been so long. Though I rather think it’s all for naught. What happens when the non-existent bumps against the decrepit? A question for the philosophers.'},
                  {author: 'Lord Varys', quote: 'He would see this country burn if he could be King of the Ashes.'},
                  {author: 'Jaime Lannister', quote: 'By what right does the wolf judge the lion?'},
                  {author: 'Ramsey Bolton', quote: 'If you think this has a happy ending, you haven’t been paying attention.'},
                  {author: 'Bran Stark', quote: 'Hush, Hodor. No more Hodor-ing!'},
                  {author: 'Tywin Lannister', quote: 'Any man who must say "I am the king" is no true king.'},
                  {author: 'Tywin Lannister', quote: 'A lion does not concern himself with the opinion of sheep.'},
                  {author: 'Jon Snow', quote: 'Night gathers, and now my watch begins.'},
                  {author: 'Jaime Lannister', quote: 'The things I do for love.'}, ];

//JS function to randomly choose color
function colorPick(){
  let colorIndex = Math.floor(Math.random() * 12);
  return colorList[colorIndex];
}
//JS function to randomly choose quote
function quotePick(){
  let quoteIndex = Math.floor(Math.random() * 21);
  return quoteList[quoteIndex];
}


//jQuery
$(document).ready(function(){

  //Must store quotePick object in local variable in order to pair them
  var quoteObj = quotePick();

  //load new color and quote at the start of the page
  $('html').css('--theme-color',colorPick());
  $('#text').text(' ' + quoteObj.quote);
  $('#author').text('- ' + quoteObj.author);


  //Changing color and quote with each #new-quote click
  $("button").click(function(){

    quoteObj = quotePick();

    //changes theme color
    $('html').css('--theme-color',colorPick());

    //changes quote and author
    $('#text').text(' ' + quoteObj.quote);
    $('#author').text('- ' + quoteObj.author);

  });

});
