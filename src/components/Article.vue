<template>

    <article class="list-group-item">
        <div v-if="editEnabled" class="float-right">
            <div class="btn-group btn-group-sm">
                <button class="btn btn-info" @click="beginEditing" v-if="!inEdition">Éditer</button>
                <button class="btn btn-outline-success" @click="stopEditing(index)" v-if="inEdition">Valider</button>
                <button class="btn btn-outline-warning" @click="abortEditing" v-if="inEdition && article.content !== initialContent">Annuler</button>
                <button class="btn btn-danger" @click="deleteArticle(index)">Supprimer</button>
            </div>
        </div>
        <h3>{{ article.title }}</h3>
        <blockquote class="blockquote">
            <form action="" v-if="inEdition">
                <div class="form-group">
                    <label :for="'article-'+index"></label>
                    <textarea name="" 
                              :id="'article-'+index"
                              cols="30"
                              rows="10"
                              class="form-control"
                              v-model="article.content"></textarea>
                </div>
            </form>
            <p  v-else
                :class="options.fullPostInList ? '' : 'cuttable cut'"
                @click="toggleArticle">
                {{ article.content }}
            </p>
            <footer class="blockquote-footer">
                Par {{ article.author.username + ' - ' + getDate(article.date) }}
            </footer>
        </blockquote>
        <Commentaires
                v-if="options.commentsEnabled"
                :article="article"
                :index="index"
        />
    </article>

</template>

<script>
    import Commentaires from "./Commentaires";

    export default {
        name: "Article",
        components: {
            Commentaires,
        },
        props: {
            article: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                default: () => 0
            },
            editEnabled: {
                type: Boolean,
                default: () => false
            },
            options: {
                type: Object
            },
        },
        data() {
            return {
                inEdition: false,
                initialContent: this.article.content
            }
        },
        methods: {
            getDate: function (dateStr) {
                const date = new Date(dateStr);
                return 'le ' + date.toLocaleDateString() + ' à ' + date.toLocaleTimeString();
            },
            deleteArticle: function (index) {
                this.$emit('articleDeleted',index);
            },
            toggleArticle: function ($event) {
                const content = $event.target;
                if (content.classList.contains('cuttable')) {
                    if (content.classList.contains('cut')) content.classList.remove('cut');
                    else content.classList.add('cut')
                }
            },
            beginEditing: function () {
                this.inEdition = true
            },
            stopEditing: function (index) {
                this.inEdition = false;
                if (this.article.content !== this.initialContent) {
                    this.$emit('articleEdited',index);
                    this.initialContent = this.article.content;
                }
            },
            abortEditing: function () {
                this.article.content = this.initialContent;
                this.stopEditing();
            },
        }
    }
</script>

<style scoped>
    .blockquote {
        border-left: solid 4px #439cbe;
        padding-left: 20px;
    }
    .blockquote p {
        text-align: justify;
    }
    h3 {
        color: #439cbe;
    }
    p.cuttable.cut {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inherit;
        cursor: pointer;
    }
</style>