// src/routes.tsx

;
import { Routes, Route } from 'react-router-dom';
import AIBrandingStudioPage from '../pages/AIBrandingStudioPage'; // Adjust path if needed
import HeritagePage from '../pages/HeritagePage'; // Adjust path if needed

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/ai-page" element={<AIBrandingStudioPage />} />
      <Route path="/heritage-page" element={<HeritagePage />} />
    </Routes>
  );
};