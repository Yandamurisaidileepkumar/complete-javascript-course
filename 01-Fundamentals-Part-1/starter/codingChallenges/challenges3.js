/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK � */

// data 1
/* dolR1 = 96;
dolR2 = 108;
dolR3 = 89;
koaR1 = 88;
koaR2 = 91;
koaR3 = 110;
dolAvg = (dolR1 + dolR2 + dolR3) / 3;
console.log(dolAvg);
koaAvg = (koaR1 + koaR2 + koaR3) / 3;
console.log(koaAvg);

if (dolAvg > koaAvg && dolAvg >= 100) {
  console.log("dolphin team wins the trophy and meets the minimum score");
} else if (dolAvg > koaAvg && dolAvg <= 100) {
  console.log("dolphin teams wins the trophy,but not meets the minimum score");
}
if (koaAvg > dolAvg && koaAvg >= 100) {
  console.log("kolas team wins the trophy and meets the minimum score");
} else if (koaAvg > dolAvg && koaAvg <= 100) {
  console.log("Kolas teams wins the trophy,but not meets the minimum score");
}
if (dolAvg === koaAvg && dolAvg >= 100 && koaAvg >= 100) {
  console.log("the teams are having a draw match and meets the minimum score");
} else if (dolAvg === koaAvg && dolAvg <= 100 && koaAvg <= 100) {
  console.log("the teams are having a draw match but not meets the minimu score");
} */

// data2

/* dolR1 = 97;
dolR2 = 112;
dolR3 = 101;
koaR1 = 109;
koaR2 = 95;
koaR3 = 123;
dolAvg = (dolR1 + dolR2 + dolR3) / 3;
console.log(dolAvg);
koaAvg = (koaR1 + koaR2 + koaR3) / 3;
console.log(koaAvg);

if (dolAvg > koaAvg && dolAvg >= 100) {
  console.log("dolphin team wins the trophy and meets the minimum score");
} else if (dolAvg > koaAvg && dolAvg <= 100) {
  console.log("dolphin teams wins the trophy,but not meets the minimum score");
}
if (koaAvg > dolAvg && koaAvg >= 100) {
  console.log("kolas team wins the trophy and meets the minimum score");
} else if (koaAvg > dolAvg && koaAvg <= 100) {
  console.log("Kolas teams wins the trophy,but not meets the minimum score");
}
if (dolAvg === koaAvg && dolAvg >= 100 && koaAvg >= 100) {
  console.log("the teams are having a draw match and meets the minimum score");
} else if (dolAvg === koaAvg && dolAvg <= 100 && koaAvg <= 100) {
  console.log(
    "the teams are having a draw match but not meets the minimu score"
  );
} */

// data3

dolR1 = 97;
dolR2 = 112;
dolR3 = 101;
koaR1 = 109;
koaR2 = 95;
koaR3 = 106;
dolAvg = (dolR1 + dolR2 + dolR3) / 3;
console.log(dolAvg);
koaAvg = (koaR1 + koaR2 + koaR3) / 3;
console.log(koaAvg);

if (dolAvg > koaAvg && dolAvg >= 100) {
  console.log("dolphin team wins the trophy and meets the minimum score");
} else if (dolAvg > koaAvg && dolAvg <= 100) {
  console.log("dolphin teams wins the trophy,but not meets the minimum score");
}
if (koaAvg > dolAvg && koaAvg >= 100) {
  console.log("kolas team wins the trophy and meets the minimum score");
} else if (koaAvg > dolAvg && koaAvg <= 100) {
  console.log("Kolas teams wins the trophy,but not meets the minimum score");
}
if (dolAvg === koaAvg && dolAvg >= 100 && koaAvg >= 100) {
  console.log("the teams are having a draw match and meets the minimum score");
} else if (dolAvg === koaAvg && dolAvg <= 100 && koaAvg <= 100) {
  console.log(
    "the teams are having a draw match but not meets the minimum score"
  );
}
