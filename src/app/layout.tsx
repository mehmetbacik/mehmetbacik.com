

export const metadata = {
  title: "Mehmet BACIK",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="flex-1 p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
