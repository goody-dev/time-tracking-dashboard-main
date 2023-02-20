
const data = [

  {

    "title": "Work",

    "timeframes": {

      "daily": {

        "current": 5,

        "previous": 7

      },

      "weekly": {

        "current": 32,

        "previous": 36

      },

      "monthly": {

        "current": 103,

        "previous": 128

      }

    }

  },

  {

    "title": "Play",

    "timeframes": {

      "daily": {

        "current": 1,

        "previous": 2

      },

      "weekly": {

        "current": 10,

        "previous": 8

      },

      "monthly": {

        "current": 23,

        "previous": 29

      }

    }

  },

  {

    "title": "Study",

    "timeframes": {

      "daily": {

        "current": 0,

        "previous": 1

      },

      "weekly": {

        "current": 4,

        "previous": 7

      },

      "monthly": {

        "current": 13,

        "previous": 19

      }

    }

  },

  {

    "title": "Exercise",

    "timeframes": {

      "daily": {

        "current": 1,

        "previous": 1

      },

      "weekly": {

        "current": 4,

        "previous": 5

      },

      "monthly": {

        "current": 11,

        "previous": 18

      }

    }

  },

  {

    "title": "Social",

    "timeframes": {

      "daily": {

        "current": 1,

        "previous": 3

      },

      "weekly": {

        "current": 5,

        "previous": 10

      },

      "monthly": {

        "current": 21,

        "previous": 23

      }

    }

  },

  {

    "title": "Self Care",

    "timeframes": {

      "daily": {

        "current": 0,

        "previous": 1

      },

      "weekly": {

        "current": 2,

        "previous": 2

      },

      "monthly": {

        "current": 7,

        "previous": 11

      }

    }

  }

];

const buttons = document.querySelectorAll('.period');

const removeCards = () => {

    const cards = document.querySelectorAll('.dashpiece');

    cards.forEach(c => c.remove());

}

const activateClickedButton = (button) => {

    buttons.forEach(b => b.classList.remove('active'));

    button.classList.add('active');

}

const renderCards = (clickedOption) => {

    const dashboard = document.getElementById('dashboard');

    removeCards();

    

    const calcTimeFrame = (option) => {

        if(option === 'daily') {

            return 'Yesterday';

        } else if(option === 'weekly') {

            return 'Last Week';

        } else if(option === 'monthly') {

            return 'Last Month';

        }

    }

    data.forEach(activity => {

        const activityClass = activity.title.toLowerCase().replace(' ','-');

        const name = activity.title;     

        const timeFrameData = activity.timeframes[clickedOption];

        const previousTimeFrame = calcTimeFrame(clickedOption);

        const section = document.createElement('section');

        section.classList.add('dashpiece', activityClass);

        const stringToInject = `        

      <div class="info">

        <div class="first-child">

          <p id="work-text" class="card-title">${name}</p>

          <img src="./images/icon-ellipsis.svg alt:"Three Dots">

        </div>

        <div class="second-child">

          <p class="time">${timeFrameData.current}hrs</p>

          <p class="last-time">${previousTimeFrame} - ${timeFrameData.previous}hrs</p>

        </div>

      </div>

     `;

        section.innerHTML = stringToInject;

        console.log(section);

        dashboard.append(section)

    })

}

buttons.forEach(button => {

    button.addEventListener('click', () => {

        activateClickedButton(button);

        const clickedOption = button.dataset.option;

        renderCards(clickedOption);

    })

})

buttons[1].click();


    
