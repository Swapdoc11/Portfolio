import './globals.css';

export const metadata = {
  title: 'Swapnil Jadhav - Full-Stack Developer + Trainer',
  description: 'Portfolio website of Swapnil Jadhav, a Full-Stack Developer and Trainer with expertise in JavaScript, React, Node.js, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 