<template>
    <div class="login-container">
        <div class="form-container">
            <LoginForm></LoginForm>
        </div>
        <div class="bg-splitter"></div>
    </div>
</template>

<script setup lang="ts">
import LoginForm  from '@/components/LoginForm.vue'
</script>

<style scoped>

h1 {
    font-size: 2.5em;
}

.login-container {
    display: flex;
    height: 100vh;
    background-color: #f5f8fd;
}

.form-container {
    width: 65vw;
    height: 100%;
    position: relative;
}

.bg-splitter {
    background-color: #dce6ff;
    height: 100%;
    width: 35vw;
    position: absolute;
    right: 0;
}

p {
    font-family: 'Inter', sans-serif;
}

</style>