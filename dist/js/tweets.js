const Tweets = {
  dictionary: {},

  /**
   * Parse the titles and build a dictionary
   * 
   * @param {array} tweets
   * @returns {oject}
   */
  parse: tweets => {
    tweets.forEach(tweet => {
      const { text } = tweet;

      // Get the actual title
      const realTitle = text.substring(
        text.indexOf('Linus Text Tips: '),
        text.indexOf('Translated: ')
      )
        .replace('Linus Tech Tips: ', '')
        .trim();

      // Get the translated title
      const translatedTitle = text.substring(
        text.indexOf('Translated: '),
        text.indexOf('Title rating: ')
      )
        .replace('Translated: ', '')
        .trim();

      // Add to the dictionary
      if (realTitle && translatedTitle) {
        Tweets.dictionary[realTitle] = translatedTitle;

        // Since LTT seems to use a lot of curly quotes
        // and the Twitter user doesn’t use them correctly,
        // we need to try to cover them.
        if (realTitle.includes(`'`)) {
          const formattedRealTitle = realTitle.replace(/'/g, `’`);
          Tweets.dictionary[formattedRealTitle] = translatedTitle;
        }
      }
    });
  }
}

export default Tweets;
