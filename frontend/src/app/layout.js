import "./globals.css";
import AuthProvider from "./context/AuthProvider";

export const metadata = {
  title: "Subspace",
  description:
    "Lecture feedback system powered by sentiment analysis machine learning model",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
