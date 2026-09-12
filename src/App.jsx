import React, { useState } from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useActiveSection } from './hooks/useActiveSection';
import { sectionsConfig } from './data/navigation';

import { Header } from './components/Header';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { AudienceSection } from './components/AudienceSection';
import { ProblemSection } from './components/ProblemSection';
import { OutputSection } from './components/OutputSection';
import { PricingExplorer } from './components/PricingExplorer';
import { ProcessSection } from './components/ProcessSection';
import { CaseSection } from './components/CaseSection';
import { LimitationSection } from './components/LimitationSection';
import { FAQSection } from './components/FAQSection';
import { LeadForm } from './components/LeadForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  // Always scroll to top upon page reload
  useScrollToTop();

  const sectionIds = sectionsConfig.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds, 0.35);

  const [selectedRole, setSelectedRole] = useState('senior-developer');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-root">
      {/* Background Cyber Matrix Grid */}
      <div className="bg-grid-overlay" aria-hidden="true" />

      {/* S01: Sticky Header */}
      <Header onNavigate={scrollToSection} />

      <main>
        {/* S02: Hero */}
        <HeroSection onNavigate={scrollToSection} />

        {/* S03: Đối Tượng Phù Hợp */}
        <AudienceSection />

        {/* S04: Vấn Đề / Thực Trạng */}
        <ProblemSection />

        {/* S05: Đầu Ra & Quy Chuẩn 1 Giờ */}
        <OutputSection />

        {/* S06: Bảng Giá (Role-based Pricing Explorer) */}
        <PricingExplorer
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
          onNavigate={scrollToSection}
        />

        {/* S07: Quy Trình 5 Bước */}
        <ProcessSection />

        {/* S08: Case / Mẫu (Technical Snapshot) */}
        <CaseSection />

        {/* S09: Giới Hạn & Minh Bạch (Transparent Pricing) */}
        <LimitationSection />

        {/* S10: FAQ Accordion */}
        <FAQSection />

        {/* S11: Form Nhận Yêu Cầu Lead */}
        <LeadForm
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
        />

        {/* S12: CTA Kêu Gọi Cuối */}
        <FinalCTA onNavigate={scrollToSection} />
      </main>

      {/* S13: Footer */}
      <Footer />

      {/* Floating Quick Action Contacts (Zalo, Hotline, Scroll-to-top) */}
      <FloatingActions />
    </div>
  );
}

export default App;
