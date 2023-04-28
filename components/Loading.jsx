import { useEffect, useState } from 'react';

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set isLoading para true aqui, antes de fazer a requisição
    setIsLoading(true);

    // Depois que a requisição for concluída, set isLoading para false
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <><div className="fixed inset-0 bg-gray-800 opacity-50 z-50"></div><div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24"></svg>
              </div></>
      )}
    </>
  );
};

export default LoadingOverlay;
