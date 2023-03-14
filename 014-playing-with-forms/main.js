FORM.addEventListener(function (e) {
  e.preventDefault();
  var weight,
    reps = 0;
  const weight = parseInt('input[name="weight"]'.val());
  const reps = parseInt('input[name="reps"]'.val());

  let oneRepMax = Math.round((100 * weight) / (101.3 - 2.67123 * reps));

  "answer" = ("Your One Rep Max is: " + oneRepMax);
});
