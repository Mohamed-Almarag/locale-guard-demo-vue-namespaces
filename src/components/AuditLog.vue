<script setup lang="ts">
const entries = [
  { id: 1, user: 'Sara Ali', field: 'role', time: '5 min' },
  { id: 2, user: 'Tom Weber', field: 'email', time: '2 h' }
]
</script>

<template>
  <section id="audit">
    <h1>{{ $t('audit.title') }}</h1>
    <p v-if="entries.length === 0">{{ $t('audit.empty', { days: 30 }) }}</p>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        {{ $t('audit.entry', { user: entry.user, field: entry.field }) }}
        <small>{{ $t('audit.when', { time: entry.time }) }}</small>
        <button type="button">{{ $t('audit.filter', { user: entry.user }) }}</button>
      </li>
    </ul>
  </section>
</template>
