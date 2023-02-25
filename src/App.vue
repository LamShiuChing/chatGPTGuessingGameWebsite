<template>
  <v-app :style="{ fontFamily: 'Montserrat' }">
  <v-container class="d-flex align-center justify-center" >
    <v-card>
      <v-card-title class="text-center pa-4">Guess the Number</v-card-title>
      <v-card-text>
        <p>Guess a number between 1 and 100:</p>
        <v-form @submit.prevent="handleGuess">
          <v-text-field type="number" v-model="guess" required></v-text-field>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
        <v-alert :value="message" color="primary">{{ message }}</v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</v-app>
</template>


<script>
// import { defineComponent } from 'vue';
// import { VCard, VCardTitle, VCardText,VAlert,VForm,VContainer } from 'vuetify/components';

export default {
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 100) + 1,
      guess: null,
      guesses: 0,
      message: ''
    };
  },
  methods: {
    handleGuess() {
      const guessNumber = parseInt(this.guess);
      if (guessNumber === this.randomNumber) {
        this.message = `GG! You guessed the number in ${this.guesses} tries.`;
      } else if (guessNumber > this.randomNumber) {
        this.message = `Your guess is too high. You have ${10 - this.guesses} guesses left.`;
      } else {
        this.message = `Your guess is too low. You have ${10 - this.guesses} guesses left.`;
      }
      this.guesses++;
      this.guess = null;
      if (this.guesses === 10 && guessNumber !== this.randomNumber) {
        this.message = `The bomb exploded and you died.Boom! The number was ${this.randomNumber}.`;
      }
    }
  }
};
</script>

<style>
  .v-alert {
    margin-top: 10px;
  }
</style>


