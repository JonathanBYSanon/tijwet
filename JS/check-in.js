const checkInMessages = {
    spiritual: [
      "You are growing, even when it doesn’t feel like it.",
      "The soul needs quiet to hear itself.",
      "Your light touches places you’ll never see.",
      "Be still. The answers come in silence.",
      "Your spirit is your compass. Trust it.",
      "There’s strength in surrender.",
      "You are part of something bigger than this moment.",
      "Faith doesn’t always need proof, just breath.",
      "Breathe in peace. Breathe out worry.",
      "Your presence is a prayer.",
      "You were born with purpose, not by accident.",
      "Align with peace, not pressure.",
      "Grace is yours—even when you stumble.",
      "You are not lost, just in progress.",
      "Let today be your softest yes to life."
    ],
    affirmation: [
      "I am enough as I am.",
      "I welcome growth with open arms.",
      "My mind is calm. My heart is open.",
      "I deserve joy and I allow it in.",
      "I’m doing the best I can—and that’s powerful.",
      "I am proud of how far I’ve come.",
      "I trust myself to make good choices.",
      "I release what no longer serves me.",
      "I have the courage to keep going.",
      "I radiate confidence and peace.",
      "I am grounded, resilient, and whole.",
      "My energy is valuable and protected.",
      "I love who I’m becoming.",
      "I honor my pace and my path.",
      "I carry peace into my day."
    ],
    encouragement: [
      "You’ve survived 100% of your hardest days.",
      "Keep showing up. That’s enough.",
      "You’re stronger than you know.",
      "Every small step counts.",
      "You don’t have to be perfect to be powerful.",
      "Progress is quiet—keep going.",
      "You’re doing better than you think.",
      "The fact that you care says everything.",
      "Your efforts matter.",
      "You’re allowed to rest. You’re allowed to rise.",
      "One moment at a time.",
      "You’re not behind. You’re on your own timeline.",
      "You’ve got this—even when it’s tough.",
      "Healing isn’t linear. That’s okay.",
      "Your story is not over yet."
    ],
    gratitude: [
      "Today, I’m thankful for another chance.",
      "Gratitude softens even the roughest day.",
      "Find joy in the smallest moments.",
      "Thank you, body, for carrying me through.",
      "I’m grateful for the people who love me.",
      "This breath is a gift.",
      "There is beauty in simplicity.",
      "Every lesson is something to be thankful for.",
      "Gratitude turns chaos into calm.",
      "The little things are the big things.",
      "Thank you, past self, for not giving up.",
      "I am lucky to have today.",
      "There’s always something worth noticing.",
      "I’m grateful for how far I’ve come.",
      "Even this moment holds something good."
    ],
    reflection: [
      "What did I learn from yesterday?",
      "What do I want to feel today?",
      "Where do I need to be softer with myself?",
      "What am I holding onto that I can release?",
      "Who showed me love recently?",
      "What did I do today that I’m proud of?",
      "What would I tell my younger self?",
      "How did I handle discomfort today?",
      "What am I avoiding, and why?",
      "When was the last time I truly rested?",
      "What belief am I ready to question?",
      "Where do I need more honesty?",
      "What’s something I’ve outgrown?",
      "Where am I still learning?",
      "Who am I becoming?"
    ],
    funny: [
      "I checked in today—gold star for me ⭐",
      "Adulting is just googling how to do stuff.",
      "I’m not lazy, I’m energy-efficient.",
      "Running late is my cardio.",
      "I need six months of vacation twice a year.",
      "I put the ‘pro’ in procrastinate.",
      "Why be moody when you can shake your booty?",
      "Mirror: ‘You again?’ Me: ‘Always.’",
      "Life tip: Take naps, not crap.",
      "I speak fluent ‘meh’ before 10AM.",
      "I’m not weird, I’m limited edition.",
      "Still waiting for that glow-up email.",
      "My WiFi signal is stronger than my willpower.",
      "If life gives you lemons, squeeze them into coffee.",
      "Mentally I’m in bed... physically, also in bed."
    ],
    motivation: [
      "Your future self is watching. Keep going.",
      "Discipline beats motivation. Show up anyway.",
      "A little progress each day adds up.",
      "Dreams demand effort—give it generously.",
      "Push forward, even if it’s slow.",
      "Make your next move your best move.",
      "Don’t stop now—you’re building momentum.",
      "One win a day is still a win.",
      "It’s okay to be tired, not to quit.",
      "Take action, not just notes.",
      "Consistency creates confidence.",
      "You don’t need hype—just heart.",
      "Be brave enough to suck at something new.",
      "The best time is now. Start messy.",
      "Earn your pride, not just results."
    ],
    inspiration: [
      "You can’t rewrite the past, but you can shape the future.",
      "Some of the best chapters come after the plot twist.",
      "You’re a story still being written.",
      "The sky changes daily—and so can you.",
      "Your energy is your signature.",
      "Be a voice, not an echo.",
      "You’re allowed to shine differently.",
      "The world needs your flavor of magic.",
      "Your limits are more flexible than you think.",
      "It’s not about luck, it’s about effort.",
      "Your uniqueness is your advantage.",
      "Big change starts with one brave choice.",
      "Chase the feeling, not just the goal.",
      "You are already enough to begin.",
      "Your light is not too much—it’s just right."
    ],
    love: [
      "Love doesn’t have to be loud to be real.",
      "The right people hear your silence.",
      "Real love feels like peace, not pressure.",
      "You are worthy of soft, steady love.",
      "Love that lasts is built, not found.",
      "Be someone who makes others feel seen.",
      "Love starts with kindness.",
      "You don’t have to earn love—it’s your birthright.",
      "Loyalty is a love language too.",
      "Speak love fluently, act it louder.",
      "Love is less about words, more about presence.",
      "You deserve love that makes you feel safe.",
      "Let your heart be open, not exposed.",
      "The best love story is the one you write daily.",
      "Protect your peace like it’s part of your heart."
    ],
    selfLove: [
      "You are not too much. You’re just right.",
      "Taking care of yourself is not selfish.",
      "Say no when you mean no.",
      "Rest is a form of respect—for yourself.",
      "You deserve kindness from yourself too.",
      "You are not your mistakes.",
      "Celebrate the small wins like they’re big.",
      "Talk to yourself like someone you love.",
      "You are not behind—you’re blooming in your own season.",
      "Your softness is strength.",
      "You’re allowed to change your mind and your path.",
      "You don’t need fixing—you need space to grow.",
      "Honor your boundaries like they’re sacred.",
      "You are your own home. Make it safe.",
      "Being yourself is your greatest power."
    ],
    GodWord: [
      "Let all that you do be done in love. – 1 Corinthians 16:14",
      "You are deeply loved—just as you are, right now.",
      "The light you carry can warm someone’s darkest day.",
      "Compassion is the loudest form of faith.",
      "You were made to reflect love, not fear.",
      "Peace begins with a heart that forgives.",
      "Even in silence, grace speaks loudly.",
      "A kind word can be someone’s answered prayer.",
      "You are never truly alone—love surrounds you.",
      "The greatest miracle is a heart that chooses love daily.",
      "Mercy is love in action.",
      "You’re held by something bigger than your worries.",
      "Faith is choosing hope when it’s hard to see the path.",
      "Love is the only thing we carry beyond this moment.",
      "You are a vessel of love—let it overflow."
    ]
  };
  
