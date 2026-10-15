import { isPending } from "@/lib/site";

export function Value({ children }: { children: string }) {
  if (isPending(children)) return <span className="pending">{children}</span>;
  return <>{children}</>;
}

export function Email({
  address,
  className,
}: {
  address: string;
  className?: string;
}) {
  if (isPending(address)) return <span className="pending">{address}</span>;
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}
