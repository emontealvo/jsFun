const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    let orangeKitties = kitties.filter(kittie => (kittie.color === 'orange'));
    const result = orangeKitties.map(orangeKittieName => {
      return orangeKittieName.name;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //  It looks like we could use reduce to check for a condition and return the name of those items that meet said condition
    //  we may have to chain a filter method to get those kitties before we get their names
    //
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // sounds like we'll need to use sort in some way.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kittie => {
      kittie.age += 2;
      return kittie;
    });
    return result;

    // This is definetly a for each since we have an outside object to capture 
    //  the activities of our for each iterator method. 
    // We're also wanting to change the same property in each object within the array in the same way
    // another hint for our forEach method
    // Right, can't use forEach cuz it wont return a thing, so let's use map since we basically nned the same array
    // only slightly modified. 
    // Hmmm, don't just want the ages.... so let's return the entire modified object..
    // sweet that worked!!!
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach( member => {
        (acc[member]) ? acc[member].push(club.club) : acc[member] = [club.club];
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Got real, real quick...
    // So we must find each individual and give them a property in our object
    // Since properties may only be defined once we may use a conditional to check if 
    // the member name alaready exist as a property, if so push club name into their array
    // if not create a new property with the club name within an array. 
    // It's obvious we need to iterate over the clubs array, but in which way.  
    // We may not be abble to use forEach since we need a new object returned, therefore
    // experimenting with reduce to manipulate the data into an object may be the best approach. 
    // Within this reduce()
    // method we'll need to iterate over each clubs.members array to create a property within our 
    // reduce method. It's tricky here since return doesn't return a thing, but when called within 
    // a reduce, the accumulator may just be able to capture our forEach side effects.  

    // Weird naming convention, but hey it aint on me this time :)
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      return {mod: mod.mod, studentsPerInstructor: (mod.students / mod.instructors)};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // So, we're essentially recreating the same array but with slight modifications
    // I like map for this case
    // since it does just that return an array of the same length, but modified values
    // the first object property (mod) remains the same, but must sill be defined within our 
    // map return statement
    // the second property (students per Instructor) is students property value
    // divided by the intructors property value
    // 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => ({
      flavor: cake.cakeFlavor,
      inStock: cake.inStock
    }));
    return result;

    // Annotation:
    // resulting array is an array of same size? Yes
    //  resulting array is a slight modification of og array? Yes
    // Gotta say, looks like a map prototype method
    // for each cake we'll return a new object with just the cake Flavor and inStock number
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock !== 0);
    return result;

    // Annotation:
    // This is asking us to remove (i.e fileter) certain elements 
    // from our array returning a new array of different length
    // so our condition should check for the cake property of inStock to not eaqual 0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce(( (acc, cake) => acc += cake.inStock), 0);
    return result;

    // Annotation:
    // Asking to consilidate data into another data type, sounds a lot like our friend reduce, 
    // our accumulator will be the number zero and we'll just go about each value for the 
    // inStock property
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce(( (acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        } 
      });
      return acc;
    }), []);
    return result;

    // Annotation:
    // I can see two ways to do this, we can first place all topping into one array, 
    // and then create a set from that array 
    // Or...
    // we can maybe do it with chained prototype methods, perhaps reduce since we can make use of an 
    // array as an accumulator, and maybe use a conditional with .includes to check if value 
    // already exist inside the accumulator. Since our toppings properties are also array themselves 
    // we'll need an iterator method to accomplish the conditional. perhaps forEach since it's handy at end of method chains
    // that start with reduce; that accumulator is so handy :D 
    // but then whenever I see a conditional with a for Each I star thinking filter, but then again we need to push
    // topping to a new array, not just slim down an array, so forEach may still be the best oprion.

    // Though the first may be logically simpler, it requires more end comlexity (i.e more variable declarations and steps), 
    // so we'll do the later. 
    //
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce(( (acc, cake) => {
      cake.toppings.forEach( topping =>
        (acc[topping]) ? acc[topping]++ : acc[topping] = 1 );
      return acc;
    }), {});
    return result;

    // Annotation:
    // The biggest hint toward the use of reduce is one data type (arrays) turning into a new data type
    // in this case we're to create an object with dynamic names using an iterator method
    // so using reduce we will iterate over each cake, a quick conditional will make sure we don't repeat 
    // toppings and afterward we'll return a new object with the appropriate value
    // just realizing that it is adding the amount of times that the topping sshows up
    // We'll still use the conditional to create the object property if it is not yet existent and set it's value 
    // to one. Else, we'll increment the property. 
    // Even more notes: We'll have to chain methods again because our property value of toppings is an array
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // We are trying to slim down an existing array to a new array that meet a certain condition.
    // My first guess would be to use filter to return only those classrooms  with a program property value of 'FE'

  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce(( (acc, classroom) => {
      acc.feCapacity = 0;
      acc.beCapacity = 0;
      classrooms.forEach( classroom => {
        (classroom.program === 'FE') ? acc.feCapacity += classroom.capacity 
          : acc.beCapacity += classroom.capacity;
      }); 
      return acc;
    }), {});
    return result;

    // Annotation:
    // Since we are turning an array into a new object, and in a way compiling data from a larger data set 
    // we should use reduce. We'll use a conditional within the reduce method to assign a property to our accumulator
    // if the condition is met (i.e program property value equal respective program) we add that room's capacity to the 
    // to the appropriate accumulator property
    // since it's either or scenario, we can probably use a ternary
    // Interesting, we couldn't just use a reduce method by itself. 
    // it required calling the forEach method within reduce ( on classrooms array) to accumulate the values using +=
    // I would be interested on seeing how other students solved it. 
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort( (a,b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // It's in the name, use the sort method. It's a method that I am still a little
    // fresh on so I may not know how best to use it, or rather explain how I will use it before using it
    // we still need to use parameter a, b (they seem mandatory) which will be our objects in our classrooms array
    // a is the first object b the second, both have the same properties which we will refence in our compare function


  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce(( (acc, book) => {
      if (!(book.genre === 'Horror' || book.genre === 'True Crime')) {
        acc.push(book.title);
      }
      return acc;
    }), []);  
     
    return result;

    // Annotation:
    // So we should filter out any book that has a genre property value of "horror" or 'true crime'
    // then create a new array of just the titles 
    // how should we chain methods to be efficient. 
    // filter first then map,because otherwise we'll lose the genre property 

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce(( (acc, book) => {
      if (book.published > 1989) {
        acc.push({
          title: book.title,
          year: book.published
        });
      }
      return acc;
    }), []);
  
    return result;

    // Annotation:
    // Again whenever it comes to data manipulation reduce is the way to go..
    // in a new array (our accumulator) we will place a new object with the properties of 
    // title and year we may need to call a forEach or filter method within our reduce function 
    // to iterate of over the books and return the new array. I am leaning toward an internal forEach 
    // since we need to meet a codition an push a new object into an array. The pushing 
    // seems difficult using the filter method
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map( weatherPrompt => 
      ((weatherPrompt.temperature.high + weatherPrompt.temperature.low) / 2));
    return result;

    // Annotation:
    // So were manipulating our data set from objects to numbers.
    // Given that array length is the same, I am leaning on using map over the 
    // reduce method (though doable). For each weather prompt wiht map we'll return 
    // wetahter temperature high + low divided by two
    // rather than pushing the results into an accumulator
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce(( (acc, forecast) => {
      if (forecast.type.includes('sunny')) {
        acc.push(`${forecast.location} is ${forecast.type}.`);
      }
      return acc;
    }), []);
    return result;

    // Annotation:
    //This prompt is asking to both change the size of the array and 
    // change the data type being held from objects to string therefore the appropriate
    // proto method is most likely reduce. The accumulator will push the appropriate sentence 
    // if a certain condition is met (weather promp type equals 'sunny')
    // Raleigh N.C. is mostly sunny but still appears in our array, so instead of a strictly equals 
    // a .includes() can be called inside our conditional an the rest should be the same,
   
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort( (a, b) => a.humidity - b.humidity);
    return result.pop();

    // Annotation:
    // Should be straighforward since we are returning the exavt object
    // The struggle would be to find the highest humidity, but we could use sort and then pop or shift
    // the get the highest hummidity I believe both method return the entire element at wither beggining or end
    //  so a-b will have portland at the end, and we can just call pop on our result when we return it 
    // to get the last element

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce(( (acc) => {
      acc.parksVisited = [];
      acc.parksToVisit = [];
      nationalParks.forEach( park => (park.visited) ? acc.parksVisited.push(park.name) : acc.parksToVisit.push(park.name));
      return acc;
    }), {});
    return result;

    // Annotation:
    // This prompt is asking to create a new object, so the reduce method is very likely...
    // A visited propety exist with a boolean as a value so according to this result we will
    // one of two things, either push into parksToVisit or parksVisited property inside our accumulator
    // This sounds like ternary behavior... 
    // It seems that since our accumulator properties will equal a complex data types that this will
    // their definiton outside the iterator method that will give us the desired action
    // It may be an instance where we use a forEach inside reduce to build complext data in a new object.
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map( park => ({[park.location]: park.name}));
    return result;

    // Annotation:
    // It looks like our dataset does not have a state with more than one park to a state
    // so we can use map since our array will be the same size with slighty modified data 
    // If there were multiple park per state, this may not be the case, and we will probaly find ourselves
    // looking at reduce, or a chain of prototype methods
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce(( (acc, park) => {
      park.activities.forEach( activity => {
        if (!acc.includes(activity)) {
          acc.push(activity);
        }
      });
      return acc;
    }), []);
    return result;

    // Annotation:
    // Since this prompt is working with nested data, it will likely require chained prototype methods
    // let see....
    // Probably start with reduce since an array as the accumulator seems necessary 
    // then for each iteration we will call a forEach method on the activities property of our park
    // each of this activities will be pushed into our accumulator if (conditional) the accumulator does 
    // not yet include the activity (call on includes method)
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce(( (acc, brewery) => acc += brewery.beers.length), 0);
    return result;

    // Annotation:
    // If there ever was a quintessential example to explain what reduce does this is the kind of scenario
    // Here's a huge dataset, and it want a single value from it
    // The accumulator will be useful to keep the sum of the beer count which is just the length property of 
    // the beers property array  
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map( brewery => ({
      name: brewery.name, 
      beerCount: brewery.beers.length
    }));
    return result;

    // Annotation:
    // It sounds like a map scenario, since the array size will remain the same but it will have 
    // some modifications from our initial array
    // In this case, the method should return a new objext with two properties the name and the beerCount 
    // simple enough name does change and the beer count equal the length of the array within the beers property of each brewery
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce(( (acc, brewery) => {
      brewery.beers.forEach( beer => acc.push(beer));
      return acc.sort( (a, b) => a.abv - b.abv);
    }), []);
    return result.pop();

    // Annotation:
    //Hmmmm..... 
    // We could place all the beers inside one massive array and then sort them and return the one that is last
    // (i.e. highest abv) with a simple pop method. or thinking up a way to chain a few prototype methods
    // could do the trick, but which. 
    // I want ot use find but how. I do think using a reduce with a sort chained within will work 
    
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
