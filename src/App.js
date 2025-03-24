import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const ImageGeneration = lazy(() => import('./pages/ImageGeneration'));
const DocumentProcessor = lazy(() => import('./pages/DocumentProcessor'));
const VoiceAssistant = lazy(() => import('./pages/VoiceAssistant'));
const AutomationDashboard = lazy(() => import('./pages/AutomationDashboard'));

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image-ai" element={<ImageGeneration />} />
            <Route path="/document-ai" element={<DocumentProcessor />} />
            <Route path="/voice-assistant" element={<VoiceAssistant />} />
            <Route path="/automation" element={<AutomationDashboard />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
