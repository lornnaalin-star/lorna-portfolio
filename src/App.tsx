import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundGlow from "@/components/BackgroundGlow";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollManager from "@/lib/ScrollManager";
import Index from "@/pages/Index";
import WritingArchive from "@/pages/WritingArchive";
import Post from "@/pages/Post";
import NotFound from "@/pages/NotFound";

// ✏️ Pages. Add a new page by creating it in src/pages and adding a <Route>.
export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="relative min-h-screen overflow-x-hidden">
        <BackgroundGlow />
        <Nav />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/writing" element={<WritingArchive />} />
            <Route path="/writing/:slug" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
