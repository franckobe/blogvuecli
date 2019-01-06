<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">

            <div class="btn-group mb-4" v-if="categories.length > 0">
                <button :class="'btn btn-' + getCategoryState('')"
                        @click="selectCategory('')"
                >
                    Tous
                </button>
                <button v-for="category in categories" :key="category"
                        :class="'btn btn-' + getCategoryState(category)"
                        @click="selectCategory(category)"
                >
                    {{ category }}
                </button>
            </div>

            <div v-if="user && user.role === 'admin'" class="mb-4">
                <button class="btn btn-outline-secondary" data-toggle="modal" data-target="#newArticleModal">
                    Ajouter un article
                </button>
                <div class="modal" tabindex="-1" role="dialog" id="newArticleModal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Nouvel article</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form @submit.prevent.stop="addNewArticle">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="newArticleTitle">Titre</label>
                                        <input type="text" class="form-control" id="newArticleTitle" />
                                    </div>
                                    <div class="form-group">
                                        <label for="newArticleCategory">Catégorie</label>
                                        <select class="form-control" id="newArticleCategory" @change="checkNewCategory">
                                            <option value="" disabled selected>-- Catégorie --</option>
                                            <option :value="category" v-for="category in categories" :key="category">
                                                {{ category }}
                                            </option>
                                            <option value="new">Nouvelle catégorie</option>
                                        </select>
                                    </div>
                                    <div class="form-group" :class="showNewCategory === true ? '' : 'hidden'">
                                        <label for="newArticleNewCategory">Nouvelle catégorie</label>
                                        <input type="text" class="form-control" id="newArticleNewCategory" />
                                    </div>
                                    <div class="form-group">
                                        <label for="newArticleContent">Contenu</label>
                                        <textarea class="form-control" id="newArticleContent"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                                    <button type="submit" class="btn btn-info">Publier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-group">

                <div v-if="articles.length > 0">

                    <Article
                            v-for="(article,index) in filteredArticles"
                            :key="article.title"
                            :article="article"
                            :index="index"
                            :editEnabled="user !== null && user.role === 'admin' && options.editionEnabled"
                            :options="options"
                            :class="options.fullPostInList ? '' : 'cut'"
                            @articleDeleted="deleteArticle"
                            @articleEdited="editArticle"
                    />

                </div>
                <div v-else>
                    <h3>Il n'y a aucun article !</h3>
                </div>

            </div>
        </div>
        <UserLogin class="col-md-4 col-sm-12"
              @userLoggedIn="onLogin"
              @userLoggedOut="onLogout"
        />
    </div>
</template>

<script>
    import UserLogin from "./UserLogin";
    import Article from "./Article";

    export default {
        name: "Articles",
        components: {
            UserLogin,
            Article,
        },
        props: {
            articles: {
                type: Array,
                default: () => []
            },
            options: {
                type: Object
            },
        },
        data() {
            return {
                showNewCategory: false,
                categories: [],
                filteredArticles: this.articles,
                selectedCategory: '',
                user: null
            }
        },
        mounted() {
            this.setCategories();
        },
        methods: {
            setCategories: function() {
                let categories = [];
                this.articles.forEach(function (article) {
                    if ( categories.indexOf(article.category) === -1 ) categories.push(article.category);
                });
                this.categories = categories.sort();
            },
            getCategoryState: function (category) {
                if ( this.selectedCategory === category ) return 'info';
                return 'light';
            },
            selectCategory: function (category) {
                this.selectedCategory = category;
                this.filterArticlesFromCategory(category);
            },
            filterArticlesFromCategory: function (category) {
                if ( category !== '' ) {
                    this.filteredArticles = this.articles.filter(function (article) {
                        return article.category === category;
                    });
                }
                else this.filteredArticles = this.articles;
            },
            checkNewCategory: function ($event) {
                const category = $event.target.value;
                this.showNewCategory = category === 'new';
            },
            addNewArticle: function ($event) {
                const title = document.getElementById('newArticleTitle');
                const content = document.getElementById('newArticleContent');
                let category = document.getElementById('newArticleCategory');
                if ( category.value === 'new' ) category = document.getElementById('newArticleNewCategory');
                if ( title.value.trim() !== '' && content.value.trim() !== '' && category.value.trim() !== '' ) {
                    const newArticle = {
                        title: title.value,
                        content: content.value,
                        author: {
                            username: this.user.username
                        },
                        date: Date.now(),
                        category: category.value,
                        comments: [],
                    };
                    this.articles.push(newArticle);
                    this.setCategories();
                    $('#newArticleModal').modal('hide');
                    this.$emit('newArticle');
                    $event.target.reset();
                }
            },
            deleteArticle: function (index) {
                this.articles.splice(index,1);
                this.setCategories();
                this.$emit('articleDeleted',index);
            },
            editArticle: function (index) {
                this.$emit('articleEdited',index);
            },
            onLogin: function (user) {
                this.user = user;
                if (this.user.role === 'admin') {
                    this.articles.forEach(function (article) {
                        article.inEdition = false;
                    });
                }
            },
            onLogout: function () {
                this.user = null;
            },
        }
    }
</script>

<style scoped>

    .form-group.hidden {
        display: none;
    }

</style>