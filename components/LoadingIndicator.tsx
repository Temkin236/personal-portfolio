import React from 'react';

interface LoadingIndicatorProps {
  isLoading: boolean;
  isOffline?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading, isOffline = false }) => {
  if (!isLoading && !isOffline) return null;

  return (
    <>
      {/* Full page overlay backdrop */}
      <div
        className={`fixed inset-0 bg-white/40 backdrop-blur-sm z-[999] transition-opacity duration-300 pointer-events-none ${
          isLoading || isOffline ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Loading Container */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] transition-all duration-300 ${
          isLoading || isOffline ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Animated Gradient Spinner */}
          <div className="relative w-16 h-16">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-black border-r-black animate-spin" />

            {/* Middle pulsing ring */}
            <div className="absolute inset-2 rounded-full border-2 border-neutral-300 animate-pulse" />

            {/* Inner gradient orb */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-black to-neutral-600 animate-pulse" />

            {/* Center dot */}
            <div className="absolute inset-5 rounded-full bg-white border-2 border-black" />
          </div>

          {/* Status Text */}
          <div className="text-center">
            {isOffline ? (
              <>
                <p className="text-sm font-semibold text-neutral-900">No Connection</p>
                <p className="text-xs text-neutral-600 mt-1">Using offline data</p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold text-neutral-900">Loading</p>
                <div className="flex gap-1 mt-2 justify-center">
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              </>
            )}
          </div>

          {/* Animated progress bar */}
          {isLoading && (
            <div className="w-32 h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-black via-neutral-600 to-transparent rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoadingIndicator;
