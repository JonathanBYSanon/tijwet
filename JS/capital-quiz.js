const countries = [
    { 'country': 'Afghanistan', 'capital': 'Kabul' },
    { 'country': 'Albania', 'capital': 'Tirana' },
    { 'country': 'Algeria', 'capital': 'Algiers' },
    { 'country': 'Andorra', 'capital': 'Andorra la Vella' },
    { 'country': 'Angola', 'capital': 'Luanda' },
    { 'country': 'Antigua and Barbuda', 'capital': "Saint John's" },
    { 'country': 'Argentina', 'capital': 'Buenos Aires' },
    { 'country': 'Armenia', 'capital': 'Yerevan' },
    { 'country': 'Australia', 'capital': 'Canberra' },
    { 'country': 'Austria', 'capital': 'Vienna' },
    { 'country': 'Azerbaijan', 'capital': 'Baku' },
    { 'country': 'Bahamas', 'capital': 'Nassau' },
    { 'country': 'Bahrain', 'capital': 'Manama' },
    { 'country': 'Bangladesh', 'capital': 'Dhaka' },
    { 'country': 'Barbados', 'capital': 'Bridgetown' },
    { 'country': 'Belarus', 'capital': 'Minsk' },
    { 'country': 'Belgium', 'capital': 'Brussels' },
    { 'country': 'Belize', 'capital': 'Belmopan' },
    { 'country': 'Benin', 'capital': 'Porto-Novo' },
    { 'country': 'Bhutan', 'capital': 'Thimphu' },
    { 'country': 'Bolivia', 'capital': 'Sucre' },
    { 'country': 'Bosnia and Herzegovina', 'capital': 'Sarajevo' },
    { 'country': 'Botswana', 'capital': 'Gaborone' },
    { 'country': 'Brazil', 'capital': 'Brasília' },
    { 'country': 'Brunei', 'capital': 'Bandar Seri Begawan' },
    { 'country': 'Bulgaria', 'capital': 'Sofia' },
    { 'country': 'Burkina Faso', 'capital': 'Ouagadougou' },
    { 'country': 'Burundi', 'capital': 'Gitega' },
    { 'country': 'Cabo Verde', 'capital': 'Praia' },
    { 'country': 'Cambodia', 'capital': 'Phnom Penh' },
    { 'country': 'Cameroon', 'capital': 'Yaoundé' },
    { 'country': 'Canada', 'capital': 'Ottawa' },
    { 'country': 'Central African Republic', 'capital': 'Bangui' },
    { 'country': 'Chad', 'capital': "N'Djamena" },
    { 'country': 'Chile', 'capital': 'Santiago' },
    { 'country': 'China', 'capital': 'Beijing' },
    { 'country': 'Colombia', 'capital': 'Bogotá' },
    { 'country': 'Comoros', 'capital': 'Moroni' },
    { 'country': 'Congo (Congo-Brazzaville)', 'capital': 'Brazzaville' },
    { 'country': 'Costa Rica', 'capital': 'San José' },
    { 'country': 'Croatia', 'capital': 'Zagreb' },
    { 'country': 'Cuba', 'capital': 'Havana' },
    { 'country': 'Cyprus', 'capital': 'Nicosia' },
    { 'country': 'Czech Republic', 'capital': 'Prague' },
    { 'country': 'Democratic Republic of the Congo', 'capital': 'Kinshasa' },
    { 'country': 'Denmark', 'capital': 'Copenhagen' },
    { 'country': 'Djibouti', 'capital': 'Djibouti' },
    { 'country': 'Dominica', 'capital': 'Roseau' },
    { 'country': 'Dominican Republic', 'capital': 'Santo Domingo' },
    { 'country': 'Ecuador', 'capital': 'Quito' },
    { 'country': 'Egypt', 'capital': 'Cairo' },
    { 'country': 'El Salvador', 'capital': 'San Salvador' },
    { 'country': 'Equatorial Guinea', 'capital': 'Malabo' },
    { 'country': 'Eritrea', 'capital': 'Asmara' },
    { 'country': 'Estonia', 'capital': 'Tallinn' },
    { 'country': 'Eswatini', 'capital': 'Mbabane' },
    { 'country': 'Ethiopia', 'capital': 'Addis Ababa' },
    { 'country': 'Fiji', 'capital': 'Suva' },
    { 'country': 'Finland', 'capital': 'Helsinki' },
    { 'country': 'France', 'capital': 'Paris' },
    { 'country': 'Gabon', 'capital': 'Libreville' },
    { 'country': 'Gambia', 'capital': 'Banjul' },
    { 'country': 'Georgia', 'capital': 'Tbilisi' },
    { 'country': 'Germany', 'capital': 'Berlin' },
    { 'country': 'Ghana', 'capital': 'Accra' },
    { 'country': 'Greece', 'capital': 'Athens' },
    { 'country': 'Grenada', 'capital': "St. George's" },
    { 'country': 'Guatemala', 'capital': 'Guatemala City' },
    { 'country': 'Guinea', 'capital': 'Conakry' },
    { 'country': 'Guinea-Bissau', 'capital': 'Bissau' },
    { 'country': 'Guyana', 'capital': 'Georgetown' },
    { 'country': 'Haiti', 'capital': 'Port-au-Prince' },
    { 'country': 'Honduras', 'capital': 'Tegucigalpa' },
    { 'country': 'Hungary', 'capital': 'Budapest' },
    { 'country': 'Iceland', 'capital': 'Reykjavík' },
    { 'country': 'India', 'capital': 'New Delhi' },
    { 'country': 'Indonesia', 'capital': 'Jakarta' },
    { 'country': 'Iran', 'capital': 'Tehran' },
    { 'country': 'Iraq', 'capital': 'Baghdad' },
    { 'country': 'Ireland', 'capital': 'Dublin' },
    { 'country': 'Israel', 'capital': 'Jerusalem' },
    { 'country': 'Italy', 'capital': 'Rome' },
    { 'country': 'Jamaica', 'capital': 'Kingston' },
    { 'country': 'Japan', 'capital': 'Tokyo' },
    { 'country': 'Jordan', 'capital': 'Amman' },
    { 'country': 'Kazakhstan', 'capital': 'Astana' },
    { 'country': 'Kenya', 'capital': 'Nairobi' },
    { 'country': 'Kiribati', 'capital': 'South Tarawa' },
    { 'country': 'Kuwait', 'capital': 'Kuwait City' },
    { 'country': 'Kyrgyzstan', 'capital': 'Bishkek' },
    { 'country': 'Laos', 'capital': 'Vientiane' },
    { 'country': 'Latvia', 'capital': 'Riga' },
    { 'country': 'Lebanon', 'capital': 'Beirut' },
    { 'country': 'Lesotho', 'capital': 'Maseru' },
    { 'country': 'Liberia', 'capital': 'Monrovia' },
    { 'country': 'Libya', 'capital': 'Tripoli' },
    { 'country': 'Liechtenstein', 'capital': 'Vaduz' },
    { 'country': 'Lithuania', 'capital': 'Vilnius' },
    { 'country': 'Luxembourg', 'capital': 'Luxembourg' },
    { 'country': 'Madagascar', 'capital': 'Antananarivo' },
    { 'country': 'Malawi', 'capital': 'Lilongwe' },
    { 'country': 'Malaysia', 'capital': 'Kuala Lumpur' },
    { 'country': 'Maldives', 'capital': 'Malé' },
    { 'country': 'Mali', 'capital': 'Bamako' },
    { 'country': 'Malta', 'capital': 'Valletta' },
    { 'country': 'Marshall Islands', 'capital': 'Majuro' },
    { 'country': 'Mauritania', 'capital': 'Nouakchott' },
    { 'country': 'Mauritius', 'capital': 'Port Louis' },
    { 'country': 'Mexico', 'capital': 'Mexico City' },
    { 'country': 'Micronesia', 'capital': 'Palikir' },
    { 'country': 'Moldova', 'capital': 'Chișinău' },
    { 'country': 'Monaco', 'capital': 'Monaco' },
    { 'country': 'Mongolia', 'capital': 'Ulaanbaatar' },
    { 'country': 'Montenegro', 'capital': 'Podgorica' },
    { 'country': 'Morocco', 'capital': 'Rabat' },
    { 'country': 'Mozambique', 'capital': 'Maputo' },
    { 'country': 'Myanmar', 'capital': 'Naypyidaw' },
    { 'country': 'Namibia', 'capital': 'Windhoek' },
    { 'country': 'Nauru', 'capital': 'Yaren' },
    { 'country': 'Nepal', 'capital': 'Kathmandu' },
    { 'country': 'Netherlands', 'capital': 'Amsterdam' },
    { 'country': 'New Zealand', 'capital': 'Wellington' },
    { 'country': 'Nicaragua', 'capital': 'Managua' },
    { 'country': 'Niger', 'capital': 'Niamey' },
    { 'country': 'Nigeria', 'capital': 'Abuja' },
    { 'country': 'North Korea', 'capital': 'Pyongyang' },
    { 'country': 'North Macedonia', 'capital': 'Skopje' },
    { 'country': 'Norway', 'capital': 'Oslo' },
    { 'country': 'Oman', 'capital': 'Muscat' },
    { 'country': 'Pakistan', 'capital': 'Islamabad' },
    { 'country': 'Palau', 'capital': 'Ngerulmud' },
    { 'country': 'Palestine', 'capital': 'Ramallah' },
    { 'country': 'Panama', 'capital': 'Panama City' },
    { 'country': 'Papua New Guinea', 'capital': 'Port Moresby' },
    { 'country': 'Paraguay', 'capital': 'Asunción' },
    { 'country': 'Peru', 'capital': 'Lima' },
    { 'country': 'Philippines', 'capital': 'Manila' },
    { 'country': 'Poland', 'capital': 'Warsaw' },
    { 'country': 'Portugal', 'capital': 'Lisbon' },
    { 'country': 'Qatar', 'capital': 'Doha' },
    { 'country': 'Romania', 'capital': 'Bucharest' },
    { 'country': 'Russia', 'capital': 'Moscow' },
    { 'country': 'Rwanda', 'capital': 'Kigali' },
    { 'country': 'Saint Kitts and Nevis', 'capital': 'Basseterre' },
    { 'country': 'Saint Lucia', 'capital': 'Castries' },
    { 'country': 'Saint Vincent and the Grenadines', 'capital': 'Kingstown' },
    { 'country': 'Samoa', 'capital': 'Apia' },
    { 'country': 'San Marino', 'capital': 'San Marino' },
    { 'country': 'Sao Tome and Principe', 'capital': 'São Tomé' },
    { 'country': 'Saudi Arabia', 'capital': 'Riyadh' },
    { 'country': 'Senegal', 'capital': 'Dakar' },
    { 'country': 'Serbia', 'capital': 'Belgrade' },
    { 'country': 'Seychelles', 'capital': 'Victoria' },
    { 'country': 'Sierra Leone', 'capital': 'Freetown' },
    { 'country': 'Singapore', 'capital': 'Singapore' },
    { 'country': 'Slovakia', 'capital': 'Bratislava' },
    { 'country': 'Slovenia', 'capital': 'Ljubljana' },
    { 'country': 'Solomon Islands', 'capital': 'Honiara' },
    { 'country': 'Somalia', 'capital': 'Mogadishu' },
    { 'country': 'South Africa', 'capital': 'Pretoria' },
    { 'country': 'South Korea', 'capital': 'Seoul' },
    { 'country': 'South Sudan', 'capital': 'Juba' },
    { 'country': 'Spain', 'capital': 'Madrid' },
    { 'country': 'Sri Lanka', 'capital': 'Sri Jayawardenepura Kotte' },
    { 'country': 'Sudan', 'capital': 'Khartoum' },
    { 'country': 'Suriname', 'capital': 'Paramaribo' },
    { 'country': 'Sweden', 'capital': 'Stockholm' },
    { 'country': 'Switzerland', 'capital': 'Bern' },
    { 'country': 'Syria', 'capital': 'Damascus' },
    { 'country': 'Taiwan', 'capital': 'Taipei' },
    { 'country': 'Tajikistan', 'capital': 'Dushanbe' },
    { 'country': 'Tanzania', 'capital': 'Dodoma' },
    { 'country': 'Thailand', 'capital': 'Bangkok' },
    { 'country': 'Timor-Leste', 'capital': 'Dili' },
    { 'country': 'Togo', 'capital': 'Lomé' },
    { 'country': 'Tonga', 'capital': 'Nukuʻalofa' },
    { 'country': 'Trinidad and Tobago', 'capital': 'Port of Spain' },
    { 'country': 'Tunisia', 'capital': 'Tunis' },
    { 'country': 'Turkey', 'capital': 'Ankara' },
    { 'country': 'Turkmenistan', 'capital': 'Ashgabat' },
    { 'country': 'Tuvalu', 'capital': 'Funafuti' },
    { 'country': 'Uganda', 'capital': 'Kampala' },
    { 'country': 'Ukraine', 'capital': 'Kyiv' },
    { 'country': 'United Arab Emirates', 'capital': 'Abu Dhabi' },
    { 'country': 'United Kingdom', 'capital': 'London' },
    { 'country': 'United States', 'capital': 'Washington, D.C.' },
    { 'country': 'Uruguay', 'capital': 'Montevideo' },
    { 'country': 'Uzbekistan', 'capital': 'Tashkent' },
    { 'country': 'Vanuatu', 'capital': 'Port Vila' },
    { 'country': 'Vatican City', 'capital': 'Vatican City' },
    { 'country': 'Venezuela', 'capital': 'Caracas' },
    { 'country': 'Vietnam', 'capital': 'Hanoi' },
    { 'country': 'Yemen', 'capital': "Sana'a" },
    { 'country': 'Zambia', 'capital': 'Lusaka' },
    { 'country': 'Zimbabwe', 'capital': 'Harare' }
];

