<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Sara Ali', email: 'sara@example.com', role: 'admin', active: true },
  { id: 2, name: 'Tom Weber', email: 'tom@example.com', role: 'editor', active: true },
  { id: 3, name: 'Inès Martin', email: 'ines@example.com', role: 'viewer', active: false }
])
</script>

<template>
  <section id="users">
    <h1>{{ $t('users.title') }}</h1>
    <p>{{ $t('users.count', { count: users.length }, users.length) }}</p>
    <table>
      <thead>
        <tr>
          <th>{{ $t('users.columns.name') }}</th>
          <th>{{ $t('users.columns.email') }}</th>
          <th>{{ $t('users.columns.role') }}</th>
          <th>{{ $t('users.columns.status') }}</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ $t(`users.roles.${user.role}`) }}</td>
          <td>{{ user.active ? $t('users.active') : $t('users.disabled') }}</td>
          <td>
            <button type="button">{{ $t('common.actions.edit') }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: start;
}

tbody tr:hover {
  background: #f9fafb;
}
</style>
