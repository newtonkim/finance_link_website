<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <Head title="Core Banking Platform" />

    <!-- Feature Hero -->
    <section class="feature-page-hero section-padding">
      <div class="container" data-aos="fade-down" data-aos-duration="1000">
        <span class="badge">Core Product</span>
        <h1>FinanceLink <span class="text-emerald">Core Banking</span> Platform</h1>
        <p class="feature-hero-subtitle">A fully integrated, cloud-native core banking engine designed to power modern SACCOs, microfinance institutions, and credit unions across Africa.</p>
      </div>
    </section>

    <!-- Feature Details -->
    <section class="section-padding">
      <div class="container grid-2">
        <div class="text-content" data-aos="fade-right" data-aos-delay="200">
          <span class="badge">Why Core Banking?</span>
          <h2>The Engine Behind Your Financial Institution</h2>
          <p>FinanceLink Core Banking Platform automates every critical process — from member onboarding and loan lifecycle management to real-time ledger reconciliation and regulatory compliance reporting.</p>
          <ul class="check-list">
            <li><i class="fas fa-check"></i> Automated Loan Origination & Disbursement</li>
            <li><i class="fas fa-check"></i> Real-time General Ledger & Trial Balance</li>
            <li><i class="fas fa-check"></i> Member Share Capital & Savings Management</li>
            <li><i class="fas fa-check"></i> Regulatory Compliance (SASRA, CBK)</li>
            <li><i class="fas fa-check"></i> Seamless M-Pesa & Bank Integration</li>
          </ul>
        </div>
        <div class="image-wrapper" data-aos="fade-left" data-aos-delay="400">
          <div class="main-image">
            <img :src="'/images/financelink-core-banking.png'" alt="FinanceLink Core Banking Platform" style="width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Key Modules -->
    <section class="section-padding bg-slate-50">
      <div class="container text-center">
        <span class="badge" data-aos="fade-up">Modules</span>
        <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Core Modules</h2>
        <div class="feature-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <i class="fas fa-users icon"></i>
            <h3>Member Management</h3>
            <p>Complete KYC, onboarding workflows, share capital tracking, and member lifecycle management in one place.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <i class="fas fa-hand-holding-dollar icon"></i>
            <h3>Loan Management</h3>
            <p>Configurable loan products, automated interest calculations, guarantor management, and disbursement workflows.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <i class="fas fa-piggy-bank icon"></i>
            <h3>Savings & Deposits</h3>
            <p>Multiple savings products with automated interest accrual, fixed deposits, and flexible withdrawal policies.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="500">
            <i class="fas fa-book icon"></i>
            <h3>General Ledger</h3>
            <p>Double-entry accounting, chart of accounts, trial balance, and automated journal entries for every transaction.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="600">
            <i class="fas fa-chart-pie icon"></i>
            <h3>Reporting & Analytics</h3>
            <p>Real-time dashboards, regulatory reports, portfolio analysis, and custom report generation.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="700">
            <i class="fas fa-shield-halved icon"></i>
            <h3>Security & Audit</h3>
            <p>Role-based access control, complete audit trails, 256-bit encryption, and multi-factor authentication.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding text-center">
      <div class="container" data-aos="zoom-in" data-aos-duration="800">
        <div class="cta-box bg-emerald-light p-8 rounded-2xl">
            <h2 class="mb-4">Ready to Modernize Your SACCO?</h2>
            <p class="mb-8 max-w-2xl mx-auto">Join forward-thinking financial institutions using FinanceLink to drive growth and efficiency.</p>
            <div class="flex-center gap-4">
                <a href="#" class="btn btn-primary">Request Demo</a>
                <a href="#" class="btn btn-outline">Contact Sales</a>
            </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