let numberOfQuestions = 0; // Number of questions to ask
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let selectedCountries = [];
let Answers = [];
let IsQuestionAnswered = true;

function getRandomCountries() {

    while (selectedCountries.length < numberOfQuestions) {
        const randomIndex = Math.floor(Math.random() * 195);
        const country = countries[randomIndex];

        if (!selectedCountries.includes(country)) {
            selectedCountries.push(country);
        }
    }
}

function getRandomAnswers(correctAnswer) {
    Answers = [];
    while (Answers.length < 3) {
        const randomIndex = Math.floor(Math.random() * 195);
        const wrongAnswer = countries[randomIndex].capital;

        if (wrongAnswer !== correctAnswer && !Answers.includes(wrongAnswer)) {
            Answers.push(wrongAnswer);
        }
    }
    Answers.push(correctAnswer);
    Answers.sort(() => Math.random() - 0.5);
}

function verifyAnswer(selectedAnswer) {
    const currentCountry = selectedCountries[currentQuestionIndex];
    const correctAnswer = currentCountry.capital;
    return selectedAnswer.toLowerCase() === correctAnswer.toLowerCase();
}

function resetBackEnd() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    numberOfQuestions = parseInt(countSetter.value) || 0;
    selectedCountries = [];
    Answers = [];
}


