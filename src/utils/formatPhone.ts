export default function FormatPhone(phone: string): string {
  if (!phone) return '';
  const newPhone = `(${phone.substring(0, 2)}) ${phone.substring(
    2,
    7,
  )}-${phone.substring(7, 11)}`;

  return newPhone;
}
