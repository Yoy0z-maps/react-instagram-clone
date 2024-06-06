export default function NavigationItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}
