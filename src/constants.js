// Shared constants and utilities for ANGELA'S Poultry Farm

export const AGE_GROUPS = {
  '4-month': {
    id: '4-month',
    label: '4-Month-Old Chickens',
    minPrice: 150,
    maxPrice: 250,
    description: 'Young, growing birds ideal for starting a small flock.',
  },
  '5-month': {
    id: '5-month',
    label: '5-Month-Old Chickens',
    minPrice: 250,
    maxPrice: 350,
    description: 'Nearly mature birds, great for egg production or meat.',
  },
  '6-month-plus': {
    id: '6-month-plus',
    label: '6-Month-Old and Older',
    minPrice: 350,
    maxPrice: 450,
    description: 'Fully mature birds with established laying cycles.',
  },
};

export const BREEDS = [
  { id: 'layer', label: 'Layer' },
  { id: 'native', label: 'Native Chicken' },
  { id: 'broiler', label: 'Broiler' },
  { id: 'other', label: 'Other / Please advise' },
];

export const CONTACT = {
  phone: '0991-455-6688',
  email: 'Angelalariwan@gmail.com',
  businessName: "ANGELA'S Poultry Farm",
  tagline: 'Good Chickens. Easy Ordering.',
};

export const SMS_RECIPIENT = '09914556688';
export const EMAIL_RECIPIENT = 'Angelalariwan@gmail.com';

/**
 * Format a number as Philippine Peso string.
 * @param {number} amount
 */
export function formatPHP(amount) {
  if (amount == null || Number.isNaN(Number(amount))) {
    return '₱0.00';
  }
  return '₱' + Number(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Build an SMS link with a pre-filled message.
 * @param {string} message
 */
export function buildSMSLink(message) {
  const text = encodeURIComponent(message);
  return `sms:${SMS_RECIPIENT}?body=${text}`;
}

/**
 * Build a mailto link with a pre-filled subject and body.
 * @param {string} message
 */
export function buildEmailLink(message) {
  const subject = encodeURIComponent('Poultry Reservation Inquiry — ANGELA\'S Poultry Farm');
  const body = encodeURIComponent(message);
  return `mailto:${EMAIL_RECIPIENT}?subject=${subject}&body=${body}`;
}

/**
 * Validate that a date is not in the past (today allowed).
 * @param {string} dateStr - YYYY-MM-DD
 */
export function isFutureOrToday(dateStr) {
  if (!dateStr) return false;
  const selected = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected >= today;
}

/**
 * Validate a positive integer.
 * @param {number} value
 */
export function isValidQuantity(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}