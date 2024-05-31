export default function RootLayout({
  children,
  filter,
  list,
}: Readonly<{
  children: React.ReactNode;
  filter: React.ReactNode;
  list: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>{filter}</div>
      <div>{list}</div>
    </>
  );
}
