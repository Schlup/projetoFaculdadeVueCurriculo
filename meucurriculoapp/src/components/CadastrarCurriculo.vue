<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
        <!-- Navigation (you may want to create a separate component for this) -->
        <nav class="bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <h1 class="text-xl font-bold">MeuCurrículo</h1>
                    </div>
                    <!-- Add navigation items here if needed -->
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-grow">
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-4xl font-extrabold text-center">Cadastrar Currículo</h2>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div class="px-4 py-5 sm:p-6">
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <!-- Nome completo -->
                            <div>
                                <label for="nome" class="block text-sm font-medium text-gray-700">Nome completo</label>
                                <input v-model="form.nome" type="text" id="nome" required
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- E-mail -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Endereço de
                                    e-mail</label>
                                <input v-model="form.email" type="email" id="email" required
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- Telefone -->
                            <div>
                                <label for="telefone" class="block text-sm font-medium text-gray-700">Telefone</label>
                                <input v-model="form.telefone" type="tel" id="telefone" required
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- Endereço completo -->
                            <div>
                                <label for="endereco" class="block text-sm font-medium text-gray-700">Endereço
                                    completo</label>
                                <textarea v-model="form.endereco" id="endereco" required rows="3"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>

                            <!-- Formação acadêmica -->
                            <div>
                                <h3 class="text-lg font-medium text-gray-700 mb-2">Formação acadêmica</h3>
                                <div v-for="(formacao, index) in form.formacaoAcademica" :key="index" class="space-y-2">
                                    <input v-model="formacao.curso" type="text" :placeholder="'Curso ' + (index + 1)"
                                        required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <input v-model="formacao.instituicao" type="text"
                                        :placeholder="'Instituição ' + (index + 1)" required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <input v-model="formacao.anoConclusao" type="number"
                                        :placeholder="'Ano de conclusão ' + (index + 1)" required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>
                                <button @click.prevent="adicionarFormacao" type="button"
                                    class="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Adicionar formação
                                </button>
                            </div>

                            <!-- Experiência profissional -->
                            <div>
                                <h3 class="text-lg font-medium text-gray-700 mb-2">Experiência profissional</h3>
                                <div v-for="(experiencia, index) in form.experienciaProfissional" :key="index"
                                    class="space-y-2">
                                    <input v-model="experiencia.empresa" type="text"
                                        :placeholder="'Empresa ' + (index + 1)" required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <input v-model="experiencia.cargo" type="text" :placeholder="'Cargo ' + (index + 1)"
                                        required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <input v-model="experiencia.periodo" type="text"
                                        :placeholder="'Período ' + (index + 1)" required
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>
                                <button @click.prevent="adicionarExperiencia" type="button"
                                    class="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Adicionar experiência
                                </button>
                            </div>

                            <!-- Habilidades -->
                            <div>
                                <label for="habilidades"
                                    class="block text-sm font-medium text-gray-700">Habilidades</label>
                                <textarea v-model="form.habilidades" id="habilidades" required rows="3"
                                    placeholder="Liste suas habilidades separadas por vírgula"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>

                            <!-- Idiomas -->
                            <div>
                                <label for="idiomas" class="block text-sm font-medium text-gray-700">Idiomas</label>
                                <textarea v-model="form.idiomas" id="idiomas" required rows="2"
                                    placeholder="Liste seus idiomas e níveis"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>

                            <!-- Objetivo profissional -->
                            <div>
                                <label for="objetivo" class="block text-sm font-medium text-gray-700">Objetivo
                                    profissional</label>
                                <textarea v-model="form.objetivo" id="objetivo" required rows="3"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>

                            <div>
                                <button type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Cadastrar Currículo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer (you may want to create a separate component for this) -->
        <footer class="bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <p class="text-center">&copy; 2024 MeuCurrículo. Todos os direitos reservados.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    formacaoAcademica: [{ curso: '', instituicao: '', anoConclusao: '' }],
    experienciaProfissional: [{ empresa: '', cargo: '', periodo: '' }],
    habilidades: '',
    idiomas: '',
    objetivo: ''
})

const adicionarFormacao = () => {
    form.value.formacaoAcademica.push({ curso: '', instituicao: '', anoConclusao: '' })
}

const adicionarExperiencia = () => {
    form.value.experienciaProfissional.push({ empresa: '', cargo: '', periodo: '' })
}

const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Formulário enviado:', form.value)
    // Redirecionar para a página inicial após o envio bem-sucedido
    router.push('/')
}
</script>