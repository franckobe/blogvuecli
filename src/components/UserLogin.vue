<template>
    <div>
        <div v-if="isLoggedIn === false">
            <form action="" @submit.prevent.stop="login" class="bg-light p-4">
                <h3 class="text-center">Connexion</h3>
                <div class="form-group">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text"
                           v-model="user.username"
                           id="username"
                           name="username"
                           class="form-control" />
                    <div class="invalid-feedback">
                        Vous devez saisir un nom d'utilisateur !
                    </div>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           v-model="user.role"
                           name="role" type="radio"
                           id="inlineRadio1"
                           value="reader" checked>
                    <label class="form-check-label" for="inlineRadio1">Lecteur</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           v-model="user.role"
                           name="role"
                           type="radio"
                           id="inlineRadio2"
                           value="admin">
                    <label class="form-check-label" for="inlineRadio2">Administrateur</label>
                </div>
                <div class="form-group mt-2">
                    <button v-if="user.username.length > 0"
                            type="submit"
                            class="btn btn-primary btn-block">Connexion</button>
                </div>
            </form>
        </div>
        <div v-else class="bg-light p-4">
            <p>Bonjour {{ user.username }} - {{ user.role }}</p>
            <button class="btn btn-secondary" @click="logout">
                Déconnexion
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserLogin",
        data() {
            return {
                isLoggedIn: false,
                user: {
                    username: '',
                    role: 'reader'
                },
            }
        },
        methods: {
            login: function ($event) {
                const form = $event.target;
                const usernameField = form.querySelector('#username');
                if (usernameField.value !== '') {
                    this.user = {
                        username: form.querySelector('#username').value,
                        role: form.querySelector('[name="role"]:checked').value
                    };
                    this.isLoggedIn = true;
                    this.$emit('userLoggedIn',this.user);
                }
                else {
                    usernameField.classList.add('is-invalid');
                }
            },
            logout: function () {
                this.user = {
                    username: '',
                    role: 'reader'
                };
                this.isLoggedIn = false;
                this.$emit('userLoggedOut');
            }
        }
    }
</script>

<style scoped>

</style>