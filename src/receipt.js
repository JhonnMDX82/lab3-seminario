import { calculateTotal } from './pricing.js';
import { formatPrice } from './format.js';

export function buildReceipt(items) {
  const lines = ['=== MINI TIENDA ==='];

  for (const item of items) {
    const label = `${item.name} x${item.quantity}`;
    const subtotal = item.price * item.quantity;

    lines.push(
      label.padEnd(28) +
      formatPrice(subtotal).padStart(12)
    );
  }

  const total = calculateTotal(items);

  lines.push(
    'TOTAL'.padEnd(28) +
    formatPrice(total).padStart(12)
  );

  return lines.join('\n');
}