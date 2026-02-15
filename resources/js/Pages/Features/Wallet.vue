<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <Head title="FinanceLink Wallet" />

    <!-- Feature Hero -->
    <section class="feature-page-hero section-padding">
      <div class="container">
        <span class="badge">Mobile Money</span>
        <h1>FinanceLink <span class="text-emerald">Wallet</span></h1>
        <p class="feature-hero-subtitle">Your money, your way. A digital wallet that lets you save, send, receive, and invest — all from your phone with zero hassle.</p>
      </div>
    </section>

    <!-- Feature Details -->
    <section class="section-padding">
      <div class="container grid-2">
        <div class="text-content">
          <span class="badge">Why FinanceLink Wallet?</span>
          <h2>Banking Without Boundaries</h2>
          <p>FinanceLink Wallet is a mobile-first digital wallet that gives individuals full control over their finances. Send money instantly, earn interest on idle balances, access microloans, and track every shilling — no bank account required.</p>
          <ul class="check-list">
            <li><i class="fas fa-check"></i> Instant Peer-to-Peer Transfers</li>
            <li><i class="fas fa-check"></i> Earn Up to 14% APY on Savings</li>
            <li><i class="fas fa-check"></i> Access Instant Microloans</li>
            <li><i class="fas fa-check"></i> M-Pesa & Bank Top-up</li>
            <li><i class="fas fa-check"></i> Bill Payments & Airtime Purchase</li>
          </ul>
        </div>
        <div class="image-wrapper">
          <div class="main-image bg-slate-100">
            <i class="fas fa-wallet text-emerald" style="font-size: 5rem;"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Wallet Features -->
    <section class="section-padding bg-slate-50">
      <div class="container text-center">
        <span class="badge">Features</span>
        <h2 class="section-title">Wallet Capabilities</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <i class="fas fa-paper-plane icon"></i>
            <h3>Instant Transfers</h3>
            <p>Send and receive money instantly between FinanceLink wallets, M-Pesa, and bank accounts.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-piggy-bank icon"></i>
            <h3>Smart Savings</h3>
            <p>Set savings goals, automate deposits, and watch your money grow with competitive interest rates.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-bolt icon"></i>
            <h3>Instant Loans</h3>
            <p>Access microloans based on your saving history. Approval in under 5 minutes, directly to your wallet.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-file-invoice icon"></i>
            <h3>Bill Payments</h3>
            <p>Pay utilities, school fees, and subscriptions directly from your wallet with one-tap convenience.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-qrcode icon"></i>
            <h3>QR Code Payments</h3>
            <p>Pay at merchants by scanning QR codes — fast, contactless, and secure.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-lock icon"></i>
            <h3>Biometric Security</h3>
            <p>Fingerprint and face ID authentication keeps your wallet secure at all times.</p>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
