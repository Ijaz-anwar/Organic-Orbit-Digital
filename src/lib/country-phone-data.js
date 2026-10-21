/**
 * Country phone data and validation rules.
 * Supports country codes, national digit counts, and telephone formatting.
 */

export const countryPhoneData = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', minDigits: 10, maxDigits: 10, placeholder: '(555) 000-0000', stripLeadingZero: false },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', minDigits: 10, maxDigits: 10, placeholder: '7123 456789', stripLeadingZero: true },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', minDigits: 10, maxDigits: 10, placeholder: '300 1234567', stripLeadingZero: true },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', minDigits: 9, maxDigits: 9, placeholder: '50 123 4567', stripLeadingZero: true },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', minDigits: 9, maxDigits: 9, placeholder: '50 123 4567', stripLeadingZero: true },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', minDigits: 10, maxDigits: 10, placeholder: '(555) 000-0000', stripLeadingZero: false },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', minDigits: 9, maxDigits: 9, placeholder: '412 345 678', stripLeadingZero: true },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', minDigits: 10, maxDigits: 11, placeholder: '151 23456789', stripLeadingZero: true },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', minDigits: 9, maxDigits: 9, placeholder: '6 12 34 56 78', stripLeadingZero: true },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', minDigits: 9, maxDigits: 10, placeholder: '312 345 6789', stripLeadingZero: false },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', minDigits: 9, maxDigits: 9, placeholder: '612 345 678', stripLeadingZero: false },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', minDigits: 10, maxDigits: 10, placeholder: '98765 43210', stripLeadingZero: true },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', minDigits: 10, maxDigits: 11, placeholder: '11 91234-5678', stripLeadingZero: true },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', minDigits: 9, maxDigits: 9, placeholder: '912 345 678', stripLeadingZero: false },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', minDigits: 9, maxDigits: 9, placeholder: '6 12345678', stripLeadingZero: true },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', minDigits: 9, maxDigits: 9, placeholder: '85 123 4567', stripLeadingZero: true },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', minDigits: 8, maxDigits: 10, placeholder: '21 123 4567', stripLeadingZero: true },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', minDigits: 8, maxDigits: 8, placeholder: '8123 4567', stripLeadingZero: false },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', minDigits: 9, maxDigits: 10, placeholder: '12 345 6789', stripLeadingZero: true },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', minDigits: 8, maxDigits: 8, placeholder: '3312 3456', stripLeadingZero: false },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', minDigits: 8, maxDigits: 8, placeholder: '9123 4567', stripLeadingZero: false },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', minDigits: 8, maxDigits: 8, placeholder: '3612 3456', stripLeadingZero: false },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', minDigits: 8, maxDigits: 8, placeholder: '9123 4567', stripLeadingZero: false },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', minDigits: 10, maxDigits: 10, placeholder: '532 123 4567', stripLeadingZero: true },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', minDigits: 9, maxDigits: 9, placeholder: '82 123 4567', stripLeadingZero: true },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', minDigits: 9, maxDigits: 9, placeholder: '78 123 45 67', stripLeadingZero: true },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', minDigits: 9, maxDigits: 9, placeholder: '70 123 45 67', stripLeadingZero: true },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', minDigits: 8, maxDigits: 8, placeholder: '412 34 567', stripLeadingZero: false },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', minDigits: 8, maxDigits: 8, placeholder: '20 12 34 56', stripLeadingZero: false },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', minDigits: 9, maxDigits: 9, placeholder: '470 12 34 56', stripLeadingZero: true },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹', minDigits: 10, maxDigits: 11, placeholder: '664 1234567', stripLeadingZero: true },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱', minDigits: 9, maxDigits: 9, placeholder: '512 345 678', stripLeadingZero: false },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', minDigits: 10, maxDigits: 10, placeholder: '55 1234 5678', stripLeadingZero: false },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', minDigits: 9, maxDigits: 12, placeholder: '812 3456 7890', stripLeadingZero: true },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', minDigits: 10, maxDigits: 10, placeholder: '917 123 4567', stripLeadingZero: true },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', minDigits: 10, maxDigits: 10, placeholder: '100 123 4567', stripLeadingZero: true },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', minDigits: 10, maxDigits: 10, placeholder: '1712 345678', stripLeadingZero: true },
  { code: 'OTHER', name: 'Other Country', dialCode: '+', flag: '🌐', minDigits: 7, maxDigits: 15, placeholder: 'Enter international number', stripLeadingZero: false },
];

export function getCountry(code) {
  return countryPhoneData.find((c) => c.code === code) || countryPhoneData[0];
}

/**
 * Validates a telephone or WhatsApp number against the selected country's exact requirements.
 * Returns { valid: boolean, error: string | null, digits: string, formatted: string }
 */
export function validatePhoneNumber(rawNumber, countryCode) {
  const country = getCountry(countryCode);
  const trimmed = (rawNumber || '').trim();

  if (!trimmed) {
    return {
      valid: false,
      error: 'Please enter your phone or WhatsApp number.',
      digits: '',
      formatted: '',
    };
  }

  // Must only contain digits, spaces, hyphens, parentheses, plus
  if (!/^[\d\s\-()+]+$/.test(trimmed)) {
    return {
      valid: false,
      error: 'Phone number can only contain digits, spaces, and hyphens.',
      digits: '',
      formatted: '',
    };
  }

  let digits = trimmed.replace(/\D/g, '');

  if (country.code !== 'OTHER') {
    // If the user mistakenly typed the dial code at the beginning (e.g. 923001234567)
    const dialDigits = country.dialCode.replace(/\D/g, '');
    if (dialDigits && digits.startsWith(dialDigits) && digits.length >= country.minDigits + dialDigits.length) {
      digits = digits.slice(dialDigits.length);
    }

    // Strip leading trunk zero if user typed e.g. 0300... for Pakistan or 07... for UK
    if (country.stripLeadingZero && digits.startsWith('0') && digits.length > country.minDigits) {
      digits = digits.slice(1);
    }

    if (country.minDigits === country.maxDigits) {
      if (digits.length !== country.minDigits) {
        return {
          valid: false,
          error: `Please enter an exact ${country.minDigits}-digit number for ${country.name}. You entered ${digits.length} digits.`,
          digits,
          formatted: `${country.dialCode} ${digits}`,
        };
      }
    } else {
      if (digits.length < country.minDigits || digits.length > country.maxDigits) {
        return {
          valid: false,
          error: `Please enter a valid number for ${country.name} (${country.minDigits}–${country.maxDigits} digits). You entered ${digits.length} digits.`,
          digits,
          formatted: `${country.dialCode} ${digits}`,
        };
      }
    }
  } else {
    // Other country: standard international range 7 to 15 digits
    if (digits.length < 7 || digits.length > 15) {
      return {
        valid: false,
        error: `Please enter a valid international phone number (7 to 15 digits). You entered ${digits.length} digits.`,
        digits,
        formatted: `+${digits}`,
      };
    }
  }

  const formatted = country.code === 'OTHER' ? `+${digits}` : `${country.dialCode} ${digits}`;
  return {
    valid: true,
    error: null,
    digits,
    formatted,
  };
}
