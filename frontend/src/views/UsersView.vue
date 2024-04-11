<script>
import { api_connector } from '@/services/api_connection';

export default {
  data() {
    return {
      users: []
    };
  },
     mounted() {
    
        api_connector.get('/users').then(response => {
        // Atualiza o array de usuários com os dados recebidos da API
        this.users = response.data;
      }).catch(error => {
        console.error('Erro ao buscar os usuários:', error);
      });
  }
};
</script>

<template>
    <div>
      <h1 className="font-bold text-[3rem] text-center">usuarios</h1>
      <table>
        <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Nickname</th>
                <th>Email</th>
            </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.nickname }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>