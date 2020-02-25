class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = {};
        this.likes = {};
    }

    get likes() {
        const likes = this.likes;

        if (Object.keys(likes).length === 0) {
            return `${this.title} has 0 likes`;
        } else if (Object.keys(likes).length === 1) {
            return `${likes[this.title][1]} likes this article!`
        } else {
            return `${likes[this.title][1]} and ${likes} others like this article!`
        }
    }

    like(username) {
        if (this.likes[this.title] && this.likes[this.title].includes(username)) {
            return "You can't like the same article twice!"
        } else if (this.likes[this.title] && this.likes[this.title][0] === this.creator) {
            return "You can't like your own articles!"
        } else {

            this.likes[this.title] = [this.creator, username];
            console.log(this.likes[this.title].length - 1);

            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (this.likes[this.title] && this.likes[this.title].includes(username)) {
            this.likes[this.title].splice(this.likes[this.title].indexOf(username), 1);
            return `${username} disliked ${this.title}`
        } else {
            throw new Error('You can\'t dislike this article!')
        }
    }

    comment(username, content, id) {
        if (id === undefined || !Object.keys(this.comments).includes(id)) {
            this.comments[id] = [username, content];
            return `${username} commented on ${this.title}`
        } else if (Object.keys(this.comments).include(id)) {
            if (this.comments[id]) {
                this.comments[id].push(content)
            } else {
                this.comments[id] = [content];
            }
            console.log(this.comments)
            return `You replied successfully`
        }
    }

    toString(sortingType) {
        switch (sortingType) {
            case 'asc':
                return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${Object.keys(this.likes).length}\nComments:\n${
                    Object.keys(this.comments).map(id => {
                        const user = this.comments[id][0];
                        let x = `-- ${id}. ${user}: ${this.comments[id][1]}`;

                        if (this.comments[id]) {
                            this.comments[id].forEach(text => {
                                x += `\n-- ${+id + 0.1}. ${user}: ${text}`
                            })
                        }

                        return x;
                    }).join('\n')
                }`;
        }
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('asc'));