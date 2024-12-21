import { Suspense, lazy } from 'react';

// Dynamically import components using React.lazy
const Home = lazy(() => import('./components/Home'));


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center p-4">IFIXHUT</h1>

      {/* Use Suspense to show a fallback while the component is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
