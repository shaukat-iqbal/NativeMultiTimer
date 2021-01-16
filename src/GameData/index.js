export const levelOneGameData = {
  1: {
    question: 'What is the name of this planet ?',
    image: require('../assets/Images/earth.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: false},
      2: {answer: 'Earth', status: true},
      3: {answer: 'Saturn', status: false},
      4: {answer: 'Pluto', status: false},
    },
  },
  2: {
    question: 'What is the name of this Planet ?',
    image: require('../assets/Images/jupiter.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: true},
      2: {answer: 'Earth', status: false},
      3: {answer: 'Saturn', status: false},
      4: {answer: 'Pluto', status: false},
    },
  },
  3: {
    question: 'What is the name of this star ?',
    image: require('../assets/Images/sun.jpg'),
    answer: {
      1: {answer: 'Sun', status: true},
      2: {answer: 'Luna', status: false},
      3: {answer: 'Nova', status: false},
      4: {answer: 'Aurora', status: false},
    },
  },
  4: {
    question: 'What is the name of this red planet ?',
    image: require('../assets/Images/mars.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: false},
      2: {answer: 'Earth', status: false},
      3: {answer: 'Mars', status: true},
      4: {answer: 'Venus', status: false},
    },
  },
  5: {
    question: 'What is the name of this planet ?',
    image: require('../assets/Images/saturn.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: false},
      2: {answer: 'Earth', status: false},
      3: {answer: 'Saturn', status: true},
      4: {answer: 'Pluto', status: false},
    },
  },
};

export const levelTwoGameData = {
  1: {
    question: 'Which is the biggest planet of our solar system ?',
    image: require('../assets/Images/solarsystem.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: true},
      2: {answer: 'Earth', status: false},
      3: {answer: 'Saturn', status: false},
      4: {answer: 'Pluto', status: false},
    },
  },
  2: {
    question: 'Who is the first person to reach space ?',
    image: require('../assets/Images/yuri.jpg'),
    answer: {
      1: {answer: 'Nil Amstrong', status: false},
      2: {answer: 'Elon Musk', status: false},
      3: {answer: 'Buzz Aldrin', status: false},
      4: {answer: 'Yuri Gagarin', status: true},
    },
  },
  3: {
    question: 'Who is the first person to reach Moon ?',
    image: require('../assets/Images/nil.jpg'),
    answer: {
      1: {answer: 'Nil Amstrong', status: true},
      2: {answer: 'Elon Musk', status: false},
      3: {answer: 'Buzz Aldrin', status: false},
      4: {answer: 'Yuri Gagarin', status: false},
    },
  },
  4: {
    question: 'Who is the first women to react space ?',
    image: require('../assets/Images/valentina.jpg'),
    answer: {
      1: {answer: 'Kalpana Chaula', status: false},
      2: {answer: 'Valentina Tereskova', status: true},
      3: {answer: 'Sally Ride', status: false},
      4: {answer: 'Mae Jemison', status: false},
    },
  },
  5: {
    question: 'What is the name of spacecraft that bring human into moon ?',
    image: require('../assets/Images/apollo.jpg'),
    answer: {
      1: {answer: 'Crew Dragon', status: false},
      2: {answer: 'Soyuz', status: false},
      3: {answer: 'Apollo 11', status: true},
      4: {answer: 'Space Shuttle', status: false},
    },
  },
};

export const levelThreeGameData = {
  1: {
    question: 'Which planet is known as the Morning Star or the Evening Star?',
    image: require('../assets/Images/venus.jpg'),
    answer: {
      1: {answer: 'Jupiter', status: false},
      2: {answer: 'Earth', status: false},
      3: {answer: 'Saturn', status: false},
      4: {answer: 'Venus', status: true},
    },
  },
  2: {
    question: 'How long a solar eclipse can last?',
    image: require('../assets/Images/eclipse.jpg'),
    answer: {
      1: {answer: '7 and a half minutes', status: true},
      2: {answer: '2 minutes', status: false},
      3: {answer: '6 and half minutes', status: false},
      4: {answer: '28 minutes', status: false},
    },
  },
  3: {
    question:
      'What is the name of this first exploration robot sent into Mars ?',
    image: require('../assets/Images/curiosity.jpg'),
    answer: {
      1: {answer: 'Oppertunity', status: false},
      2: {answer: 'Concept', status: false},
      3: {answer: 'Curiosity', status: true},
      4: {answer: 'Martian', status: false},
    },
  },
  4: {
    question: ' What is the name of the first satellite sent into space? ?',
    image: require('../assets/Images/sputnik.jpg'),
    answer: {
      1: {answer: 'Sputnik', status: true},
      2: {answer: 'Hubble', status: false},
      3: {answer: 'OceanSat', status: false},
      4: {answer: 'Kosmos 2543', status: false},
    },
  },
  5: {
    question: 'Which is first private company to send astronauts to space ?',
    image: require('../assets/Images/space.jpg'),
    answer: {
      1: {answer: 'Blue Origin', status: false},
      2: {answer: 'Tesla', status: false},
      3: {answer: 'Space x', status: true},
      4: {answer: 'Air Launch', status: false},
    },
  },
};
