function solve(command) {
    let upVotes = this.upvotes;
    let downVotes = this.downvotes;

    const totalVotes = upVotes + downVotes;
    const balance = upVotes - downVotes;

    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else if (command === 'score') {
        if (totalVotes > 50) {
            const maxVote = Math.max(upVotes, downVotes);
            const reportedScore = Math.ceil(maxVote * 0.25);

            upVotes += reportedScore;
            downVotes += reportedScore;
        }

        let rating;
        if (totalVotes < 10) {
            rating = 'new';
        } else if (this.upvotes > totalVotes * 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        return [upVotes, downVotes, balance, rating];
    }
}
