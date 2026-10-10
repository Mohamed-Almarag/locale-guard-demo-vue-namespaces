<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import UsersTable from './components/UsersTable.vue'
import { languages } from './i18n'

const { locale } = useI18n()

watchEffect(() => {
  const language = languages.find((item) => item.code === locale.value)
  document.documentElement.lang = locale.value
  document.documentElement.dir = language?.dir ?? 'ltr'
})
</script>

<template>
  <header>
    <strong>{{ $t('common.appName') }}</strong>
    <nav>
      <a href="#users">{{ $t('common.nav.users') }}</a>
      <a href="#orders">{{ $t('common.nav.orders') }}</a>
    </nav>
    <select v-model="locale" :aria-label="$t('common.language')">
      <option v-for="item in languages" :key="item.code" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </header>
  <main>
    <UsersTable />
  </main>
</template>
