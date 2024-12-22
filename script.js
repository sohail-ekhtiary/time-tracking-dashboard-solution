const timeButtons = document.querySelectorAll('.time-select button');
const cards = document.querySelectorAll('.tracking-card');

const timeData = {
  daily: {
    work: { current: 5, previous: 7 },
    play: { current: 1, previous: 2 },
    study: { current: 0, previous: 1 },
    exercise: { current: 1, previous: 1 },
    social: { current: 1, previous: 3 },
    selfCare: { current: 0, previous: 1 }
  },
  weekly: {
    work: { current: 32, previous: 36 },
    play: { current: 10, previous: 8 },
    study: { current: 4, previous: 7 },
    exercise: { current: 4, previous: 5 },
    social: { current: 5, previous: 10 },
    selfCare: { current: 2, previous: 2 }
  },
  monthly: {
    work: { current: 103, previous: 128 },
    play: { current: 23, previous: 29 },
    study: { current: 13, previous: 19 },
    exercise: { current: 11, previous: 18 },
    social: { current: 21, previous: 23 },
    selfCare: { current: 7, previous: 11 }
  }
};

function updateCards(period) {
  cards.forEach(card => {
    const category = card.classList[1];
    const hours = card.querySelector('.hours');
    const previous = card.querySelector('.previous');

    let categoryKey = category;
    if (category === 'self-care') categoryKey = 'selfCare';

    const data = timeData[period][categoryKey];
    hours.textContent = `${data.current}hrs`;
    previous.textContent = `Last ${period === 'daily' ? 'Day' : period === 'weekly' ? 'Week' : 'Month'} - ${data.previous}hrs`;
  });
}

timeButtons.forEach(button => {
  button.addEventListener('click', () => {
    timeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    updateCards(button.textContent.toLowerCase());
  });
});
