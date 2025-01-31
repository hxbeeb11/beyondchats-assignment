export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-8 w-8 rounded-full border-t-4 border-b-4 border-indigo-300 animate-spin"></div>
          </div>
        </div>
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 