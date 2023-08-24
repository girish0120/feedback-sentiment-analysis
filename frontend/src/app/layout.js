import "./globals.css";

export const metadata = {
  title: "Subspace",
  description:
    "Lecture feedback system powered by sentiment analysis machine learning model",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
