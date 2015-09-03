var qualities = ["baller",
"leader",
"performer",
"teacher",
"romantic",
"analytical",
"brave",
"counseling",
"confident",
"creative",
"dynamic",
"driven",
"extroverted",
"flirty",
"mysterious",
"grounded",
"artsy",
"dreamer",
"funny",
"smart",
"careful",
"calm",
"decisive",
"reliable",
"thoughtful",
"loyal",
"sincere",
"versatile",
"understanding",
"independent",
"honest",
"kind"];

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
    if (!person[quality]) {
      person[quality] = [];
    }
      person[quality].push(person.id)
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      console.log(i);

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality+"1"] = {};

}
  });
});


_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality+"1"][person[quality][i]] = true;

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality] = person[quality+"1"];

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      delete person[quality+"1"][person[quality][]];

}
  });
});