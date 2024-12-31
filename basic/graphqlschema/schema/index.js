const path = require('path');
const fs = require('fs');
const {buildSchema} = require('graphql');

const comments = require('../data');

const GRAPHQL_DIR = path.resolve(__dirname, '../graphql/comments.graphql');

const schema = buildSchema(fs.readFileSync(GRAPHQL_DIR, 'utf-8'));

schema.getQueryType().getFields().comments.resolve = () => {
    return Object.values(comments);
};

schema.getMutationType().getFields().praise.resolve = (source, args) => {
    const id = args.id;
    const comment = comments[id];
    return ++comment.praiseNum;
};

module.exports = schema;
