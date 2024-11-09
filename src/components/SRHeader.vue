<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from 'primevue';
const router = useRouter();
function navigateToHome() {
    router.push('/home');
}
function navigateToOverMe() {
    router.push('/overMe');
}
function navigateToCoachingAndTherapy() {
    router.push('/coachingAndTherapy');
}
function navigateToPrices() {
    router.push('/prices');
}
</script>



<template>
    <div class="Header-Main-frame">
        <div class="Header-Headline">
            <div class="Header-Headline-Input">Stephanie Rubel</div>
            <div class="Header-second-Headline-Input">Heilpraktikerin Psychotherapie</div>
        </div>
            <div class="Header-router-line">
                <div class="router-home" @click="navigateToHome"><Button label="Start Seite" variant="text" /></div>
                <div class="router-over-me" @click="navigateToOverMe"><Button label="Über mich" severity="secondary" variant="text" /></div>
                <div class="router-Coaching-and-Therapy" @click="navigateToCoachingAndTherapy"><Button label="Coaching und Therapie" severity="success" variant="text" /></div>
                <div class="router-prices" @click="navigateToPrices"><Button label="Preis" severity="info" variant="text" /></div>
            </div>
    </div>
</template>

<style scoped>

.router-prices{
    display: flex;
    justify-content:center;
    height: 35px;
    width: 170px;
    font-size: 24px;
    border-bottom: 2px solid black;
}
.router-Coaching-and-Therapy{
    display: flex;
    justify-content:center;
    height:35px;
    width: 170px;
    font-size: 24px;
    border-bottom: 2px solid black;
}
.router-over-me{
    display: flex;
    justify-content:center;
    height: 35px;
    width: 170px;
    font-size: 24px;
    border-bottom: 2px solid black;
}
.router-home{
    display: flex;
    justify-content:center;
    margin-left: 400px;
    height: 35px;
    width: 170px;
    font-size: 24px;
    border-bottom: 2px solid black;
}
.Header-router-line {
    display: flex;
    flex-direction: row;
    gap: 8rem;
    height: 50px;
    width: 100%;
}
.Header-Headline-Input{
    margin-top: 20px;
    margin-left: 280px;
    font-size: 60px;
    font-family:'Parisienne', cursive;
}
.Header-second-Headline-Input {
    margin-top: 5px;
    margin-left: 250px;
    font-size: 37px;
    font-family:'Parisienne', cursive;
}
.Header-Headline{
    display: flex;
    flex-direction: column;
    margin-left: 450px;
    width: 900px;
    height: 100px;
    
}
.Header-Main-frame{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 220px;
    width: 1879px;
    border-bottom: 2px solid black;
    background-color: rgba(211, 144, 81, 0.397); 
  
}
</style>