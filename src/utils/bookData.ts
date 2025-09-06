export interface BookPage {
  id: number
  title: string
  text: string
  spreadId: string
  imagePosition: 'random' | 'left' | 'right' | 'center'
  backgroundColor: string
  textColor: string
  sound?: 'soil' | 'sun' | 'rain' | 'wind' | 'bees' | 'magic' | 'crunch' | 'gentle' | 'sparkle'
  interactive?: boolean
  randomPosition?: { top: string; left: string; rotate: string }
}

export const pages: BookPage[] = [
  // Cover Page
  {
    id: 0,
    title: "Bunny's Thank-You Garden",
    text: "A Children's Picture Book for Ages 3–5",
    spreadId: "BunnyCover",
    imagePosition: "center",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 1-2: Introduction
  {
    id: 1,
    title: "In the Garden",
    text: "In a sunny garden, Bunny sowed her seeds.\n\"Grow, carrots, grow! Hurry, please!\"",
    spreadId: "1-2", 
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "wind",
    interactive: true
  },

  // Spread 3-4: Setup
  {
    id: 2,
    title: "Waiting and Waiting",
    text: "One day, two days, three days creeped.\nTiny sprouts peeked up—oh, so slow!\n\"My carrots! Where?\" Bunny sighed and weeped.",
    spreadId: "3-4",
    imagePosition: "right", 
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 4-5: Problem
  {
    id: 3,
    title: "Bunny Gets Frustrated",
    text: "Sprouts so small, no carrots to munch!\nBunny's tummy growled with a grumbly crunch.\nTug, tug, tug—she pulled in a huff!\n\"Hmph!\" she groaned. \"This is tough stuff!\"",
    spreadId: "4-5",
    imagePosition: "left",
    backgroundColor: "bg-white", 
    textColor: "text-gray-800",
    sound: "rain",
    interactive: true
  },

  // Spread 6-7: Owl's Wisdom
  {
    id: 4,
    title: "Wise Owl Helps",
    text: "Bunny hopped to Owl in the tree.\n\"Carrots won't grow! Please help me!\"\nOwl hooted, \"Thank the garden, dear.\nSay 'thank you'—see what appears!\"",
    spreadId: "6-7",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 8-9: First Thank You
  {
    id: 5,
    title: "Thank You, Soil!",
    text: "\"Thank you, Soil!\" Bunny whispered low.\nThe ground lit up with a soft, soft glow.\nDid it hear? Her eyes grew wide.\nA spark of joy warmed deep inside.",
    spreadId: "8-9",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "soil",
    interactive: true
  },

  // Spread 10-11: Sun and Rain
  {
    id: 6,
    title: "Thank You, Sun and Rain!",
    text: "\"Thank you, Sun!\" Bunny sang with glee.\nThe garden glowed for all to see.\n\"Thank you, Rain!\" she whispered low.\nRaindrops sparkled with a starry glow.",
    spreadId: "10-11",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sun",
    interactive: true
  },

  // Spread 12-13: Wind and Bees
  {
    id: 7,
    title: "Thank You, Wind and Bees!",
    text: "\"Thank you, Wind!\" Bunny twirled with zing.\nBreezes danced and made her heart sing.\n\"Thank you, Bees!\" she giggled with cheer.\nBuzz, buzz—happy hums drew near!",
    spreadId: "12-13",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800", 
    sound: "bees",
    interactive: true
  },

  // Spread 14-15: Growing Gratitude
  {
    id: 8,
    title: "Carrots Begin to Grow!",
    text: "Day by day, Bunny thanked with cheer.\nSprouts grew tall—carrots bloomed so near!\n\"Who else to thank?\" she asked the sky.\nWhat would you thank? Can you try?",
    spreadId: "14-15",
    imagePosition: "right",
    backgroundColor: "bg-white", 
    textColor: "text-gray-800",
    sound: "sparkle",
    interactive: true
  },

  // Spread 16-17: The Magic Moment
  {
    id: 9,
    title: "Carrots Appear!",
    text: "\"Thank you, worms! Thank you, stars!\"\nCarrots popped with a bright, bright spark!\nBunny clapped, \"Oh, what a sight!\nThank you, garden—you grew so bright!\"",
    spreadId: "16-17",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "magic",
    interactive: true
  },

  // Spread 18-19: Sharing
  {
    id: 10,
    title: "Sharing with Friends",
    text: "Bunny shared her carrots, crunch, crunch, yum!\nFriends nibbled, laughed—munch, munch, fun!\n\"Thank you, Bunny!\" they sang with glee.\nThe garden glowed for all to see.",
    spreadId: "18-19",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "crunch"
  },

  // Spread 20-21: Evening Gratitude
  {
    id: 11,
    title: "Peaceful Evening",
    text: "\"Thanks, dear garden, for all you share.\nStars above twinkle, love fills the air.\"\nBunny's heart glowed with a joyful spark.\nGratitude shines in the cozy dark.",
    spreadId: "20-21",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 22-24: Final Message
  {
    id: 12,
    title: "Your Turn to Thank!",
    text: "Thank you makes hearts and gardens grow.\nBig or small, it's love to show.\nWhat's your thank you in your heart today?\nFriends and family, wind and rain, this sunny day—\nPick three things and share them, yay!",
    spreadId: "22-24",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sparkle",
    interactive: true
  }
]