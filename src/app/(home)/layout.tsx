import Header from "../../../components/header";
import Sidebar from "../../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <Sidebar>
        <Header>{children}</Header>
      </Sidebar>
    </div>
  );
}