/* ################################### UI ################################### */

const categoryElement = document.getElementById("check-in-category");
const messageElement = document.getElementById("check-in-message");
const streakElement = document.getElementById("check-in-streak");

// Get today's date (just the day part for simplicity)
const getToday = () => new Date().toLocaleDateString();
let streak = 0;
let message = "";
let category = "";

// Get message for today
const getMessage = () => {
  const data = JSON.parse(localStorage.getItem("tijwetDailyCheckIn"));
  const today = getToday();
  if(!data)
  {
    generateMessage();
    streak = 1;
    saveMessage();
  }
  else if (data.date === today) {
    message = data.message;
    category = data.category;
    streak = data.streak;
  }
  else
  {
    while(data.message === message)
    {
      generateMessage();
    }

    // Check if the last message was from yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toLocaleDateString();
    if(data.date === yesterdayDate)
    {
      streak = data.streak + 1;
    }
    else
    {
      streak = 1;
    }
    saveMessage();
  }

  categoryElement.textContent = category
  messageElement.textContent = message;
  streakElement.textContent = `Current Streak : ${streak}`;
};

// Save message + category for today
const saveMessage = () => {
  const today = getToday();
  const data = {
    date: today,
    streak,
    category,
    message
  };
  localStorage.setItem("tijwetDailyCheckIn", JSON.stringify(data));
};

// get random catergory from object
const getRandomCategory = () => {
    const categories = Object.keys(checkInMessages);
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// get random message from array
const getRandomMessage = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// generate message for today
const generateMessage = () => {
  category = getRandomCategory();
  message = getRandomMessage(checkInMessages[category]);
};

// Main logic
getMessage();


categoryElement.textContent = category
messageElement.textContent = message;
streakElement.textContent = `Current Streak : ${streak}`;


  