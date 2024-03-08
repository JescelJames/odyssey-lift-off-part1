const gql = require('graphql-tag');

const typeDefs = gql`

  " A track is a group of modules that teaches specific topic."
  
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String

    "the track's approximate length, in minutes"
    length: Int
    
    "the number of modules this track contains"
    modulesCount: Int

  }

  "Author of complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String

  }

  type Query {
    tracksForHome: [Track!]!

  }
`;

module.exports = typeDefs;