<template>
  <div id="app">
    <div v-if="loaded === true">

      <header class="text-center">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>{{ blogApp.title }}</h1>
        <p>{{ blogApp.description }}</p>
      </header>

      <button type="button" class="btn btn-light" id="btn-params" data-toggle="modal" data-target="#paramsModal">
        ⌘
      </button>

      <div class="modal" tabindex="-1" role="dialog" id="paramsModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Parametres</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent.stop="addNewArticle">
              <div class="modal-body">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="options.commentsEnabled">
                  <label class="custom-control-label" for="customSwitch1">Commentaires</label>
                </div>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch2" v-model="options.fullPostInList">
                  <label class="custom-control-label" for="customSwitch2">Articles en entier</label>
                </div>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch3" v-model="options.editionEnabled">
                  <label class="custom-control-label" for="customSwitch3">Modification</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Articles
              :articles="blogApp.articles"
              :options="options"
              @articleDeleted="deleteArticle"
              @articleEdited="editArticle"
              @newArticle="newArticle"
      />

    </div>
  </div>
</template>

<script>
    import Articles from "./components/Articles";
    import Data from "./data";

    export default {
        name: 'app',
        components: {
            Articles,

        },
        data() {
            return {
                blogApp: {},
                options: {
                    commentsEnabled: true,
                    fullPostInList: true,
                    editionEnabled: true,
                },
                loaded: false,
            }
        },
        mounted() {
            this.loadBlog();
        },
        methods: {
            loadBlog: function () {
                /*
                axios.get('/data.json')
                    .then(response => {
                        this.blogApp = response.data;
                        this.loaded = true;
                    })
                    .catch(e => {
                        this.blogApp = {
                            title: 'Erreur',
                            description: e.message,
                            articles: [],
                        };
                        this.loaded = true;
                    });
                    */
                this.blogApp = Data.blogApp;
                this.loaded = true;
            },
            deleteArticle: function (index) {
                // TODO Implement webservice call and if success
                // const article = this.blogApp.articles[index];
                alert('Article supprimé à l\'index ' + index);
            },
            editArticle: function (index) {
                // TODO Implement webservice call and if success
                // const article = this.blogApp.articles[index];
                alert('Article édité à l\'index ' + index);
            },
            newArticle: function () {
                // TODO Implement webservice call and if success
                alert('Nouvel article ajouté !');
            }
        },
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;
}
.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: .5rem;
}
.custom-switch .custom-control-label::after {
  top: calc(.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: .5rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
  transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
}

.custom-control-label::after {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background-color: #fff;
  -webkit-transform: translateX(.75rem);
  transform: translateX(.75rem);
}

#btn-params {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
}
</style>