// ################## UI ################## //

const questionElement = document.getElementById('question');
const answersTd = document.querySelectorAll('.answer');
const nextButton = document.getElementById('next-button');
const message = document.getElementById('message');
const countSetter = document.getElementById('questions-count');

function resetUi() {
    message.innerHTML = 'Start the quiz when you are ready!';
    nextButton.innerText = 'START';
    questionElement.innerHTML = 'What is the capital of ?';
    answersTd.forEach(td => {
        td.innerHTML = '?';
        td.classList.remove('correct', 'wrong');
    });
}


function InitializeGame() {
    resetBackEnd();
    resetUi();
    getRandomCountries();
}

function displayQuestion() {
    getRandomAnswers(selectedCountries[currentQuestionIndex].capital);
    const currentCountry = selectedCountries[currentQuestionIndex];
    questionElement.innerHTML = `What is the capital of ${currentCountry.country}?`;
    message.innerHTML = `Question ${currentQuestionIndex + 1} of ${numberOfQuestions}`;

    answersTd.forEach((td, index) => {
        td.classList.remove('correct', 'wrong');
        td.innerHTML = Answers[index];  
    });

    IsQuestionAnswered = false;
}

function showResult() {
    message.innerHTML = `You answered ${correctAnswersCount} out of ${numberOfQuestions} questions correctly!`;
    nextButton.innerText = 'FINISH';
}

