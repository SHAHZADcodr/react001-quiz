import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Question.css';

const questionsData = {
  general: [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Which is the largest continent by area?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        answer: "Asia"
    },
    {
        question: "What is the national flower of India?",
        options: ["Rose", "Lily", "Lotus", "Sunflower"],
        answer: "Lotus"
    },
    {
        question: "In which year did World War II end?",
        options: ["1945", "1940", "1939", "1950"],
        answer: "1945"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Albert Einstein", "Charles Babbage", "Isaac Newton", "Nikola Tesla"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Who is known as the Nightingale of India?",
        options: ["Sarojini Naidu", "Indira Gandhi", "Lata Mangeshkar", "Kalpana Chawla"],
        answer: "Sarojini Naidu"
    },
    {
        question: "What is the smallest country in the world by area?",
        options: ["Monaco", "Vatican City", "Malta", "San Marino"],
        answer: "Vatican City"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Ganges", "Yangtze"],
        answer: "Nile"
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        answer: "Portuguese"
    },
    {
        question: "What is the national animal of India?",
        options: ["Elephant", "Peacock", "Tiger", "Lion"],
        answer: "Tiger"
    },
    {
        question: "Who wrote the famous play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Ernest Hemingway"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
        answer: "Sahara"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Dollar", "Yen"],
        answer: "Yen"
    },
    {
        question: "Which Indian scientist is known as the Missile Man of India?",
        options: ["C.V. Raman", "Homi Bhabha", "A.P.J. Abdul Kalam", "Vikram Sarabhai"],
        answer: "A.P.J. Abdul Kalam"
    },
    {
        question: "Who discovered Penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Albert Einstein"],
        answer: "Alexander Fleming"
    },
    {
        question: "Where is the Great Barrier Reef located?",
        options: ["Indonesia", "Australia", "Philippines", "Maldives"],
        answer: "Australia"
    },
    {
        question: "In which city is the famous Taj Mahal located?",
        options: ["Delhi", "Mumbai", "Agra", "Jaipur"],
        answer: "Agra"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["Germany", "France", "Italy", "Spain"],
        answer: "France"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Bell"],
        answer: "Thomas Edison"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
        answer: "Tokyo"
    },
    {
        question: "Which Indian leader is also known as Bapu?",
        options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which country is famous for the pyramids?",
        options: ["India", "Egypt", "Mexico", "Peru"],
        answer: "Egypt"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Everest", "Annapurna"],
        answer: "Everest"
    },
    {
        question: "Which animal is known as the Ship of the Desert?",
        options: ["Horse", "Camel", "Elephant", "Lion"],
        answer: "Camel"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Rome", "Florence", "Venice"],
        answer: "Rome"
    },
    {
        question: "Who wrote the Indian national anthem?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Which planet is known as the Earth's Twin?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
    },
    {
        question: "Which is the national sport of India?",
        options: ["Cricket", "Hockey", "Football", "Badminton"],
        answer: "Hockey"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
        answer: "Indira Gandhi"
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Electron", "Atom", "Molecule", "Nucleus"],
        answer: "Atom"
    },
    {
        question: "Which is the longest wall in the world?",
        options: ["Berlin Wall", "Great Wall of China", "Western Wall", "Hadrian's Wall"],
        answer: "Great Wall of China"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which country has the largest population?",
        options: ["India", "USA", "China", "Russia"],
        answer: "China"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["50°C", "90°C", "100°C", "150°C"],
        answer: "100°C"
    },
    {
        question: "What is the national bird of India?",
        options: ["Peacock", "Sparrow", "Parrot", "Eagle"],
        answer: "Peacock"
    },
    {
        question: "In which year did India gain independence?",
        options: ["1942", "1947", "1950", "1965"],
        answer: "1947"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the main ingredient in traditional Indian curry?",
        options: ["Basil", "Cumin", "Saffron", "Turmeric"],
        answer: "Turmeric"
    },
    {
        question: "Which river is known as the Ganga of the South in India?",
        options: ["Godavari", "Krishna", "Cauvery", "Narmada"],
        answer: "Godavari"
    },

  ],
  sport:[
        { question: "Which country has won the most FIFA World Cups?", options: ["Brazil", "Germany", "Italy", "Argentina"], answer: "Brazil" },
        { question: "In which sport is the term 'home run' used?", options: ["Cricket", "Baseball", "Soccer", "Basketball"], answer: "Baseball" },
        { question: "How many players are on a basketball team?", options: ["5", "7", "11", "6"], answer: "5" },
        { question: "Who is known as 'The King of Football'?", options: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Pele"], answer: "Pele" },
        { question: "What is the maximum score in a single frame of bowling?", options: ["200", "250", "300", "400"], answer: "300" },
        { question: "Which country won the 2011 Cricket World Cup?", options: ["Australia", "India", "Sri Lanka", "Pakistan"], answer: "India" },
        { question: "In which sport is the term 'love' used?", options: ["Tennis", "Badminton", "Golf", "Squash"], answer: "Tennis" },
        { question: "Which is the only Grand Slam tennis tournament played on clay?", options: ["Wimbledon", "US Open", "Australian Open", "French Open"], answer: "French Open" },
        { question: "How many rings are there on the Olympic flag?", options: ["3", "4", "5", "6"], answer: "5" },
        { question: "Who holds the record for the most goals scored in a single soccer World Cup tournament?", options: ["Pelé", "Just Fontaine", "Miroslav Klose", "Ronaldo"], answer: "Just Fontaine" },
        { question: "Which sport is associated with the term 'putt'?", options: ["Golf", "Tennis", "Soccer", "Badminton"], answer: "Golf" },
        { question: "In which country were the 2016 Summer Olympics held?", options: ["Japan", "Brazil", "China", "Russia"], answer: "Brazil" },
        { question: "What is the distance of a marathon?", options: ["21.1 km", "26.2 miles", "10 km", "42.2 miles"], answer: "26.2 miles" },
        { question: "Which NBA player is known as 'The Black Mamba'?", options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Kevin Durant"], answer: "Kobe Bryant" },
        { question: "In what sport do competitors use bows to shoot arrows?", options: ["Shooting", "Archery", "Javelin", "Darts"], answer: "Archery" },
        { question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Argentina", "Uruguay", "Italy"], answer: "Uruguay" },
        { question: "Who holds the record for the fastest serve in tennis?", options: ["Roger Federer", "Serena Williams", "John Isner", "Sam Groth"], answer: "Sam Groth" },
        { question: "Which race is known as 'The Most Exciting Two Minutes in Sports'?", options: ["The Super Bowl", "The Kentucky Derby", "The Tour de France", "The Indy 500"], answer: "The Kentucky Derby" },
        { question: "In which sport do teams compete to score touchdowns?", options: ["Baseball", "Basketball", "Soccer", "American Football"], answer: "American Football" },
        { question: "What sport does Usain Bolt compete in?", options: ["Cycling", "Swimming", "Track and Field", "Boxing"], answer: "Track and Field" },
        { question: "How many players are on a soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11" },
        { question: "Which country has the most Olympic medals in history?", options: ["Russia", "China", "United Kingdom", "United States"], answer: "United States" },
        { question: "Which martial art is known as 'The Gentle Way'?", options: ["Karate", "Taekwondo", "Judo", "Aikido"], answer: "Judo" },
        { question: "Which country hosted the 2018 FIFA World Cup?", options: ["Brazil", "Russia", "Qatar", "South Africa"], answer: "Russia" },
        { question: "What is the national sport of Japan?", options: ["Soccer", "Karate", "Sumo Wrestling", "Judo"], answer: "Sumo Wrestling" },
        { question: "In which sport is the term 'birdie' used?", options: ["Golf", "Cricket", "Badminton", "Rugby"], answer: "Golf" },
        { question: "What is the maximum break in snooker?", options: ["147", "150", "180", "200"], answer: "147" },
        { question: "Who was the first woman to run a marathon?", options: ["Katherine Switzer", "Paula Radcliffe", "Joan Benoit", "Grete Waitz"], answer: "Katherine Switzer" },
        { question: "Which cricketer holds the record for the highest individual score in One Day Internationals?", options: ["Sachin Tendulkar", "Chris Gayle", "Virender Sehwag", "Rohit Sharma"], answer: "Rohit Sharma" },
        { question: "Which country has won the most Olympic gold medals in gymnastics?", options: ["Russia", "China", "United States", "Japan"], answer: "United States" }
  ],
  nature:[
        { question: "What is the largest rainforest in the world?", options: ["Amazon Rainforest", "Congo Rainforest", "Daintree Rainforest", "Valdivian Rainforest"], answer: "Amazon Rainforest" },
        { question: "Which planet is known as the 'Blue Planet'?", options: ["Earth", "Mars", "Neptune", "Venus"], answer: "Earth" },
        { question: "What is the tallest tree species in the world?", options: ["Douglas Fir", "Sequoia", "Coast Redwood", "Sitka Spruce"], answer: "Coast Redwood" },
        { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
        { question: "What is the most common gas in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
        { question: "Which bird is known for its distinctive laughing call?", options: ["Laughing Kookaburra", "Cuckoo", "Crow", "Owl"], answer: "Laughing Kookaburra" },
        { question: "What is the primary source of energy for life on Earth?", options: ["Wind", "Sun", "Water", "Soil"], answer: "Sun" },
        { question: "Which tree produces acorns?", options: ["Maple", "Oak", "Pine", "Birch"], answer: "Oak" },
        { question: "Which animal is known as the largest land animal?", options: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"], answer: "Elephant" },
        { question: "What is the smallest bird in the world?", options: ["Hummingbird", "Sparrow", "Finch", "Robin"], answer: "Hummingbird" },
        { question: "Which animal is known to have the longest migration?", options: ["Monarch Butterfly", "Arctic Tern", "Gray Whale", "Salmon"], answer: "Arctic Tern" },
        { question: "What percentage of Earth's surface is covered by water?", options: ["50%", "60%", "70%", "80%"], answer: "70%" },
        { question: "What is the tallest mountain on Earth?", options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Denali"], answer: "Mount Everest" },
        { question: "Which continent is known as the driest?", options: ["Africa", "Antarctica", "Australia", "Asia"], answer: "Antarctica" },
        { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"], answer: "Carbon Dioxide" },
        { question: "Which bird is known to mimic human speech?", options: ["Parrot", "Crow", "Eagle", "Penguin"], answer: "Parrot" },
        { question: "What is the primary purpose of leaves on a plant?", options: ["Protection", "Photosynthesis", "Water Storage", "Seed Production"], answer: "Photosynthesis" },
        { question: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Elephant"], answer: "Cheetah" },
        { question: "What is the largest species of turtle?", options: ["Green Turtle", "Leatherback Turtle", "Hawksbill Turtle", "Loggerhead Turtle"], answer: "Leatherback Turtle" },
        { question: "What is the largest mammal in the ocean?", options: ["Shark", "Whale Shark", "Blue Whale", "Dolphin"], answer: "Blue Whale" },
        { question: "Which plant is known for its ability to trap insects?", options: ["Sunflower", "Venus Flytrap", "Oak Tree", "Rose"], answer: "Venus Flytrap" },
        { question: "Which animal is known for its quills?", options: ["Hedgehog", "Porcupine", "Armadillo", "Skunk"], answer: "Porcupine" },
        { question: "What natural phenomenon is measured by the Richter scale?", options: ["Hurricanes", "Volcanoes", "Tornadoes", "Earthquakes"], answer: "Earthquakes" },
        { question: "Which flower is often associated with Dutch culture?", options: ["Rose", "Tulip", "Lily", "Orchid"], answer: "Tulip" },
        { question: "What kind of animal is a Komodo dragon?", options: ["Snake", "Lizard", "Bird", "Fish"], answer: "Lizard" },
        { question: "What is the primary diet of a panda?", options: ["Grass", "Bamboo", "Fish", "Insects"], answer: "Bamboo" },
        { question: "Which ocean is the warmest?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Indian Ocean" },
        { question: "Which animal is known for its ability to regenerate lost limbs?", options: ["Starfish", "Shark", "Elephant", "Bird"], answer: "Starfish" },
        { question: "What color is a polar bear's skin?", options: ["White", "Black", "Pink", "Grey"], answer: "Black" },
        { question: "Which river is the longest in the world?", options: ["Amazon", "Mississippi", "Nile", "Yangtze"], answer: "Nile" }      
  ],
  historical:[
    { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"], answer: "George Washington" },
    { question: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: "1914" },
    { question: "Which ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Persians"], answer: "Egyptians" },
    { question: "Who discovered America in 1492?", options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"], answer: "Christopher Columbus" },
    { question: "In which city was the Declaration of Independence signed?", options: ["New York", "Philadelphia", "Boston", "Washington, D.C."], answer: "Philadelphia" },
    { question: "Who was the British Prime Minister during World War II?", options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Harold Wilson"], answer: "Winston Churchill" },
    { question: "Which empire was known as the 'Land of the Rising Sun'?", options: ["Chinese Empire", "Japanese Empire", "Roman Empire", "Ottoman Empire"], answer: "Japanese Empire" },
    { question: "Who was the first Emperor of China?", options: ["Sun Tzu", "Qin Shi Huang", "Confucius", "Genghis Khan"], answer: "Qin Shi Huang" },
    { question: "The Renaissance began in which country?", options: ["France", "Germany", "Italy", "England"], answer: "Italy" },
    { question: "What was the name of the ship on which the Pilgrims traveled to America?", options: ["Santa Maria", "Mayflower", "Victoria", "Endeavour"], answer: "Mayflower" },
    { question: "Who was known as the 'Maid of Orléans'?", options: ["Marie Curie", "Jeanne d'Arc", "Catherine the Great", "Marie Antoinette"], answer: "Jeanne d'Arc" },
    { question: "In which year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: "1989" },
    { question: "Who was the last Czar of Russia?", options: ["Nicholas I", "Alexander III", "Peter the Great", "Nicholas II"], answer: "Nicholas II" },
    { question: "Which document ended World War I?", options: ["Treaty of Paris", "Treaty of Tordesillas", "Treaty of Versailles", "Treaty of Vienna"], answer: "Treaty of Versailles" },
    { question: "Who was the first person to circumnavigate the globe?", options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "James Cook"], answer: "Ferdinand Magellan" },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Michelangelo" },
    { question: "In which year did India gain independence from Britain?", options: ["1945", "1947", "1950", "1952"], answer: "1947" },
    { question: "Who was assassinated on April 4, 1968, in Memphis?", options: ["Malcolm X", "John F. Kennedy", "Martin Luther King Jr.", "Robert Kennedy"], answer: "Martin Luther King Jr." },
    { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Indira Gandhi"], answer: "Margaret Thatcher" },
    { question: "In which year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: "1912" },
    { question: "Which war was fought between North and South in the United States?", options: ["Revolutionary War", "Civil War", "World War I", "Vietnam War"], answer: "Civil War" },
    { question: "Who was the first man on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong" },
    { question: "Who was the Roman god of war?", options: ["Jupiter", "Mars", "Neptune", "Apollo"], answer: "Mars" },
    { question: "The Cold War was primarily between which two superpowers?", options: ["China and Japan", "France and Germany", "USA and USSR", "UK and USA"], answer: "USA and USSR" },
    { question: "What was the name of the pandemic that struck Europe in the 14th century?", options: ["Spanish Flu", "Bubonic Plague", "Smallpox", "Cholera"], answer: "Bubonic Plague" },
    { question: "Who invented the printing press?", options: ["Galileo Galilei", "Johannes Gutenberg", "Isaac Newton", "Leonardo da Vinci"], answer: "Johannes Gutenberg" },
    { question: "In which city did the Industrial Revolution begin?", options: ["London", "Paris", "Berlin", "Manchester"], answer: "Manchester" },
    { question: "Who was the first female ruler of ancient Egypt?", options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Nefertari"], answer: "Hatshepsut" },
    { question: "Which country was once known as Persia?", options: ["Greece", "Egypt", "Iran", "Turkey"], answer: "Iran" },
    { question: "Who wrote the Communist Manifesto?", options: ["Karl Marx", "Friedrich Engels", "Vladimir Lenin", "Joseph Stalin"], answer: "Karl Marx" }
  ],
  funFact:[
    { question: "What is the only food that never spoils?", options: ["Rice", "Honey", "Salt", "Sugar"], answer: "Honey" },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "Which planet rotates the fastest in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "What is the smallest bone in the human body?", options: ["Femur", "Stapes", "Ulna", "Radius"], answer: "Stapes" },
    { question: "What is a group of crows called?", options: ["Flock", "Murder", "Pack", "Swarm"], answer: "Murder" },
    { question: "How many colors are there in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which animal can sleep for up to three years?", options: ["Frog", "Snail", "Tortoise", "Sloth"], answer: "Snail" },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
    { question: "How many eyes does a bee have?", options: ["2", "3", "5", "6"], answer: "5" },
    { question: "Which animal is known to laugh when tickled?", options: ["Dog", "Cat", "Rat", "Horse"], answer: "Rat" },
    { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], answer: "32" },
    { question: "Which animal holds hands to keep from drifting apart?", options: ["Otters", "Penguins", "Dolphins", "Whales"], answer: "Otters" },
    { question: "What color is a giraffe's tongue?", options: ["Pink", "Blue", "Black", "Red"], answer: "Blue" },
    { question: "Which bird is the fastest on land?", options: ["Ostrich", "Emu", "Chicken", "Penguin"], answer: "Ostrich" },
    { question: "What is the only mammal that can fly?", options: ["Bat", "Flying Squirrel", "Bird", "Eagle"], answer: "Bat" },
    { question: "How long is a single day on Venus in Earth days?", options: ["117", "243", "365", "30"], answer: "243" },
    { question: "What is the strongest muscle in the human body?", options: ["Bicep", "Quadricep", "Tongue", "Glute"], answer: "Tongue" },
    { question: "What fruit has more vitamin C than an orange?", options: ["Banana", "Kiwi", "Apple", "Pear"], answer: "Kiwi" },
    { question: "Which is the largest type of penguin?", options: ["Emperor", "King", "Gentoo", "Chinstrap"], answer: "Emperor" },
    { question: "How many bones are in a human hand, including the wrist?", options: ["27", "30", "25", "32"], answer: "27" },
    { question: "What animal is known to change its gender?", options: ["Frog", "Clownfish", "Snake", "Chameleon"], answer: "Clownfish" },
    { question: "Which animal can regrow its limbs?", options: ["Starfish", "Octopus", "Lobster", "Snake"], answer: "Starfish" },
    { question: "How long does it take for light from the Sun to reach Earth?", options: ["3 minutes", "5 minutes", "8 minutes", "10 minutes"], answer: "8 minutes" },
    { question: "Which sea creature has three hearts?", options: ["Octopus", "Squid", "Shark", "Jellyfish"], answer: "Octopus" },
    { question: "Which animal has the longest lifespan?", options: ["Elephant", "Bowhead Whale", "Galapagos Tortoise", "Parrot"], answer: "Bowhead Whale" },
    { question: "What is the hardest substance in the human body?", options: ["Bone", "Enamel", "Cartilage", "Tendon"], answer: "Enamel" },
    { question: "What is the only mammal born with horns?", options: ["Deer", "Giraffe", "Goat", "Buffalo"], answer: "Giraffe" },
    { question: "What fruit floats because it’s made up of 25% air?", options: ["Apple", "Watermelon", "Banana", "Strawberry"], answer: "Apple" },
    { question: "How many noses does a slug have?", options: ["1", "2", "3", "4"], answer: "4" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Malta", "Vatican City"], answer: "Vatican City" },
    { question: "What do you call a baby rabbit?", options: ["Bunny", "Kitten", "Cub", "Joey"], answer: "Kitten" }
  ],
  constitution:[
    { question: "Which country has the oldest written constitution still in use?", options: ["United Kingdom", "United States", "France", "India"], answer: "United States" },
    { question: "In what year was the Indian Constitution adopted?", options: ["1947", "1949", "1950", "1952"], answer: "1949" },
    { question: "What is the supreme law of the United States?", options: ["Declaration of Independence", "Bill of Rights", "The Constitution", "Articles of Confederation"], answer: "The Constitution" },
    { question: "Which part of the Indian Constitution contains the Fundamental Rights?", options: ["Part II", "Part III", "Part IV", "Part V"], answer: "Part III" },
    { question: "Who is known as the 'Father of the Indian Constitution'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Rajendra Prasad"], answer: "B.R. Ambedkar" },
    { question: "What is the highest court in the United States?", options: ["Federal Court", "Court of Appeals", "Supreme Court", "District Court"], answer: "Supreme Court" },
    { question: "The Constitution of Japan, adopted in 1947, is also known as the:", options: ["Meiji Constitution", "MacArthur Constitution", "Shogunate Constitution", "Heisei Constitution"], answer: "MacArthur Constitution" },
    { question: "Which amendment to the U.S. Constitution abolished slavery?", options: ["12th", "13th", "14th", "15th"], answer: "13th" },
    { question: "Which country’s constitution is the longest written constitution in the world?", options: ["India", "United States", "China", "Brazil"], answer: "India" },
    { question: "What is the purpose of the Preamble in a constitution?", options: ["To define laws", "To state objectives and purpose", "To list rights", "To amend laws"], answer: "To state objectives and purpose" },
    { question: "Which Indian body is empowered to interpret the Constitution?", options: ["Lok Sabha", "Supreme Court", "President", "Rajya Sabha"], answer: "Supreme Court" },
    { question: "In what year was the Constitution of South Africa adopted?", options: ["1994", "1996", "1999", "2002"], answer: "1996" },
    { question: "Which amendment to the U.S. Constitution grants freedom of speech?", options: ["1st", "5th", "10th", "12th"], answer: "1st" },
    { question: "Which country’s constitution is famously unwritten?", options: ["United Kingdom", "France", "Japan", "Italy"], answer: "United Kingdom" },
    { question: "Which section of the Indian Constitution lists Directive Principles of State Policy?", options: ["Part I", "Part II", "Part IV", "Part V"], answer: "Part IV" },
    { question: "Who has the power to amend the Constitution in India?", options: ["President", "Lok Sabha", "Parliament", "Supreme Court"], answer: "Parliament" },
    { question: "Which amendment to the U.S. Constitution grants the right to bear arms?", options: ["1st", "2nd", "5th", "10th"], answer: "2nd" },
    { question: "The Magna Carta, an important document in constitutional history, originated in which country?", options: ["France", "United States", "United Kingdom", "Germany"], answer: "United Kingdom" },
    { question: "Which part of the Indian Constitution deals with citizenship?", options: ["Part I", "Part II", "Part III", "Part IV"], answer: "Part II" },
    { question: "How many amendments does the Indian Constitution have as of 2024?", options: ["90", "102", "105", "110"], answer: "105" },
    { question: "Who approves amendments to the U.S. Constitution?", options: ["President", "Supreme Court", "Congress and states", "Senate alone"], answer: "Congress and states" },
    { question: "Which country’s constitution is called the 'Basic Law'?", options: ["China", "Germany", "Japan", "Russia"], answer: "Germany" },
    { question: "In the Indian Constitution, the right to equality is part of which Article?", options: ["Article 12", "Article 14", "Article 16", "Article 19"], answer: "Article 14" },
    { question: "Which amendment gave women the right to vote in the United States?", options: ["13th", "14th", "19th", "21st"], answer: "19th" },
    { question: "In which year was the U.S. Bill of Rights ratified?", options: ["1776", "1781", "1789", "1791"], answer: "1791" },
    { question: "What is the term for a change or addition to a constitution?", options: ["Article", "Preamble", "Amendment", "Annex"], answer: "Amendment" },
    { question: "Which article in the Indian Constitution provides for emergency provisions?", options: ["Article 123", "Article 124", "Article 352", "Article 356"], answer: "Article 352" },
    { question: "Which U.S. state was the last to ratify the Constitution?", options: ["Virginia", "North Carolina", "Rhode Island", "Delaware"], answer: "Rhode Island" },
    { question: "What does the 42nd Amendment to the Indian Constitution deal with?", options: ["Fundamental Rights", "Emergency Powers", "Preamble changes", "Fundamental Duties"], answer: "Fundamental Duties" },
    { question: "The concept of judicial review in the U.S. was established by which case?", options: ["Brown v. Board of Education", "Marbury v. Madison", "Roe v. Wade", "Plessy v. Ferguson"], answer: "Marbury v. Madison" }
  ]
};

const Questions = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const questions = questionsData[category] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setShuffledQuestions(shuffled);
  }, [questions]);

  const handleOptionClick = (option) => {
    const currentQuestion = shuffledQuestions[currentIndex];
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
      toast.success("Correct answer!", 
        { position: "top-center", 
            onClose: handleNextQuestion ,
            autoClose:800

        });
    } else {
      toast.error("Incorrect answer!", {
         position: "top-center", 
         onClose: handleNextQuestion,
         autoClose:800

        });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
    } else {
      setIsQuizFinished(true);
      toast.info(`Quiz finished! Your score is: ${score} / ${shuffledQuestions.length}`, { position: "top-center" ,
        autoClose:2000
      });
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (shuffledQuestions.length === 0) {
    return <p>No questions available for this category.</p>;
  }

  if (isQuizFinished) {
    return (
      <div className="quiz-container result-container">
        <div className='resultDiv'>
        <h2 id='qhead'>Quiz Finished!</h2>
        <p>Your final score is: {score} / {shuffledQuestions.length}</p>
        <button onClick={handleGoHome} className="home-button">Go to Home</button>
        <ToastContainer />
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="quiz-container">
      {/* <h1>{category}</h1> */}
      <p id='question'>Question {currentIndex + 1} of {shuffledQuestions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-list">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className="option-button"
            disabled={isAnswered} // Disable button after an answer is selected
          >
            {option}
          </button>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
