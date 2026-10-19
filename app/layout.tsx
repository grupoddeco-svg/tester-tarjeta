import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'METALFORM — Una impresión que perdura',
  description: 'Tarjetas de presentación de metal personalizadas con grabado láser. Diseñadas para dejar huella.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
