export const categoryMenuList = [
  { id: 1, title: "Festive Lights", src: "/icon-led.svg", href: "/shop/festive-lights" },
  { id: 2, title: "Earbuds", src: "/icon-pa.svg", href: "/shop/earbuds" },
  { id: 3, title: "LED TV", src: "/icon-tv.svg", href: "/shop/led-tv" },
  { id: 4, title: "Fridge", src: "/icon-fridge.svg", href: "/shop/fridge" },
  { id: 5, title: "Washing Machine", src: "/icon-washer.svg", href: "/shop/washing-machine" },
  { id: 6, title: "Air Conditioner", src: "/icon-appliance.svg", href: "/shop/air-conditioner" },
  { id: 7, title: "Sound & PA", src: "/icon-pa.svg", href: "/shop/sound-pa" },
  { id: 8, title: "Kitchen", src: "/icon-mixer.svg", href: "/shop/kitchen" },
  { id: 9, title: "Irons", src: "/icon-iron.svg", href: "/shop/irons" },
  { id: 10, title: "Electrical", src: "/icon-cable.svg", href: "/shop/electrical" },
  { id: 11, title: "Solar", src: "/icon-led.svg", href: "/shop/solar" },
  { id: 12, title: "DTH", src: "/icon-dth.svg", href: "/shop/dth" },
  { id: 13, title: "Ceiling Fans", src: "/icon-ceiling-fan.svg", href: "/shop/ceiling-fans" },
  { id: 14, title: "All Fans", src: "/icon-table-fan.svg", href: "/shop/table-fans" },
  { id: 15, title: "Lighting", src: "/icon-led.svg", href: "/shop/lighting" },
  { id: 16, title: "Mixer & Juicer", src: "/icon-mixer.svg", href: "/shop/mixer-juicer" },
  { id: 17, title: "LED Display", src: "/icon-tv.svg", href: "/shop/led-display" },
  { id: 18, title: "Cables", src: "/icon-cable.svg", href: "/shop/cables" },
  { id: 19, title: "Pumps", src: "/icon-pump.svg", href: "/shop/pumps" },
  { id: 20, title: "Torch", src: "/icon-torch.svg", href: "/shop/torch" },
  { id: 21, title: "Home Decor", src: "/icon-decor.svg", href: "/shop/home-decor" },
  { id: 22, title: "Sound / Speakers", src: "/icon-pa.svg", href: "/shop/sound-speakers" },
  { id: 23, title: "Health & Personal Care", src: "/icon-appliance.svg", href: "/shop/health-personal-care" },
  { id: 24, title: "Home & Kitchen / Bottles", src: "/icon-mixer.svg", href: "/shop/home-kitchen-bottles" },
];

export const incentives = [
  {
    name: "0% Bajaj Finance",
    description:
      "Easy EMI, no cost. Instant approval and minimum documents on fridge, washing machine, LED TV and AC.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "Free delivery in Damoh",
    description:
      "Orders inside Damoh city are delivered free. Ask the counter for nearby villages.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Since 1960",
    description:
      "Sixty years of shop-counter help. आपकी जरूरत, हमारी जिम्मेदारी.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "All fans", href: "/shop/table-fans" },
    { name: "LED TV & appliances", href: "/shop/led-tv" },
    { name: "Sound & PA", href: "/shop/sound-pa" },
  ],
  about: [
    { name: "About Juneja Trading", href: "/about" },
    { name: "Since 1960", href: "/history" },
    { name: "Visit the Damoh shop", href: "/contact" },
    { name: "Company Profile", href: "/about" },
  ],
  buy: [
    { name: "How to order", href: "/contact" },
    { name: "Terms of use", href: "/about" },
    { name: "Privacy policy", href: "/about" },
    { name: "Warranty help", href: "/contact" },
    { name: "Brand partners", href: "/shop" },
  ],
  help: [
    { name: "Contact", href: "/contact" },
    { name: "Shop hours & address", href: "/contact" },
    { name: "FAQ", href: "/contact" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  
  // Check if the cleaned input has valid length (13-19 digits)
  if (!/^\d{13,19}$/.test(cleanedInput)) {
    return false;
  }
  
  // Implement Luhn algorithm for credit card validation
  return luhnCheck(cleanedInput);
};

/**
 * Luhn algorithm implementation for credit card validation
 * @param cardNumber - The credit card number as a string
 * @returns boolean - true if the card number is valid according to Luhn algorithm
 */
const luhnCheck = (cardNumber: string): boolean => {
  let sum = 0;
  let isEven = false;
  
  // Process digits from right to left
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Enhanced credit card validation with card type detection
 * @param input - The credit card number as a string
 * @returns object with validation result and card type
 */
export const validateCreditCard = (input: string) => {
  const cleanedInput = input.replace(/[^0-9]/g, "");
  
  // Basic length and format check
  if (!/^\d{13,19}$/.test(cleanedInput)) {
    return {
      isValid: false,
      cardType: 'unknown',
      error: 'Invalid card number format'
    };
  }
  
  // Luhn algorithm check
  if (!luhnCheck(cleanedInput)) {
    return {
      isValid: false,
      cardType: 'unknown',
      error: 'Invalid card number (Luhn check failed)'
    };
  }
  
  // Detect card type based on BIN (Bank Identification Number)
  const cardType = detectCardType(cleanedInput);
  
  return {
    isValid: true,
    cardType,
    error: null
  };
};

/**
 * Detect credit card type based on BIN patterns
 * @param cardNumber - The credit card number as a string
 * @returns string - The detected card type
 */
const detectCardType = (cardNumber: string): string => {
  const firstDigit = cardNumber[0];
  const firstTwoDigits = cardNumber.substring(0, 2);
  const firstFourDigits = cardNumber.substring(0, 4);
  const firstThreeDigits = cardNumber.substring(0, 3);
  
  // Visa: starts with 4
  if (firstDigit === '4') {
    return 'visa';
  }
  
  // Mastercard: starts with 5 or 2
  if (firstDigit === '5' || (firstTwoDigits >= '22' && firstTwoDigits <= '27')) {
    return 'mastercard';
  }
  
  // American Express: starts with 34 or 37
  if (firstTwoDigits === '34' || firstTwoDigits === '37') {
    return 'amex';
  }
  
  // Discover: starts with 6011, 65, or 644-649
  if (firstFourDigits === '6011' || firstTwoDigits === '65' || 
      (firstThreeDigits >= '644' && firstThreeDigits <= '649')) {
    return 'discover';
  }
  
  // Diners Club: starts with 300-305, 36, or 38
  if ((firstThreeDigits >= '300' && firstThreeDigits <= '305') || 
      firstTwoDigits === '36' || firstTwoDigits === '38') {
    return 'diners';
  }
  
  // JCB: starts with 35
  if (firstTwoDigits === '35') {
    return 'jcb';
  }
  
  return 'unknown';
};

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