nextButton.addEventListener('click', () => {
    const action = nextButton.innerText.toLowerCase();

    switch(action) {
        case "start":
            displayQuestion();
            nextButton.innerText = "NEXT";
            break;
        case "next":
            currentQuestionIndex++;
            if (currentQuestionIndex < numberOfQuestions) {
                displayQuestion();
                IsQuestionAnswered = false;       
            } else {
                showResult();
            }
            break;
        case "finish":
            InitializeGame();
            break;
    }
});

answersTd.forEach(td => {
    td.addEventListener('click', () => {
        if (IsQuestionAnswered) return;

        const selectedAnswer = td.innerHTML;
        const isCorrect = verifyAnswer(selectedAnswer);

        if (isCorrect) {
            correctAnswersCount++;
            td.classList.add('correct');
            message.innerHTML = 'Correct!';
        } else {
            td.classList.add('wrong');
            const correctAnswer = selectedCountries[currentQuestionIndex].capital;
            answersTd.forEach(answerTd => {
                if (answerTd.innerHTML === correctAnswer) {
                    answerTd.classList.add('correct');
                }
            });
            message.innerHTML = `Wrong!`;
        }

        IsQuestionAnswered = true;
    });
});

countSetter.addEventListener('change', () => {
    numberOfQuestions = parseInt(countSetter.value) || 0;
    if (numberOfQuestions < 10 || numberOfQuestions > 195) {
        countSetter.value = 10;
        numberOfQuestions = 10;
    }

    InitializeGame();
});

InitializeGame();











