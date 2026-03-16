export const metadata = {
  title: "Gallus Crew Portal",
  description: "Machakos University Gallus Crew Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
