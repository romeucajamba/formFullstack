<script setup lang="ts">
  import { api_connector } from '@/services/api_connection';
  import { reactive } from 'vue';



defineProps<{ msg: string }>()


const data = reactive( {
  inputName: '',
  inputNickname: '',
  inputEmail: '',
  inputPassword: ''
});

async function handleSubmit() {
  try {
    const resposta = await api_connector.post('/login', {
      name: data.inputName,
      nickname: data.inputNickname,
      email: data.inputEmail,
      password: data.inputPassword
    });

    console.log(data.inputName);
    console.log(data.inputNickname)
    console.log(data.inputEmail)
    console.log(data.inputPassword)

    console.log('Resposta da API:', resposta.data)
  } catch (error) {

    console.log(`Dados não enviados ${error}`)

  }
    
  };

  

</script>

<template>
  <main>
    <h3 className="font-bold text-[3rem] text-center">Login</h3>
    <form action=""  @submit.prevent="handleSubmit" className="bg-white shadow-lg	 w-[40rem] h-[40rem] flex flex-col rounded-[8px] flex justify-items-center space-y-[2rem] pt-[6rem] pl-[5%] ml-[35%]">
      <input type="text" name="name" v-model="data.inputName" placeholder="Digite o seu nome" className="w-[25rem] h-[2.5rem] rounded-[4px] pl-2 ml-2 border-2 focus:outline-none focus:ring focus:border-blue-500"/>
      <input type="text" name="nickname" v-model="data.inputNickname" placeholder="Digite o seu último nome" className="w-[25rem] h-[2.5rem] rounded-[4px] pl-2 ml-2 border-2 focus:outline-none focus:ring focus:border-blue-500"/>
      <input type="password" name="password" v-model="data.inputPassword" placeholder="Digite a sua palavra-passe" className="w-[25rem] h-[2.5rem] rounded-[4px] pl-2 ml-2 border-2 focus:outline-none focus:ring focus:border-blue-500 "/>
      <input type="email" name="email" v-model="data.inputEmail" placeholder="Digite o seu e-mail" className="w-[25rem] h-[2.5rem] rounded-[4px] pl-2 ml-2 border-2 focus:outline-none focus:ring focus:border-blue-500"/>
      <button type="submit" className="bg-[#2D8AB8] w-[12rem] h-[3rem] rounded-[6px] text-[1rem] font-bold text-white ml-28 hover:bg-sky-700 hover:cursor">Enviar</button>
    </form>
  </main>
</template>
