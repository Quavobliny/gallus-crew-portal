export const metadata = {
  title: "Gallus Crew Portal",
  description: "Machakos University Gallus Crew Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
