describe ("wordCount", function(){
  it("will return the word and the number of occurences", function(){
    expect(wordCount("the the word")).to.equal('the:2, word:1')
  });

  it("will return the word and the number of occurences", function(){
    expect(wordCount("the word word")).to.equal('word:2, the:1')
  });

  it("will return the word and the number of occurences", function(){
    expect(wordCount("the word")).to.equal('the:1, word:1')
  });

  it("will return the word and the number of occurences", function(){
    expect(wordCount("the word word bird the the two")).to.equal('the:3, word:2, bird:1, two:1')
  });
});
