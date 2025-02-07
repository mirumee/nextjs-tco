export default async function Clock() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return (
    <div className="text-lg font-bold">
      Server Time: {new Date().toLocaleTimeString()}
    </div>
  );
} 