export default class Data {
    static blogApp = {
        title: "Blog super intéressant",
        description: "Ceci est mon blog super bien !",
        articles: [
            {
                title: "Article n°1",
                content: "Sed augue ex, hendrerit nec erat at, pulvinar hendrerit ex. Phasellus ultricies enim in felis porta pretium. Nunc eu velit blandit, iaculis magna non, ultrices ex. Quisque commodo lacus mauris, eu vestibulum mauris convallis facilisis. Proin euismod enim felis, dignissim iaculis elit sollicitudin eu. Cras a egestas risus. Nam tincidunt fringilla congue. Proin elit leo, porttitor eget bibendum ac, sodales et neque. Duis in enim convallis, aliquam sem ac, fermentum odio. Sed vulputate nulla id est scelerisque, ut tristique mauris suscipit.",
                date: "2018-12-06 09:00:00",
                author: {
                    username: "Jean Paul",
                    role: "author"
                },
                category: "Categorie 1",
                comments: [
                    {
                        content: "Mon premier commentaire",
                        date: "2018-12-06 10:00:00",
                        user: {
                            username: "Jean-mich"
                        }
                    },
                    {
                        content: "Mon deuxième commentaire",
                        date: "2018-12-06 11:00:00",
                        user: {
                            username: "Gégé"
                        }
                    }
                ]
            },
            {
                title: "Article n°2",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed consectetur mauris, viverra consequat arcu. Aenean venenatis nulla ac nisi bibendum, aliquet tempus risus ullamcorper. Pellentesque condimentum rhoncus ligula vitae eleifend. Sed a ex efficitur, rutrum mi et, condimentum velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Suspendisse eros dolor, efficitur eget elementum eu, pretium vitae sapien. Nam suscipit ultricies quam, sed ornare nunc sollicitudin et. Maecenas pretium purus nunc, vulputate lacinia ante convallis sit amet. Cras ante augue, aliquam at augue et, fermentum fringilla turpis. Vivamus quis ligula nisi. Nulla finibus vestibulum justo. Cras a quam vel arcu imperdiet finibus maximus non purus.",
                date: "2018-12-06 12:00:00",
                author: {
                    username: "Jean Durant",
                    role: "author"
                },
                category: "Categorie 2",
                comments: [
                    {
                        content: "Mon premier commentaire",
                        date: "2018-12-06 10:00:00",
                        user: {
                            username: "Paulo"
                        }
                    },
                    {
                        content: "Mon deuxième commentaire",
                        date: "2018-12-06 11:00:00",
                        user: {
                            username: "Nono"
                        }
                    }
                ]
            },
            {
                title: "Article n°3",
                content: "Donec neque massa, imperdiet nec porta nec, venenatis ac dolor. Maecenas lobortis dolor ligula, at efficitur enim lobortis eu. Nam est lectus, aliquet ut molestie eget, scelerisque vitae mauris. Vivamus eleifend risus in enim consequat vestibulum. Sed aliquam justo sed purus interdum, vel faucibus diam dictum. Vestibulum sapien ex, mollis ac lobortis vitae, placerat eget nisi. Etiam condimentum, sem eu tincidunt blandit, magna mi facilisis augue, in bibendum leo est ac sem. Suspendisse eget ante massa. Vestibulum vel ex at ante pharetra mollis. Donec ultricies fringilla arcu, vitae feugiat lectus volutpat id. Nullam bibendum, arcu ut tincidunt congue, nunc augue lobortis enim, ac semper nisi ligula non ipsum. Vestibulum suscipit et ipsum eu molestie. Suspendisse potenti.",
                date: "2018-12-16 09:10:00",
                author: {
                    username: "Jean Dupond",
                    role: "author"
                },
                category: "Categorie 1",
                comments: []
            }
        ]
    };
}