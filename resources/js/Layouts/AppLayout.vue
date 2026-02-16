<script setup lang="ts">
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <div class="app-container">
    <!-- Header -->
    <header class="header">
      <nav class="container nav">
        <Link href="/" class="logo">
          <i class="fas fa-shield-halved text-emerald"></i>
          <span>Finance<span class="text-emerald">Link</span></span>
        </Link>

        <ul class="nav-links" :class="{ 'active': isMobileMenuOpen }">
          <li><Link href="/" class="nav-link">Home</Link></li>
          <li><a href="/#about" class="nav-link">About</a></li>
          <li class="dropdown">
            <a href="#" class="nav-link">Features <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-menu">
              <li><Link href="/features/core-banking">FinanceLink Core Banking Platform</Link></li>
              <li><Link href="/features/point-of-sale">Point of Sale</Link></li>
              <li><Link href="/features/wallet">FinanceLink Wallet</Link></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/#solutions" class="nav-link">Services <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="/#solutions">Institutional Banking</a></li>
              <li><a href="/#solutions">Personal Savings</a></li>
              <li><a href="/#solutions">Instant Loans</a></li>
            </ul>
          </li>
          <li><a href="/#pricing" class="nav-link">Pricing</a></li>
          <li><a href="/#faq" class="nav-link">FAQs</a></li>
          <li><a href="#contact" class="btn btn-primary">Request Demo</a></li>
        </ul>

        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <!-- CTA Section -->
    <section id="contact" class="cta section-padding bg-navy text-center">
      <div class="container container-sm">
        <h2>Ready to redefine your financial future?</h2>
        <p>Join thousands of members and institutions already growing with FinanceLink.</p>
        <div class="cta-btns">
          <Link href="/" class="btn btn-primary">Get Started Now</Link>
          <a href="#" class="btn btn-outline" style="border-color: white; color: white;">Contact Sales</a>
        </div>
      </div>
    </section>

    <footer class="footer bg-navy">
      <div class="container footer-grid">
        <div class="footer-info">
          <Link href="/" class="logo">
            <i class="fas fa-shield-halved text-emerald"></i>
            <span>Finance<span class="text-emerald">Link</span></span>
          </Link>
          <p>The leading financial technology partner for modern SACCOs and ambitious individuals in Africa.</p>
        </div>
        <div class="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li><Link href="/features/core-banking">Core Banking</Link></li>
            <li><Link href="/features/point-of-sale">Point of Sale</Link></li>
            <li><Link href="/features/wallet">FinanceLink Wallet</Link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><a href="#"><i class="fas fa-envelope"></i> hello@financelink.com</a></li>
            <li><a href="#"><i class="fas fa-phone"></i> +254 700 000 000</a></li>
            <li><a href="#"><i class="fas fa-location-dot"></i> Nairobi, Kenya</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; 2026 FinanceLink Technologies. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
