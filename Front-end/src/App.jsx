import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MediaBuyingProject from "./pages/MediaBuyingProject";
import BankingAppProject from "./pages/BankingAppProject";
import CorporateBrandingProject from "./pages/CorporateBrandingProject";
import AnalyticsDashboardProject from "./pages/AnalyticsDashboardProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/media-buying" element={<MediaBuyingProject />} />
      <Route path="/projects/banking-app" element={<BankingAppProject />} />
      <Route path="/projects/corporate-branding" element={<CorporateBrandingProject />} />
      <Route path="/projects/analytics-dashboard" element={<AnalyticsDashboardProject />} />
    </Routes>
  );
}

export default App;
