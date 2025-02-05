let sentenceBuilder={

subject:"I",
verb:"am ",
object: "coding",
updateProperty: (property, value)=>{
  
  sentenceBuilder[property] ? sentenceBuilder[property]=value : console.log("invalid property");
  
},

buildSentence: ()=>console.log(`${sentenceBuilder.subject} ${sentenceBuilder.verb} ${sentenceBuilder.object}`)

}

