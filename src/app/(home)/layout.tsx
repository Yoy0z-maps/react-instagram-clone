import Header from "../../../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <Header>{children}</Header>
    </div>
  );
}
