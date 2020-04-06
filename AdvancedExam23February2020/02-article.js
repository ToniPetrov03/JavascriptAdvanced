class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        const numLikes = this._likes.length;

        switch (numLikes) {
            case 0: return `${this.title} has 0 likes`;
            case 1: return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${numLikes - 1} others like this article!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        }

        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        const comment = this.comments.find(x => x.id === id);

        if (!comment) {
            this.comments.push({
                id: this.comments.length + 1,
                username,
                content,
                replies: []
            });

            return `${username} commented on ${this.title}`
        }

        comment.replies.push({
            id: id + `.${comment.replies.length + 1}`,
            username,
            content
        });

        return 'You replied successfully';
    }

    toString(sortingType) {
        switch (sortingType) {
            case 'asc': this.comments.sort((a, b) => a.id - b.id); break;
            case 'desc': this.comments.sort((a, b) => b.id - a.id); break;
            case 'username': this.comments.sort((a, b) => a.username.localeCompare(b.username)); break;
        }

        return this.comments.reduce((info, comm) => {
            info += `\n-- ${comm.id}. ${comm.username}: ${comm.content}`;

            if (comm.replies.length) {
                switch (sortingType) {
                    case 'asc': comm.replies.sort((a, b) => a.id - b.id); break;
                    case 'desc': comm.replies.sort((a, b) => b.id - a.id); break;
                    case 'username': comm.replies.sort((a, b) => a.username.localeCompare(b.username)); break;
                }

                info += comm.replies.reduce((repInfo, reply) => repInfo + `\n--- ${reply.id}. ${reply.username}: ${reply.content}`, '')
            }

            return info;
        }, `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`)
    }
}
//
// let art = new Article("My Article", "Anny");
// console.log(art.like('a'))
// console.log(art.dislike('a'))
// console.log(art.likes)
// console.log(art.toString('desc'))
// // art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
