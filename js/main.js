const typed = new Typed('#typed', {
  strings: ['Designer', 'Freelancer', 'Photographer'],
  loop: true,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
});

["state1", "state2", "state3", "state4"].forEach((id, i) => {
  const values = [450, 25, 550, 48];
  const options = {
    duration: 5,
  };
  const counter = new countUp.CountUp(id, values[i], options);
  if (!counter.error) counter.start();
});
