/**]
 * A certain grade of steel is graded according to the following conditions:
 *
 * (i) Hardness must be greater than 50
 * (ii) Carbon content must be less than 0.7
 * (iii) Tensile strength must be greater than 5600
 *
 *
 * The grades are follows
 * 1. Grade is 10 is all three conditions are met
 * 2. Grade is 9: if (i) and (ii)  are met
 * 3. Grade is 8: if (ii) and (iii)  are met
 * 4. Grade is 7: if (i) and (iii)  are met
 * 5. Grade is 6: if only one is met
 * 6. Grade is 5: if none of the conditions are met
 */
function Grade() {
  let Hardness = Number(prompt("enter the steel hardness mark up to 49 "));
  let Carbon = Number(
    prompt("enter the steel Carbon content between 0.1 to 2 ")
  );
  let strength = Number(prompt("enter the steel  Tensile strength upto 5600 "));
 

  if ((Hardness) <= 50 && Carbon >= 0.7 && strength <= 5600) {
    return  console.log(` Grade is 10 is all three conditions are met
    `);
  }
  if ((Hardness) <= 50 && strength <= 5600) {
    return console.log(` Grade is 9: if (i) and (ii)  are met

    `);
  }
  if (Carbon >= 0.7 && strength <= 5600) {
    return console.log(` Grade is 8: if (ii) and (iii)  are met
    `);
  }
  if ((Hardness) <= 50 && strength <= 5600) {
    return  console.log(`   Grade is 7: if (i) and (iii)  are met

    `);
  }
  if ((Hardness) <= 50 || Carbon >= 0.7 || strength <= 5600) {
    return console.log(` Grade is 6: if only one is met

        `);
  } else {
    console.log(`Grade is 5: if none of the conditions are met`);
  }
}
Grade();
