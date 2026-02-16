<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';

const activeTab = ref('institutional');

const setTab = (tab: string) => {
  activeTab.value = tab;
};

const FaqItem = defineComponent({
  props: {
    question: String
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div class="faq-item" :class="{ 'active': isOpen }">
      <div class="faq-question" @click="isOpen = !isOpen">
        <h4>{{ question }}</h4>
        <i class="fas" :class="isOpen ? 'fa-minus' : 'fa-plus'"></i>
      </div>
      <div class="faq-answer" v-show="isOpen">
        <slot></slot>
      </div>
    </div>
  `
});
</script>

<template>
  <AppLayout>
    <!-- Hero Section -->
    <section class="hero section-padding">
      <div class="container hero-grid">
        <div class="hero-content" data-aos="fade-right" data-aos-duration="1000">
          <span class="badge">Next-Gen Financial Freedom</span>
          <h1>Empowering <span class="text-emerald">SACCOs</span> & Individuals with Smart Tech.</h1>
          <p>Automate your financial operations with institutional-grade software or grow your personal wealth with 14% APY. No drama, just growth.</p>
          <div class="hero-btns">
            <a href="#contact" class="btn btn-primary">Explore Solutions <i class="fas fa-arrow-right"></i></a>
            <a href="#solutions" class="btn btn-outline">Personal Savings</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <h3>14%</h3>
              <p>Annual Return</p>
            </div>
            <div class="stat-item">
              <h3>50k+</h3>
              <p>Active Members</p>
            </div>
            <div class="stat-item">
              <h3>$10M+</h3>
              <p>Funds Managed</p>
            </div>
          </div>
        </div>
        <div class="hero-visual" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="mockup-container">
            <img src="/resources/images/hero-mobile-2.png" alt="SACCO Portfolio Mockup" class="hero-img mobile-back floating">
            <img src="/resources/images/hero-mobile-1.png" alt="SACCO Dashboard Mockup" class="hero-img mobile-front floating">
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section-padding">
      <div class="container text-center">
        <span class="badge" data-aos="fade-down">About FinanceLink</span>
        <h2 class="section-title" data-aos="fade-down" data-aos-delay="100">About Us</h2>
      </div>
      <div class="container grid-2">
        <div class="text-content">
          <h3 data-aos="fade-right" data-aos-delay="200">What is FinanceLink?</h3>
          <p data-aos="fade-up" data-aos-delay="300">FinanceLink is a comprehensive digital solution designed to help SACCOs and Microfinance Institutions deliver convenient, mobile-first financial services to their members and customers.</p>
          
          <p data-aos="fade-up" data-aos-delay="350">Through FinanceLink, users can securely:</p>
          <ul class="check-list" data-aos="fade-up" data-aos-delay="400">
            <li><i class="fas fa-check"></i> Deposit funds into their accounts</li>
            <li><i class="fas fa-check"></i> Withdraw money with ease</li>
            <li><i class="fas fa-check"></i> Make payments for various SACCO products and services</li>
            <li><i class="fas fa-check"></i> Access financial services anytime, anywhere</li>
          </ul>

          <p data-aos="fade-up" data-aos-delay="450">FinanceLink bridges the gap between financial institutions and their members, ensuring accessibility, security, and efficiency in every transaction.</p>
        </div>
        <div class="text-content" data-aos="fade-left" data-aos-delay="200">
          <h3 data-aos="fade-left" data-aos-delay="300">Why FinanceLink?</h3>
          <p data-aos="fade-up" data-aos-delay="400">FinanceLink is built to transform financial service delivery by expanding financial inclusion, enhancing accessibility, and simplifying institutional operations.</p>
          <p data-aos="fade-up" data-aos-delay="450">Our platform empowers financial institutions to operate more efficiently while giving members greater control, transparency, and flexibility over their finances.</p>
          <p data-aos="fade-up" data-aos-delay="500">By enabling fast, secure, and reliable digital transactions, FinanceLink strengthens institutional performance and delivers a seamless, modern financial experience for both SACCOs and Microfinance Institutions.</p>
        </div>
      </div>
    </section>

    <!-- Solutions Switcher -->
    <section id="solutions" class="solutions section-padding bg-slate-50">
      <div class="container text-center">
        <h2 class="section-title">Our Services</h2>
        <div class="tabs">
          <button class="tab-btn" :class="{ 'active': activeTab === 'institutional' }" @click="setTab('institutional')">For Institutions</button>
          <button class="tab-btn" :class="{ 'active': activeTab === 'individual' }" @click="setTab('individual')">For Individuals</button>
        </div>

        <div class="tab-content" :class="{ 'active': activeTab === 'institutional' }" id="institutional">
          <div class="feature-grid">
            <div class="feature-card">
              <i class="fas fa-vault icon"></i>
              <h3>Core Banking</h3>
              <p>Fully automated ledger, loan management, and real-time reporting for SACCOs.</p>
            </div>
            <div class="feature-card">
              <i class="fas fa-chart-line icon"></i>
              <h3>Risk Analysis</h3>
              <p>Advanced credit scoring and risk assessment tools to protect your capital.</p>
            </div>
            <div class="feature-card">
              <i class="fas fa-mobile-screen icon"></i>
              <h3>Member App</h3>
              <p>White-labeled mobile applications for your members to transact and save.</p>
            </div>
          </div>
        </div>

        <div class="tab-content" :class="{ 'active': activeTab === 'individual' }" id="individual">
          <div class="feature-grid">
            <div class="feature-card" data-aos="flip-left" data-aos-delay="100">
              <i class="fas fa-piggy-bank icon"></i>
              <h3>High-Yield Savings</h3>
              <p>Earn up to 14% APY on your savings with no hidden fees or "banking drama".</p>
            </div>
            <div class="feature-card" data-aos="flip-left" data-aos-delay="200">
              <i class="fas fa-bolt icon"></i>
              <h3>Instant Credit</h3>
              <p>Get instant loans based on your saving habits. Approval in under 5 minutes.</p>
            </div>
            <div class="feature-card" data-aos="flip-left" data-aos-delay="300">
              <i class="fas fa-globe icon"></i>
              <h3>Global Access</h3>
              <p>Manage your wealth from anywhere in the world with our secure digital platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing section-padding">
      <div class="container text-center">
        <span class="badge">Pricing Plans</span>
        <h2 class="section-title">Investment Options</h2>
        <div class="pricing-grid">
          <div class="pricing-card" data-aos="fade-right" data-aos-delay="100">
            <h3>Starter</h3>
            <div class="price">Free<span>/month</span></div>
            <p>Perfect for small savings groups under 10 members.</p>
            <ul class="check-list">
              <li><i class="fas fa-check"></i> Basic Ledger</li>
              <li><i class="fas fa-check"></i> Mobile Money Deposits</li>
              <li><i class="fas fa-check"></i> 1 Admin Account</li>
            </ul>
            <a href="#" class="btn btn-outline">Start Free</a>
          </div>
          <div class="pricing-card featured" data-aos="zoom-in" data-aos-delay="300">
            <div class="feat-badge">Most Popular</div>
            <h3>Digital SACCO</h3>
            <div class="price">$49<span>/month</span></div>
            <p>Comprehensive tools for growing institutions.</p>
            <ul class="check-list">
              <li><i class="fas fa-check"></i> Automated Loan Processing</li>
              <li><i class="fas fa-check"></i> 14% APY for Members</li>
              <li><i class="fas fa-check"></i> Analytics Dashboard</li>
              <li><i class="fas fa-check"></i> Priority Support</li>
            </ul>
            <a href="#" class="btn btn-primary">Go Digital</a>
          </div>
          <div class="pricing-card" data-aos="fade-left" data-aos-delay="500">
            <h3>Enterprise</h3>
            <div class="price">Custom</div>
            <p>Tailored infrastructure for large credit unions.</p>
            <ul class="check-list">
              <li><i class="fas fa-check"></i> White-labeled Member App</li>
              <li><i class="fas fa-check"></i> Custom Integrations</li>
              <li><i class="fas fa-check"></i> Dedicated Manager</li>
            </ul>
            <a href="#" class="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section id="faq" class="faq section-padding bg-slate-50">
      <div class="container container-sm">
        <div class="text-center">
          <span class="badge">Support</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-accordion">
          <FaqItem question="Is my money safe with FinanceLink?" data-aos="fade-up" data-aos-delay="100">
            <p>Yes. We use 256-bit bank-grade encryption and partner with licensed financial institutions to ensure all funds are held securely and insured where applicable.</p>
          </FaqItem>
          <FaqItem question="How do I earn the 14% annual return?" data-aos="fade-up" data-aos-delay="200">
            <p>Our high-yield savings products involve pooled investments in low-risk government securities and well-collateralized loan portfolios, passing the returns back to you.</p>
          </FaqItem>
          <FaqItem question="Can I integrate my existing SACCO data?" data-aos="fade-up" data-aos-delay="300">
            <p>Absolutely. Our onboarding team provides free data migration tools and support to move your records from spreadsheets or legacy software into FinanceLink.</p>
          </FaqItem>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section id="features" class="features section-padding">
      <div class="container grid-2">
        <div class="image-wrapper">
          <div class="floating-element glass-card">
            <i class="fas fa-check-circle text-emerald"></i>
            <span>Secure & Encrypted</span>
          </div>
          <div class="main-image bg-navy">
            <i class="fas fa-shield-halved"></i>
          </div>
        </div>
        <div class="text-content">
          <span class="badge">Why Choose Us</span>
          <h2>A Perfect Blend of Security & Innovation</h2>
          <p>We combine the reliability of traditional banking with the speed of modern fintech. Our platform is built for growth, whether you're managing a 10,000-member SACCO or just starting your saving journey.</p>
          <ul class="check-list">
            <li><i class="fas fa-check"></i> Bank-grade Security (256-bit Encryption)</li>
            <li><i class="fas fa-check"></i> 24/7 Dedicated Customer Support</li>
            <li><i class="fas fa-check"></i> Seamless Mobile Money Integration</li>
            <li><i class="fas fa-check"></i> Transparent Analytics & Reporting</li>
          </ul>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
