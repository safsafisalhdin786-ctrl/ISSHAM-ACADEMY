export const maskPhone = (value) => {
  const phone = String(value || '').trim();
  if (!phone) return 'غير متوفر';
  if (phone.length <= 4) return '••••';
  return `${phone.slice(0, 3)}${'•'.repeat(Math.max(2, phone.length - 5))}${phone.slice(-2)}`;
};

export const maskEmail = (value) => {
  const email = String(value || '').trim();
  const [localPart, domain] = email.split('@');
  if (!localPart || !domain) return 'غير متوفر';
  return `${localPart.slice(0, 1)}${'•'.repeat(Math.max(2, localPart.length - 1))}@${domain}`;
};
