<template>
    <div v-if="article.comments && article.comments.length">
        <div class="text-right">
            <button class="btn btn-outline-info mb-2"
                    data-toggle="collapse" :data-target="'#comments-'+index"
                    aria-expanded="false" :aria-controls="'comments-'+index"
            >
                Afficher les commentaires ({{ article.comments.length }})
            </button>
        </div>
        <div class="collapse" :id="'comments-'+index">
            <div class="card card-body">
                <div v-for="(comment, index) in article.comments" :key="comment.title" class="">
                    <span class="font-weight-bold">{{ comment.user.username }} {{ getDate(comment.date) }}</span>
                    <p>
                        {{ comment.content }}
                    </p>
                    <hr v-if="index !== article.comments.length - 1"/>
                </div>
            </div>
        </div>
    </div>
    <p v-else class="text-right">Aucun commentaire</p>
</template>

<script>
    export default {
        name: "Commentaires",
        props: {
            article: {
                type: Object,
                default: () => {}
            },
            index: {
                type: Number,
                default: () => 0
            }
        },
        methods: {
            getDate: function (dateStr) {
                const date = new Date(dateStr);
                return 'le ' + date.toLocaleDateString() + ' à ' + date.toLocaleTimeString();
            },
        }
    }
</script>

<style scoped>

</style>