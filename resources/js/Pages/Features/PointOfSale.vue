<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <Head title="Point of Sale" />

    <!-- Feature Hero -->
    <section class="feature-page-hero section-padding">
      <div class="container">
        <span class="badge">Commerce</span>
        <h1>Point of <span class="text-emerald">Sale</span></h1>
        <p class="feature-hero-subtitle">A modern, integrated POS system that connects directly to your FinanceLink account for seamless transactions, inventory management, and real-time reporting.</p>
      </div>
    </section>

    <!-- Feature Details -->
    <section class="section-padding">
      <div class="container grid-2">
        <div class="text-content">
          <span class="badge">Why FinanceLink POS?</span>
          <h2>Sell Smarter, Track Everything</h2>
          <p>FinanceLink Point of Sale system is built for SACCO-affiliated businesses, cooperatives, and small enterprises. Accept payments, manage inventory, and get real-time reports — all connected to your FinanceLink financial ecosystem.</p>
          <ul class="check-list">
            <li><i class="fas fa-check"></i> Accept M-Pesa, Card & Cash Payments</li>
            <li><i class="fas fa-check"></i> Real-time Inventory Tracking</li>
            <li><i class="fas fa-check"></i> Automated Sales Reports & Analytics</li>
            <li><i class="fas fa-check"></i> Multi-branch & Multi-user Support</li>
            <li><i class="fas fa-check"></i> Offline Mode with Auto-sync</li>
          </ul>
        </div>
        <div class="image-wrapper">
          <div class="main-image bg-slate-100">
            <i class="fas fa-cash-register text-emerald" style="font-size: 5rem;"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section-padding bg-slate-50">
      <div class="container text-center">
        <span class="badge">Capabilities</span>
        <h2 class="section-title">POS Features</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <i class="fas fa-barcode icon"></i>
            <h3>Barcode & QR Scanning</h3>
            <p>Speed up checkout with built-in barcode and QR code scanning for quick product lookup.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-boxes-stacked icon"></i>
            <h3>Inventory Management</h3>
            <p>Track stock levels, set reorder alerts, manage suppliers, and run stock valuation reports.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-receipt icon"></i>
            <h3>Smart Receipts</h3>
            <p>Digital and printed receipts with custom branding, tax breakdowns, and payment details.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-users-gear icon"></i>
            <h3>Staff Management</h3>
            <p>Assign roles, track performance, manage shifts, and monitor sales per employee.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-chart-bar icon"></i>
            <h3>Sales Analytics</h3>
            <p>Daily, weekly, and monthly sales reports with profit margins, best-sellers, and trend analysis.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-plug icon"></i>
            <h3>Integration Ready</h3>
            <p>Connects with FinanceLink Core Banking, M-Pesa, and popular accounting software.</p>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
