import RevalidateButton from "@/components/RevalidateButton";


export default function RevalidateOnDemandPage() {
  const generatedAt = new Date().toLocaleString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        On-Demand Revalidation Example
      </h1>
      <p className="mb-4">
        This page demonstrates ISR that revalidates only when triggered on demand.
      </p>
      <p className="mb-4">
        Page generated at: <span className="font-mono">{generatedAt}</span>
      </p>
      <RevalidateButton />
    </div>
  );
} 