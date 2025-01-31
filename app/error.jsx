'use client';

import { Button } from './components/Button';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Something went wrong!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            onClick={reset}
            className="w-full inline-flex justify-center"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full inline-flex justify-center"
          >
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
} 