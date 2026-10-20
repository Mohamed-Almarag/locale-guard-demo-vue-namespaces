<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { d } = useI18n()
const seats = ref(5)
const renewal = new Date(2026, 10, 1)
</script>

<template>
  <section id="billing">
    <h1>{{ $t('billing.title') }}</h1>
    <p>{{ $t('billing.plan', { plan: 'Pro' }) }}</p>
    <p>{{ $t('billing.seats', { count: seats }, seats) }}</p>
    <p>{{ $t('billing.renews', { date: d(renewal) }) }}</p>
    <h2>{{ $t('billing.card.label') }}</h2>
    <p>{{ $t('billing.card.ending', { last4: '4242' }) }}</p>
    <a href="#invoices">{{ $t('billing.invoices') }}</a>
    <button type="button">{{ $t('billing.save') }}</button>
  </section>
</template>
